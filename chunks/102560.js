n(47120);
var l = n(200651),
    o = n(192379),
    i = n(392711),
    a = n.n(i),
    r = n(442837),
    s = n(481060),
    c = n(48210),
    C = n(605436),
    d = n(430824),
    u = n(496675),
    m = n(388032),
    h = n(321883);
t.Z = (e) => {
    let { guild: t, transitionState: n, onClose: i } = e,
        [x, b] = o.useState(7),
        [f, g] = o.useState(null),
        [p, H] = o.useState([]),
        j = o.useCallback(async () => {
            g(null), g(await c.Z.updateEstimate(t.id, x, p));
        }, [x, t.id, p]);
    o.useEffect(() => {
        j();
    }, [j]);
    let v = (0, r.Wu)(
        [u.Z, d.Z],
        () => {
            let e = u.Z.getHighestRole(t);
            return a()(d.Z.getRoles(t.id))
                .sortBy((e) => e.position)
                .filter((e) => !(0, C.pM)(t.id, e.id))
                .filter((n) => u.Z.isRoleHigher(t, e, n))
                .value()
                .map((e) => {
                    let { id: t, name: n } = e;
                    return {
                        label: n,
                        value: t
                    };
                });
        },
        [t]
    );
    return (0, l.jsxs)(s.ModalRoot, {
        transitionState: n,
        children: [
            (0, l.jsx)(s.ModalHeader, {
                separator: !1,
                children: (0, l.jsxs)(s.Heading, {
                    variant: 'heading-lg/semibold',
                    children: [m.intl.string(m.t.zbyz7u), '\u2014', null != t ? t.toString() : '']
                })
            }),
            (0, l.jsxs)('div', {
                className: h.content,
                children: [
                    (0, l.jsx)(s.FormItem, {
                        title: m.intl.string(m.t.YccTvL),
                        children: (0, l.jsx)(s.RadioGroup, {
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
                                b(t);
                            },
                            className: h.spacing
                        })
                    }),
                    (0, l.jsx)(s.FormItem, {
                        title: m.intl.string(m.t.buoe19),
                        children: (0, l.jsx)(s.ScrollerThin, {
                            className: h.scroller,
                            children: (0, l.jsx)(s.SearchableSelect, {
                                maxVisibleItems: 10,
                                multi: !0,
                                value: p,
                                onChange: (e) => H(e),
                                options: v
                            })
                        })
                    }),
                    (0, l.jsx)(s.FormText, {
                        type: s.FormText.Types.DESCRIPTION,
                        className: h.spacing,
                        children:
                            p.length > 0
                                ? m.intl.format(m.t['5WxHHh'], {
                                      members: f,
                                      days: x
                                  })
                                : m.intl.format(m.t.f13az8, {
                                      members: f,
                                      days: x
                                  })
                    })
                ]
            }),
            (0, l.jsxs)(s.ModalFooter, {
                children: [
                    (0, l.jsx)(s.Button, {
                        onClick: () => {
                            c.Z.prune(t.id, x, p), i();
                        },
                        children: m.intl.string(m.t['2mIlKS'])
                    }),
                    (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.LINK,
                        color: s.Button.Colors.PRIMARY,
                        onClick: i,
                        children: m.intl.string(m.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
};
