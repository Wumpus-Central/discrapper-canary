t.d(o, { A: () => S });
var e = t(477900),
    i = t(582128),
    s = t(503698),
    l = t.n(s),
    n = t(17928),
    a = t(661531),
    u = t(462887),
    c = t(306471),
    d = t(478016),
    E = t(565787),
    _ = t(332837),
    C = t(998445),
    f = t(834730),
    I = t(900002),
    A = t(939249),
    p = t(140735),
    g = t(404374),
    h = t(878678),
    m = t(814925),
    R = t(363195),
    N = t(696451),
    T = t(287809),
    D = t(816166),
    x = t(953727);
function L(r) {
    let { width: o = 10, height: t = 10, color: i = "currentColor", ...s } = r;
    return (0, e.jsxs)("svg", {
        ...(0, x.A)(s),
        width: o,
        height: t,
        viewBox: "0 0 17 22",
        fill: i,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, e.jsxs)("g", {
                filter: "url(#filter0_d_1296_1706)",
                children: [
                    (0, e.jsx)("path", {
                        opacity: "0.55",
                        d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                        fill: "white",
                    }),
                    (0, e.jsx)("path", {
                        opacity: "0.8",
                        d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                        fill: "white",
                    }),
                    (0, e.jsx)("path", {
                        d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, e.jsx)("defs", {
                children: (0, e.jsxs)("filter", {
                    id: "filter0_d_1296_1706",
                    x: "-3.5",
                    y: "-1",
                    width: "24",
                    height: "24",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, e.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, e.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, e.jsx)("feOffset", { dy: "1" }),
                        (0, e.jsx)("feGaussianBlur", { stdDeviation: "2" }),
                        (0, e.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
                        }),
                        (0, e.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_1296_1706",
                        }),
                        (0, e.jsx)("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_1296_1706",
                            result: "shape",
                        }),
                    ],
                }),
            }),
        ],
    });
}
var b = t(473145),
    w = t(426983),
    M = t(176128),
    O = t(375708);
function F(r, o) {
    let t =
        o === M.qo.PUBLIC
            ? O.intl.string(O.t.op2cJ6)
            : o === M.qo.APPLY_TO_JOIN
              ? O.intl.string(O.t.YwZfbt)
              : O.intl.string(O.t.TME4LJ);
    switch (r) {
        case w._.STAFF:
            return {
                tooltipTitle: O.intl.string(O.t.lMrv96),
                tooltipSubtitle: O.intl.string(O.t.lMrv96),
                tooltipDescription: O.intl.string(O.t.lMrv96),
            };
        case w._.VERIFIED:
            return {
                tooltipTitle: O.intl.string(O.t.K7iRig),
                tooltipSubtitle: O.intl.string(O.t.iCehw9),
                tooltipDescription: t,
            };
        case w._.PARTNERED:
            return {
                tooltipTitle: O.intl.string(O.t.K7iRig),
                tooltipSubtitle: O.intl.string(O.t.hfYfEE),
                tooltipDescription: t,
            };
        case w._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: O.intl.string(O.t.K7iRig),
                tooltipSubtitle: O.intl.string(O.t["TX+iFC"]),
                tooltipDescription: t,
            };
        case w._.COMMUNITY:
            return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: t };
        case w._.DISCOVERABLE:
            return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: O.intl.string(O.t.op2cJ6) };
        default:
            return { tooltipTitle: O.intl.string(O.t["iZRkC/"]) };
    }
}
var k = t(652215),
    j = t(818357);
let v = {
    [w._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [w._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [w._.VERIFIED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [w._.PARTNERED]: {
        IconComponent: (0, E.k)(D.A),
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: a.A.unsafe_rawColors.BRAND_500.css,
    },
    [w._.COMMUNITY]: {
        IconComponent: _.HomeIcon,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [w._.DISCOVERABLE]: {
        IconComponent: C.GlobeEarthIcon,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [w._.NONE]: {},
};
function V(r) {
    let { guildTraits: o } = r;
    return (0, e.jsxs)("div", {
        className: j.V8,
        children: [
            (0, e.jsxs)("div", {
                className: l()(j.f, j.N5),
                children: [
                    (0, e.jsx)(L, { width: 18, height: 18, className: j.F8 }),
                    (0, e.jsx)(f.E, {
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        children: b.gb(o.premiumTier),
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: j.f,
                children: (0, e.jsx)(f.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    children: O.intl.format(O.t["dR/SVH"], { count: o.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function P(r) {
    let { badgeType: o, guildTraits: t } = r,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: l } = F(o, t.visibility);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)("div", {
                className: j.Rf,
                children: [
                    (0, e.jsx)(f.E, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != s ? (0, e.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != l ? (0, e.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: l }) : null,
                ],
            }),
            t.premium ? (0, e.jsx)(V, { guildTraits: t }) : null,
        ],
    });
}
function S(r) {
    let o,
        t,
        {
            guild: s,
            tooltipColor: l = I.ST.Colors.BRAND,
            tooltipPosition: a,
            className: c,
            flowerStarClassName: d,
            iconClassName: E,
            badgeStrokeColor: _,
            badgeColor: C,
            disableBoostClick: f,
            "aria-label": g,
            ...D
        } = r,
        x = D.size ?? 18,
        L = (0, n.bG)([T.default, N.Ay], () => {
            let r = T.default.getCurrentUser();
            return N.Ay.isMember(s?.id, r?.id);
        }),
        b = (0, n.bG)([R.A], () => R.A.theme),
        O = i.useId(),
        V = (0, M.Jp)(s),
        S = (0, w.K)(V),
        B = V.premium && L && !f;
    if (S === w._.NONE) return null;
    let {
        IconComponent: G,
        backgroundDarkColor: U,
        backgroundLightColor: Y,
        foregroundDarkColor: y,
        foregroundLightColor: H,
        premiumBackgroundColor: W,
        premiumForegroundColor: J,
        sizeAdjustment: K,
    } = v[S];
    if (null == G) return null;
    V.premium && ((o = J), (t = W));
    let Z = (0, u.M)(b) ? y : H,
        z = (0, u.M)(b) ? U : Y;
    (o = o ?? Z), (t = t ?? z);
    let q = Math.floor(0.75 * x) - (K ?? 0),
        { tooltipTitle: X, tooltipSubtitle: Q } = F(S, V.visibility),
        $ = g ?? (null != Q ? Q : X),
        rr = (0, e.jsx)(P, { badgeType: S, guildTraits: V }),
        ro = (0, e.jsx)(m.A, {
            className: c,
            flowerStarClassName: d,
            allowFullSizedIcon: !0,
            color: t ?? C,
            stroke: _,
            size: x,
            children: (0, e.jsx)(G, { size: "custom", width: q, height: q, className: E, color: o ?? "currentColor" }),
        });
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(I.ST, {
                color: l,
                position: a,
                "aria-label": !1,
                text: rr,
                tooltipContentClassName: j.Hj,
                children: (r) =>
                    B
                        ? (0, e.jsx)(A.D, {
                              ...r,
                              "aria-label": $,
                              "aria-describedby": O,
                              onClick: (o) => {
                                  r.onClick?.(),
                                      B &&
                                          (o.stopPropagation(),
                                          o.preventDefault(),
                                          (0, h.K4)({
                                              guildId: s.id,
                                              location: { section: k.JJy.GUILD_HEADER, object: k.ZSU.BOOST_GEM_ICON },
                                          }));
                              },
                              tabIndex: 0,
                              children: ro,
                          })
                        : (0, e.jsx)("div", {
                              ...r,
                              role: "img",
                              "aria-label": $,
                              "aria-describedby": O,
                              tabIndex: -1,
                              children: ro,
                          }),
            }),
            (0, e.jsx)(p.A, { id: O, children: rr }),
        ],
    });
}
