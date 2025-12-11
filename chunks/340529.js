r.d(t, { z: () => w });
var n = r(54381);
r(473749);
var i = r(120356),
    o = r.n(i),
    l = r(399606),
    c = r(433517),
    s = r(481060),
    a = r(607070),
    d = r(357352),
    u = r(703656),
    C = r(652515),
    p = r(847033),
    f = r(544978),
    b = r(307537),
    j = r(987513),
    g = r(895737),
    O = r(629481),
    h = r(981631),
    x = r(176505),
    m = r(388032),
    v = r(266222);
function y(e) {
    let {
        icon: t,
        title: r,
        body: i,
        selected: l,
        disabled: c = !1,
        onClick: a,
        onPreviewDismiss: d,
        isNew: u = !1,
    } = e;
    return (0, n.jsxs)(s.kL8, {
        onClick: c ? void 0 : a,
        "aria-disabled": c,
        className: o()(v.tab, {
            [v.selected]: l,
            [v.tabDisabled]: c,
            [v.preview]: !l && null != d,
        }),
        "aria-label": r,
        children: [
            (0, n.jsx)("div", {
                className: v.iconContainer,
                children: t,
            }),
            (0, n.jsx)(s.LZC, {
                size: 8,
                horizontal: !0,
            }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: l ? "always-white" : "text-strong",
                        children: r,
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: l ? "always-white" : c ? "text-muted" : "text-strong",
                        children: i,
                    }),
                ],
            }),
            u &&
                (0, n.jsx)(s.IGR, {
                    color: s.TVs.unsafe_rawColors.BRAND_260.css,
                    className: v.newBadge,
                    text: m.intl.string(m.t.y2b7CA),
                }),
            null != d &&
                (0, n.jsx)(s.P3F, {
                    className: v.tabPreviewClose,
                    onClick: d,
                    "aria-label": m.intl.string(m.t.WAI6xu),
                    children: (0, n.jsx)(s.k$p, {
                        size: "xs",
                        color: "currentColor",
                    }),
                }),
        ],
    });
}
function w(e) {
    let { guild: t } = e,
        r = (0, C.RF)(t.id, "guild_shop_category_selector"),
        { selectedTab: i, setSelectedTab: o, categoryTabs: w, handlePreviewDismiss: P } = (0, p.m)(),
        _ = "false" === c.K.get(O.Hr, "false"),
        L = (0, l.e7)([a.Z], () => a.Z.useReducedMotion),
        S = w.map((e) => {
            switch (e) {
                case f.y.GUILD_PRODUCTS:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: (0, n.jsx)(b.Z, {
                                width: 20,
                                height: 20,
                            }),
                            title: m.intl.string(m.t.odvTUp),
                            body: m.intl.string(m.t["0JFpRW"]),
                            selected: i === f.y.GUILD_PRODUCTS,
                            onClick: () => o(f.y.GUILD_PRODUCTS),
                        },
                        e,
                    );
                case f.y.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: (0, n.jsx)(j.Z, {
                                width: 20,
                                height: 20,
                            }),
                            title: m.intl.string(m.t["KzCF/6"]),
                            body: r
                                ? m.intl.string(m.t["jqz+ly"])
                                : m.intl.format(m.t.ycs4oO, {
                                      openRoleSubPage: () => (0, u.uL)(h.Z5c.CHANNEL(t.id, x.oC.ROLE_SUBSCRIPTIONS)),
                                  }),
                            disabled: !r,
                            selected: i === f.y.GUILD_ROLE_SUBSCRIPTIONS,
                            onClick: () => o(f.y.GUILD_ROLE_SUBSCRIPTIONS),
                        },
                        e,
                    );
                case f.y.GUILD_PRODUCTS_PREVIEW:
                    return (0, n.jsx)(
                        y,
                        {
                            icon: _
                                ? (0, n.jsx)("img", {
                                      src: L
                                          ? (0, d.b)("server_products/storefront/question-mark.png")
                                          : (0, d.b)("server_products/storefront/question-mark.gif"),
                                      className: v.questionMark,
                                      alt: "",
                                  })
                                : (0, n.jsx)(s.OgN, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 20,
                                      height: 20,
                                  }),
                            title: m.intl.string(m.t.odvTUp),
                            body: m.intl.string(m.t["827i8I"]),
                            selected: i === f.y.GUILD_PRODUCTS_PREVIEW,
                            onClick: () => {
                                o(f.y.GUILD_PRODUCTS_PREVIEW), c.K.set(O.Hr, "true");
                            },
                            onPreviewDismiss: P,
                            isNew: _,
                        },
                        e,
                    );
                default:
                    return null;
            }
        });
    return (0, n.jsxs)("div", {
        className: v.container,
        children: [
            (0, n.jsx)(s.Heading, {
                variant: "heading-sm/bold",
                className: v.header,
                children: m.intl.string(m.t.GF433I),
            }),
            (0, n.jsx)(s.LZC, { size: 12 }),
            (0, n.jsxs)("div", {
                className: v.filters,
                children: [
                    (0, n.jsx)("div", {
                        className: v.tabs,
                        children: S,
                    }),
                    i === f.y.GUILD_PRODUCTS && (0, n.jsx)(g.Z, {}),
                ],
            }),
        ],
    });
}
