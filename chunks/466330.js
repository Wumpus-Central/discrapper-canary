n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var c = n(442837),
    l = n(481060),
    i = n(340541),
    o = n(159300),
    a = n(984933),
    u = n(496675),
    s = n(981631),
    b = n(388032);
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
function O(e) {
    let { source: t, guild: n, channel: r, stageInstance: l } = e,
        b = (0, c.e7)([a.ZP], () => (null != n ? a.ZP.getDefaultChannel(n.id, !0, s.Plq.CREATE_INSTANT_INVITE) : null)),
        p = (0, c.e7)([u.Z], () => (0, o.b)(u.Z, n, r, l)),
        O = (0, i.jW)({ location: 'invite_people_menu_item' }).entrypoints || (p && null != r) ? r : b,
        f = y(t, n, O),
        j = d(t, O);
    return p ? f : j;
}
function f(e, t) {
    return (0, i.jW)({ location: 'invite_menu_item' }).entrypoints ? ((null != t && [s.t4x.GUILD_HEADER, s.t4x.GUILD_CONTEXT_MENU].includes(t)) || null == e ? b.intl.string(b.t.Sd8Ix8) : e.type === s.d4z.GUILD_VOICE ? b.intl.string(b.t['EE+P0N']) : b.intl.string(b.t['0jeAXl'])) : b.intl.string(b.t.BN75l5);
}
let y = (e, t, c) => {
        if (null == t) return null;
        let i = f(c, e);
        return (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: i,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: l } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                    return (n) => {
                        var i, o;
                        return (0, r.jsx)(
                            l,
                            ((i = p({}, n)),
                            (o = o =
                                {
                                    guild: t,
                                    channel: c,
                                    source: e
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(o)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                  }),
                            i)
                        );
                    };
                })
        });
    },
    d = (e, t) => {
        let c = f(t, e);
        return (0, r.jsx)(l.sNh, {
            id: 'invite-people',
            label: c,
            color: 'brand',
            icon: e === s.t4x.GUILD_HEADER ? l.ejJ : void 0,
            action: () =>
                (0, l.ZDy)(async () => {
                    let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                    return (t) => (0, r.jsx)(e, p({}, t));
                })
        });
    };
