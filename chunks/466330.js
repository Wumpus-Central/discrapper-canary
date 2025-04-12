r.d(t, { Z: () => f });
var n = r(200651);
r(192379);
var i = r(442837),
    o = r(481060),
    l = r(340541),
    c = r(159300),
    a = r(984933),
    u = r(496675),
    s = r(981631),
    b = r(388032);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f(e) {
    let { source: t, guild: r, channel: n, stageInstance: o } = e,
        l = (0, i.e7)([a.ZP], () => a.ZP.getDefaultChannel(r.id, !0, s.Plq.CREATE_INSTANT_INVITE)),
        b = (0, i.e7)([u.Z], () => (0, c.b)(u.Z, r, n, o)),
        O = d(t, r, b && null != n ? n : l),
        f = y(t, n);
    return null == n && t === s.t4x.GUILD_CONTEXT_MENU ? null : b || null != l ? O : f;
}
function p(e, t) {
    return (0, l.jW)({ location: 'invite_menu_item' }) ? ((null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e ? b.NW.string(b.t.Sd8Ix8) : e.type === s.d4z.GUILD_VOICE ? b.NW.string(b.t['EE+P0N']) : b.NW.string(b.t['0jeAXl'])) : b.NW.string(b.t.BN75l5);
}
let d = (e, t, i) => {
        let l = p(i, e);
        return (0, n.jsx)(o.sNh, {
            id: 'invite-people',
            label: l,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? o.ejJ : void 0,
            action: () =>
                (0, o.ZDy)(async () => {
                    let { default: o } = await Promise.all([r.e('7654'), r.e('96814')]).then(r.bind(r, 560114));
                    return (r) => {
                        var l, c;
                        return (0, n.jsx)(
                            o,
                            ((l = O({}, r)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            l)
                        );
                    };
                })
        });
    },
    y = (e, t) => {
        let i = p(t, e);
        return (0, n.jsx)(o.sNh, {
            id: 'invite-people',
            label: i,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? o.ejJ : void 0,
            action: () =>
                (0, o.ZDy)(async () => {
                    let { default: e } = await r.e('88358').then(r.bind(r, 598402));
                    return (t) => (0, n.jsx)(e, O({}, t));
                })
        });
    };
