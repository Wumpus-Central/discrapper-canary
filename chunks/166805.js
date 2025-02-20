n.d(t, { P: () => j }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(793030),
    a = n(442837),
    l = n(481060),
    o = n(497321),
    c = n(484614),
    d = n(246946),
    u = n(434404),
    m = n(330010),
    p = n(999382),
    g = n(24318),
    h = n(822693),
    f = n(388032),
    b = n(915275);
function x(e) {
    let { guildId: t } = e,
        {
            fetchedEmbed: o,
            embedEnabled: d,
            embedChannelId: x
        } = (0, a.cj)([p.Z], () => {
            let { fetchedEmbed: e, embedEnabled: t, embedChannelId: n } = p.Z.getProps();
            return {
                fetchedEmbed: e,
                embedEnabled: t,
                embedChannelId: n
            };
        }),
        j = i.useMemo(() => (0, g.S)(t), [t]),
        N = i.useMemo(() => (0, g.a)(t), [t]),
        [v, _] = i.useState(!1);
    i.useEffect(() => {
        o || (0, m.R)(t);
    }, [o, t]);
    let O = i.useCallback(
        async (e) => {
            _(!0);
            try {
                await u.Z.updateEmbed(t, e, x);
            } finally {
                _(!1);
            }
        },
        [x, t]
    );
    return o
        ? (0, r.jsxs)('div', {
              children: [
                  (0, r.jsx)(l.j7V, {
                      disabled: v,
                      value: d,
                      hideBorder: !0,
                      onChange: O,
                      children: f.NW.string(f.t.NR6hub)
                  }),
                  d
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(s.X6, {
                                    variant: 'text-xs/bold',
                                    color: 'interactive-normal',
                                    className: b.subtitle,
                                    children: f.NW.string(f.t.LUo0Q0)
                                }),
                                (0, r.jsx)(h.m, {
                                    guildId: t,
                                    widgetEnabled: d,
                                    widgetChannelId: x
                                }),
                                (0, r.jsx)(s.xv, {
                                    variant: 'text-sm/medium',
                                    color: 'text-secondary',
                                    className: b.subtext,
                                    children: f.NW.string(f.t.LxVR9P)
                                }),
                                (0, r.jsxs)('div', {
                                    className: b.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: b.column,
                                            children: [
                                                (0, r.jsx)(s.X6, {
                                                    variant: 'text-xs/bold',
                                                    color: 'interactive-normal',
                                                    className: b.subtitle,
                                                    children: f.NW.string(f.t.TRyLUl)
                                                }),
                                                (0, r.jsx)(c.Z, { value: t })
                                            ]
                                        }),
                                        (0, r.jsxs)('div', {
                                            className: b.column,
                                            children: [
                                                (0, r.jsx)(s.X6, {
                                                    variant: 'text-xs/bold',
                                                    color: 'interactive-normal',
                                                    className: b.subtitle,
                                                    children: f.NW.string(f.t.VECJcH)
                                                }),
                                                (0, r.jsx)(c.Z, { value: j })
                                            ]
                                        })
                                    ]
                                }),
                                (0, r.jsxs)('div', {
                                    className: b.twoColumns,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: b.column,
                                            children: [
                                                (0, r.jsx)(s.X6, {
                                                    variant: 'text-xs/bold',
                                                    color: 'interactive-normal',
                                                    className: b.subtitle,
                                                    children: f.NW.string(f.t.XVGbn5)
                                                }),
                                                (0, r.jsx)(c.Z, { value: N }),
                                                (0, r.jsx)(s.xv, {
                                                    variant: 'text-sm/medium',
                                                    color: 'text-secondary',
                                                    className: b.subtext,
                                                    children: f.NW.string(f.t['+baN19'])
                                                })
                                            ]
                                        }),
                                        (0, r.jsx)('img', {
                                            className: b.column,
                                            'data-accessibility': 'desaturate',
                                            alt: '',
                                            src: n(329488)
                                        })
                                    ]
                                })
                            ]
                        })
                      : null
              ]
          })
        : (0, r.jsx)(l.$jN, {});
}
function j(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([d.Z], () => d.Z.enabled);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(s.X6, {
                variant: 'text-xs/bold',
                color: 'interactive-normal',
                className: b.subtitle,
                children: f.NW.string(f.t.qlhNb2)
            }),
            (0, r.jsx)(s.xv, {
                variant: 'text-sm/medium',
                color: 'text-secondary',
                className: b.description,
                children: f.NW.string(f.t['dNn/1t'])
            }),
            n ? (0, r.jsx)(o.Z, {}) : (0, r.jsx)(x, { guildId: t })
        ]
    });
}
