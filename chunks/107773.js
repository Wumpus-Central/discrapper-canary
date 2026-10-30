e.d(t, { A: () => k });
var o = e(477900),
    i = e(582128),
    s = e(503698),
    l = e.n(s),
    n = e(17928),
    a = e(661531),
    u = e(462887),
    c = e(306471),
    d = e(478016),
    E = e(565787),
    _ = e(332837),
    f = e(834730),
    C = e(900002),
    h = e(682697),
    A = e(939249),
    I = e(140735),
    p = e(404374),
    N = e(464120),
    g = e(814925),
    m = e(363195),
    R = e(696451),
    x = e(287809),
    T = e(816166),
    D = e(953727);
function L(r) {
    let { width: t = 10, height: e = 10, color: i = "currentColor", ...s } = r;
    return (0, o.jsxs)("svg", {
        ...(0, D.A)(s),
        width: t,
        height: e,
        viewBox: "0 0 17 22",
        fill: i,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, o.jsxs)("g", {
                filter: "url(#filter0_d_1296_1706)",
                children: [
                    (0, o.jsx)("path", {
                        opacity: "0.55",
                        d: "M8.49999 3.7998L4.85999 7.4398V12.5598L8.49999 16.1998L12.14 12.5598V7.4398L8.49999 3.7998ZM10.32 11.7998L8.49999 13.6265L6.67999 11.8065V8.19314L8.49999 6.37314L10.32 8.19314V11.7998Z",
                        fill: "white",
                    }),
                    (0, o.jsx)("path", {
                        opacity: "0.8",
                        d: "M6.67999 8.19354V11.8069L8.49999 13.6269L10.32 11.8069V8.19354L8.49999 6.37354L6.67999 8.19354Z",
                        fill: "white",
                    }),
                    (0, o.jsx)("path", {
                        d: "M8.5 3.7998V6.37314L10.32 8.19314L12.14 7.4398L8.5 3.7998Z",
                        fill: "white",
                    }),
                ],
            }),
            (0, o.jsx)("defs", {
                children: (0, o.jsxs)("filter", {
                    id: "filter0_d_1296_1706",
                    x: "-3.5",
                    y: "-1",
                    width: "24",
                    height: "24",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, o.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                        (0, o.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, o.jsx)("feOffset", { dy: "1" }),
                        (0, o.jsx)("feGaussianBlur", { stdDeviation: "2" }),
                        (0, o.jsx)("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
                        }),
                        (0, o.jsx)("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_1296_1706",
                        }),
                        (0, o.jsx)("feBlend", {
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
var w = e(473145),
    b = e(426983),
    v = e(176128),
    O = e(105292);
function M(r, t) {
    let e =
            t === v.qo.PUBLIC
                ? O.intl.string(O.t.op2cJ6)
                : t === v.qo.APPLY_TO_JOIN
                  ? O.intl.string(O.t.YwZfbt)
                  : O.intl.string(O.t.TME4LJ),
        o = t === v.qo.PUBLIC ? O.intl.string(O.t.SiZQ0N) : O.intl.string(O.t.K7iRig);
    switch (r) {
        case b._.STAFF:
            return {
                tooltipTitle: O.intl.string(O.t.lMrv96),
                tooltipSubtitle: O.intl.string(O.t.lMrv96),
                tooltipDescription: O.intl.string(O.t.lMrv96),
            };
        case b._.VERIFIED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t.iCehw9), tooltipDescription: e };
        case b._.PARTNERED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t.hfYfEE), tooltipDescription: e };
        case b._.VERIFIED_AND_PARTNERED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t["TX+iFC"]), tooltipDescription: e };
        case b._.COMMUNITY:
            return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: e };
        case b._.DISCOVERABLE:
            return { tooltipTitle: O.intl.string(O.t.SiZQ0N), tooltipDescription: O.intl.string(O.t.op2cJ6) };
        default:
            return { tooltipTitle: O.intl.string(O.t["iZRkC/"]) };
    }
}
var j = e(652215),
    V = e(818357);
let F = {
    [b._.STAFF]: {
        IconComponent: c.V,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [b._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [b._.VERIFIED]: {
        IconComponent: d.U,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [b._.PARTNERED]: {
        IconComponent: (0, E.k)(T.A),
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: a.A.unsafe_rawColors.BRAND_500.css,
    },
    [b._.COMMUNITY]: {
        IconComponent: _.HomeIcon,
        foregroundDarkColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: a.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: p.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [b._.DISCOVERABLE]: {},
    [b._.NONE]: {},
};
function S(r) {
    let { guildTraits: t } = r;
    return (0, o.jsxs)("div", {
        className: V.V8,
        children: [
            (0, o.jsxs)("div", {
                className: l()(V.f, V.N5),
                children: [
                    (0, o.jsx)(L, { width: 18, height: 18, className: V.F8 }),
                    (0, o.jsx)(f.E, {
                        variant: "text-xs/semibold",
                        color: "text-overlay-light",
                        children: w.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: V.f,
                children: (0, o.jsx)(f.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    children: O.intl.format(O.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function B(r) {
    let { badgeType: t, guildTraits: e } = r,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: l } = M(t, e.visibility);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: V.Rf,
                children: [
                    (0, o.jsx)(f.E, { color: "interactive-text-active", variant: "text-xs/bold", children: i }),
                    null != s ? (0, o.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: s }) : null,
                    null != l ? (0, o.jsx)(f.E, { color: "text-muted", variant: "text-xs/medium", children: l }) : null,
                ],
            }),
            e.premium ? (0, o.jsx)(S, { guildTraits: e }) : null,
        ],
    });
}
function k(r) {
    let t,
        e,
        {
            guild: s,
            tooltipColor: c = C.ST.Colors.BRAND,
            tooltipPosition: d,
            className: E,
            flowerStarClassName: _,
            iconClassName: f,
            badgeStrokeColor: p,
            badgeColor: T,
            disableBoostClick: D,
            "aria-label": L,
            ...w
        } = r,
        O = w.size ?? 18,
        S = (0, n.bG)([x.default, R.Ay], () => {
            let r = x.default.getCurrentUser();
            return R.Ay.isMember(s?.id, r?.id);
        }),
        k = (0, n.bG)([m.A], () => m.A.theme),
        P = i.useId(),
        G = (0, v.Jp)(s),
        y = (0, b.K)(G),
        U = G.premium && S && !D;
    if (y === b._.NONE) return null;
    let Y = y === b._.DISCOVERABLE,
        {
            IconComponent: H,
            backgroundDarkColor: J,
            backgroundLightColor: Z,
            foregroundDarkColor: W,
            foregroundLightColor: K,
            premiumBackgroundColor: z,
            premiumForegroundColor: q,
            sizeAdjustment: Q,
        } = F[y];
    if (null == H && !Y) return null;
    G.premium && ((t = q), (e = z));
    let X = (0, u.M)(k) ? W : K,
        $ = (0, u.M)(k) ? J : Z;
    ((t = t ?? X), (e = e ?? $));
    let rr = Math.floor(0.75 * O) - (Q ?? 0),
        { tooltipTitle: rt, tooltipSubtitle: re } = M(y, G.visibility),
        ro = L ?? (null != re ? re : rt),
        ri = (0, o.jsx)(B, { badgeType: y, guildTraits: G }),
        rs =
            null == H
                ? (0, o.jsx)(h.f, {
                      size: "custom",
                      width: O,
                      height: O,
                      className: l()(E, f),
                      color: a.A.colors.BADGE_INVERTED_BACKGROUND,
                      secondaryColor: a.A.colors.BADGE_INVERTED_TEXT,
                  })
                : (0, o.jsx)(g.A, {
                      className: E,
                      flowerStarClassName: _,
                      allowFullSizedIcon: !0,
                      color: e ?? T,
                      stroke: p,
                      size: O,
                      children: (0, o.jsx)(H, {
                          size: "custom",
                          width: rr,
                          height: rr,
                          className: f,
                          color: t ?? "currentColor",
                      }),
                  });
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(C.ST, {
                color: c,
                position: d,
                "aria-label": !1,
                text: ri,
                tooltipContentClassName: V.Hj,
                children: (r) =>
                    U
                        ? (0, o.jsx)(A.D, {
                              ...r,
                              "aria-label": ro,
                              "aria-describedby": P,
                              onClick: (t) => {
                                  (r.onClick?.(),
                                      U &&
                                          (t.stopPropagation(),
                                          t.preventDefault(),
                                          (0, N.K4)({
                                              guildId: s.id,
                                              location: { section: j.JJy.GUILD_HEADER, object: j.ZSU.BOOST_GEM_ICON },
                                          })));
                              },
                              tabIndex: 0,
                              children: rs,
                          })
                        : (0, o.jsx)("div", {
                              ...r,
                              role: "img",
                              "aria-label": ro,
                              "aria-describedby": P,
                              tabIndex: -1,
                              children: rs,
                          }),
            }),
            (0, o.jsx)(I.A, { id: P, children: ri }),
        ],
    });
}
