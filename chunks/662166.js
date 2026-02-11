"use strict";
s.d(t, { A: () => b });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(154308),
    o = s(641150),
    c = s(121886),
    d = s(990078),
    u = s(397927),
    g = s(736653),
    _ = s(151252),
    m = s(954571),
    h = s(440938),
    p = s(365491),
    f = s(758836),
    x = s(652215),
    E = s(818348),
    C = s(985018),
    A = s(60822);
function b() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: r } = (0, p.v)(),
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
    return (0, n.jsxs)("div", {
        className: A.kT,
        children: [
            (0, n.jsxs)("div", {
                className: a()(A.KZ, A.YG),
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: A.hr,
                        children: C.intl.string(C.t.Qk6r1a),
                    }),
                    f._6.map((e) => (0, n.jsx)(S, { filter: e, trackFilterAction: d }, e)),
                    o &&
                        (0, n.jsx)(u.Checkbox, {
                            checked: t,
                            onChange: () => {
                                d(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: C.intl.string(C.t.AHHHgG),
                        }),
                ],
            }),
            (0, n.jsx)(v, { trackFilterAction: d }),
            (0, n.jsx)(j, { trackFilterAction: d }),
            i &&
                (0, n.jsx)(u.Button, {
                    variant: "secondary",
                    onClick: () => {
                        d("filter reset"), s();
                    },
                    text: C.intl.string(C.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let S = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            l = {
                [o.q.AVATAR_DECORATION]: C.intl.string(C.t.dRZYNE),
                [o.q.PROFILE_EFFECT]: C.intl.string(C.t["1cNjtx"]),
                [o.q.NAMEPLATE]: C.intl.string(C.t.V68Fqz),
                [o.q.BUNDLE]: C.intl.string(C.t.FYFpps),
            },
            { itemTypeFilters: r, onToggleItemType: a } = (0, p.v)();
        return (0, n.jsx)(u.Checkbox, {
            checked: r.has(t),
            onChange: () => {
                let e = l[t]?.toLowerCase() != null ? l[t].toLowerCase() : t;
                s(`filter item type ${e} ${!1 === r.has(t) ? "on" : "off"}`), a(t);
            },
            label: l[t] ?? "",
        });
    },
    v = (e) => {
        let { trackFilterAction: t } = e,
            s = l.useMemo(
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
        return (0, n.jsxs)("div", {
            className: A.KZ,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: A.hr,
                    children: C.intl.string(C.t.K1xGoG),
                }),
                (0, n.jsx)(L, { colors: s, trackFilterAction: t }),
                (0, n.jsx)(L, { colors: r, trackFilterAction: t }),
            ],
        });
    },
    L = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: l, onToggleColor: r } = (0, p.v)();
        return (0, n.jsx)("div", {
            className: A.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, n.jsx)(
                    I,
                    { color: t, label: a, enum: i, isToggled: l.has(i), onToggleColor: r, trackFilterAction: s },
                    i,
                );
            }),
        });
    },
    I = (e) => {
        let { color: t, label: s, enum: l, isToggled: r, onToggleColor: i, trackFilterAction: o } = e;
        return (0, n.jsx)(
            d.m,
            {
                text: s,
                asContainer: !0,
                children: (0, n.jsx)(
                    u.DUT,
                    {
                        className: a()(A.n1, { [A.lx]: r }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        onClick: () => {
                            o(`filter color ${s.toLowerCase()} ${!r ? "on" : "off"}`), i(l);
                        },
                        children:
                            r &&
                            (0, n.jsx)("div", {
                                className: A.oE,
                                children: (0, n.jsx)(u.rOg, { size: "xs", color: u.LU0.colors.WHITE }),
                            }),
                    },
                    t,
                ),
            },
            s,
        );
    },
    j = (e) => {
        let { trackFilterAction: t } = e,
            { themeFilters: s, onToggleTheme: r } = (0, p.v)(),
            i = (0, g.Ay)() === E.NJ.DARK,
            o = l.useCallback(
                (e) => {
                    if (s.has(e) || i) return "always-white";
                },
                [s, i],
            ),
            d = l.useCallback(
                (e) => (s.has(e) || i ? u.LU0.colors.WHITE : u.LU0.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, i],
            ),
            _ = l.useMemo(
                () => [
                    {
                        name: C.intl.string(C.t.aVBOKh),
                        icon: (0, n.jsx)(u.E4v, { size: "xs", color: d(c.K.ANIME) }),
                        enum: c.K.ANIME,
                    },
                    {
                        name: C.intl.string(C.t["3WoZBc"]),
                        icon: (0, n.jsx)(u._b6, { size: "xs", color: d(c.K.GAMING) }),
                        enum: c.K.GAMING,
                    },
                    {
                        name: C.intl.string(C.t.yuEmLj),
                        icon: (0, n.jsx)(u.CVi, { size: "xs", color: d(c.K.CUTE_COZY) }),
                        enum: c.K.CUTE_COZY,
                    },
                    {
                        name: C.intl.string(C.t.mMvCHo),
                        icon: (0, n.jsx)(u.LIQ, { size: "xs", color: d(c.K.SCI_FI) }),
                        enum: c.K.SCI_FI,
                    },
                    {
                        name: C.intl.string(C.t.TlhOQC),
                        icon: (0, n.jsx)(u.Lf3, { size: "xs", color: d(c.K.FOOD_DRINKS) }),
                        enum: c.K.FOOD_DRINKS,
                    },
                    {
                        name: C.intl.string(C.t["4IaUIM"]),
                        icon: (0, n.jsx)(u.fhe, { size: "xs", color: d(c.K.FANTASY) }),
                        enum: c.K.FANTASY,
                    },
                    {
                        name: C.intl.string(C.t["w0nSG/"]),
                        icon: (0, n.jsx)(u.NVR, { size: "xs", color: d(c.K.ANIMALS_PETS) }),
                        enum: c.K.ANIMALS_PETS,
                    },
                    {
                        name: C.intl.string(C.t.cJng7v),
                        icon: (0, n.jsx)(u.pPb, { size: "xs", color: d(c.K.NATURE) }),
                        enum: c.K.NATURE,
                    },
                    {
                        name: C.intl.string(C.t["5mUvyM"]),
                        icon: (0, n.jsx)(u.TAc, { size: "xs", color: d(c.K.MOVIES_TV_SHOWS) }),
                        enum: c.K.MOVIES_TV_SHOWS,
                    },
                    {
                        name: C.intl.string(C.t.MB9H5Z),
                        icon: (0, n.jsx)(u.eEe, { size: "xs", color: d(c.K.DARK_MOODY) }),
                        enum: c.K.DARK_MOODY,
                    },
                ],
                [d],
            );
        return (0, n.jsxs)("div", {
            className: A.KZ,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: A.hr,
                    children: C.intl.string(C.t.t1Ztrp),
                }),
                (0, n.jsx)("div", {
                    className: A.Ot,
                    children: _.map((e) => {
                        let { name: l, icon: i, enum: c } = e;
                        return (0, n.jsxs)(
                            u.DUT,
                            {
                                className: a()(A.w4, { [A.C7]: s.has(c) }),
                                onClick: () => {
                                    let e = s.has(c);
                                    t(`filter theme ${l.toLowerCase()} ${!e ? "on" : "off"}`), r(c);
                                },
                                children: [
                                    i,
                                    (0, n.jsx)(u.Text, { color: o(c), variant: "text-md/medium", children: l }),
                                ],
                            },
                            l,
                        );
                    }),
                }),
            ],
        });
    };
