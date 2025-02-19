n.d(t, { default: () => m }), n(47120), n(26686);
var r = n(200651),
    a = n(192379),
    i = n(442837),
    s = n(481060),
    o = n(313201),
    l = n(496675),
    c = n(5192),
    u = n(693546),
    d = n(863249),
    p = n(246364),
    b = n(981631),
    h = n(388032),
    g = n(529023);
let m = function (e) {
    let { guild: t, guildJoinRequest: m, user: f, transitionState: j, onClose: x } = e,
        O = (0, o.Dt)(),
        [v, y] = a.useState(null),
        [N, P] = a.useState(''),
        w = (0, i.e7)([l.Z], () => l.Z.canManageUser(b.Plq.BAN_MEMBERS, f, t)),
        [k, E] = a.useState(!1),
        C = a.useCallback(() => {
            var e;
            d.ZP.reportApplication({
                guild: t,
                guildJoinRequest: m,
                guildJoinRequestUser: f,
                reason: v,
                reasonOther: N,
                responses: JSON.stringify(null === (e = m.formResponses) || void 0 === e ? void 0 : e.map((e) => e.response))
            }),
                w && k
                    ? (u.Z.updateGuildJoinRequest(t.id, f.id, m.joinRequestId, p.wB.REJECTED, ''),
                      x(),
                      (0, s.ZDy)(async () => {
                          let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                          return (n) => {
                              var a, i;
                              return (0, r.jsx)(
                                  e,
                                  ((a = (function (e) {
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
                                  })({}, n)),
                                  (i = i =
                                      {
                                          guildId: t.id,
                                          user: f
                                      }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r);
                                            }
                                            return n;
                                        })(Object(i)).forEach(function (e) {
                                            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e));
                                        }),
                                  a)
                              );
                          };
                      }))
                    : x();
        }, [t, m, f, v, N, w, k, x]),
        D = a.useCallback(
            (e) => {
                y(e.value);
            },
            [y]
        ),
        S = a.useMemo(
            () => [
                {
                    value: 'spam',
                    name: h.NW.string(h.t.iq4Iur)
                },
                {
                    value: 'abusive',
                    name: h.NW.string(h.t['2EwC2d'])
                },
                {
                    value: 'harm',
                    name: h.NW.string(h.t.c2x8o6)
                },
                {
                    value: 'pii',
                    name: h.NW.string(h.t.O2PDJC)
                },
                {
                    value: 'other',
                    name: h.NW.string(h.t['NkfV+f'])
                }
            ],
            []
        ),
        W = c.ZP.getName(null, null, f);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: j,
        'aria-labelledby': O,
        children: [
            (0, r.jsx)(s.xBx, {
                children: (0, r.jsx)(s.X6q, {
                    id: O,
                    variant: 'heading-md/semibold',
                    children: h.NW.string(h.t.aEqS3d)
                })
            }),
            (0, r.jsxs)(s.hzk, {
                className: g.content,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: h.NW.format(h.t.wrYOur, { username: W })
                    }),
                    (0, r.jsx)(s.FXm, {
                        options: S,
                        value: v,
                        onChange: D
                    }),
                    'other' === v &&
                        (0, r.jsx)(s.Kx8, {
                            value: N,
                            onChange: P,
                            placeholder: h.NW.string(h.t['+E7Irq']),
                            maxLength: 200
                        }),
                    w &&
                        (0, r.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            value: k,
                            onChange: (e, t) => E(t),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: h.NW.format(h.t.cD5hlp, { username: W })
                            })
                        })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)(s.zxk, {
                        onClick: C,
                        children: h.NW.string(h.t['+78Pfn'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        look: s.iLD.LINK,
                        color: s.Ttl.PRIMARY,
                        onClick: x,
                        children: h.NW.string(h.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
