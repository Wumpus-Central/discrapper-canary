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
let d = async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = e ?? o.default.getCurrentUser()?.id;
        if (null == n) return;
        let d = o.default.getCurrentUser()?.id,
            _ = null != d && n === d ? "self" : "other",
            h = `viewed_user:${_}`,
            f = `attempt:${!0 === t.isRetry ? "retry" : "initial"}`,
            p = Date.now();
        s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_START", userId: n });
        try {
            let e = (await r.Bo.get({ url: u.Rsh.USER_BADGES(c(n)), rejectWithError: !0 })).body,
                t = [h, "result:success", `catalog_state:${0 === e.badges.length ? "empty" : "non_empty"}`, f];
            a.A.distribution({ name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: t }, Date.now() - p),
                s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: n, badges: e.badges });
        } catch (e) {
            a.A.distribution(
                { name: i.K.BADGE_DIRECTORY_CATALOG_FETCH, tags: [h, "result:failure", "catalog_state:unknown", f] },
                Date.now() - p,
            ),
                s.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: n }),
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
