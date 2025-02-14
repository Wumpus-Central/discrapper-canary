n.d(e, {
    NQ: () => S,
    U1: () => T,
    XW: () => o,
    _J: () => c,
    aP: () => s,
    e7: () => _,
    h6: () => A,
    oE: () => a,
    pB: () => E,
    y: () => O,
    yS: () => f
});
var i = n(15729),
    l = n(524437),
    r = n(695346);
let u = {
    nickname: void 0,
    dmsAllowed: !r.iG.getSetting(),
    mutedServer: !1
};
function d(t) {
    let e = r.Wz.getSetting();
    return e !== l.E5.ON && (e !== l.E5.ON_FOR_LARGE_GUILDS || null == t || !(t > 200));
}
let o = (0, i.U)((t) => ({
        nickname: u.nickname,
        dmsAllowed: u.dmsAllowed,
        showActivity: !0,
        mutedServer: u.mutedServer,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (e) =>
            t((t) => ({
                ...t,
                nickname: e,
                touched: !0
            })),
        setDmsAllowed: (e) =>
            t((t) => ({
                ...t,
                dmsAllowed: e,
                touched: !0
            })),
        setShowActivity: (e) =>
            t((t) => ({
                ...t,
                showActivity: e,
                touched: !0
            })),
        setMutedServer: (e) =>
            t((t) => ({
                ...t,
                mutedServer: e,
                touched: !0
            })),
        setInviteCode: (e) =>
            t((t) => ({
                ...t,
                inviteCode: e,
                touched: !0
            })),
        setGuildId: (e) =>
            t((t) => ({
                ...t,
                guildId: e,
                touched: !0
            })),
        initialize: (e) =>
            t((t) => ({
                ...t,
                guildSize: e,
                showActivity: d(e),
                dmsAllowed: !r.iG.getSetting(),
                touched: !1
            })),
        reset: () =>
            t((t) => ({
                nickname: u.nickname,
                dmsAllowed: u.dmsAllowed,
                showActivity: d(t.guildSize),
                mutedServer: u.mutedServer,
                inviteCode: void 0,
                guildId: void 0,
                guildSize: t.guildSize,
                touched: !1
            }))
    })),
    E = (t) => {
        o.getState().initialize(t);
    },
    a = () => {
        o.getState().reset();
    },
    s = () => {
        let t = o.getState();
        return t.nickname !== u.nickname || t.dmsAllowed !== u.dmsAllowed || t.showActivity !== d(t.guildSize) || t.mutedServer !== u.mutedServer;
    },
    _ = () => o.getState().inviteCode,
    c = () => o.getState().guildId,
    S = () => o.getState().touched,
    A = () => o.getState().dmsAllowed,
    O = () => o.getState().nickname,
    T = () => o.getState().showActivity,
    f = () => o.getState().mutedServer;
