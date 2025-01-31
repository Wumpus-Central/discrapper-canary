n.d(t, {
    NQ: () => m,
    U1: () => o,
    XW: () => a,
    _J: () => _,
    aP: () => u,
    e7: () => E,
    h6: () => d,
    oE: () => r,
    y: () => s,
    yS: () => c
});
var l = n(15729);
let i = {
        nickname: void 0,
        dmsAllowed: !0,
        showActivity: !0,
        mutedServer: !1,
        inviteCode: void 0,
        guildId: void 0
    },
    a = (0, l.U)((e) => ({
        ...i,
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
                ...i,
                touched: !1
            })
    })),
    r = () => {
        a.getState().reset();
    },
    u = () => {
        let e = a.getState();
        return e.nickname !== i.nickname || e.dmsAllowed !== i.dmsAllowed || e.showActivity !== i.showActivity || e.mutedServer !== i.mutedServer;
    },
    s = () => a.getState().nickname,
    d = () => a.getState().dmsAllowed,
    o = () => a.getState().showActivity,
    c = () => a.getState().mutedServer,
    E = () => a.getState().inviteCode,
    _ = () => a.getState().guildId,
    m = () => a.getState().touched;
