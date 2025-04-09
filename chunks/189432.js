n.d(t, { r: () => b });
var r = n(100527),
    i = n(703656),
    o = n(6025),
    a = n(897473),
    s = n(592125),
    l = n(984933),
    c = n(944486),
    u = n(545408),
    d = n(189357),
    f = n(50493),
    _ = n(981631),
    p = n(176505);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b(e, t, n) {
    var h, g, b;
    let y = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: f.k.INFO };
    if (!(0, d.Y)(e)) return Promise.resolve();
    let v = null != (h = y.modViewPanel) ? h : f.k.INFO,
        O = null != (g = y.sourceLocation) ? g : r.Z.MEMBER_SAFETY_PAGE,
        I = c.Z.getCurrentlySelectedChannelId(),
        S = null != I ? s.Z.getChannel(I) : null;
    if (n !== p.oC.MEMBER_SAFETY && (null == S || S.getGuildId() !== e)) {
        let t = l.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() || (0, i.uL)(_.Z5c.CHANNEL(e, t.id));
    }
    return (
        (0, u.q)(e, t, v, O),
        o.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: a.jL.GUILD_MEMBER_MOD_VIEW,
            details: E(
                m(
                    {
                        type: a.Ff.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e
                    },
                    y
                ),
                { modViewPanel: null != (b = y.modViewPanel) ? b : f.k.INFO }
            )
        })
    );
}
