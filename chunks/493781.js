"use strict";
n.d(t, { G: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(435371),
    d = n(397927),
    c = n(576705),
    u = n(975571),
    m = n(894222),
    g = n(652215),
    x = n(985018),
    h = n(662413);
function _(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        _ = l.features.has(g.GuildFeatures.COMMUNITY),
        A = (0, a.bG)([c.A], () => c.A.can(g.xBc.ADMINISTRATOR, l)),
        p = s.useMemo(() => {
            let e = t === m.J.DISCOVERABLE && !A,
                n = _ && (t === m.J.DISCOVERABLE || A);
            return [
                {
                    id: m.J.INVITE,
                    title: x.intl.string(x.t["HQVS/L"]),
                    body: x.intl.string(x.t.KzXzFa),
                    icon: d.XAi,
                    enabled: !e,
                    ineligibleText: x.intl.string(x.t.LIZgwJ),
                },
                {
                    id: m.J.APPLY,
                    title: x.intl.string(x.t.LrFEYW),
                    body: x.intl.string(x.t.kJj2oG),
                    icon: d.u6c,
                    enabled: !e,
                    ineligibleText: x.intl.string(x.t.LIZgwJ),
                },
                {
                    id: m.J.DISCOVERABLE,
                    title: x.intl.string(x.t.lhOHL3),
                    body: x.intl.string(x.t.pqQylS),
                    icon: d.L_e,
                    enabled: n,
                    ineligibleText: _ ? x.intl.string(x.t.iBpXPg) : x.intl.string(x.t["5TQ+eE"]),
                },
            ];
        }, [t, _, A]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(d.Heading, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: x.intl.string(x.t["N+GnP2"]),
            }),
            (0, i.jsx)(d.Text, {
                color: "text-subtle",
                variant: "text-sm/medium",
                className: h.G3,
                children: x.intl.format(x.t["Y/jYwu"], {
                    helpdeskArticle: u.A.getArticleURL(g.MVz.MEMBER_APPLICATIONS),
                }),
            }),
            (0, i.jsx)(d.VQ0, {
                selectedItem: t,
                onItemSelect: n,
                orientation: "horizontal",
                className: h.Hd,
                children: p.map((e) => {
                    let n = e.id === t;
                    return (0, i.jsx)(
                        d.VQ0.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: h.dZ,
                            disabled: !e.enabled,
                            "aria-label": e.title,
                            children: (0, i.jsx)(o.m_, {
                                text: e.ineligibleText,
                                position: "bottom",
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                children: (0, i.jsxs)("div", {
                                    className: r()(h.jn, { [h.vu]: n, [h.A_]: !e.enabled }),
                                    children: [
                                        (0, i.jsx)(e.icon, {
                                            size: "md",
                                            color: n
                                                ? d.LU0.colors.INTERACTIVE_TEXT_ACTIVE
                                                : d.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                        (0, i.jsx)(d.Text, {
                                            tag: "strong",
                                            color: n ? "interactive-text-active" : "interactive-text-default",
                                            variant: "text-md/semibold",
                                            children: e.title,
                                        }),
                                        (0, i.jsx)(d.Text, {
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
