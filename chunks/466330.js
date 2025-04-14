t.d(n, { Z: () => f });
var r = t(200651);
t(192379);
var c = t(442837),
    i = t(481060),
    l = t(340541),
    o = t(159300),
    a = t(984933),
    u = t(496675),
    s = t(981631),
    b = t(388032);
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function f(e) {
    let { source: n, guild: t, channel: r, stageInstance: i } = e,
        b = (0, c.e7)([a.ZP], () => a.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE)),
        d = (0, c.e7)([u.Z], () => (0, o.b)(u.Z, t, r, i)),
        f = (0, l.jW)({ location: 'invite_people_menu_item' }) || (d && null != r) ? r : b,
        p = E(n, t, f),
        N = O(n, f);
    return d ? p : N;
}
function p(e, n) {
    return (0, l.jW)({ location: 'invite_menu_item' }) ? ((null != n && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(n)) || null == e ? b.NW.string(b.t.Sd8Ix8) : e.type === s.d4z.GUILD_VOICE ? b.NW.string(b.t['EE+P0N']) : b.NW.string(b.t['0jeAXl'])) : b.NW.string(b.t.BN75l5);
}
let E = (e, n, c) => {
        let l = p(c, e);
        return (0, r.jsx)(i.sNh, {
            id: 'invite-people',
            label: l,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: i } = await Promise.all([t.e('7654'), t.e('96814')]).then(t.bind(t, 560114));
                    return (t) => {
                        var l, o;
                        return (0, r.jsx)(
                            i,
                            ((l = d({}, t)),
                            (o = o =
                                {
                                    guild: n,
                                    channel: c,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            l)
                        );
                    };
                })
        });
    },
    O = (e, n) => {
        let c = p(n, e);
        return (0, r.jsx)(i.sNh, {
            id: 'invite-people',
            label: c,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? i.ejJ : void 0,
            action: () =>
                (0, i.ZDy)(async () => {
                    let { default: e } = await t.e('88358').then(t.bind(t, 598402));
                    return (n) => (0, r.jsx)(e, d({}, n));
                })
        });
    };
