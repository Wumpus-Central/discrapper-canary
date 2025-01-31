n.d(t, { h: () => g });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(384632),
    u = n(981631),
    m = n(388032),
    h = n(676919);
function g(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        g = l.hasFeature(u.oNc.COMMUNITY),
        x = (0, a.e7)([c.Z], () => c.Z.can(u.Plq.ADMINISTRATOR, l)),
        p = r.useMemo(() => {
            let e = t === d.A.DISCOVERABLE && !x,
                n = g && (t === d.A.DISCOVERABLE || x);
            return [
                {
                    id: d.A.INVITE,
                    title: m.intl.string(m.t['HQVS/P']),
                    body: m.intl.string(m.t.KzXzFR),
                    icon: o.mBM,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwM)
                },
                {
                    id: d.A.APPLY,
                    title: m.intl.string(m.t.LrFEYW),
                    body: m.intl.string(m.t.kJj2oK),
                    icon: o._XJ,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwM)
                },
                {
                    id: d.A.DISCOVERABLE,
                    title: m.intl.string(m.t.lhOHLy),
                    body: m.intl.string(m.t.pqQylZ),
                    icon: o.enf,
                    enabled: n,
                    ineligibleText: g ? m.intl.string(m.t.iBpXPj) : m.intl.string(m.t['5TQ+eH'])
                }
            ];
        }, [t, g, x]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.X6q, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: m.intl.string(m.t['N+GnPz'])
            }),
            (0, i.jsx)(o.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: h.bodyText,
                children: m.intl.string(m.t.nBJ89v)
            }),
            (0, i.jsx)(o.njP, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: h.joinOptions,
                children: p.map((e) => {
                    let n = e.id === t;
                    return (0, i.jsx)(
                        o.njP.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: h.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, i.jsx)(o.DY3, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: h.tooltipContainer,
                                tooltipClassName: h.tooltip,
                                children: (0, i.jsxs)('div', {
                                    className: s()(h.joinOptionContent, {
                                        [h.active]: n,
                                        [h.uninteractive]: !e.enabled
                                    }),
                                    children: [
                                        (0, i.jsx)(e.icon, {
                                            size: 'md',
                                            color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.TEXT_MUTED
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            tag: 'strong',
                                            color: n ? 'interactive-active' : 'text-muted',
                                            variant: 'text-md/semibold',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            tag: 'span',
                                            color: n ? 'interactive-active' : 'text-muted',
                                            variant: 'text-xs/medium',
                                            children: e.body
                                        })
                                    ]
                                })
                            })
                        },
                        e.id
                    );
                })
            })
        ]
    });
}
