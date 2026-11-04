o.d(t, { A: () => k });
var e = o(477900),
    i = o(582128),
    s = o(503698),
    l = o.n(s),
    n = o(855986),
    a = o(646514),
    u = o(462887),
    c = o(306471),
    d = o(478016),
    E = o(565787),
    _ = o(332837),
    f = o(834730),
    C = o(664343),
    h = o(682697),
    A = o(939249),
    I = o(140735),
    p = o(404374),
    N = o(233824),
    g = o(152578),
    m = o(413599),
    R = o(696451),
    T = o(287809),
    D = o(816166),
    x = o(953727);
function L(r) {
    let { width: t = 10, height: o = 10, color: i = "currentColor", ...s } = r;
    return (0, e.jsxs)("svg", {
        ...(0, x.A)(s),
        width: t,
        height: o,
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
var b = o(473145),
    w = o(426983),
    v = o(176128),
    O = o(792996);
function M(r, t) {
    let o =
            t === v.qo.PUBLIC
                ? O.intl.string(O.t.op2cJ6)
                : t === v.qo.APPLY_TO_JOIN
                  ? O.intl.string(O.t.YwZfbt)
                  : O.intl.string(O.t.TME4LJ),
        e = t === v.qo.PUBLIC ? O.intl.string(O.t.SiZQ0N) : O.intl.string(O.t.K7iRig);
    switch (r) {
        case w._.STAFF:
            return {
                tooltipTitle: O.intl.string(O.t.lMrv96),
                tooltipSubtitle: O.intl.string(O.t.lMrv96),
                tooltipDescription: O.intl.string(O.t.lMrv96),
            };
        case w._.VERIFIED:
            return { tooltipTitle: e, tooltipSubtitle: O.intl.string(O.t.iCehw9), tooltipDescription: o };
        case w._.PARTNERED:
            return { tooltipTitle: e, tooltipSubtitle: O.intl.string(O.t.hfYfEE), tooltipDescription: o };
        case w._.VERIFIED_AND_PARTNERED:
            return { tooltipTitle: e, tooltipSubtitle: O.intl.string(O.t["TX+iFC"]), tooltipDescription: o };
        case w._.COMMUNITY:
            return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: o };
        case w._.DISCOVERABLE:
            return { tooltipTitle: O.intl.string(O.t.SiZQ0N), tooltipDescription: O.intl.string(O.t.op2cJ6) };
        default:
            return { tooltipTitle: O.intl.string(O.t["iZRkC/"]) };
    }
}
var j = o(652215),
    V = o(818357);
let F = {
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
        premiumBackgroundColor: p.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [w._.DISCOVERABLE]: {},
    [w._.NONE]: {},
};
function S(r) {
    let { guildTraits: t } = r;
    return (0, e.jsxs)("div", {
        className: V.V8,
        children: [
            (0, e.jsxs)("div", {
                className: l()(V.f, V.N5),
                children: [
                    (0, e.jsx)(L, { width: 18, height: 18, className: V.F8 }),
                    (0, e.jsx)(f.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        children: b.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, e.jsx)("div", {
                className: V.f,
                children: (0, e.jsx)(f.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    children: O.intl.format(O.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function B(r) {
    let { badgeType: t, guildTraits: o } = r,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: l } = M(t, o.visibility);
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsxs)("div", {
                className: V.Rf,
                children: [
                    (0, e.jsx)(f.E, { color: "interactive-text-active", variant: "body-xs/semibold", children: i }),
                    null != s ? (0, e.jsx)(f.E, { color: "text-muted", variant: "body-xs/medium", children: s }) : null,
                    null != l ? (0, e.jsx)(f.E, { color: "text-muted", variant: "body-xs/medium", children: l }) : null,
                ],
            }),
            o.premium ? (0, e.jsx)(S, { guildTraits: o }) : null,
        ],
    });
}
function k(r) {
    let t,
        o,
        {
            guild: s,
            tooltipColor: c = C.ST.Colors.BRAND,
            tooltipPosition: d,
            className: E,
            flowerStarClassName: _,
            iconClassName: f,
            badgeStrokeColor: p,
            badgeColor: D,
            disableBoostClick: x,
            "aria-label": L,
            ...b
        } = r,
        O = b.size ?? 18,
        S = (0, n.bG)([T.default, R.Ay], () => {
            let r = T.default.getCurrentUser();
            return R.Ay.isMember(s?.id, r?.id);
        }),
        k = (0, n.bG)([m.A], () => m.A.theme),
        P = i.useId(),
        y = (0, v.Jp)(s),
        G = (0, w.K)(y),
        U = y.premium && S && !x;
    if (G === w._.NONE) return null;
    let Y = G === w._.DISCOVERABLE,
        {
            IconComponent: H,
            backgroundDarkColor: J,
            backgroundLightColor: Z,
            foregroundDarkColor: W,
            foregroundLightColor: K,
            premiumBackgroundColor: z,
            premiumForegroundColor: q,
            sizeAdjustment: Q,
        } = F[G];
    if (null == H && !Y) return null;
    y.premium && ((t = q), (o = z));
    let X = (0, u.M)(k) ? W : K,
        $ = (0, u.M)(k) ? J : Z;
    ((t = t ?? X), (o = o ?? $));
    let rr = Math.floor(0.75 * O) - (Q ?? 0),
        { tooltipTitle: rt, tooltipSubtitle: ro } = M(G, y.visibility),
        re = L ?? (null != ro ? ro : rt),
        ri = (0, e.jsx)(B, { badgeType: G, guildTraits: y }),
        rs =
            null == H
                ? (0, e.jsx)(h.f, {
                      size: "custom",
                      width: O,
                      height: O,
                      className: l()(E, f),
                      color: a.A.colors.BADGE_INVERTED_BACKGROUND,
                      secondaryColor: a.A.colors.BADGE_INVERTED_TEXT,
                  })
                : (0, e.jsx)(g.A, {
                      className: E,
                      flowerStarClassName: _,
                      allowFullSizedIcon: !0,
                      color: o ?? D,
                      stroke: p,
                      size: O,
                      children: (0, e.jsx)(H, {
                          size: "custom",
                          width: rr,
                          height: rr,
                          className: f,
                          color: t ?? "currentColor",
                      }),
                  });
    return (0, e.jsxs)(e.Fragment, {
        children: [
            (0, e.jsx)(C.ST, {
                color: c,
                position: d,
                "aria-label": !1,
                text: ri,
                tooltipContentClassName: V.Hj,
                children: (r) =>
                    U
                        ? (0, e.jsx)(A.D, {
                              ...r,
                              "aria-label": re,
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
                        : (0, e.jsx)("div", {
                              ...r,
                              role: "img",
                              "aria-label": re,
                              "aria-describedby": P,
                              tabIndex: -1,
                              children: rs,
                          }),
            }),
            (0, e.jsx)(I.A, { id: P, children: ri }),
        ],
    });
}
