n.d(t, { A: () => d });
var r = n(562465),
    i = n(765178),
    a = n(157559),
    o = n(198982),
    l = n(652215),
    s = n(985018);
function u(e) {
    let t = new o.LG(e).getAnyErrorMessage();
    a.A.show({ title: s.intl.string(s.t["328j/I"]), body: null != t ? t : s.intl.string(s.t.fEptJP) });
}
async function c(e) {
    let { userId: t, applicationId: n, onSuccess: i } = e;
    try {
        await r.Bo.del({ url: l.Rsh.USER_GAME_RELATIONSHIP(t, n), oldFormErrors: !0, rejectWithError: !1 }), i();
    } catch (e) {
        u(e);
    }
}
let d = {
    removeGameFriend: async function (e) {
        let { userId: t, applicationId: n } = e;
        await c({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.O.announce(s.intl.string(s.t.zRf8cO));
            },
        });
    },
    acceptGameFriendRequest: function (e) {
        let { userId: t, applicationId: n } = e;
        return (function (e) {
            let { userId: t, applicationId: n, onSuccess: i, type: a } = e;
            return r.Bo.put({
                url: l.Rsh.USER_GAME_RELATIONSHIP(t, n),
                body: { type: a },
                oldFormErrors: !0,
                rejectWithError: !1,
            })
                .then(() => {
                    i();
                })
                .catch((e) => (u(e), Promise.reject(e)));
        })({
            userId: t,
            applicationId: n,
            type: l.eA$.FRIEND,
            onSuccess: () => {
                i.O.announce(s.intl.string(s.t.taJiuc));
            },
        });
    },
    cancelGameFriendRequest: async function (e) {
        let { userId: t, applicationId: n } = e;
        await c({
            userId: t,
            applicationId: n,
            onSuccess: () => {
                i.O.announce(s.intl.string(s.t.XMf21q));
            },
        });
    },
};
