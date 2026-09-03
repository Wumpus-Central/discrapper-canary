n.d(t, { PV: () => E, RS: () => u, o0: () => _ });
var i = n(731738),
    r = n(636537),
    a = n(228366),
    s = n(807393),
    l = n(287809),
    o = n(38405),
    d = n(652215);
function c(e) {
    return e === l.default.getCurrentUser()?.id ? d.ME : e;
}
async function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = e ?? l.default.getCurrentUser()?.id;
    if (null == n) return;
    let u = l.default.getCurrentUser()?.id,
        _ = null != u && n === u ? "self" : "other",
        E = `viewed_user:${_}`,
        A = `attempt:${!0 === t.isRetry ? "retry" : "initial"}`,
        h = Date.now();
    a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: n });
    try {
        let e = (await r.Bo.get({ url: d.Rsh.USER_BADGES(c(n)), rejectWithError: !0 })).body,
            t = [E, "result:success", `catalog_state:${0 === e.badges.length ? "empty" : "non_empty"}`, A];
        s.A.distribution({ name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: t }, Date.now() - h),
            a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: n, badges: e.badges });
    } catch (e) {
        s.A.distribution(
            { name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [E, "result:failure", "catalog_state:unknown", A] },
            Date.now() - h,
        ),
            a.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: n }),
            o.A.captureException(e);
    }
}
async function _(e, t) {
    let n = t ?? l.default.getCurrentUser()?.id;
    if (null != n)
        try {
            let t = await r.Bo.get({ url: d.Rsh.USER_BADGE(c(n), e), rejectWithError: !0 });
            a.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body });
        } catch (e) {
            o.A.captureException(e);
        }
}
function E(e) {
    a.h.dispatch({ type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId: e });
}
