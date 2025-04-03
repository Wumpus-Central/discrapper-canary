t.d(n, { Z: () => f });
var r = t(200651);
t(192379);
var c = t(442837),
    l = t(481060),
    a = t(159300),
    i = t(984933),
    o = t(496675),
    u = t(981631),
    s = t(388032);
function b(e) {
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
    let { source: n, guild: t, channel: r, stageInstance: l } = e,
        s = (0, c.e7)([i.ZP], () => i.ZP.getDefaultChannel(t.id, !0, u.Plq.CREATE_INSTANT_INVITE)),
        b = (0, c.e7)([o.Z], () => (0, a.b)(o.Z, t, r, l)),
        f = d(n, t, b && null != r ? r : s),
        p = O(n);
    return null == r && n === u.t4x.GUILD_CONTEXT_MENU ? null : b || null != s ? f : p;
}
let d = (e, n, c) =>
        (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: s.NW.string(s.t.BN75l5),
            color: 'brand',
            icon: e === u.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([t.e('7654'), t.e('96814')]).then(t.bind(t, 560114));
                    return (t) => {
                        var a, i;
                        return (0, r.jsx)(
                            l,
                            ((a = b({}, t)),
                            (i = i =
                                {
                                    guild: n,
                                    channel: c,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                : (function (e, n) {
                                      var t = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          t.push.apply(t, r);
                                      }
                                      return t;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            a)
                        );
                    };
                })
        }),
    O = (e) =>
        (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: s.NW.string(s.t.BN75l5),
            color: 'brand',
            icon: e === u.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await t.e('88358').then(t.bind(t, 598402));
                    return (n) => (0, r.jsx)(e, b({}, n));
                })
        });
