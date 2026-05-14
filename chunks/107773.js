"use strict";
n.d(t, { A: () => U });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(661531),
    l = n(462887),
    u = n(306471),
    c = n(478016),
    d = n(565787),
    _ = n(332837),
    f = n(998445),
    h = n(834730),
    p = n(781696),
    E = n(939249),
    m = n(404374),
    g = n(509536),
    A = n(814925),
    I = n(363195),
    T = n(696451),
    S = n(287809),
    N = n(816166),
    y = n(953727);
function C(e) {
    let { width: t = 10, height: n = 10, color: r = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, y.A)(s),
        width: t,
        height: n,
        viewBox: "0 0 17 22",
        fill: r,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, i.jsxs)("g", {
                filter: "url(#filter0_d_1296_1706)",
                children: [
                    (0, i.jsx)("path", {
                        opacity: "0.55",
                        d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                        fill: "white",
                    }),
                    (0, i.jsx)("path", {
                        opacity: "0.8",
                        d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                        fill: "white",
                    }),
                    (0, i.jsx)("path", {
                        d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, i.jsx)("defs", {
                children: (0, i.jsxs)("filter", {
                    id: "filter0_d_1296_1706",
                    x: "-3.5",
                    y: "-1",
                    width: "24",
                    height: "24",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, i.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, i.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, i.jsx)("feOffset", { dy: "1" }),
                        (0, i.jsx)("feGaussianBlur", { stdDeviation: "2" }),
                        (0, i.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
                        }),
                        (0, i.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_1296_1706",
                        }),
                        (0, i.jsx)("feBlend", {
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
var v = n(473145),
    O = n(426983),
    R = n(176128),
    b = n(375708);
function D(e, t) {
    let n =
        t === R.qo.PUBLIC
            ? b.intl.string(b.t.op2cJ6)
            : t === R.qo.APPLY_TO_JOIN
              ? b.intl.string(b.t.YwZfbt)
              : b.intl.string(b.t.TME4LJ);
    switch (e) {
        case O._.STAFF:
            return {
                tooltipTitle: b.intl.string(b.t.lMrv96),
                tooltipSubtitle: b.intl.string(b.t.lMrv96),
                tooltipDescription: b.intl.string(b.t.lMrv96),
            };
        case O._.VERIFIED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t.iCehw9),
                tooltipDescription: n,
            };
        case O._.PARTNERED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t.hfYfEE),
                tooltipDescription: n,
            };
        case O._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t["TX+iFC"]),
                tooltipDescription: n,
            };
        case O._.COMMUNITY:
            return { tooltipTitle: b.intl.string(b.t.K7iRig), tooltipDescription: n };
        case O._.DISCOVERABLE:
            return { tooltipTitle: b.intl.string(b.t.K7iRig), tooltipDescription: b.intl.string(b.t.op2cJ6) };
        default:
            return { tooltipTitle: b.intl.string(b.t["iZRkC/"]) };
    }
}
var L = n(652215),
    w = n(40544);
let M = {
    [O._.STAFF]: {
        IconComponent: u.V,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.U,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.VERIFIED]: {
        IconComponent: c.U,
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: o.A.unsafe_rawColors.GREEN_360.css,
    },
    [O._.PARTNERED]: {
        IconComponent: (0, d.k)(N.A),
        foregroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: o.A.unsafe_rawColors.BRAND_500.css,
    },
    [O._.COMMUNITY]: {
        IconComponent: _.f,
        foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: m.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [O._.DISCOVERABLE]: {
        IconComponent: f.L,
        foregroundDarkColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: o.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: o.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: m.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: o.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [O._.NONE]: {},
};
function P(e) {
    let { guildTraits: t } = e;
    return (0, i.jsxs)("div", {
        className: w.V8,
        children: [
            (0, i.jsxs)("div", {
                className: s()(w.f, w.N5),
                children: [
                    (0, i.jsx)(C, { width: 18, height: 18, className: w.F8 }),
                    (0, i.jsx)(h.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: v.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: w.f,
                children: (0, i.jsx)(h.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: b.intl.format(b.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function x(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: r, tooltipSubtitle: s, tooltipDescription: a } = D(t, n.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: w.Rf,
                children: [
                    (0, i.jsx)(h.E, { color: "interactive-text-active", variant: "text-xs/bold", children: r }),
                    null != s ? (0, i.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != a ? (0, i.jsx)(h.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
                ],
            }),
            n.premium ? (0, i.jsx)(P, { guildTraits: n }) : null,
        ],
    });
}
function U(e) {
    let t,
        n,
        {
            guild: r,
            tooltipColor: s = p.ST.Colors.BRAND,
            tooltipPosition: o,
            className: u,
            flowerStarClassName: c,
            iconClassName: d,
            badgeStrokeColor: _,
            badgeColor: f,
            disableBoostClick: h,
            "aria-label": m,
            ...N
        } = e,
        y = N.size ?? 18,
        C = (0, a.bG)([S.default, T.Ay], () => {
            let e = S.default.getCurrentUser();
            return T.Ay.isMember(r?.id, e?.id);
        }),
        v = (0, a.bG)([I.A], () => I.A.theme),
        b = (0, R.Jp)(r),
        P = (0, O.K)(b),
        U = b.premium && C && !h,
        k = (e) => {
            U &&
                (e.stopPropagation(),
                e.preventDefault(),
                (0, g.K4)({ guildId: r.id, location: { section: L.JJy.GUILD_HEADER, object: L.ZSU.BOOST_GEM_ICON } }));
        };
    if (P === O._.NONE) return null;
    let {
        IconComponent: G,
        backgroundDarkColor: F,
        backgroundLightColor: V,
        foregroundDarkColor: B,
        foregroundLightColor: H,
        premiumBackgroundColor: j,
        premiumForegroundColor: Y,
        sizeAdjustment: W,
    } = M[P];
    if (null == G) return null;
    b.premium && ((t = Y), (n = j));
    let K = (0, l.M)(v) ? B : H,
        z = (0, l.M)(v) ? F : V;
    (t = t ?? K), (n = n ?? z);
    let $ = Math.floor(0.75 * y) - (W ?? 0),
        { tooltipTitle: q, tooltipSubtitle: Z } = D(P, b.visibility),
        X = m ?? (null != Z ? Z : q);
    return (0, i.jsx)(p.ST, {
        color: s,
        position: o,
        "aria-label": !1,
        text: (0, i.jsx)(x, { badgeType: P, guildTraits: b }),
        tooltipContentClassName: w.Hj,
        children: (e) =>
            (0, i.jsx)(E.D, {
                "aria-label": X,
                onClick: k,
                tabIndex: 0,
                children: (0, i.jsx)(A.A, {
                    ...e,
                    className: u,
                    flowerStarClassName: c,
                    allowFullSizedIcon: !0,
                    color: n ?? f,
                    stroke: _,
                    size: y,
                    children: (0, i.jsx)(G, {
                        size: "custom",
                        width: $,
                        height: $,
                        className: d,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
