n.d(t, { Ay: () => p, PV: () => T, RS: () => h, o0: () => I });
var i = n(158390),
    r = n(731738),
    a = n(636537),
    s = n(228366),
    l = n(807393),
    o = n(287809),
    d = n(927813),
    c = n(38405),
    u = n(652215);
let _ = new Map(),
    E = new Map();
function A(e) {
    return e === o.default.getCurrentUser()?.id ? u.ME : e;
}
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? o.default.getCurrentUser()?.id;
    if (null == n) return;
    let i = o.default.getCurrentUser()?.id,
        d = null != i && n === i ? "self" : "other",
        _ = `viewed_user:${d}`,
        E = `attempt:${!0 === t.isRetry ? "retry" : "initial"}`,
        h = Date.now();
    s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: n });
    try {
        let e = (await a.Bo.get({ url: u.Rsh.USER_BADGES(A(n)), rejectWithError: !0 })).body,
            t = [_, "result:success", `catalog_state:${0 === e.badges.length ? "empty" : "non_empty"}`, E];
        (l.A.distribution({ name: r.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: t }, Date.now() - h),
            s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: n, badges: e.badges }));
    } catch (e) {
        (l.A.distribution(
            { name: r.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [_, "result:failure", "catalog_state:unknown", E] },
            Date.now() - h,
        ),
            s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: n }),
            c.A.captureException(e));
    }
}
async function I(e, t) {
    let n = t ?? o.default.getCurrentUser()?.id;
    if (null != n)
        try {
            let t = await a.Bo.get({ url: u.Rsh.USER_BADGE(A(n), e), rejectWithError: !0 });
            s.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body });
        } catch (e) {
            c.A.captureException(e);
        }
}
async function f(e, t, n) {
    try {
        let i = await a.Bo.get({ url: u.Rsh.USER_BADGE(A(n), t), query: { with_progress: !1 }, rejectWithError: !0 });
        (E.delete(e), s.h.dispatch({ type: "BADGE_SUMMARY_FETCH_SUCCESS", userId: n, badge: i.body }));
    } catch (n) {
        let t = E.get(e)?.backoff ?? new i.A(d.A.Millis.MINUTE, d.A.Millis.HOUR, !0);
        (E.set(e, { backoff: t, gateUntil: Date.now() + t.fail() }), c.A.captureException(n));
    }
}
function p(e, t) {
    let n = t ?? o.default.getCurrentUser()?.id;
    if (null == n) return Promise.resolve();
    let i = `${n}#${e}`,
        r = _.get(i);
    if (null != r) return r;
    let a = E.get(i)?.gateUntil ?? 0;
    if (Date.now() < a) return Promise.resolve();
    let s = f(i, e, n).finally(() => {
        _.get(i) === s && _.delete(i);
    });
    return (_.set(i, s), s);
}
function T(e) {
    s.h.dispatch({ type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId: e });
}
s.h.subscribe("LOGOUT", () => {
    (_.clear(), E.clear());
});
