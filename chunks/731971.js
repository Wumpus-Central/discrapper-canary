n.d(t, {
    NQ: () => f,
    U1: () => g,
    XW: () => d,
    _J: () => S,
    aP: () => O,
    e7: () => _,
    h6: () => A,
    oE: () => s,
    pB: () => E,
    y: () => N,
    yS: () => T
});
var i = n(15729),
    r = n(524437),
    l = n(695346);
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let a = {
    nickname: void 0,
    dmsAllowed: !l.iG.getSetting(),
    mutedServer: !1
};
function c(e) {
    let t = l.Wz.getSetting();
    return t !== r.E5.ON && (t !== r.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let d = (0, i.U)((e) => ({
        nickname: a.nickname,
        dmsAllowed: a.dmsAllowed,
        showActivity: !0,
        mutedServer: a.mutedServer,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) =>
            e((e) =>
                o(u({}, e), {
                    nickname: t,
                    touched: !0
                })
            ),
        setDmsAllowed: (t) =>
            e((e) =>
                o(u({}, e), {
                    dmsAllowed: t,
                    touched: !0
                })
            ),
        setShowActivity: (t) =>
            e((e) =>
                o(u({}, e), {
                    showActivity: t,
                    touched: !0
                })
            ),
        setMutedServer: (t) =>
            e((e) =>
                o(u({}, e), {
                    mutedServer: t,
                    touched: !0
                })
            ),
        setInviteCode: (t) =>
            e((e) =>
                o(u({}, e), {
                    inviteCode: t,
                    touched: !0
                })
            ),
        setGuildId: (t) =>
            e((e) =>
                o(u({}, e), {
                    guildId: t,
                    touched: !0
                })
            ),
        initialize: (t) =>
            e((e) =>
                o(u({}, e), {
                    guildSize: t,
                    showActivity: c(t),
                    dmsAllowed: !l.iG.getSetting(),
                    touched: !1
                })
            ),
        reset: () =>
            e((e) => ({
                nickname: a.nickname,
                dmsAllowed: a.dmsAllowed,
                showActivity: c(e.guildSize),
                mutedServer: a.mutedServer,
                inviteCode: void 0,
                guildId: void 0,
                guildSize: e.guildSize,
                touched: !1
            }))
    })),
    E = (e) => {
        d.getState().initialize(e);
    },
    s = () => {
        d.getState().reset();
    },
    O = () => {
        let e = d.getState();
        return e.nickname !== a.nickname || e.dmsAllowed !== a.dmsAllowed || e.showActivity !== c(e.guildSize) || e.mutedServer !== a.mutedServer;
    },
    _ = () => d.getState().inviteCode,
    S = () => d.getState().guildId,
    f = () => d.getState().touched,
    A = () => d.getState().dmsAllowed,
    N = () => d.getState().nickname,
    g = () => d.getState().showActivity,
    T = () => d.getState().mutedServer;
