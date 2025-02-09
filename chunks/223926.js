n.d(t, { default: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    s = n(481060),
    r = n(313201),
    o = n(496675),
    u = n(5192),
    d = n(693546),
    c = n(863249),
    h = n(246364),
    x = n(981631),
    m = n(388032),
    p = n(782406);
let g = function (e) {
    let { guild: t, guildJoinRequest: g, user: v, transitionState: j, onClose: k } = e,
        f = (0, r.Dt)(),
        [C, E] = l.useState(null),
        [b, R] = l.useState(''),
        q = (0, a.e7)([o.Z], () => o.Z.canManageUser(x.Plq.BAN_MEMBERS, v, t)),
        [Z, w] = l.useState(!1),
        D = l.useCallback(() => {
            var e;
            c.ZP.reportApplication({
                guild: t,
                guildJoinRequest: g,
                guildJoinRequestUser: v,
                reason: C,
                reasonOther: b,
                responses: JSON.stringify(null === (e = g.formResponses) || void 0 === e ? void 0 : e.map((e) => e.response))
            }),
                q && Z
                    ? (d.Z.updateGuildJoinRequest(t.id, v.id, g.joinRequestId, h.wB.REJECTED, ''),
                      k(),
                      (0, s.ZDy)(async () => {
                          let { default: e } = await n.e('43350').then(n.bind(n, 98746));
                          return (n) =>
                              (0, i.jsx)(e, {
                                  ...n,
                                  guildId: t.id,
                                  user: v
                              });
                      }))
                    : k();
        }, [t, g, v, C, b, q, Z, k]),
        I = l.useCallback(
            (e) => {
                E(e.value);
            },
            [E]
        ),
        J = l.useMemo(
            () => [
                {
                    value: 'spam',
                    name: m.intl.string(m.t.iq4Iur)
                },
                {
                    value: 'abusive',
                    name: m.intl.string(m.t['2EwC2d'])
                },
                {
                    value: 'harm',
                    name: m.intl.string(m.t.c2x8o6)
                },
                {
                    value: 'pii',
                    name: m.intl.string(m.t.O2PDJC)
                },
                {
                    value: 'other',
                    name: m.intl.string(m.t['NkfV+f'])
                }
            ],
            []
        ),
        N = u.ZP.getName(null, null, v);
    return (0, i.jsxs)(s.Y0X, {
        transitionState: j,
        'aria-labelledby': f,
        children: [
            (0, i.jsx)(s.xBx, {
                children: (0, i.jsx)(s.X6q, {
                    id: f,
                    variant: 'heading-md/semibold',
                    children: m.intl.string(m.t.aEqS3d)
                })
            }),
            (0, i.jsxs)(s.hzk, {
                className: p.content,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-md/normal',
                        children: m.intl.format(m.t.wrYOur, { username: N })
                    }),
                    (0, i.jsx)(s.FXm, {
                        options: J,
                        value: C,
                        onChange: I
                    }),
                    'other' === C &&
                        (0, i.jsx)(s.Kx8, {
                            value: b,
                            onChange: R,
                            placeholder: m.intl.string(m.t['+E7Irq']),
                            maxLength: 200
                        }),
                    q &&
                        (0, i.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            value: Z,
                            onChange: (e, t) => w(t),
                            children: (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: m.intl.format(m.t.cD5hlp, { username: N })
                            })
                        })
                ]
            }),
            (0, i.jsxs)(s.mzw, {
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: D,
                        children: m.intl.string(m.t['+78Pfn'])
                    }),
                    (0, i.jsx)(s.zxk, {
                        look: s.iLD.LINK,
                        color: s.Ttl.PRIMARY,
                        onClick: k,
                        children: m.intl.string(m.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
