n.d(t, { h: () => h });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(63063),
    u = n(384632),
    m = n(981631),
    g = n(388032),
    p = n(109303);
function h(e) {
    let { activeType: t, onTypePicked: n, guild: s } = e,
        h = s.hasFeature(m.oNc.COMMUNITY),
        f = (0, l.e7)([c.Z], () => c.Z.can(m.Plq.ADMINISTRATOR, s)),
        b = i.useMemo(() => {
            let e = t === u.A.DISCOVERABLE && !f,
                n = h && (t === u.A.DISCOVERABLE || f);
            return [
                {
                    id: u.A.INVITE,
                    title: g.NW.string(g.t['HQVS/P']),
                    body: g.NW.string(g.t.KzXzFR),
                    icon: o.mBM,
                    enabled: !e,
                    ineligibleText: g.NW.string(g.t.LIZgwM)
                },
                {
                    id: u.A.APPLY,
                    title: g.NW.string(g.t.LrFEYW),
                    body: g.NW.string(g.t.kJj2oK),
                    icon: o._XJ,
                    enabled: !e,
                    ineligibleText: g.NW.string(g.t.LIZgwM)
                },
                {
                    id: u.A.DISCOVERABLE,
                    title: g.NW.string(g.t.lhOHLy),
                    body: g.NW.string(g.t.pqQylZ),
                    icon: o.enf,
                    enabled: n,
                    ineligibleText: h ? g.NW.string(g.t.iBpXPj) : g.NW.string(g.t['5TQ+eH'])
                }
            ];
        }, [t, h, f]);
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(o.X6q, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: g.NW.string(g.t['N+GnPz'])
            }),
            (0, r.jsx)(o.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: p.bodyText,
                children: g.NW.format(g.t['Y/jYws'], { helpdeskArticle: d.Z.getArticleURL(m.BhN.MEMBER_APPLICATIONS) })
            }),
            (0, r.jsx)(o.njP, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: p.joinOptions,
                children: b.map((e) => {
                    let n = e.id === t;
                    return (0, r.jsx)(
                        o.njP.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: p.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, r.jsx)(o.DY3, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: p.tooltipContainer,
                                tooltipClassName: p.tooltip,
                                children: (0, r.jsxs)('div', {
                                    className: a()(p.joinOptionContent, {
                                        [p.active]: n,
                                        [p.uninteractive]: !e.enabled
                                    }),
                                    children: [
                                        (0, r.jsx)(e.icon, {
                                            size: 'md',
                                            color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.TEXT_MUTED
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            tag: 'strong',
                                            color: n ? 'interactive-active' : 'text-muted',
                                            variant: 'text-md/semibold',
                                            children: e.title
                                        }),
                                        (0, r.jsx)(o.Text, {
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
