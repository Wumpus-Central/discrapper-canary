n.d(t, { r: () => O });
var r = n(622822),
    i = n(100527),
    a = n(982168),
    o = n(703656),
    s = n(6025),
    l = n(897473),
    c = n(592125),
    u = n(984933),
    d = n(944486),
    f = n(545408),
    p = n(189357),
    _ = n(50493),
    m = n(981631),
    h = n(176505);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t, n) {
    var g, b, O;
    let v,
        S = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: _.k.INFO };
    if (!(0, p.Y)(e)) return Promise.resolve();
    let I = null != (g = S.modViewPanel) ? g : _.k.INFO,
        T = null != (b = S.sourceLocation) ? b : i.Z.MEMBER_SAFETY_PAGE,
        C = d.Z.getCurrentlySelectedChannelId(),
        A = null != C ? c.Z.getChannel(C) : null;
    if (n !== h.oC.MEMBER_SAFETY && (null == A || A.getGuildId() !== e)) {
        let t = u.ZP.getDefaultChannel(e);
        null == t || (0, r.Y3)(t) || (0, o.uL)(m.Z5c.CHANNEL(e, t.id));
    }
    let N = n;
    return (
        (0, a.H0)(N, t) && (v = N),
        (0, f.q)(e, t, I, T),
        s.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: l.jL.GUILD_MEMBER_MOD_VIEW,
            details: y(
                E(
                    {
                        type: l.Ff.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e,
                    },
                    S,
                ),
                {
                    modViewPanel: null != (O = S.modViewPanel) ? O : _.k.INFO,
                    moderatorReportId: v,
                },
            ),
        })
    );
}
