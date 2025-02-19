n.d(t, { r: () => E });
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
    p = n(981631);
function _(e, t, n) {
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
function h(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e, t, n) {
    var _, m, E;
    let v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: f.k.INFO };
    if (!(0, d.Y)(e)) return Promise.resolve();
    let b = null !== (_ = v.modViewPanel) && void 0 !== _ ? _ : f.k.INFO,
        y = null !== (m = v.sourceLocation) && void 0 !== m ? m : r.Z.MEMBER_SAFETY_PAGE,
        O = c.Z.getCurrentlySelectedChannelId(),
        S = null != O ? s.Z.getChannel(O) : null;
    if (null == S || S.getGuildId() !== e) {
        let t = l.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() || (0, i.uL)(p.Z5c.CHANNEL(e, t.id));
    }
    return (
        (0, u.q)(e, t, b, y),
        o.Z.openGuildSidebar({
            guildId: e,
            baseChannelId: n,
            sidebarType: a.jL.GUILD_MEMBER_MOD_VIEW,
            details: g(
                h(
                    {
                        type: a.Ff.GUILD_MEMBER_MOD_VIEW,
                        userId: t,
                        guildId: e
                    },
                    v
                ),
                { modViewPanel: null !== (E = v.modViewPanel) && void 0 !== E ? E : f.k.INFO }
            )
        })
    );
}
