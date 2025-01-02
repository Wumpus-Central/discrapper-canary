n.d(t, {
    h: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(571728),
    c = n(446495),
    d = n(981631),
    u = n(388032),
    m = n(676919);
function h(e) {
    var t;
    let { activeType: l, onTypePicked: h, guild: g } = e,
        x = g.id,
        p = null !== (t = (0, o.A)({ guildId: x })) && void 0 !== t ? t : 0,
        f = g.hasFeature(d.oNc.COMMUNITY),
        C = r.useCallback(
            (e) => {
                if (l === c.A.APPLY && l !== e && p > 0) {
                    (0, a.openModalLazy)(async () => {
                        let { default: t } = await n.e('55009').then(n.bind(n, 826390));
                        return (n) =>
                            (0, i.jsx)(t, {
                                ...n,
                                guildId: x,
                                submittedGuildJoinRequestsCount: p,
                                onConfirm: () => h(e)
                            });
                    });
                    return;
                }
                h(e);
            },
            [l, x, h, p]
        ),
        v = r.useMemo(
            () => [
                {
                    id: c.A.INVITE,
                    title: u.intl.string(u.t['HQVS/P']),
                    body: u.intl.string(u.t.KzXzFR),
                    icon: a.LockIcon,
                    enabled: !0,
                    ineligibleText: null
                },
                {
                    id: c.A.APPLY,
                    title: u.intl.string(u.t.LrFEYW),
                    body: u.intl.string(u.t.kJj2oK),
                    icon: a.EnvelopeIcon,
                    enabled: !0,
                    ineligibleText: null
                },
                {
                    id: c.A.DISCOVERABLE,
                    title: u.intl.string(u.t.lhOHLy),
                    body: u.intl.string(u.t.pqQylZ),
                    icon: a.GlobeEarthIcon,
                    enabled: f,
                    ineligibleText: u.intl.string(u.t['5TQ+eH'])
                }
            ],
            [f]
        );
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(a.Heading, {
                color: 'header-primary',
                variant: 'text-md/semibold',
                children: u.intl.string(u.t['N+GnPz'])
            }),
            (0, i.jsx)(a.Text, {
                color: 'text-secondary',
                variant: 'text-sm/medium',
                className: m.bodyText,
                children: u.intl.string(u.t.nBJ89v)
            }),
            (0, i.jsx)(a.TabBar, {
                selectedItem: l,
                onItemSelect: C,
                orientation: 'horizontal',
                className: m.joinOptions,
                children: v.map((e) => {
                    let t = e.id === l;
                    return (0, i.jsx)(
                        a.TabBar.Item,
                        {
                            id: e.id,
                            selectedItem: l,
                            disableItemStyles: !0,
                            className: m.joinOptionTab,
                            disabled: !e.enabled,
                            'aria-label': e.title,
                            children: (0, i.jsx)(a.TooltipContainer, {
                                text: e.ineligibleText,
                                position: 'bottom',
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: m.tooltipContainer,
                                tooltipClassName: m.tooltip,
                                children: (0, i.jsxs)('div', {
                                    className: s()(m.joinOptionContent, {
                                        [m.active]: t,
                                        [m.uninteractive]: !e.enabled
                                    }),
                                    children: [
                                        (0, i.jsx)(e.icon, {
                                            size: 'md',
                                            color: t ? a.tokens.colors.INTERACTIVE_ACTIVE : a.tokens.colors.TEXT_MUTED
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            tag: 'strong',
                                            color: t ? 'interactive-active' : 'text-muted',
                                            variant: 'text-md/semibold',
                                            children: e.title
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            tag: 'span',
                                            color: t ? 'interactive-active' : 'text-muted',
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
