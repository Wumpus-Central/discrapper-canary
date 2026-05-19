"use strict";
n.d(t, { R: () => u, o: () => c });
var i = n(636537),
    r = n(228366),
    s = n(287809),
    a = n(38405),
    o = n(652215);
function l(e) {
    return e === s.default.getCurrentUser()?.id ? o.ME : e;
}
let u = async (e) => {
        let t = e ?? s.default.getCurrentUser()?.id;
        if (null != t)
            try {
                let e = (await i.Bo.get({ url: o.Rsh.USER_BADGES(l(t)), rejectWithError: !0 })).body;
                r.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId: t, badges: e.badges });
            } catch (e) {
                a.A.captureException(e);
            }
    },
    c = async (e, t) => {
        let n = t ?? s.default.getCurrentUser()?.id;
        if (null != n)
            try {
                let t = await i.Bo.get({ url: o.Rsh.USER_BADGE(l(n), e), rejectWithError: !0 });
                r.h.dispatch({ type: "BADGE_FETCH_SUCCESS", userId: n, badge: t.body });
            } catch (e) {
                a.A.captureException(e);
            }
    };
