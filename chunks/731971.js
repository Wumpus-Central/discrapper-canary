n.d(t, {
    NQ: function () {
        return g;
    },
    U1: function () {
        return u;
    },
    XW: function () {
        return l;
    },
    _J: function () {
        return _;
    },
    aP: function () {
        return o;
    },
    e7: function () {
        return m;
    },
    h6: function () {
        return d;
    },
    oE: function () {
        return r;
    },
    y: function () {
        return c;
    },
    yS: function () {
        return s;
    }
});
var i = n(15729);
let a = {
        nickname: void 0,
        dmsAllowed: !0,
        showActivity: !0,
        mutedServer: !1,
        inviteCode: void 0,
        guildId: void 0
    },
    l = (0, i.U)((e) => ({
        ...a,
        touched: !1,
        setNickname: (t) =>
            e((e) => ({
                nickname: t,
                touched: !0
            })),
        setDmsAllowed: (t) =>
            e((e) => ({
                dmsAllowed: t,
                touched: !0
            })),
        setShowActivity: (t) =>
            e((e) => ({
                showActivity: t,
                touched: !0
            })),
        setMutedServer: (t) =>
            e((e) => ({
                mutedServer: t,
                touched: !0
            })),
        setInviteCode: (t) =>
            e((e) => ({
                inviteCode: t,
                touched: !0
            })),
        setGuildId: (t) =>
            e((e) => ({
                guildId: t,
                touched: !0
            })),
        reset: () =>
            e({
                ...a,
                touched: !1
            })
    })),
    r = () => {
        l.getState().reset();
    },
    o = () => {
        let e = l.getState();
        return e.nickname !== a.nickname || e.dmsAllowed !== a.dmsAllowed || e.showActivity !== a.showActivity || e.mutedServer !== a.mutedServer;
    },
    c = () => l.getState().nickname,
    d = () => l.getState().dmsAllowed,
    u = () => l.getState().showActivity,
    s = () => l.getState().mutedServer,
    m = () => l.getState().inviteCode,
    _ = () => l.getState().guildId,
    g = () => l.getState().touched;
