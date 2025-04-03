n.d(t, {
    NQ: () => m,
    U1: () => E,
    XW: () => u,
    _J: () => h,
    aP: () => _,
    e7: () => f,
    h6: () => b,
    oE: () => p,
    pB: () => d,
    y: () => g,
    yS: () => C
});
var r = n(230383),
    i = n(524437),
    o = n(695346);
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
    dmsAllowed: !o.iG.getSetting(),
    mutedServer: !1
};
function c(e) {
    let t = o.Wz.getSetting();
    return t !== i.E5.ON && (t !== i.E5.ON_FOR_LARGE_GUILDS || null == e || !(e > 200));
}
let u = (0, r.U)((e) => ({
        nickname: a.nickname,
        dmsAllowed: a.dmsAllowed,
        showActivity: !0,
        mutedServer: a.mutedServer,
        inviteCode: void 0,
        guildId: void 0,
        touched: !1,
        setNickname: (t) =>
            e((e) =>
                s(l({}, e), {
                    nickname: t,
                    touched: !0
                })
            ),
        setDmsAllowed: (t) =>
            e((e) =>
                s(l({}, e), {
                    dmsAllowed: t,
                    touched: !0
                })
            ),
        setShowActivity: (t) =>
            e((e) =>
                s(l({}, e), {
                    showActivity: t,
                    touched: !0
                })
            ),
        setMutedServer: (t) =>
            e((e) =>
                s(l({}, e), {
                    mutedServer: t,
                    touched: !0
                })
            ),
        setInviteCode: (t) =>
            e((e) =>
                s(l({}, e), {
                    inviteCode: t,
                    touched: !0
                })
            ),
        setGuildId: (t) =>
            e((e) =>
                s(l({}, e), {
                    guildId: t,
                    touched: !0
                })
            ),
        initialize: (t, n, r) =>
            e((e) =>
                s(l({}, e), {
                    guildSize: t,
                    inviteCode: n,
                    guildId: r,
                    showActivity: c(t),
                    dmsAllowed: !o.iG.getSetting(),
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
    d = (e, t, n) => {
        u.getState().initialize(e, t, n);
    },
    p = () => {
        u.getState().reset();
    },
    _ = () => {
        let e = u.getState();
        return e.nickname !== a.nickname || e.dmsAllowed !== a.dmsAllowed || e.showActivity !== c(e.guildSize) || e.mutedServer !== a.mutedServer;
    },
    f = () => u.getState().inviteCode,
    h = () => u.getState().guildId,
    m = () => u.getState().touched,
    b = () => u.getState().dmsAllowed,
    g = () => u.getState().nickname,
    E = () => u.getState().showActivity,
    C = () => u.getState().mutedServer;
