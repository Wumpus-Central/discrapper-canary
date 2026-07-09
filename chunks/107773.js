"use strict";
n.d(t, { A: () => G });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(661531),
    o = n(462887),
    d = n(306471),
    c = n(478016),
    u = n(565787),
    _ = n(332837),
    E = n(998445),
    A = n(834730),
    h = n(781696),
    I = n(939249),
    f = n(404374),
    p = n(63152),
    T = n(814925),
    m = n(363195),
    g = n(696451),
    S = n(287809),
    N = n(816166),
    C = n(953727);
function R(e) {
    let { width: t = 10, height: n = 10, color: r = "currentColor", ...a } = e;
    return (0, i.jsxs)("svg", {
        ...(0, C.A)(a),
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
var O = n(473145),
    L = n(426983),
    D = n(176128),
    y = n(375708);
function v(e, t) {
    let n =
        t === D.qo.PUBLIC
            ? y.intl.string(y.t.op2cJ6)
            : t === D.qo.APPLY_TO_JOIN
              ? y.intl.string(y.t.YwZfbt)
              : y.intl.string(y.t.TME4LJ);
    switch (e) {
        case L._.STAFF:
            return {
                tooltipTitle: y.intl.string(y.t.lMrv96),
                tooltipSubtitle: y.intl.string(y.t.lMrv96),
                tooltipDescription: y.intl.string(y.t.lMrv96),
            };
        case L._.VERIFIED:
            return {
                tooltipTitle: y.intl.string(y.t.K7iRig),
                tooltipSubtitle: y.intl.string(y.t.iCehw9),
                tooltipDescription: n,
            };
        case L._.PARTNERED:
            return {
                tooltipTitle: y.intl.string(y.t.K7iRig),
                tooltipSubtitle: y.intl.string(y.t.hfYfEE),
                tooltipDescription: n,
            };
        case L._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: y.intl.string(y.t.K7iRig),
                tooltipSubtitle: y.intl.string(y.t["TX+iFC"]),
                tooltipDescription: n,
            };
        case L._.COMMUNITY:
            return { tooltipTitle: y.intl.string(y.t.K7iRig), tooltipDescription: n };
        case L._.DISCOVERABLE:
            return { tooltipTitle: y.intl.string(y.t.K7iRig), tooltipDescription: y.intl.string(y.t.op2cJ6) };
        default:
            return { tooltipTitle: y.intl.string(y.t["iZRkC/"]) };
    }
}
var b = n(652215),
    M = n(628192);
let P = {
    [L._.STAFF]: {
        IconComponent: d.V,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED]: {
        IconComponent: c.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.PARTNERED]: {
        IconComponent: (0, u.k)(N.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css,
    },
    [L._.COMMUNITY]: {
        IconComponent: _.f,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: f.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [L._.DISCOVERABLE]: {
        IconComponent: E.L,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: f.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [L._.NONE]: {},
};
function U(e) {
    let { guildTraits: t } = e;
    return (0, i.jsxs)("div", {
        className: M.V8,
        children: [
            (0, i.jsxs)("div", {
                className: a()(M.f, M.N5),
                children: [
                    (0, i.jsx)(R, { width: 18, height: 18, className: M.F8 }),
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        children: O.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.f,
                children: (0, i.jsx)(A.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    children: y.intl.format(y.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function w(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: r, tooltipSubtitle: a, tooltipDescription: s } = v(t, n.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: M.Rf,
                children: [
                    (0, i.jsx)(A.E, { color: "interactive-text-active", variant: "text-xs/bold", children: r }),
                    null != a ? (0, i.jsx)(A.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
                    null != s ? (0, i.jsx)(A.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                ],
            }),
            n.premium ? (0, i.jsx)(U, { guildTraits: n }) : null,
        ],
    });
}
function G(e) {
    let t,
        n,
        {
            guild: r,
            tooltipColor: a = h.ST.Colors.BRAND,
            tooltipPosition: l,
            className: d,
            flowerStarClassName: c,
            iconClassName: u,
            badgeStrokeColor: _,
            badgeColor: E,
            disableBoostClick: A,
            "aria-label": f,
            ...N
        } = e,
        C = N.size ?? 18,
        R = (0, s.bG)([S.default, g.Ay], () => {
            let e = S.default.getCurrentUser();
            return g.Ay.isMember(r?.id, e?.id);
        }),
        O = (0, s.bG)([m.A], () => m.A.theme),
        y = (0, D.Jp)(r),
        U = (0, L.K)(y),
        G = y.premium && R && !A;
    function x(e) {
        G &&
            (e.stopPropagation(),
            e.preventDefault(),
            (0, p.K4)({ guildId: r.id, location: { section: b.JJy.GUILD_HEADER, object: b.ZSU.BOOST_GEM_ICON } }));
    }
    if (U === L._.NONE) return null;
    let {
        IconComponent: k,
        backgroundDarkColor: F,
        backgroundLightColor: V,
        foregroundDarkColor: B,
        foregroundLightColor: H,
        premiumBackgroundColor: j,
        premiumForegroundColor: W,
        sizeAdjustment: Y,
    } = P[U];
    if (null == k) return null;
    y.premium && ((t = W), (n = j));
    let K = (0, o.M)(O) ? B : H,
        $ = (0, o.M)(O) ? F : V;
    (t = t ?? K), (n = n ?? $);
    let z = Math.floor(0.75 * C) - (Y ?? 0),
        { tooltipTitle: q, tooltipSubtitle: Z } = v(U, y.visibility),
        X = f ?? (null != Z ? Z : q);
    return (0, i.jsx)(h.ST, {
        color: a,
        position: l,
        "aria-label": !1,
        text: (0, i.jsx)(w, { badgeType: U, guildTraits: y }),
        tooltipContentClassName: M.Hj,
        children: (e) =>
            (0, i.jsx)(I.D, {
                "aria-label": X,
                onClick: x,
                tabIndex: 0,
                children: (0, i.jsx)(T.A, {
                    ...e,
                    className: d,
                    flowerStarClassName: c,
                    allowFullSizedIcon: !0,
                    color: n ?? E,
                    stroke: _,
                    size: C,
                    children: (0, i.jsx)(k, {
                        size: "custom",
                        width: z,
                        height: z,
                        className: u,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
