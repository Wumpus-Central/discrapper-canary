n.d(t, { r: () => y });
var r = n(622822),
    i = n(100527),
    a = n(703656),
    o = n(6025),
    s = n(897473),
    l = n(592125),
    c = n(984933),
    u = n(944486),
    d = n(545408),
    f = n(189357),
    p = n(50493),
    _ = n(981631),
    m = n(176505);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e, t, n) {
    var h, E, y;
    let O = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: p.k.INFO };
    if (!(0, f.Y)(e)) return Promise.resolve();
    let v = null != (h = O.modViewPanel) ? h : p.k.INFO,
        S = null != (E = O.sourceLocation) ? E : i.Z.MEMBER_SAFETY_PAGE,
        I = u.Z.getCurrentlySelectedChannelId(),
        T = null != I ? l.Z.getChannel(I) : null;
    if (n !== m.oC.MEMBER_SAFETY && (null == T || T.getGuildId() !== e)) {
        let t = c.ZP.getDefaultChannel(e);
        null == t || (0, r.Y3)(t) || (0, a.uL)(_.Z5c.CHANNEL(e, t.id));
    }
    return (
        (0, d.q)(e, t, v, S),
        o.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: s.jL.GUILD_MEMBER_MOD_VIEW,
            details: b(
                g(
                    {
                        type: s.Ff.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e,
                    },
                    O,
                ),
                { modViewPanel: null != (y = O.modViewPanel) ? y : p.k.INFO },
            ),
        })
    );
}
