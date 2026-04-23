"use strict";
s.d(t, { A: () => D });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(154308),
    o = s(641150),
    c = s(121886),
    d = s(990078),
    u = s(834730),
    g = s(150934),
    h = s(821609),
    _ = s(939249),
    m = s(947641),
    p = s(827734),
    f = s(604338),
    E = s(785866),
    x = s(373846),
    A = s(308323),
    C = s(608599),
    S = s(685761),
    b = s(157225),
    v = s(413249),
    L = s(510241),
    I = s(601198),
    j = s(736653),
    N = s(270051),
    T = s(954571),
    O = s(440938),
    y = s(365491),
    k = s(758836),
    R = s(652215),
    B = s(818348),
    P = s(985018),
    M = s(764915);
function D() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: r } = (0, y.v)(),
        i = r(),
        { enabled: o } = (0, N.Z)({ location: "Shop" }),
        c = (0, O.uM)(),
        d = l.useCallback(
            (e) => {
                T.default.track(R.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                    collectibles_shop_session_id: c?.sessionId,
                    page_section: c?.pageSection,
                    page_category: c?.pageCategory,
                    page_index: c?.pageIndex,
                    page_size: c?.pageSize,
                    cta_name: e,
                    page_type: "catalog",
                });
            },
            [c],
        );
    return (0, n.jsxs)("div", {
        className: M.kT,
        children: [
            (0, n.jsxs)("div", {
                className: a()(M.KZ, M.YG),
                children: [
                    (0, n.jsx)(u.E, {
                        variant: "text-md/semibold",
                        className: M.hr,
                        children: P.intl.string(P.t.Qk6r1a),
                    }),
                    k._6.map((e) => (0, n.jsx)(w, { filter: e, trackFilterAction: d }, e)),
                    o &&
                        (0, n.jsx)(g.S, {
                            checked: t,
                            onChange: () => {
                                d(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: P.intl.string(P.t.AHHHgG),
                        }),
                ],
            }),
            (0, n.jsx)(H, { trackFilterAction: d }),
            (0, n.jsx)(U, { trackFilterAction: d }),
            i &&
                (0, n.jsx)(h.$, {
                    variant: "secondary",
                    onClick: () => {
                        d("filter reset"), s();
                    },
                    text: P.intl.string(P.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let w = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
                [o.q.AVATAR_DECORATION]: P.intl.string(P.t.dRZYNE),
                [o.q.PROFILE_EFFECT]: P.intl.string(P.t["1cNjtx"]),
                [o.q.NAMEPLATE]: P.intl.string(P.t.V68Fqz),
                [o.q.BUNDLE]: P.intl.string(P.t.FYFpps),
            },
            { itemTypeFilters: r, onToggleItemType: a } = (0, y.v)();
        return (0, n.jsx)(g.S, {
            checked: r.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                s(`filter item type ${e} ${!1 === r.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    },
    H = (e) => {
        let { trackFilterAction: t } = e,
            s = l.useMemo(
                () => [
                    { color: "#9B59B6", label: P.intl.string(P.t.kqUD4P), enum: i.I.PURPLE },
                    { color: "#3498DB", label: P.intl.string(P.t.qQTRae), enum: i.I.BLUE },
                    { color: "#2ECC71", label: P.intl.string(P.t["f/Ylk6"]), enum: i.I.GREEN },
                    { color: "#A0522D", label: P.intl.string(P.t["Sd/BMa"]), enum: i.I.BROWN },
                    { color: "#F1C40F", label: P.intl.string(P.t["0fevYz"]), enum: i.I.YELLOW },
                ],
                [],
            ),
            r = l.useMemo(
                () => [
                    { color: "#E67E22", label: P.intl.string(P.t.ZE7weD), enum: i.I.ORANGE },
                    { color: "#E74C3C", label: P.intl.string(P.t.hKJGOM), enum: i.I.RED },
                    { color: "#EC407A", label: P.intl.string(P.t.HvLEGM), enum: i.I.PINK },
                    { color: "#FFFFFF", label: P.intl.string(P.t["CB+lNO"]), enum: i.I.WHITE },
                    { color: "#262626", label: P.intl.string(P.t["dMey+v"]), enum: i.I.BLACK },
                ],
                [],
            );
        return (0, n.jsxs)("div", {
            className: M.KZ,
            children: [
                (0, n.jsx)(u.E, { variant: "text-md/semibold", className: M.hr, children: P.intl.string(P.t.K1xGoG) }),
                (0, n.jsx)(G, { colors: s, trackFilterAction: t }),
                (0, n.jsx)(G, { colors: r, trackFilterAction: t }),
            ],
        });
    },
    G = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: r } = (0, y.v)();
        return (0, n.jsx)("div", {
            className: M.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, n.jsx)(
                    F,
                    { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: r, trackFilterAction: s },
                    i,
                );
            }),
        });
    },
    F = (e) => {
        let { color: t, label: s, enum: l, isToggled: r, onToggleColor: i, trackFilterAction: o } = e;
        return (0, n.jsx)(
            d.m,
            {
                text: s,
                asContainer: !0,
                children: (0, n.jsx)(
                    _.D,
                    {
                        className: a()(M.n1, { [M.lx]: r }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        onClick: () => {
                            o(`filter color ${s.toLowerCase()} ${!r ? "on" : "off"}`), i(l);
                        },
                        children:
                            r &&
                            (0, n.jsx)("div", {
                                className: M.oE,
                                children: (0, n.jsx)(m.r, { size: "xs", color: p.A.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    U = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: r } = (0, y.v)(),
            i = (0, j.Ay)() === B.NJ.DARK,
            o = l.useCallback(
                (e) => {
                    if (s.has(e) || i) return "always-white";
                },
                [s, i],
            ),
            d = l.useCallback((e) => (s.has(e) || i ? p.A.colors.WHITE : p.A.colors.INTERACTIVE_TEXT_DEFAULT), [s, i]),
            g = l.useMemo(
                () => [
                    {
                        name: P.intl.string(P.t.aVBOKh),
                        icon: (0, n.jsx)(f.E, { size: "xs", color: d(c.K.ANIME) }),
                        enum: c.K.ANIME,
                    },
                    {
                        name: P.intl.string(P.t["3WoZBc"]),
                        icon: (0, n.jsx)(E._, { size: "xs", color: d(c.K.GAMING) }),
                        enum: c.K.GAMING,
                    },
                    {
                        name: P.intl.string(P.t.yuEmLj),
                        icon: (0, n.jsx)(x.C, { size: "xs", color: d(c.K.CUTE_COZY) }),
                        enum: c.K.CUTE_COZY,
                    },
                    {
                        name: P.intl.string(P.t.mMvCHo),
                        icon: (0, n.jsx)(A.L, { size: "xs", color: d(c.K.SCI_FI) }),
                        enum: c.K.SCI_FI,
                    },
                    {
                        name: P.intl.string(P.t.TlhOQC),
                        icon: (0, n.jsx)(C.L, { size: "xs", color: d(c.K.FOOD_DRINKS) }),
                        enum: c.K.FOOD_DRINKS,
                    },
                    {
                        name: P.intl.string(P.t["4IaUIM"]),
                        icon: (0, n.jsx)(S.f, { size: "xs", color: d(c.K.FANTASY) }),
                        enum: c.K.FANTASY,
                    },
                    {
                        name: P.intl.string(P.t["w0nSG/"]),
                        icon: (0, n.jsx)(b.N, { size: "xs", color: d(c.K.ANIMALS_PETS) }),
                        enum: c.K.ANIMALS_PETS,
                    },
                    {
                        name: P.intl.string(P.t.cJng7v),
                        icon: (0, n.jsx)(v.p, { size: "xs", color: d(c.K.NATURE) }),
                        enum: c.K.NATURE,
                    },
                    {
                        name: P.intl.string(P.t["5mUvyM"]),
                        icon: (0, n.jsx)(L.T, { size: "xs", color: d(c.K.MOVIES_TV_SHOWS) }),
                        enum: c.K.MOVIES_TV_SHOWS,
                    },
                    {
                        name: P.intl.string(P.t.MB9H5Z),
                        icon: (0, n.jsx)(I.e, { size: "xs", color: d(c.K.DARK_MOODY) }),
                        enum: c.K.DARK_MOODY,
                    },
                ],
                [d],
            );
        return (0, n.jsxs)("div", {
            className: M.KZ,
            children: [
                (0, n.jsx)(u.E, { variant: "text-md/semibold", className: M.hr, children: P.intl.string(P.t.t1Ztrp) }),
                (0, n.jsx)("div", {
                    className: M.Ot,
                    children: g.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, n.jsxs)(
                            _.D,
                            {
                                className: a()(M.w4, { [M.C7]: s.has(c) }),
                                onClick: () => {
                                    let e = s.has(c);
                                    t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), r(c);
                                },
                                children: [i, (0, n.jsx)(u.E, { color: o(c), variant: "text-md/medium", children: l })],
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
