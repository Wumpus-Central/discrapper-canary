t.d(o, { A: () => j });
var e = t(477900);
t(582128);
var i = t(503698),
    s = t.n(i),
    l = t(17928),
    n = t(661531),
    a = t(462887),
    u = t(306471),
    c = t(478016),
    d = t(565787),
    E = t(332837),
    _ = t(998445),
    C = t(834730),
    f = t(900002),
    I = t(939249),
    A = t(404374),
    p = t(906199),
    g = t(814925),
    h = t(363195),
    m = t(696451),
    R = t(287809),
    N = t(816166),
    T = t(953727);
function D(r) {
    let { width: o = 10, height: t = 10, color: i = "currentColor", ...s } = r;
    return (0, e.jsxs)("svg", {
        ...(0, T.A)(s),
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
var x = t(473145),
    L = t(426983),
    w = t(176128),
    b = t(375708);
function M(r, o) {
    let t =
        o === w.qo.PUBLIC
            ? b.intl.string(b.t.op2cJ6)
            : o === w.qo.APPLY_TO_JOIN
              ? b.intl.string(b.t.YwZfbt)
              : b.intl.string(b.t.TME4LJ);
    switch (r) {
        case L._.STAFF:
            return {
                tooltipTitle: b.intl.string(b.t.lMrv96),
                tooltipSubtitle: b.intl.string(b.t.lMrv96),
                tooltipDescription: b.intl.string(b.t.lMrv96),
            };
        case L._.VERIFIED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t.iCehw9),
                tooltipDescription: t,
            };
        case L._.PARTNERED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t.hfYfEE),
                tooltipDescription: t,
            };
        case L._.VERIFIED_AND_PARTNERED:
            return {
                tooltipTitle: b.intl.string(b.t.K7iRig),
                tooltipSubtitle: b.intl.string(b.t["TX+iFC"]),
                tooltipDescription: t,
            };
        case L._.COMMUNITY:
            return { tooltipTitle: b.intl.string(b.t.K7iRig), tooltipDescription: t };
        case L._.DISCOVERABLE:
            return { tooltipTitle: b.intl.string(b.t.K7iRig), tooltipDescription: b.intl.string(b.t.op2cJ6) };
        default:
            return { tooltipTitle: b.intl.string(b.t["iZRkC/"]) };
    }
}
var O = t(652215),
    F = t(663384);
let k = {
    [L._.STAFF]: {
        IconComponent: u.V,
        foregroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: n.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED_AND_PARTNERED]: {
        IconComponent: c.U,
        foregroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: n.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED]: {
        IconComponent: c.U,
        foregroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: n.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.PARTNERED]: {
        IconComponent: (0, d.k)(N.A),
        foregroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: n.A.unsafe_rawColors.BRAND_500.css,
    },
    [L._.COMMUNITY]: {
        IconComponent: E.HomeIcon,
        foregroundDarkColor: n.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: n.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: A.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: n.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [L._.DISCOVERABLE]: {
        IconComponent: _.GlobeEarthIcon,
        foregroundDarkColor: n.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: n.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: n.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: A.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: n.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [L._.NONE]: {},
};
function v(r) {
    let { guildTraits: o } = r;
    return (0, e.jsxs)("div", {
        className: F.V8,
        children: [
            (0, e.jsxs)("div", {
                className: s()(F.f, F.N5),
                children: [
                    (0, e.jsx)(D, { width: 18, height: 18, className: F.F8 }),
                    (0, e.jsx)(C.E, {
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        children: x.gb(o.premiumTier),
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: F.f,
                children: (0, e.jsx)(C.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    children: b.intl.format(b.t["dR/SVH"], { count: o.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function V(r) {
    let { badgeType: o, guildTraits: t } = r,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: l } = M(o, t.visibility);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)("div", {
                className: F.Rf,
                children: [
                    (0, e.jsx)(C.E, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != s ? (0, e.jsx)(C.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != l ? (0, e.jsx)(C.E, { color: "text-muted", variant: "text-xs/medium", children: l }) : null,
                ],
            }),
            t.premium ? (0, e.jsx)(v, { guildTraits: t }) : null,
        ],
    });
}
function j(r) {
    let o,
        t,
        {
            guild: i,
            tooltipColor: s = f.ST.Colors.BRAND,
            tooltipPosition: n,
            className: u,
            flowerStarClassName: c,
            iconClassName: d,
            badgeStrokeColor: E,
            badgeColor: _,
            disableBoostClick: C,
            "aria-label": A,
            ...N
        } = r,
        T = N.size ?? 18,
        D = (0, l.bG)([R.default, m.Ay], () => {
            let r = R.default.getCurrentUser();
            return m.Ay.isMember(i?.id, r?.id);
        }),
        x = (0, l.bG)([h.A], () => h.A.theme),
        b = (0, w.Jp)(i),
        v = (0, L.K)(b),
        j = b.premium && D && !C;
    function P(r) {
        j &&
            (r.stopPropagation(),
            r.preventDefault(),
            (0, p.K4)({ guildId: i.id, location: { section: O.JJy.GUILD_HEADER, object: O.ZSU.BOOST_GEM_ICON } }));
    }
    if (v === L._.NONE) return null;
    let {
        IconComponent: S,
        backgroundDarkColor: B,
        backgroundLightColor: G,
        foregroundDarkColor: U,
        foregroundLightColor: Y,
        premiumBackgroundColor: y,
        premiumForegroundColor: H,
        sizeAdjustment: W,
    } = k[v];
    if (null == S) return null;
    b.premium && ((o = H), (t = y));
    let J = (0, a.M)(x) ? U : Y,
        K = (0, a.M)(x) ? B : G;
    (o = o ?? J), (t = t ?? K);
    let Z = Math.floor(0.75 * T) - (W ?? 0),
        { tooltipTitle: z, tooltipSubtitle: q } = M(v, b.visibility),
        X = A ?? (null != q ? q : z);
    return (0, e.jsx)(f.ST, {
        color: s,
        position: n,
        "aria-label": !1,
        text: (0, e.jsx)(V, { badgeType: v, guildTraits: b }),
        tooltipContentClassName: F.Hj,
        children: (r) =>
            (0, e.jsx)(I.D, {
                "aria-label": X,
                onClick: P,
                tabIndex: 0,
                children: (0, e.jsx)(g.A, {
                    ...r,
                    className: u,
                    flowerStarClassName: c,
                    allowFullSizedIcon: !0,
                    color: t ?? _,
                    stroke: E,
                    size: T,
                    children: (0, e.jsx)(S, {
                        size: "custom",
                        width: Z,
                        height: Z,
                        className: d,
                        color: o ?? "currentColor",
                    }),
                }),
            }),
    });
}
