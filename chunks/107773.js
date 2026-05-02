"use strict";
n.d(t, { A: () => U });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(661531),
    u = n(462887),
    c = n(306471),
    d = n(478016),
    _ = n(565787),
    f = n(332837),
    h = n(998445),
    p = n(834730),
    E = n(781696),
    m = n(939249),
    g = n(404374),
    A = n(509536),
    I = n(814925),
    T = n(363195),
    S = n(696451),
    N = n(287809),
    y = n(816166),
    C = n(953727);
function v(e) {
    let { width: t = 10, height: n = 10, color: r = "currentColor", ...s } = e;
    return (0, i.jsxs)("svg", {
        ...(0, C.A)(s),
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
    R = n(426983),
    b = n(176128),
    D = n(375708),
    L = n(652215),
    w = n(40544);
let M = {
    [R._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.VERIFIED]: {
        IconComponent: d.U,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [R._.PARTNERED]: {
        IconComponent: (0, _.k)(y.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css,
    },
    [R._.COMMUNITY]: {
        IconComponent: f.f,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [R._.DISCOVERABLE]: {
        IconComponent: h.L,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: g.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [R._.NONE]: {},
};
function P(e) {
    let { guildTraits: t } = e;
    return (0, i.jsxs)("div", {
        className: w.V8,
        children: [
            (0, i.jsxs)("div", {
                className: a()(w.f, w.N5),
                children: [
                    (0, i.jsx)(v, { width: 18, height: 18, className: w.F8 }),
                    (0, i.jsx)(p.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: O.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: w.f,
                children: (0, i.jsx)(p.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: D.intl.format(D.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function x(e) {
    let { badgeType: t, guildTraits: n } = e,
        {
            tooltipTitle: r,
            tooltipSubtitle: s,
            tooltipDescription: a,
        } = (function (e, t) {
            let n =
                t === b.qo.PUBLIC
                    ? D.intl.string(D.t.op2cJ6)
                    : t === b.qo.APPLY_TO_JOIN
                      ? D.intl.string(D.t.YwZfbt)
                      : D.intl.string(D.t.TME4LJ);
            switch (e) {
                case R._.STAFF:
                    return {
                        tooltipTitle: D.intl.string(D.t.lMrv96),
                        tooltipSubtitle: D.intl.string(D.t.lMrv96),
                        tooltipDescription: D.intl.string(D.t.lMrv96),
                    };
                case R._.VERIFIED:
                    return {
                        tooltipTitle: D.intl.string(D.t.K7iRig),
                        tooltipSubtitle: D.intl.string(D.t.iCehw9),
                        tooltipDescription: n,
                    };
                case R._.PARTNERED:
                    return {
                        tooltipTitle: D.intl.string(D.t.K7iRig),
                        tooltipSubtitle: D.intl.string(D.t.hfYfEE),
                        tooltipDescription: n,
                    };
                case R._.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: D.intl.string(D.t.K7iRig),
                        tooltipSubtitle: D.intl.string(D.t["TX+iFC"]),
                        tooltipDescription: n,
                    };
                case R._.COMMUNITY:
                    return { tooltipTitle: D.intl.string(D.t.K7iRig), tooltipDescription: n };
                case R._.DISCOVERABLE:
                    return { tooltipTitle: D.intl.string(D.t.K7iRig), tooltipDescription: D.intl.string(D.t.op2cJ6) };
                default:
                    return { tooltipTitle: D.intl.string(D.t["iZRkC/"]) };
            }
        })(t, n.visibility);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: w.Rf,
                children: [
                    (0, i.jsx)(p.E, { color: "interactive-text-active", variant: "text-xs/bold", children: r }),
                    null != s ? (0, i.jsx)(p.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != a ? (0, i.jsx)(p.E, { color: "text-muted", variant: "text-xs/medium", children: a }) : null,
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
            guild: s,
            tooltipColor: a = E.ST.Colors.BRAND,
            tooltipPosition: l,
            className: c,
            flowerStarClassName: d,
            iconClassName: _,
            badgeStrokeColor: f,
            badgeColor: h,
            disableBoostClick: p,
            "aria-label": g = !1,
            ...y
        } = e,
        C = y.size ?? 18,
        v = (0, o.bG)([N.default, S.Ay], () => {
            let e = N.default.getCurrentUser();
            return S.Ay.isMember(s?.id, e?.id);
        }),
        O = (0, o.bG)([T.A], () => T.A.theme),
        D = (0, b.Jp)(s),
        P = (0, R.K)(D),
        U = r.useMemo(() => D.premium && v && !p, [p, D.premium, v]),
        k = r.useCallback(
            (e) => {
                U &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, A.K4)({
                        guildId: s.id,
                        location: { section: L.JJy.GUILD_HEADER, object: L.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [U, s.id],
        );
    if (P === R._.NONE) return null;
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
    D.premium && ((t = Y), (n = j));
    let K = (0, u.M)(O) ? B : H,
        z = (0, u.M)(O) ? F : V;
    (t = t ?? K), (n = n ?? z);
    let $ = Math.floor(0.75 * C) - (W ?? 0);
    return (0, i.jsx)(E.ST, {
        color: a,
        position: l,
        "aria-label": g,
        text: (0, i.jsx)(x, { badgeType: P, guildTraits: D }),
        tooltipContentClassName: w.Hj,
        children: (e) =>
            (0, i.jsx)(m.D, {
                onClick: k,
                tabIndex: U ? 0 : -1,
                children: (0, i.jsx)(I.A, {
                    ...e,
                    className: c,
                    flowerStarClassName: d,
                    allowFullSizedIcon: !0,
                    color: n ?? h,
                    stroke: f,
                    size: C,
                    children: (0, i.jsx)(G, {
                        size: "custom",
                        width: $,
                        height: $,
                        className: _,
                        color: t ?? "currentColor",
                    }),
                }),
            }),
    });
}
