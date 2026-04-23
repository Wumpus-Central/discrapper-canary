"use strict";
n.d(t, { Ay: () => d });
var i = n(636537),
    r = n(228366),
    s = n(287809),
    a = n(38405),
    o = n(692744),
    l = n(652215);
let d = {
    connect: async (e) => {
        try {
            let t = await i.Bo.post({ url: l.Rsh.HAVEN_CONNECT(e), rejectWithError: !0 });
            return r.h.dispatch({ type: "HAVEN_CONNECT", room: (0, o.xf)(t.body) }), t;
        } catch (e) {
            a.A.captureException(e);
        }
    },
    disconnect: async (e) => {
        try {
            await i.Bo.post({ url: l.Rsh.HAVEN_DISCONNECT(e), rejectWithError: !0 });
        } catch (t) {
            if (t?.status === 404) {
                let t = s.default.getCurrentUser();
                null != t && r.h.dispatch({ type: "HAVEN_DISCONNECT", roomId: e, userId: t.id });
            }
            a.A.captureException(t);
        }
    },
    update: async (e, t) => {
        let { position: n, avatar: r, seat: s } = t;
        try {
            await i.Bo.post({
                url: l.Rsh.HAVEN_UPDATE(e),
                body: { position: n, avatar: r, seat: s },
                rejectWithError: !0,
            });
        } catch (e) {
            a.A.captureException(e);
        }
    },
    getAssets: async () => {
        try {
            return await i.Bo.get({ url: l.Rsh.HAVEN_GET_ASSETS, rejectWithError: !0 });
        } catch (e) {
            return a.A.captureException(e), null;
        }
    },
};
