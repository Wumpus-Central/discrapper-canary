n.d(t, {
    NQ: () => h,
    U1: () => T,
    XW: () => o,
    _J: () => _,
    aP: () => u,
    e7: () => E,
    h6: () => I,
    oE: () => d,
    pB: () => c,
    y: () => C,
    yS: () => N
});
var i = n(15729),
    l = n(524437),
    r = n(695346);
let s = {
    nickname: void 0,
    dmsAllowed: !r.iG.getSetting(),
    mutedServer: !1
};
function a(e) {
    let t = r.Wz.getSetting();
    return t !== l.E5.ON && (t !== l.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let o = (0, i.U)((e) => ({
        nickname: s.nickname,
        dmsAllowed: s.dmsAllowed,
        showActivity: !0,
        mutedServer: s.mutedServer,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) =>
            e((e) => ({
                ...e,
                nickname: t,
                touched: !0
            })),
        setDmsAllowed: (t) =>
            e((e) => ({
                ...e,
                dmsAllowed: t,
                touched: !0
            })),
        setShowActivity: (t) =>
            e((e) => ({
                ...e,
                showActivity: t,
                touched: !0
            })),
        setMutedServer: (t) =>
            e((e) => ({
                ...e,
                mutedServer: t,
                touched: !0
            })),
        setInviteCode: (t) =>
            e((e) => ({
                ...e,
                inviteCode: t,
                touched: !0
            })),
        setGuildId: (t) =>
            e((e) => ({
                ...e,
                guildId: t,
                touched: !0
            })),
        initialize: (t) =>
            e((e) => ({
                ...e,
                guildSize: t,
                showActivity: a(t),
                dmsAllowed: !r.iG.getSetting(),
                touched: !1
            })),
        reset: () =>
            e((e) => ({
                nickname: s.nickname,
                dmsAllowed: s.dmsAllowed,
                showActivity: a(e.guildSize),
                mutedServer: s.mutedServer,
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1
            }))
    })),
    c = (e) => {
        o.getState().initialize(e);
    },
    d = () => {
        o.getState().reset();
    },
    u = () => {
        let e = o.getState();
        return e.nickname !== s.nickname || e.dmsAllowed !== s.dmsAllowed || e.showActivity !== a(e.guildSize) || e.mutedServer !== s.mutedServer;
    },
    E = () => o.getState().inviteCode,
    _ = () => o.getState().guildId,
    h = () => o.getState().touched,
    I = () => o.getState().dmsAllowed,
    C = () => o.getState().nickname,
    T = () => o.getState().showActivity,
    N = () => o.getState().mutedServer;
