n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(340541),
    c = n(159300),
    a = n(984933),
    s = n(496675),
    u = n(981631),
    d = n(388032);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function f(e) {
    let { source: t, guild: n, channel: r, stageInstance: l } = e,
        d = (0, i.e7)([a.ZP], () => (null != n ? a.ZP.getDefaultChannel(n.id, !0, u.Plq.CREATE_INSTANT_INVITE) : null)),
        b = (0, i.e7)([s.Z], () => (0, c.b)(s.Z, n, r, l)),
        f = (0, o.jW)({ location: 'invite_people_menu_item' }).entrypoints || (b && null != r) ? r : d,
        p = O(t, n, f),
        y = g(t, f);
    return b ? p : y;
}
function p(e, t) {
    return (0, o.jW)({ location: 'invite_menu_item' }).entrypoints ? ((null != t && [u.t4x.GUILD_HEADER, u.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e ? d.intl.string(d.t.Sd8Ix8) : e.type === u.d4z.GUILD_VOICE ? d.intl.string(d.t['EE+P0N']) : d.intl.string(d.t['0jeAXl'])) : d.intl.string(d.t.BN75l5);
}
let O = (e, t, i) => {
        if (null == t) return null;
        let o = p(i, e);
        return (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: o,
            color: 'brand',
            icon: e === u.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                    return (n) => {
                        var o, c;
                        return (0, r.jsx)(
                            l,
                            ((o = b({}, n)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            o)
                        );
                    };
                })
        });
    },
    g = (e, t) => {
        let i = p(t, e);
        return (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: i,
            color: 'brand',
            icon: e === u.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                    return (t) => (0, r.jsx)(e, b({}, t));
                })
        });
    };
