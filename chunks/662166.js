"use strict";
s.d(t, { A: () => A });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(154308),
    o = s(641150),
    c = s(121886),
    d = s(990078),
    u = s(397927),
    _ = s(736653),
    g = s(151252),
    m = s(954571),
    h = s(440938),
    p = s(365491),
    f = s(758836),
    x = s(652215),
    E = s(818348),
    b = s(985018),
    C = s(849660);
function A() {
    let { onToggleOrbEligible: e, orbEligible: t, reset: s, hasFilters: l } = (0, p.v)(),
        i = l(),
        { enabled: o } = (0, g.Z)({ location: "Shop" }),
        c = (0, h.uM)(),
        d = r.useCallback(
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
        className: C.kT,
        children: [
            (0, n.jsxs)("div", {
                className: a()(C.KZ, C.YG),
                children: [
                    (0, n.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        className: C.hr,
                        children: b.intl.string(b.t.Qk6r1a),
                    }),
                    f._6.map((e) => (0, n.jsx)(S, { filter: e, trackFilterAction: d }, e)),
                    o &&
                        (0, n.jsx)(u.Checkbox, {
                            checked: t,
                            onChange: () => {
                                d(`filter orb eligible ${!1 === t ? "on" : "off"}`), e();
                            },
                            label: b.intl.string(b.t.AHHHgG),
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
                    text: b.intl.string(b.t.jwH6KZ),
                    fullWidth: !0,
                }),
        ],
    });
}
let S = (e) => {
        let { filter: t, trackFilterAction: s } = e,
            r = {
                [o.q.AVATAR_DECORATION]: b.intl.string(b.t.dRZYNE),
                [o.q.PROFILE_EFFECT]: b.intl.string(b.t["1cNjtx"]),
                [o.q.NAMEPLATE]: b.intl.string(b.t.V68Fqz),
                [o.q.BUNDLE]: b.intl.string(b.t.FYFpps),
            },
            { itemTypeFilters: l, onToggleItemType: a } = (0, p.v)();
        return (0, n.jsx)(u.Checkbox, {
            checked: l.has(t),
            onChange: () => {
                let e = r[t]?.toLowerCase() != null ? r[t].toLowerCase() : t;
                s(`filter item type ${e} ${!1 === l.has(t) ? "on" : "off"}`), a(t);
            },
            label: r[t] ?? "",
        });
    },
    v = (e) => {
        let { trackFilterAction: t } = e,
            s = r.useMemo(
                () => [
                    { color: "#9B59B6", label: b.intl.string(b.t.kqUD4P), enum: i.I.PURPLE },
                    { color: "#3498DB", label: b.intl.string(b.t.qQTRae), enum: i.I.BLUE },
                    { color: "#2ECC71", label: b.intl.string(b.t["f/Ylk6"]), enum: i.I.GREEN },
                    { color: "#A0522D", label: b.intl.string(b.t["Sd/BMa"]), enum: i.I.BROWN },
                    { color: "#F1C40F", label: b.intl.string(b.t["0fevYz"]), enum: i.I.YELLOW },
                ],
                [],
            ),
            l = r.useMemo(
                () => [
                    { color: "#E67E22", label: b.intl.string(b.t.ZE7weD), enum: i.I.ORANGE },
                    { color: "#E74C3C", label: b.intl.string(b.t.hKJGOM), enum: i.I.RED },
                    { color: "#EC407A", label: b.intl.string(b.t.HvLEGM), enum: i.I.PINK },
                    { color: "#FFFFFF", label: b.intl.string(b.t["CB+lNO"]), enum: i.I.WHITE },
                    { color: "#262626", label: b.intl.string(b.t["dMey+v"]), enum: i.I.BLACK },
                ],
                [],
            );
        return (0, n.jsxs)("div", {
            className: C.KZ,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: C.hr,
                    children: b.intl.string(b.t.K1xGoG),
                }),
                (0, n.jsx)(I, { colors: s, trackFilterAction: t }),
                (0, n.jsx)(I, { colors: l, trackFilterAction: t }),
            ],
        });
    },
    I = (e) => {
        let { colors: t, trackFilterAction: s } = e,
            { colorFilters: r, onToggleColor: l } = (0, p.v)();
        return (0, n.jsx)("div", {
            className: C.OW,
            children: t.map((e) => {
                let { color: t, label: a, enum: i } = e;
                return (0, n.jsx)(
                    L,
                    { color: t, label: a, enum: i, isToggled: r.has(i), onToggleColor: l, trackFilterAction: s },
                    i,
                );
            }),
        });
    },
    L = (e) => {
        let { color: t, label: s, enum: r, isToggled: l, onToggleColor: i, trackFilterAction: o } = e;
        return (0, n.jsx)(
            d.m,
            {
                text: s,
                asContainer: !0,
                children: (0, n.jsx)(
                    u.DUT,
                    {
                        className: a()(C.n1, { [C.lx]: l }),
                        style: { backgroundColor: t },
                        "aria-label": s,
                        onClick: () => {
                            o(`filter color ${s.toLowerCase()} ${!l ? "on" : "off"}`), i(r);
                        },
                        children:
                            l &&
                            (0, n.jsx)("div", {
                                className: C.oE,
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
            { themeFilters: s, onToggleTheme: l } = (0, p.v)(),
            i = (0, _.Ay)() === E.NJ.DARK,
            o = r.useCallback(
                (e) => {
                    if (s.has(e) || i) return "always-white";
                },
                [s, i],
            ),
            d = r.useCallback(
                (e) => (s.has(e) || i ? u.LU0.colors.WHITE : u.LU0.colors.INTERACTIVE_TEXT_DEFAULT),
                [s, i],
            ),
            g = r.useMemo(
                () => [
                    {
                        name: b.intl.string(b.t.aVBOKh),
                        icon: (0, n.jsx)(u.E4v, { size: "xs", color: d(c.K.ANIME) }),
                        enum: c.K.ANIME,
                    },
                    {
                        name: b.intl.string(b.t["3WoZBc"]),
                        icon: (0, n.jsx)(u._b6, { size: "xs", color: d(c.K.GAMING) }),
                        enum: c.K.GAMING,
                    },
                    {
                        name: b.intl.string(b.t.yuEmLj),
                        icon: (0, n.jsx)(u.CVi, { size: "xs", color: d(c.K.CUTE_COZY) }),
                        enum: c.K.CUTE_COZY,
                    },
                    {
                        name: b.intl.string(b.t.mMvCHo),
                        icon: (0, n.jsx)(u.LIQ, { size: "xs", color: d(c.K.SCI_FI) }),
                        enum: c.K.SCI_FI,
                    },
                    {
                        name: b.intl.string(b.t.TlhOQC),
                        icon: (0, n.jsx)(u.Lf3, { size: "xs", color: d(c.K.FOOD_DRINKS) }),
                        enum: c.K.FOOD_DRINKS,
                    },
                    {
                        name: b.intl.string(b.t["4IaUIM"]),
                        icon: (0, n.jsx)(u.fhe, { size: "xs", color: d(c.K.FANTASY) }),
                        enum: c.K.FANTASY,
                    },
                    {
                        name: b.intl.string(b.t["w0nSG/"]),
                        icon: (0, n.jsx)(u.NVR, { size: "xs", color: d(c.K.ANIMALS_PETS) }),
                        enum: c.K.ANIMALS_PETS,
                    },
                    {
                        name: b.intl.string(b.t.cJng7v),
                        icon: (0, n.jsx)(u.pPb, { size: "xs", color: d(c.K.NATURE) }),
                        enum: c.K.NATURE,
                    },
                    {
                        name: b.intl.string(b.t["5mUvyM"]),
                        icon: (0, n.jsx)(u.TAc, { size: "xs", color: d(c.K.MOVIES_TV_SHOWS) }),
                        enum: c.K.MOVIES_TV_SHOWS,
                    },
                    {
                        name: b.intl.string(b.t.MB9H5Z),
                        icon: (0, n.jsx)(u.eEe, { size: "xs", color: d(c.K.DARK_MOODY) }),
                        enum: c.K.DARK_MOODY,
                    },
                ],
                [d],
            );
        return (0, n.jsxs)("div", {
            className: C.KZ,
            children: [
                (0, n.jsx)(u.Text, {
                    variant: "text-md/semibold",
                    className: C.hr,
                    children: b.intl.string(b.t.t1Ztrp),
                }),
                (0, n.jsx)("div", {
                    className: C.Ot,
                    children: g.map((e) => {
                        let { name: r, icon: i, enum: c } = e;
                        return (0, n.jsxs)(
                            u.DUT,
                            {
                                className: a()(C.w4, { [C.C7]: s.has(c) }),
                                onClick: () => {
                                    let e = s.has(c);
                                    t(`filter theme ${r.toLowerCase()} ${!e ? "on" : "off"}`), l(c);
                                },
                                children: [
                                    i,
                                    (0, n.jsx)(u.Text, { color: o(c), variant: "text-md/medium", children: r }),
                                ],
                            },
                            r,
                        );
                    }),
                }),
            ],
        });
    };
