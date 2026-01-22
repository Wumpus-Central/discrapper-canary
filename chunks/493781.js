n.d(t, { G: () => p });
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    c = n(435371),
    o = n(397927),
    d = n(576705),
    u = n(975571),
    f = n(894222),
    g = n(652215),
    b = n(985018),
    m = n(662413);
function p(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        p = l.features.has(g.GuildFeatures.COMMUNITY),
        x = (0, a.bG)([d.A], () => d.A.can(g.xBc.ADMINISTRATOR, l)),
        h = i.useMemo(() => {
            let e = t === f.J.DISCOVERABLE && !x,
                n = p && (t === f.J.DISCOVERABLE || x);
            return [
                {
                    id: f.J.INVITE,
                    title: b.intl.string(b.t["HQVS/L"]),
                    body: b.intl.string(b.t.KzXzFa),
                    icon: o.XAi,
                    enabled: !e,
                    ineligibleText: b.intl.string(b.t.LIZgwJ),
                },
                {
                    id: f.J.APPLY,
                    title: b.intl.string(b.t.LrFEYW),
                    body: b.intl.string(b.t.kJj2oG),
                    icon: o.u6c,
                    enabled: !e,
                    ineligibleText: b.intl.string(b.t.LIZgwJ),
                },
                {
                    id: f.J.DISCOVERABLE,
                    title: b.intl.string(b.t.lhOHL3),
                    body: b.intl.string(b.t.pqQylS),
                    icon: o.L_e,
                    enabled: n,
                    ineligibleText: p ? b.intl.string(b.t.iBpXPg) : b.intl.string(b.t["5TQ+eE"]),
                },
            ];
        }, [t, p, x]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.Heading, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: b.intl.string(b.t["N+GnP2"]),
            }),
            (0, r.jsx)(o.Text, {
                color: "text-subtle",
                variant: "text-sm/medium",
                className: m.G3,
                children: b.intl.format(b.t["Y/jYwu"], {
                    helpdeskArticle: u.A.getArticleURL(g.MVz.MEMBER_APPLICATIONS),
                }),
            }),
            (0, r.jsx)(o.VQ0, {
                selectedItem: t,
                onItemSelect: n,
                orientation: "horizontal",
                className: m.Hd,
                children: h.map((e) => {
                    let n = e.id === t;
                    return (0, r.jsx)(
                        o.VQ0.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: m.dZ,
                            disabled: !e.enabled,
                            "aria-label": e.title,
                            children: (0, r.jsx)(c.m_, {
                                text: e.ineligibleText,
                                position: "bottom",
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                children: (0, r.jsxs)("div", {
                                    className: s()(m.jn, {
                                        [m.vu]: n,
                                        [m.A_]: !e.enabled,
                                    }),
                                    children: [
                                        (0, r.jsx)(e.icon, {
                                            size: "md",
                                            color: n
                                                ? o.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                                                : o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            tag: "strong",
                                            color: n ? "interactive-text-active" : "interactive-text-default",
                                            variant: "text-md/semibold",
                                            children: e.title,
                                        }),
                                        (0, r.jsx)(o.Text, {
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
