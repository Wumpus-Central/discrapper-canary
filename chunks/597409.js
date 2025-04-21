r.d(t, { default: () => b });
var n = r(200651);
r(192379);
var c = r(442837),
    o = r(481060),
    i = r(239091),
    a = r(496675),
    l = r(572004),
    s = r(981631),
    u = r(388032);
let b = function (e) {
    var t;
    let { guild: b, user: p, onSelect: d } = e,
        y = null != (t = null == b ? void 0 : b.id) ? t : s.lds,
        O = (0, c.e7)([a.Z], () => null != b && a.Z.canManageUser(s.Plq.BAN_MEMBERS, p, b), [b, p]);
    return (0, n.jsx)(o.v2r, {
        navId: 'member-application-context-menu',
        onClose: i.Zy,
        'aria-label': u.intl.string(u.t.liqwPD),
        onSelect: d,
        children: (0, n.jsxs)(o.kSQ, {
            children: [
                O &&
                    (0, n.jsx)(
                        o.sNh,
                        {
                            id: 'ban',
                            label: u.intl.string(u.t['I+Cbur']),
                            icon: o.pgN,
                            color: 'danger',
                            action: () =>
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await r.e('4114').then(r.bind(r, 98746));
                                    return (t) => {
                                        var r, c;
                                        return (0, n.jsx)(
                                            e,
                                            ((r = (function (e) {
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
                                            })({}, t)),
                                            (c = c =
                                                {
                                                    guildId: y,
                                                    user: p
                                                }),
                                            Object.getOwnPropertyDescriptors
                                                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c))
                                                : (function (e, t) {
                                                      var r = Object.keys(e);
                                                      if (Object.getOwnPropertySymbols) {
                                                          var n = Object.getOwnPropertySymbols(e);
                                                          r.push.apply(r, n);
                                                      }
                                                      return r;
                                                  })(Object(c)).forEach(function (e) {
                                                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                                                  }),
                                            r)
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
