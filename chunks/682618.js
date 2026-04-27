"use strict";
n.d(t, { R: () => o, o: () => l });
var i = n(636537),
    r = n(228366),
    s = n(38405),
    a = n(652215);
let o = async () => {
        try {
            let e = (await i.Bo.get({ url: a.Rsh.USER_BADGES, rejectWithError: !0 })).body;
            r.h.dispatch({ type: "BADGE_DIRECTORY_FETCH_SUCCESS", badges: e.badges });
        } catch (e) {
            s.A.captureException(e);
        }
    },
    l = async (e) => {
        try {
            let t = await i.Bo.get({ url: a.Rsh.USER_BADGE(e), rejectWithError: !0 });
            r.h.dispatch({ type: "BADGE_FETCH_SUCCESS", badge: t.body });
        } catch (e) {
            s.A.captureException(e);
        }
    };
