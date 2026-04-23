"use strict";
n.d(t, { Ay: () => u });
var r = n(562465),
    i = n(73153),
    s = n(287809),
    a = n(728458),
    o = n(692744),
    l = n(652215);
let u = {
    connect: async (e) => {
        try {
            let t = await r.Bo.post({ url: l.Rsh.HAVEN_CONNECT(e), rejectWithError: !0 });
            return i.h.dispatch({ type: "HAVEN_CONNECT", room: (0, o.xf)(t.body) }), t;
        } catch (e) {
            a.A.captureException(e);
        }
    },
    disconnect: async (e) => {
        try {
            await r.Bo.post({ url: l.Rsh.HAVEN_DISCONNECT(e), rejectWithError: !0 });
        } catch (t) {
            if (t?.status === 404) {
                let t = s.default.getCurrentUser();
                null != t && i.h.dispatch({ type: "HAVEN_DISCONNECT", roomId: e, userId: t.id });
            }
            a.A.captureException(t);
        }
    },
    update: async (e, t) => {
        let { position: n, avatar: i, seat: s } = t;
        try {
            await r.Bo.post({
                url: l.Rsh.HAVEN_UPDATE(e),
                body: { position: n, avatar: i, seat: s },
                rejectWithError: !0,
            });
        } catch (e) {
            a.A.captureException(e);
        }
    },
    getAssets: async () => {
        try {
            return await r.Bo.get({ url: l.Rsh.HAVEN_GET_ASSETS, rejectWithError: !0 });
        } catch (e) {
            return a.A.captureException(e), null;
        }
    },
};
