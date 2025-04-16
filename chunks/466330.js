n.d(t, { Z: () => b });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    c = n(340541),
    o = n(159300),
    a = n(984933),
    u = n(496675),
    s = n(981631),
    d = n(388032);
function p(e) {
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
function b(e) {
    let { source: t, guild: n, channel: r, stageInstance: i } = e,
        d = (0, l.e7)([a.ZP], () => (null != n ? a.ZP.getDefaultChannel(n.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, l.e7)([u.Z], () => (0, o.b)(u.Z, n, r, i)),
        b = (0, c.jW)({ location: 'invite_people_menu_item' }).entrypoints || (p && null != r) ? r : d,
        y = f(t, n, b),
        j = O(t, b);
    return p ? y : j;
}
function y(e, t) {
    return (0, c.jW)({ location: 'invite_menu_item' }).entrypoints ? ((null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e ? d.NW.string(d.t.Sd8Ix8) : e.type === s.d4z.GUILD_VOICE ? d.NW.string(d.t['EE+P0N']) : d.NW.string(d.t['0jeAXl'])) : d.NW.string(d.t.BN75l5);
}
let f = (e, t, l) => {
        if (null == t) return null;
        let c = y(l, e);
        return (0, r.jsx)(i.sNh, {
            id: 'invite-people',
            label: c,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: i } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                    return (n) => {
                        var c, o;
                        return (0, r.jsx)(
                            i,
                            ((c = p({}, n)),
                            (o = o =
                                {
                                    guild: t,
                                    channel: l,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(c, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            c)
                        );
                    };
                })
        });
    },
    O = (e, t) => {
        let l = y(t, e);
        return (0, r.jsx)(i.sNh, {
            id: 'invite-people',
            label: l,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                    return (t) => (0, r.jsx)(e, p({}, t));
                })
        });
    };
