n.d(t, { h: () => p });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(681715),
    c = n(481060),
    d = n(496675),
    u = n(63063),
    g = n(384632),
    f = n(981631),
    m = n(388032),
    b = n(640940);
function p(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        p = l.features.has(f.GuildFeatures.COMMUNITY),
        h = (0, s.e7)([d.Z], () => d.Z.can(f.Plq.ADMINISTRATOR, l)),
        x = i.useMemo(() => {
            let e = t === g.A.DISCOVERABLE && !h,
                n = p && (t === g.A.DISCOVERABLE || h);
            return [
                {
                    id: g.A.INVITE,
                    title: m.intl.string(m.t["HQVS/L"]),
                    body: m.intl.string(m.t.KzXzFa),
                    icon: c.mBM,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwJ),
                },
                {
                    id: g.A.APPLY,
                    title: m.intl.string(m.t.LrFEYW),
                    body: m.intl.string(m.t.kJj2oG),
                    icon: c._XJ,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwJ),
                },
                {
                    id: g.A.DISCOVERABLE,
                    title: m.intl.string(m.t.lhOHL3),
                    body: m.intl.string(m.t.pqQylS),
                    icon: c.enf,
                    enabled: n,
                    ineligibleText: p ? m.intl.string(m.t.iBpXPg) : m.intl.string(m.t["5TQ+eE"]),
                },
            ];
        }, [t, p, h]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(c.Heading, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: m.intl.string(m.t["N+GnP2"]),
            }),
            (0, r.jsx)(c.Text, {
                color: "text-subtle",
                variant: "text-sm/medium",
                className: b.bodyText,
                children: m.intl.format(m.t["Y/jYwu"], {
                    helpdeskArticle: u.Z.getArticleURL(f.BhN.MEMBER_APPLICATIONS),
                }),
            }),
            (0, r.jsx)(c.njP, {
                selectedItem: t,
                onItemSelect: n,
                orientation: "horizontal",
                className: b.joinOptions,
                children: x.map((e) => {
                    let n = e.id === t;
                    return (0, r.jsx)(
                        c.njP.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: b.joinOptionTab,
                            disabled: !e.enabled,
                            "aria-label": e.title,
                            children: (0, r.jsx)(o.u, {
                                text: e.ineligibleText,
                                position: "bottom",
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                children: (0, r.jsxs)("div", {
                                    className: a()(b.joinOptionContent, {
                                        [b.active]: n,
                                        [b.uninteractive]: !e.enabled,
                                    }),
                                    children: [
                                        (0, r.jsx)(e.icon, {
                                            size: "md",
                                            color: n
                                                ? c.TVs.colors.INTERACTIVE_TEXT_ACTIVE
                                                : c.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            tag: "strong",
                                            color: n ? "interactive-text-active" : "interactive-text-default",
                                            variant: "text-md/semibold",
                                            children: e.title,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            tag: "span",
                                            color: n ? "interactive-text-active" : "interactive-text-default",
                                            variant: "text-xs/medium",
                                            children: e.body,
                                        }),
                                    ],
                                }),
                            }),
                        },
                        e.id,
                    );
                }),
            }),
        ],
    });
}
