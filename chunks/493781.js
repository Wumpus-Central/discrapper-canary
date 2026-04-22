n.d(t, { G: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(990078),
    d = n(194261),
    c = n(849516),
    u = n(998445),
    m = n(534514),
    g = n(834730),
    h = n(761508),
    x = n(827734),
    _ = n(576705),
    p = n(975571),
    A = n(894222),
    E = n(652215),
    f = n(985018),
    j = n(683926);
function N(e) {
    let { activeType: t, onTypePicked: n, guild: s } = e,
        N = s.features.has(E.GuildFeatures.COMMUNITY),
        I = (0, a.bG)([_.A], () => _.A.can(E.xBc.ADMINISTRATOR, s)),
        C = l.useMemo(() => {
            let e = t === A.J.DISCOVERABLE && !I,
                n = N && (t === A.J.DISCOVERABLE || I);
            return [
                {
                    id: A.J.INVITE,
                    title: f.intl.string(f.t["HQVS/L"]),
                    body: f.intl.string(f.t.KzXzFa),
                    icon: d.X,
                    enabled: !e,
                    ineligibleText: f.intl.string(f.t.LIZgwJ),
                },
                {
                    id: A.J.APPLY,
                    title: f.intl.string(f.t.LrFEYW),
                    body: f.intl.string(f.t.kJj2oG),
                    icon: c.u,
                    enabled: !e,
                    ineligibleText: f.intl.string(f.t.LIZgwJ),
                },
                {
                    id: A.J.DISCOVERABLE,
                    title: f.intl.string(f.t.lhOHL3),
                    body: f.intl.string(f.t.pqQylS),
                    icon: u.L,
                    enabled: n,
                    ineligibleText: N ? f.intl.string(f.t.iBpXPg) : f.intl.string(f.t["5TQ+eE"]),
                },
            ];
        }, [t, N, I]);
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(m.D, {
                color: "text-strong",
                variant: "text-md/semibold",
                children: f.intl.string(f.t["N+GnP2"]),
            }),
            (0, i.jsx)(g.E, {
                color: "text-subtle",
                variant: "text-sm/medium",
                className: j.G3,
                children: f.intl.format(f.t["Y/jYwu"], {
                    helpdeskArticle: p.A.getArticleURL(E.MVz.MEMBER_APPLICATIONS),
                }),
            }),
            (0, i.jsx)(h.V, {
                selectedItem: t,
                onItemSelect: n,
                orientation: "horizontal",
                className: j.Hd,
                children: C.map((e) => {
                    let n = e.id === t;
                    return (0, i.jsx)(
                        h.V.Item,
                        {
                            id: e.id,
                            selectedItem: t,
                            disableItemStyles: !0,
                            className: j.dZ,
                            disabled: !e.enabled,
                            "aria-label": e.title,
                            children: (0, i.jsx)(o.m, {
                                text: e.ineligibleText,
                                position: "bottom",
                                shouldShow: !e.enabled,
                                spacing: 16,
                                hideOnClick: !1,
                                children: (0, i.jsxs)("div", {
                                    className: r()(j.jn, { [j.vu]: n, [j.A_]: !e.enabled }),
                                    children: [
                                        (0, i.jsx)(e.icon, {
                                            size: "md",
                                            color: n
                                                ? x.A.colors.INTERACTIVE_TEXT_ACTIVE
                                                : x.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                        }),
                                        (0, i.jsx)(g.E, {
                                            tag: "strong",
                                            color: n ? "interactive-text-active" : "interactive-text-default",
                                            variant: "text-md/semibold",
                                            children: e.title,
                                        }),
                                        (0, i.jsx)(g.E, {
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
