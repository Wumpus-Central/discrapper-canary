(n.d(t, { PV: () => h, RS: () => E, o0: () => A }), n(158390));
var i = n(731738),
    r = n(636537),
    a = n(228366),
    s = n(807393),
    l = n(287809);
n(927813);
var o = n(38405),
    d = n(652215);
let c = new Map(),
    u = new Map();
function _(e) {
    return e === l.default.getCurrentUser()?.id ? d.ME : e;
}
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? l.default.getCurrentUser()?.id;
    if (null == n) return;
    let c = l.default.getCurrentUser()?.id,
        u = null != c && n === c ? "self" : "other",
        E = `viewed_user:${u}`,
        A = `attempt:${!0 === t.isRetry ? "retry" : "initial"}`,
        h = Date.now();
    a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: n });
    try {
        let e = (await r.Bo.get({ url: d.Rsh.USER_BADGES(_(n)), rejectWithError: !0 })).body,
            t = [E, "result:success", `catalog_state:${0 === e.badges.length ? "empty" : "non_empty"}`, A];
        (s.A.distribution({ name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: t }, Date.now() - h),
            a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: n, badges: e.badges }));
    } catch (e) {
        (s.A.distribution(
            { name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [E, "result:failure", "catalog_state:unknown", A] },
            Date.now() - h,
        ),
            a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: n }),
            o.A.captureException(e));
    }
}
async function A(e, t) {
    let n = t ?? l.default.getCurrentUser()?.id;
    if (null != n)
        try {
            let t = await r.Bo.get({ url: d.Rsh.USER_BADGE(_(n), e), rejectWithError: !0 });
            a.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body });
        } catch (e) {
            o.A.captureException(e);
        }
}
function h(e) {
    a.h.dispatch({ type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId: e });
}
a.h.subscribe("LOGOUT", () => {
    (c.clear(), u.clear());
});
