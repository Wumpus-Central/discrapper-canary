t.d(o, { A: () => j });
var e = t(627968),
    s = t(64700),
    i = t(503698),
    l = t.n(i),
    n = t(17928),
    a = t(661531),
    u = t(462887),
    c = t(306471),
    d = t(478016),
    E = t(565787),
    _ = t(332837),
    C = t(998445),
    f = t(834730),
    A = t(781696),
    I = t(939249),
    p = t(404374),
    h = t(509536),
    g = t(814925),
    m = t(363195),
    N = t(696451),
    R = t(287809),
    T = t(816166),
    D = t(953727);
function w(r) {
    let { width: o = 10, height: t = 10, color: s = "currentColor", ...i } = r;
    return (0, e.jsxs)("svg", {
        ...(0, D.A)(i),
        width: o,
        height: t,
        viewBox: "0 0 17 22",
        fill: s,
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
    M = t(176128),
    O = t(375708),
    b = t(652215),
    F = t(40544);
let k = {
    [L._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.VERIFIED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [L._.PARTNERED]: {
        IconComponent: (0, E.k)(T.A),
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: a.A.unsafe_rawColors.BRAND_500.css,
    },
    [L._.COMMUNITY]: {
        IconComponent: _.f,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: p.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [L._.DISCOVERABLE]: {
        IconComponent: C.L,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: p.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
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
                className: l()(F.f, F.N5),
                children: [
                    (0, e.jsx)(w, { width: 18, height: 18, className: F.F8 }),
                    (0, e.jsx)(f.E, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: x.gb(o.premiumTier),
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: F.f,
                children: (0, e.jsx)(f.E, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: O.intl.format(O.t["dR/SVH"], { count: o.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function V(r) {
    let { badgeType: o, guildTraits: t } = r,
        {
            tooltipTitle: s,
            tooltipSubtitle: i,
            tooltipDescription: l,
        } = (function (r, o) {
            let t =
                o === M.qo.PUBLIC
                    ? O.intl.string(O.t.op2cJ6)
                    : o === M.qo.APPLY_TO_JOIN
                      ? O.intl.string(O.t.YwZfbt)
                      : O.intl.string(O.t.TME4LJ);
            switch (r) {
                case L._.STAFF:
                    return {
                        tooltipTitle: O.intl.string(O.t.lMrv96),
                        tooltipSubtitle: O.intl.string(O.t.lMrv96),
                        tooltipDescription: O.intl.string(O.t.lMrv96),
                    };
                case L._.VERIFIED:
                    return {
                        tooltipTitle: O.intl.string(O.t.K7iRig),
                        tooltipSubtitle: O.intl.string(O.t.iCehw9),
                        tooltipDescription: t,
                    };
                case L._.PARTNERED:
                    return {
                        tooltipTitle: O.intl.string(O.t.K7iRig),
                        tooltipSubtitle: O.intl.string(O.t.hfYfEE),
                        tooltipDescription: t,
                    };
                case L._.VERIFIED_AND_PARTNERED:
                    return {
                        tooltipTitle: O.intl.string(O.t.K7iRig),
                        tooltipSubtitle: O.intl.string(O.t["TX+iFC"]),
                        tooltipDescription: t,
                    };
                case L._.COMMUNITY:
                    return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: t };
                case L._.DISCOVERABLE:
                    return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: O.intl.string(O.t.op2cJ6) };
                default:
                    return { tooltipTitle: O.intl.string(O.t["iZRkC/"]) };
            }
        })(o, t.visibility);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)("div", {
                className: F.Rf,
                children: [
                    (0, e.jsx)(f.E, { color: "interactive-text-active", variant: "text-xs/bold", children: s }),
                    null != i ? (0, e.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: i }) : null,
                    null != l ? (0, e.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: l }) : null,
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
            tooltipColor: l = A.ST.Colors.BRAND,
            tooltipPosition: a,
            className: c,
            flowerStarClassName: d,
            iconClassName: E,
            badgeStrokeColor: _,
            badgeColor: C,
            disableBoostClick: f,
            "aria-label": p = !1,
            ...T
        } = r,
        D = T.size ?? 18,
        w = (0, n.bG)([R.default, N.Ay], () => {
            let r = R.default.getCurrentUser();
            return N.Ay.isMember(i?.id, r?.id);
        }),
        x = (0, n.bG)([m.A], () => m.A.theme),
        O = (0, M.Jp)(i),
        v = (0, L.K)(O),
        j = s.useMemo(() => O.premium && w && !f, [f, O.premium, w]),
        P = s.useCallback(
            (r) => {
                j &&
                    (r.stopPropagation(),
                    r.preventDefault(),
                    (0, h.K4)({
                        guildId: i.id,
                        location: { section: b.JJy.GUILD_HEADER, object: b.ZSU.BOOST_GEM_ICON },
                    }));
            },
            [j, i.id],
        );
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
    O.premium && ((o = H), (t = y));
    let J = (0, u.M)(x) ? U : Y,
        K = (0, u.M)(x) ? B : G;
    (o = o ?? J), (t = t ?? K);
    let Z = Math.floor(0.75 * D) - (W ?? 0);
    return (0, e.jsx)(A.ST, {
        color: l,
        position: a,
        "aria-label": p,
        text: (0, e.jsx)(V, { badgeType: v, guildTraits: O }),
        tooltipContentClassName: F.Hj,
        children: (r) =>
            (0, e.jsx)(I.D, {
                onClick: P,
                tabIndex: j ? 0 : -1,
                children: (0, e.jsx)(g.A, {
                    ...r,
                    className: c,
                    flowerStarClassName: d,
                    allowFullSizedIcon: !0,
                    color: t ?? C,
                    stroke: _,
                    size: D,
                    children: (0, e.jsx)(S, {
                        size: "custom",
                        width: Z,
                        height: Z,
                        className: E,
                        color: o ?? "currentColor",
                    }),
                }),
            }),
    });
}
