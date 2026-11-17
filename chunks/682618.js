var i = n(158390),
    r = n(731738),
    a = n(620632),
    s = n(73153),
    l = n(913379),
    o = n(287809),
    d = n(927813),
    c = n(856383),
    u = n(652215);
let _ = new Map(),
    E = new Map(),
    A = new Map(),
    f = new Map();
function h(e) {
    return e === o.default.getCurrentUser()?.id ? u.ME : e;
}
async function I(e, t) {
    let n = o.default.getCurrentUser()?.id,
        _ = null != n && e === n ? "self" : "other",
        A = `viewed_user:${_}`,
        f = `attempt:${!0 === t.isRetry ? "retry" : "initial"}`,
        I = Date.now();
    s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: e });
    try {
        let t = (await a.Bo.get({ url: u.Rsh.USER_BADGES(h(e)), rejectWithError: !0 })).body,
            n = [A, "result:success", `catalog_state:${0 === t.badges.length ? "empty" : "non_empty"}`, f];
        (l.A.distribution({ name: r.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: n }, Date.now() - I),
            s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: e, badges: t.badges, requestedAt: I }),
            E.delete(e));
    } catch (n) {
        if (
            (l.A.distribution(
                { name: r.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [A, "result:failure", "catalog_state:unknown", f] },
                Date.now() - I,
            ),
            s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: e }),
            !0 === t.isAutomatic)
        ) {
            let t = E.get(e)?.backoff ?? new i.A(d.A.Millis.MINUTE, d.A.Millis.HOUR, !0);
            E.set(e, { backoff: t, gateUntil: Date.now() + t.fail() });
        }
        c.A.captureException(n);
    }
}
async function p(e, t) {
    let n = t ?? o.default.getCurrentUser()?.id;
    if (null == n) return;
    let i = Date.now();
    try {
        let t = await a.Bo.get({ url: u.Rsh.USER_BADGE(h(n), e), rejectWithError: !0 });
        s.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body, requestedAt: i });
    } catch (e) {
        c.A.captureException(e);
    }
}
(s.h.subscribe("LOGOUT", () => {
    (_.clear(), E.clear(), A.clear(), f.clear());
}),
    n.d(
        t,
        {},
        {
            Ay: function (e, t) {
                let n = t ?? o.default.getCurrentUser()?.id;
                if (null == n) return Promise.resolve();
                let r = `${n}#${e}`,
                    l = A.get(r);
                if (null != l) return l;
                let _ = f.get(r)?.gateUntil ?? 0;
                if (Date.now() < _) return Promise.resolve();
                let E = (async function (e, t, n) {
                    let r = Date.now();
                    try {
                        let i = await a.Bo.get({
                            url: u.Rsh.USER_BADGE(h(n), t),
                            query: { with_progress: !1 },
                            rejectWithError: !0,
                        });
                        (f.delete(e),
                            s.h.dispatch({
                                type: "BADGE_SUMMARY_FETCH_SUCCESS",
                                userId: n,
                                badge: i.body,
                                requestedAt: r,
                            }));
                    } catch (n) {
                        let t = f.get(e)?.backoff ?? new i.A(d.A.Millis.MINUTE, d.A.Millis.HOUR, !0);
                        (f.set(e, { backoff: t, gateUntil: Date.now() + t.fail() }), c.A.captureException(n));
                    }
                })(r, e, n).finally(() => {
                    A.get(r) === E && A.delete(r);
                });
                return (A.set(r, E), E);
            },
            PV: function (e) {
                s.h.dispatch({ type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId: e });
            },
            RS: function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = e ?? o.default.getCurrentUser()?.id;
                if (null == n) return Promise.resolve();
                if (!0 !== t.isAutomatic) return I(n, t);
                let i = _.get(n)?.request;
                if (null != i) return i;
                let r = E.get(n)?.gateUntil ?? 0;
                if (Date.now() < r)
                    return (s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: n }), Promise.resolve());
                let a = Symbol(),
                    l = (async () => {
                        try {
                            await I(n, t);
                        } finally {
                            _.get(n)?.token === a && _.delete(n);
                        }
                    })();
                return (_.set(n, { request: l, token: a }), l);
            },
            o0: p,
            zd: async function (e) {
                let t = o.default.getCurrentUser()?.id;
                if (null != t)
                    try {
                        (await a.Bo.post({ url: u.Rsh.USER_BADGE_ACK(e), rejectWithError: !0 }),
                            s.h.dispatch({ type: "BADGE_ACK_SUCCESS", userId: t, badgeId: e }),
                            p(e, t));
                    } catch (e) {
                        c.A.captureException(e);
                    }
            },
        },
    ));
