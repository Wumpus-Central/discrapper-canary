l.d(t, { Z: () => x }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(392711),
    o = l.n(i),
    s = l(442837),
    r = l(481060),
    c = l(48210),
    d = l(605436),
    C = l(430824),
    u = l(496675),
    m = l(388032),
    h = l(321883);
let x = (e) => {
    let { guild: t, transitionState: l, onClose: i } = e,
        [x, g] = a.useState(7),
        [p, _] = a.useState(null),
        [b, f] = a.useState([]),
        j = a.useCallback(async () => {
            _(null), _(await c.Z.updateEstimate(t.id, x, b));
        }, [x, t.id, b]);
    a.useEffect(() => {
        j();
    }, [j]);
    let H = (0, s.Wu)(
        [u.Z, C.Z],
        () => {
            let e = u.Z.getHighestRole(t);
            return o()(C.Z.getRoles(t.id))
                .sortBy((e) => e.position)
                .filter((e) => !(0, d.pM)(t.id, e.id))
                .filter((l) => u.Z.isRoleHigher(t, e, l))
                .value()
                .map((e) => {
                    let { id: t, name: l } = e;
                    return {
                        label: l,
                        value: t
                    };
                });
        },
        [t]
    );
    return (0, n.jsxs)(r.Y0X, {
        transitionState: l,
        children: [
            (0, n.jsx)(r.xBx, {
                separator: !1,
                children: (0, n.jsxs)(r.X6q, {
                    variant: 'heading-lg/semibold',
                    children: [m.intl.string(m.t.zbyz7u), '\u2014', null != t ? t.toString() : '']
                })
            }),
            (0, n.jsxs)('div', {
                className: h.content,
                children: [
                    (0, n.jsx)(r.xJW, {
                        title: m.intl.string(m.t.YccTvL),
                        children: (0, n.jsx)(r.FXm, {
                            value: x,
                            options: [
                                {
                                    name: m.intl.formatToPlainString(m.t.FM1dHR, { days: 7 }),
                                    value: 7
                                },
                                {
                                    name: m.intl.formatToPlainString(m.t.FM1dHR, { days: 30 }),
                                    value: 30
                                }
                            ],
                            onChange: (e) => {
                                let { value: t } = e;
                                g(t);
                            },
                            className: h.spacing
                        })
                    }),
                    (0, n.jsx)(r.xJW, {
                        title: m.intl.string(m.t.buoe19),
                        children: (0, n.jsx)(r.zJl, {
                            className: h.scroller,
                            children: (0, n.jsx)(r.VcW, {
                                maxVisibleItems: 10,
                                multi: !0,
                                value: b,
                                onChange: (e) => f(e),
                                options: H
                            })
                        })
                    }),
                    (0, n.jsx)(r.R94, {
                        type: r.R94.Types.DESCRIPTION,
                        className: h.spacing,
                        children:
                            b.length > 0
                                ? m.intl.format(m.t['5WxHHh'], {
                                      members: p,
                                      days: x
                                  })
                                : m.intl.format(m.t.f13az8, {
                                      members: p,
                                      days: x
                                  })
                    })
                ]
            }),
            (0, n.jsxs)(r.mzw, {
                children: [
                    (0, n.jsx)(r.zxk, {
                        onClick: () => {
                            c.Z.prune(t.id, x, b), i();
                        },
                        children: m.intl.string(m.t['2mIlKS'])
                    }),
                    (0, n.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: m.intl.string(m.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
