n.d(t, { default: () => g }), n(47120), n(26686);
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
    m = n(51559);
let g = function (e) {
    let { guild: t, guildJoinRequest: g, user: j, transitionState: f, onClose: y } = e,
        v = (0, o.Dt)(),
        [x, O] = a.useState(null),
        [N, P] = a.useState(''),
        k = (0, i.e7)([l.Z], () => l.Z.canManageUser(b.Plq.BAN_MEMBERS, j, t)),
        [w, C] = a.useState(!1),
        W = a.useCallback(() => {
            var e;
            d.ZP.reportApplication({
                guild: t,
                guildJoinRequest: g,
                guildJoinRequestUser: j,
                reason: x,
                reasonOther: N,
                responses: JSON.stringify(null == (e = g.formResponses) ? void 0 : e.map((e) => e.response))
            }),
                k && w
                    ? (u.Z.updateGuildJoinRequest(t.id, j.id, g.joinRequestId, p.wB.REJECTED, ''),
                      y(),
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
                                          user: j
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
                    : y();
        }, [t, g, j, x, N, k, w, y]),
        E = a.useCallback(
            (e) => {
                O(e.value);
            },
            [O]
        ),
        S = a.useMemo(
            () => [
                {
                    value: 'spam',
                    name: h.NW.string(h.t.vGSLTk)
                },
                {
                    value: 'abusive',
                    name: h.NW.string(h.t.CY25rq)
                },
                {
                    value: 'harm',
                    name: h.NW.string(h.t['3dHiMT'])
                },
                {
                    value: 'pii',
                    name: h.NW.string(h.t.eDyWCA)
                },
                {
                    value: 'other',
                    name: h.NW.string(h.t['2J2mKC'])
                }
            ],
            []
        ),
        D = c.ZP.getName(null, null, j);
    return (0, r.jsxs)(s.Y0X, {
        transitionState: f,
        'aria-labelledby': v,
        children: [
            (0, r.jsx)(s.xBx, {
                children: (0, r.jsx)(s.X6q, {
                    id: v,
                    variant: 'heading-md/semibold',
                    children: h.NW.string(h.t['4uon39'])
                })
            }),
            (0, r.jsxs)(s.hzk, {
                className: m.content,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: h.NW.format(h.t['0CVj1t'], { username: D })
                    }),
                    (0, r.jsx)(s.FXm, {
                        options: S,
                        value: x,
                        onChange: E
                    }),
                    'other' === x &&
                        (0, r.jsx)(s.Kx8, {
                            value: N,
                            onChange: P,
                            placeholder: h.NW.string(h.t['AqO4+P']),
                            maxLength: 200
                        }),
                    k &&
                        (0, r.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            value: w,
                            onChange: (e, t) => C(t),
                            children: (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: h.NW.format(h.t['1kdfnZ'], { username: D })
                            })
                        })
                ]
            }),
            (0, r.jsxs)(s.mzw, {
                children: [
                    (0, r.jsx)(s.zxk, {
                        onClick: W,
                        children: h.NW.string(h.t['+78Pfn'])
                    }),
                    (0, r.jsx)(s.zxk, {
                        look: s.iLD.LINK,
                        color: s.Ttl.PRIMARY,
                        onClick: y,
                        children: h.NW.string(h.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
