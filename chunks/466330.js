n.d(e, { Z: () => b });
var l = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    o = n(340541),
    u = n(159300),
    c = n(984933),
    a = n(496675),
    s = n(981631),
    d = n(388032);
function p(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (t[e] = l);
            });
    }
    return t;
}
function b(t) {
    let { source: e, guild: n, channel: l, stageInstance: i } = t,
        d = (0, r.e7)([c.ZP], () => (null != n ? c.ZP.getDefaultChannel(n.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, r.e7)([a.Z], () => (0, u.b)(a.Z, n, l, i)),
        b = (0, o.jW)({ location: 'invite_people_menu_item' }).entrypoints || (p && null != l) ? l : d,
        f = j(e, n, b),
        O = g(e, b);
    return p ? f : O;
}
function f(t, e) {
    return (0, o.jW)({ location: 'invite_menu_item' }).entrypoints ? ((null != e && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(e)) || null == t ? d.intl.string(d.t.Sd8Ix8) : t.type === s.d4z.GUILD_VOICE ? d.intl.string(d.t['EE+P0N']) : d.intl.string(d.t['0jeAXl'])) : d.intl.string(d.t.BN75l5);
}
let j = (t, e, r) => {
        if (null == e) return null;
        let o = f(r, t);
        return (0, l.jsx)(i.sNh, {
            id: 'invite-people',
            label: o,
            color: 'brand',
            icon: t === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                    return (n) => {
                        var o, u;
                        return (0, l.jsx)(
                            i,
                            ((o = p({}, n)),
                            (u = u =
                                {
                                    guild: e,
                                    channel: r,
                                    source: t
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u))
                                : (function (t, e) {
                                      var n = Object.keys(t);
                                      if (Object.getOwnPropertySymbols) {
                                          var l = Object.getOwnPropertySymbols(t);
                                          n.push.apply(n, l);
                                      }
                                      return n;
                                  })(Object(u)).forEach(function (t) {
                                      Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(u, t));
                                  }),
                            o)
                        );
                    };
                })
        });
    },
    g = (t, e) => {
        let r = f(e, t);
        return (0, l.jsx)(i.sNh, {
            id: 'invite-people',
            label: r,
            color: 'brand',
            icon: t === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: t } = await n.e('88358').then(n.bind(n, 598402));
                    return (e) => (0, l.jsx)(t, p({}, e));
                })
        });
    };
