r.d(t, { Z: () => O });
var n = r(200651);
r(192379);
var i = r(442837),
    l = r(481060),
    o = r(340541),
    c = r(159300),
    a = r(984933),
    u = r(496675),
    s = r(981631),
    b = r(388032);
function p(e) {
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
function O(e) {
    let { source: t, guild: r, channel: n, stageInstance: l } = e,
        b = (0, i.e7)([a.ZP], () => (null != r ? a.ZP.getDefaultChannel(r.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, i.e7)([u.Z], () => (0, c.b)(u.Z, r, n, l)),
        O = (0, o.jW)({ location: 'invite_people_menu_item' }).entrypoints || (p && null != n) ? n : b,
        f = d(t, r, O),
        g = y(t, O);
    return p ? f : g;
}
function f(e, t) {
    return (0, o.jW)({ location: 'invite_menu_item' }).entrypoints ? ((null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e ? b.intl.string(b.t.Sd8Ix8) : e.type === s.d4z.GUILD_VOICE ? b.intl.string(b.t['EE+P0N']) : b.intl.string(b.t['0jeAXl'])) : b.intl.string(b.t.BN75l5);
}
let d = (e, t, i) => {
        if (null == t) return null;
        let o = f(i, e);
        return (0, n.jsx)(l.sNh, {
            id: 'invite-people',
            label: o,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([r.e('7654'), r.e('17439')]).then(r.bind(r, 560114));
                    return (r) => {
                        var o, c;
                        return (0, n.jsx)(
                            l,
                            ((o = p({}, r)),
                            (c = c =
                                {
                                    guild: t,
                                    channel: i,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c))
                                : (function (e, t) {
                                      var r = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var n = Object.getOwnPropertySymbols(e);
                                          r.push.apply(r, n);
                                      }
                                      return r;
                                  })(Object(c)).forEach(function (e) {
                                      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                                  }),
                            o)
                        );
                    };
                })
        });
    },
    y = (e, t) => {
        let i = f(t, e);
        return (0, n.jsx)(l.sNh, {
            id: 'invite-people',
            label: i,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await r.e('88358').then(r.bind(r, 598402));
                    return (t) => (0, n.jsx)(e, p({}, t));
                })
        });
    };
