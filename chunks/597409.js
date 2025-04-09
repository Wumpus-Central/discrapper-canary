t.d(r, { default: () => b });
var n = t(200651);
t(192379);
var c = t(442837),
    o = t(481060),
    i = t(239091),
    a = t(496675),
    l = t(572004),
    s = t(981631),
    u = t(388032);
let b = function (e) {
    var r;
    let { guild: b, user: p, onSelect: d } = e,
        y = null != (r = null == b ? void 0 : b.id) ? r : s.lds,
        O = (0, c.e7)([a.Z], () => null != b && a.Z.canManageUser(s.Plq.BAN_MEMBERS, p, b), [b, p]);
    return (0, n.jsx)(o.v2r, {
        navId: 'member-application-context-menu',
        onClose: i.Zy,
        'aria-label': u.NW.string(u.t.liqwPD),
        onSelect: d,
        children: (0, n.jsxs)(o.kSQ, {
            children: [
                O &&
                    (0, n.jsx)(
                        o.sNh,
                        {
                            id: 'ban',
                            label: u.NW.string(u.t['I+Cbur']),
                            icon: o.pgN,
                            color: 'danger',
                            action: () =>
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await t.e('43350').then(t.bind(t, 98746));
                                    return (r) => {
                                        var t, c;
                                        return (0, n.jsx)(
                                            e,
                                            ((t = (function (e) {
                                                for (var r = 1; r < arguments.length; r++) {
                                                    var t = null != arguments[r] ? arguments[r] : {},
                                                        n = Object.keys(t);
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (n = n.concat(
                                                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                                            })
                                                        )),
                                                        n.forEach(function (r) {
                                                            var n;
                                                            (n = t[r]),
                                                                r in e
                                                                    ? Object.defineProperty(e, r, {
                                                                          value: n,
                                                                          enumerable: !0,
                                                                          configurable: !0,
                                                                          writable: !0
                                                                      })
                                                                    : (e[r] = n);
                                                        });
                                                }
                                                return e;
                                            })({}, r)),
                                            (c = c =
                                                {
                                                    guildId: y,
                                                    user: p
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c))
                                                : (function (e, r) {
                                                      var t = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          t.push.apply(t, n);
                                                      }
                                                      return t;
                                                  })(Object(c)).forEach(function (e) {
                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e));
                                                  }),
                                            t)
                                        );
                                    };
                                })
                        },
                        'ban'
                    ),
                (0, n.jsx)(
                    o.sNh,
                    {
                        id: 'copyUserId',
                        label: 'Copy User ID',
                        icon: o.VuL,
                        action: () => (0, l.JG)(p.id)
                    },
                    'copyUserId'
                )
            ]
        })
    });
};
