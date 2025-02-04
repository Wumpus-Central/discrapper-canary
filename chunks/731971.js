n.d(t, {
    NQ: () => m,
    U1: () => N,
    XW: () => s,
    _J: () => _,
    aP: () => c,
    e7: () => E,
    h6: () => S,
    oE: () => o,
    pB: () => d,
    y: () => g,
    yS: () => A
});
var l = n(15729),
    i = n(524437),
    a = n(695346);
let r = {
    nickname: void 0,
    dmsAllowed: !a.iG.getSetting(),
    mutedServer: !1
};
function u(e) {
    let t = a.Wz.getSetting();
    return t !== i.E5.ON && (t !== i.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let s = (0, l.U)((e) => ({
        nickname: r.nickname,
        dmsAllowed: r.dmsAllowed,
        showActivity: !0,
        mutedServer: r.mutedServer,
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
                showActivity: u(t),
                dmsAllowed: !a.iG.getSetting(),
                touched: !1
            })),
        reset: () =>
            e((e) => ({
                nickname: r.nickname,
                dmsAllowed: r.dmsAllowed,
                showActivity: u(e.guildSize),
                mutedServer: r.mutedServer,
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1
            }))
    })),
    d = (e) => {
        s.getState().initialize(e);
    },
    o = () => {
        s.getState().reset();
    },
    c = () => {
        let e = s.getState();
        return e.nickname !== r.nickname || e.dmsAllowed !== r.dmsAllowed || e.showActivity !== u(e.guildSize) || e.mutedServer !== r.mutedServer;
    },
    E = () => s.getState().inviteCode,
    _ = () => s.getState().guildId,
    m = () => s.getState().touched,
    S = () => s.getState().dmsAllowed,
    g = () => s.getState().nickname,
    N = () => s.getState().showActivity,
    A = () => s.getState().mutedServer;
