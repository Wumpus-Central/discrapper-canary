"use strict";
n.d(t, { A: () => b });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(154308),
    o = n(641150),
    c = n(121886),
    d = n(990078),
    u = n(397927),
    g = n(736653),
    _ = n(151252),
    m = n(954571),
    h = n(440938),
    p = n(365491),
    f = n(758836),
    x = n(652215),
    E = n(818348),
    C = n(985018),
    A = n(60822);
function b() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: n, hasFilters: r } = (0, p.v)(),
        i = r(),
        { enabled: o } = (0, _.Z)({ location: "Shop" }),
        c = (0, h.uM)(),
        d = l.useCallback(
            (e) => {
                m.default.track(x.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
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
    return (0, s.jsxs)("div", {
        className: A.kT,
        children: [
            (0, s.jsxs)("div", {
                className: a()(A.KZ, A.YG),
                children: [
                    (0, s.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: A.hr,
                        children: C.intl.string(C.t.Qk6r1a),
                    }),
                    f._6.map((e) => (0, s.jsx)(S, { filter: e, trackFilterAction: d }, e)),
                    o &&
                        (0, s.jsx)(u.Checkbox, {
                            checked: t,
                            onChange: () => {
                                d(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: C.intl.string(C.t.AHHHgG),
                        }),
                ],
            }),
            (0, s.jsx)(v, { trackFilterAction: d }),
            (0, s.jsx)(j, { trackFilterAction: d }),
            i &&
                (0, s.jsx)(u.Button, {
                    variant: "secondary",
                    onClick: () => {
                        d("filter reset"), n();
                    },
                    text: C.intl.string(C.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let S = (e) => {
        let { filter: t, trackFilterAction: n } = e,
            l = {
                [o.q.AVATAR_DECORATION]: C.intl.string(C.t.dRZYNE),
                [o.q.PROFILE_EFFECT]: C.intl.string(C.t["1cNjtx"]),
                [o.q.NAMEPLATE]: C.intl.string(C.t.V68Fqz),
                [o.q.BUNDLE]: C.intl.string(C.t.FYFpps),
            },
            { itemTypeFilters: r, onToggleItemType: a } = (0, p.v)();
        return (0, s.jsx)(u.Checkbox, {
            checked: r.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                n(`filter item type ${e} ${!1 === r.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    },
    v = (e) => {
        let { trackFilterAction: t } = e,
            n = l.useMemo(
                () => [
                    { color: "#9B59B6", label: C.intl.string(C.t.kqUD4P), enum: i.I.PURPLE },
                    { color: "#3498DB", label: C.intl.string(C.t.qQTRae), enum: i.I.BLUE },
                    { color: "#2ECC71", label: C.intl.string(C.t["f/Ylk6"]), enum: i.I.GREEN },
                    { color: "#A0522D", label: C.intl.string(C.t["Sd/BMa"]), enum: i.I.BROWN },
                    { color: "#F1C40F", label: C.intl.string(C.t["0fevYz"]), enum: i.I.YELLOW },
                ],
                [],
            ),
            r = l.useMemo(
                () => [
                    { color: "#E67E22", label: C.intl.string(C.t.ZE7weD), enum: i.I.ORANGE },
                    { color: "#E74C3C", label: C.intl.string(C.t.hKJGOM), enum: i.I.RED },
                    { color: "#EC407A", label: C.intl.string(C.t.HvLEGM), enum: i.I.PINK },
                    { color: "#FFFFFF", label: C.intl.string(C.t["CB+lNO"]), enum: i.I.WHITE },
                    { color: "#262626", label: C.intl.string(C.t["dMey+v"]), enum: i.I.BLACK },
                ],
                [],
            );
        return (0, s.jsxs)("div", {
            className: A.KZ,
            children: [
                (0, s.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: A.hr,
                    children: C.intl.string(C.t.K1xGoG),
                }),
                (0, s.jsx)(L, { colors: n, trackFilterAction: t }),
                (0, s.jsx)(L, { colors: r, trackFilterAction: t }),
            ],
        });
    },
    L = (e) => {
        let { colors: t, trackFilterAction: n } = e,
            { colorFilters: l, onToggleColor: r } = (0, p.v)();
        return (0, s.jsx)("div", {
            className: A.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, s.jsx)(
                    I,
                    { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: r, trackFilterAction: n },
                    i,
                );
            }),
        });
    },
    I = (e) => {
        let { color: t, label: n, enum: l, isToggled: r, onToggleColor: i, trackFilterAction: o } = e;
        return (0, s.jsx)(
            d.m,
            {
                text: n,
                asContainer: !0,
                children: (0, s.jsx)(
                    u.DUT,
                    {
                        className: a()(A.n1, { [A.lx]: r }),
                        style: { backgroundColor: t },
                        "aria-label": n,
                        onClick: () => {
                            o(`filter color ${n.toLowerCase()} ${!r ? "on" : "off"}`), i(l);
                        },
                        children:
                            r &&
                            (0, s.jsx)("div", {
                                className: A.oE,
                                children: (0, s.jsx)(u.rOg, { size: "xs", color: u.LU0.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            n,
        );
    },
    j = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: n, onToggleTheme: r } = (0, p.v)(),
            i = (0, g.Ay)() === E.NJ.DARK,
            o = l.useCallback(
                (e) => {
                    if (n.has(e) || i) return "always-white";
                },
                [n, i],
            ),
            d = l.useCallback(
                (e) => (n.has(e) || i ? u.LU0.colors.WHITE : u.LU0.colors.INTERACTIVE_TEXT_DEFAULT),
                [n, i],
            ),
            _ = l.useMemo(
                () => [
                    {
                        name: C.intl.string(C.t.aVBOKh),
                        icon: (0, s.jsx)(u.E4v, { size: "xs", color: d(c.K.ANIME) }),
                        enum: c.K.ANIME,
                    },
                    {
                        name: C.intl.string(C.t["3WoZBc"]),
                        icon: (0, s.jsx)(u._b6, { size: "xs", color: d(c.K.GAMING) }),
                        enum: c.K.GAMING,
                    },
                    {
                        name: C.intl.string(C.t.yuEmLj),
                        icon: (0, s.jsx)(u.CVi, { size: "xs", color: d(c.K.CUTE_COZY) }),
                        enum: c.K.CUTE_COZY,
                    },
                    {
                        name: C.intl.string(C.t.mMvCHo),
                        icon: (0, s.jsx)(u.LIQ, { size: "xs", color: d(c.K.SCI_FI) }),
                        enum: c.K.SCI_FI,
                    },
                    {
                        name: C.intl.string(C.t.TlhOQC),
                        icon: (0, s.jsx)(u.Lf3, { size: "xs", color: d(c.K.FOOD_DRINKS) }),
                        enum: c.K.FOOD_DRINKS,
                    },
                    {
                        name: C.intl.string(C.t["4IaUIM"]),
                        icon: (0, s.jsx)(u.fhe, { size: "xs", color: d(c.K.FANTASY) }),
                        enum: c.K.FANTASY,
                    },
                    {
                        name: C.intl.string(C.t["w0nSG/"]),
                        icon: (0, s.jsx)(u.NVR, { size: "xs", color: d(c.K.ANIMALS_PETS) }),
                        enum: c.K.ANIMALS_PETS,
                    },
                    {
                        name: C.intl.string(C.t.cJng7v),
                        icon: (0, s.jsx)(u.pPb, { size: "xs", color: d(c.K.NATURE) }),
                        enum: c.K.NATURE,
                    },
                    {
                        name: C.intl.string(C.t["5mUvyM"]),
                        icon: (0, s.jsx)(u.TAc, { size: "xs", color: d(c.K.MOVIES_TV_SHOWS) }),
                        enum: c.K.MOVIES_TV_SHOWS,
                    },
                    {
                        name: C.intl.string(C.t.MB9H5Z),
                        icon: (0, s.jsx)(u.eEe, { size: "xs", color: d(c.K.DARK_MOODY) }),
                        enum: c.K.DARK_MOODY,
                    },
                ],
                [d],
            );
        return (0, s.jsxs)("div", {
            className: A.KZ,
            children: [
                (0, s.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: A.hr,
                    children: C.intl.string(C.t.t1Ztrp),
                }),
                (0, s.jsx)("div", {
                    className: A.Ot,
                    children: _.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, s.jsxs)(
                            u.DUT,
                            {
                                className: a()(A.w4, { [A.C7]: n.has(c) }),
                                onClick: () => {
                                    let e = n.has(c);
                                    t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), r(c);
                                },
                                children: [
                                    i,
                                    (0, s.jsx)(u.Text, { color: o(c), variant: "text-md/medium", children: l }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
