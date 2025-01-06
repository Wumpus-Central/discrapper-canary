n.d(t, {
    h: function () {
        return m;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(446495),
    c = n(981631),
    d = n(388032),
    u = n(676919);
function m(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        m = l.hasFeature(c.oNc.COMMUNITY),
        h = r.useMemo(
            () => [
                {
                    id: o.A.INVITE,
                    title: d.intl.string(d.t['HQVS/P']),
                    body: d.intl.string(d.t.KzXzFR),
                    icon: a.LockIcon,
                    enabled: !0,
                    ineligibleText: null
                },
                {
                    id: o.A.APPLY,
                    title: d.intl.string(d.t.LrFEYW),
                    body: d.intl.string(d.t.kJj2oK),
                    icon: a.EnvelopeIcon,
                    enabled: !0,
                    ineligibleText: null
                },
                {
                    id: o.A.DISCOVERABLE,
                    title: d.intl.string(d.t.lhOHLy),
                    body: d.intl.string(d.t.pqQylZ),
                    icon: a.GlobeEarthIcon,
                    enabled: m,
                    ineligibleText: d.intl.string(d.t['5TQ+eH'])
                }
            ],
            [m]
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.Heading, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: d.intl.string(d.t['N+GnPz'])
            }),
            (0, i.jsx)(a.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: u.bodyText,
                children: d.intl.string(d.t.nBJ89v)
            }),
            (0, i.jsx)(a.TabBar, {
                selectedItem: t,
                onItemSelect: n,
                orientation: 'horizontal',
                className: u.joinOptions,
                children: h.map((e) => {
                    let n = e.id === t;
                    return (0, i.jsx)(
                        a.TabBar.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: u.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, i.jsx)(a.TooltipContainer, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: u.tooltipContainer,
                                tooltipClassName: u.tooltip,
                                children: (0, i.jsxs)('div', {
                                    className: s()(u.joinOptionContent, {
                                        [u.active]: n,
                                        [u.uninteractive]: !e.enabled
                                    }),
                                    children: [
                                        (0, i.jsx)(e.icon, {
                                            size: 'md',
                                            color: n ? a.tokens.colors.INTERACTIVE_ACTIVE : a.tokens.colors.TEXT_MUTED
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            tag: 'strong',
                                            color: n ? 'interactive-active' : 'text-muted',
                                            variant: 'text-md/semibold',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(a.Text, {
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
