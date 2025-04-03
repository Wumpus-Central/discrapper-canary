t.d(n, { Z: () => f });
var r = t(200651);
t(192379);
var l = t(442837),
    c = t(481060),
    i = t(340541),
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
    let { source: n, guild: t, channel: r, stageInstance: c } = e,
        i = (0, l.e7)([a.ZP], () => a.ZP.getDefaultChannel(t.id, !0, s.Plq.CREATE_INSTANT_INVITE)),
        b = (0, l.e7)([u.Z], () => (0, o.b)(u.Z, t, r, c)),
        d = p(n, t, b && null != r ? r : i),
        f = E(n, r);
    return null == r && n === s.t4x.GUILD_CONTEXT_MENU ? null : b || null != i ? d : f;
}
function O(e) {
    let n,
        t = (null == e ? void 0 : e.type) === s.d4z.GUILD_VOICE;
    return (0, i.jW)({ location: 'invite_menu_item' }) ? (t ? b.NW.string(b.t['EE+P0N']) : b.NW.string(b.t['0jeAXl'])) : b.NW.string(b.t.BN75l5);
}
let p = (e, n, l) => {
        let i = O(l);
        return (0, r.jsx)(c.sNh, {
            id: 'invite-people',
            label: i,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? c.ejJ : void 0,
            action: () =>
                (0, c.ZDy)(async () => {
                    let { default: c } = await Promise.all([t.e('7654'), t.e('96814')]).then(t.bind(t, 560114));
                    return (t) => {
                        var i, o;
                        return (0, r.jsx)(
                            c,
                            ((i = d({}, t)),
                            (o = o =
                                {
                                    guild: n,
                                    channel: l,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i)
                        );
                    };
                })
        });
    },
    E = (e, n) => {
        let l = O(n);
        return (0, r.jsx)(c.sNh, {
            id: 'invite-people',
            label: l,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? c.ejJ : void 0,
            action: () =>
                (0, c.ZDy)(async () => {
                    let { default: e } = await t.e('88358').then(t.bind(t, 598402));
                    return (n) => (0, r.jsx)(e, d({}, n));
                })
        });
    };
