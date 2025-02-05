n.d(t, { h: () => x });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(63063),
    u = n(384632),
    m = n(981631),
    h = n(388032),
    g = n(676919);
function x(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        x = l.hasFeature(m.oNc.COMMUNITY),
        p = (0, a.e7)([c.Z], () => c.Z.can(m.Plq.ADMINISTRATOR, l)),
        _ = r.useMemo(() => {
            let e = t === u.A.DISCOVERABLE && !p,
                n = x && (t === u.A.DISCOVERABLE || p);
            return [
                {
                    id: u.A.INVITE,
                    title: h.intl.string(h.t['HQVS/P']),
                    body: h.intl.string(h.t.KzXzFR),
                    icon: o.mBM,
                    enabled: !e,
                    ineligibleText: h.intl.string(h.t.LIZgwM)
                },
                {
                    id: u.A.APPLY,
                    title: h.intl.string(h.t.LrFEYW),
                    body: h.intl.string(h.t.kJj2oK),
                    icon: o._XJ,
                    enabled: !e,
                    ineligibleText: h.intl.string(h.t.LIZgwM)
                },
                {
                    id: u.A.DISCOVERABLE,
                    title: h.intl.string(h.t.lhOHLy),
                    body: h.intl.string(h.t.pqQylZ),
                    icon: o.enf,
                    enabled: n,
                    ineligibleText: x ? h.intl.string(h.t.iBpXPj) : h.intl.string(h.t['5TQ+eH'])
                }
            ];
        }, [t, x, p]);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.X6q, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: h.intl.string(h.t['N+GnPz'])
            }),
            (0, i.jsx)(o.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: g.bodyText,
                children: h.intl.format(h.t['Y/jYws'], { helpdeskArticle: d.Z.getArticleURL(m.BhN.MEMBER_APPLICATIONS) })
            }),
            (0, i.jsx)(o.njP, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: g.joinOptions,
                children: _.map((e) => {
                    let n = e.id === t;
                    return (0, i.jsx)(
                        o.njP.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: g.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, i.jsx)(o.DY3, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: g.tooltipContainer,
                                tooltipClassName: g.tooltip,
                                children: (0, i.jsxs)('div', {
                                    className: s()(g.joinOptionContent, {
                                        [g.active]: n,
                                        [g.uninteractive]: !e.enabled
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
