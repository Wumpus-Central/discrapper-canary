n.d(t, {
    Ay: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(287809),
    s = n(728458),
    o = n(692744),
    l = n(652215);
let c = {
    connect: async (e) => {
        try {
            let t = await r.Bo.post({
                url: l.Rsh.HAVEN_CONNECT(e),
                rejectWithError: !0,
            });
            return (
                i.h.dispatch({
                    type: "HAVEN_CONNECT",
                    room: (0, o.xf)(t.body),
                }),
                t
            );
        } catch (e) {
            s.A.captureException(e);
        }
    },
    disconnect: async (e) => {
        try {
            await r.Bo.post({
                url: l.Rsh.HAVEN_DISCONNECT(e),
                rejectWithError: !0,
            });
        } catch (t) {
            if ((null == t ? void 0 : t.status) === 404) {
                let t = a.default.getCurrentUser();
                null != t &&
                    i.h.dispatch({
                        type: "HAVEN_DISCONNECT",
                        roomId: e,
                        userId: t.id,
                    });
            }
            s.A.captureException(t);
        }
    },
    update: async (e, t) => {
        let { position: n, avatar: i, seat: a } = t;
        try {
            await r.Bo.post({
                url: l.Rsh.HAVEN_UPDATE(e),
                body: {
                    position: n,
                    avatar: i,
                    seat: a,
                },
                rejectWithError: !0,
            });
        } catch (e) {
            s.A.captureException(e);
        }
    },
    getAssets: async () => {
        try {
            return await r.Bo.get({
                url: l.Rsh.HAVEN_GET_ASSETS,
                rejectWithError: !0,
            });
        } catch (e) {
            return s.A.captureException(e), null;
        }
    },
};
