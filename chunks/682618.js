"use strict";
n.d(t, { R: () => d, o: () => _ });
var i = n(731738),
    r = n(636537),
    s = n(228366),
    a = n(807393),
    o = n(287809),
    l = n(38405),
    u = n(652215);
function c(e) {
    return e === o.default.getCurrentUser()?.id ? u.ME : e;
}
let d = async (e) => {
        let t = e ?? o.default.getCurrentUser()?.id;
        if (null == t) return;
        let n = o.default.getCurrentUser()?.id,
            d = null != n && t === n ? "self" : "other",
            _ = `viewed_user:${d}`,
            h = Date.now();
        s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: t });
        try {
            let e = await r.Bo.get({ url: u.Rsh.USER_BADGES(c(t)), rejectWithError: !0 });
            a.A.distribution({ name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [_, "result:success"] }, Date.now() - h);
            let n = e.body;
            s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: t, badges: n.badges });
        } catch (e) {
            a.A.distribution({ name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [_, "result:failure"] }, Date.now() - h),
                s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: t }),
                l.A.captureException(e);
        }
    },
    _ = async (e, t) => {
        let n = t ?? o.default.getCurrentUser()?.id;
        if (null != n)
            try {
                let t = await r.Bo.get({ url: u.Rsh.USER_BADGE(c(n), e), rejectWithError: !0 });
                s.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body });
            } catch (e) {
                l.A.captureException(e);
            }
    };
