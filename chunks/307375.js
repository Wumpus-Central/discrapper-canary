n.d(t, { h: () => f });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(496675),
    d = n(63063),
    u = n(384632),
    g = n(981631),
    m = n(388032),
    p = n(140367);
function f(e) {
    let { activeType: t, onTypePicked: n, guild: l } = e,
        f = l.features.has(g.oNc.COMMUNITY),
        h = (0, a.e7)([c.Z], () => c.Z.can(g.Plq.ADMINISTRATOR, l)),
        x = i.useMemo(() => {
            let e = t === u.A.DISCOVERABLE && !h,
                n = f && (t === u.A.DISCOVERABLE || h);
            return [
                {
                    id: u.A.INVITE,
                    title: m.intl.string(m.t["HQVS/P"]),
                    body: m.intl.string(m.t.KzXzFR),
                    icon: o.mBM,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwM),
                },
                {
                    id: u.A.APPLY,
                    title: m.intl.string(m.t.LrFEYW),
                    body: m.intl.string(m.t.kJj2oK),
                    icon: o._XJ,
                    enabled: !e,
                    ineligibleText: m.intl.string(m.t.LIZgwM),
                },
                {
                    id: u.A.DISCOVERABLE,
                    title: m.intl.string(m.t.lhOHLy),
                    body: m.intl.string(m.t.pqQylZ),
                    icon: o.enf,
                    enabled: n,
                    ineligibleText: f ? m.intl.string(m.t.iBpXPj) : m.intl.string(m.t["5TQ+eH"]),
                },
            ];
        }, [t, f, h]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(o.X6q, {
                color: "header-primary",
                variant: "text-md/semibold",
                children: m.intl.string(m.t["N+GnPz"]),
            }),
            (0, r.jsx)(o.Text, {
                color: "text-secondary",
                variant: "text-sm/medium",
                className: p.bodyText,
                children: m.intl.format(m.t["Y/jYws"], {
                    helpdeskArticle: d.Z.getArticleURL(g.BhN.MEMBER_APPLICATIONS),
                }),
            }),
            (0, r.jsx)(o.njP, {
                selectedItem: t,
                onItemSelect: n,
                orientation: "horizontal",
                className: p.joinOptions,
                children: x.map((e) => {
                    let n = e.id === t;
                    return (0, r.jsx)(
                        o.njP.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: p.joinOptionTab,
                            disabled: !e.enabled,
                            "aria-label": e.title,
                            children: (0, r.jsx)(o.DY3, {
                                text: e.ineligibleText,
                                position: "bottom",
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                className: p.tooltipContainer,
                                tooltipClassName: p.tooltip,
                                children: (0, r.jsxs)("div", {
                                    className: s()(p.joinOptionContent, {
                                        [p.active]: n,
                                        [p.uninteractive]: !e.enabled,
                                    }),
                                    children: [
                                        (0, r.jsx)(e.icon, {
                                            size: "md",
                                            color: n
                                                ? o.TVs.colors.INTERACTIVE_ACTIVE
                                                : o.TVs.colors.INTERACTIVE_NORMAL,
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            tag: "strong",
                                            color: n ? "interactive-active" : "interactive-normal",
                                            variant: "text-md/semibold",
                                            children: e.title,
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            tag: "span",
                                            color: n ? "interactive-active" : "interactive-normal",
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
