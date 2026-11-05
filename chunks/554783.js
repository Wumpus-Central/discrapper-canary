e.d(t, { A: () => B });
var o = e(477900),
    i = e(582128),
    s = e(503698),
    l = e.n(s),
    n = e(855986),
    a = e(646514),
    u = e(462887),
    c = e(306471),
    d = e(478016),
    E = e(565787),
    _ = e(332837),
    f = e(834730),
    C = e(664343),
    h = e(682697),
    I = e(939249),
    p = e(140735),
    A = e(404374),
    m = e(233824),
    g = e(152578),
    N = e(413599),
    R = e(696451),
    T = e(287809),
    D = e(816166),
    x = e(953727);
function b(r) {
    let { width: t = 10, height: e = 10, color: i = "currentColor", ...s } = r;
    return (0, o.jsxs)("svg", {
        ...(0, x.A)(s),
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
var L = e(473145),
    w = e(426983),
    v = e(176128),
    O = e(792996);
function M(r, t) {
    let e =
            t === v.qo.PUBLIC
                ? O.intl.string(O.t.op2cJ6)
                : t === v.qo.APPLY_TO_JOIN
                  ? O.intl.string(O.t.YwZfbt)
                  : O.intl.string(O.t.TME4LJ),
        o = t === v.qo.PUBLIC ? O.intl.string(O.t.SiZQ0N) : O.intl.string(O.t.K7iRig);
    switch (r) {
        case w._.STAFF:
            return {
                tooltipTitle: O.intl.string(O.t.lMrv96),
                tooltipSubtitle: O.intl.string(O.t.lMrv96),
                tooltipDescription: O.intl.string(O.t.lMrv96),
            };
        case w._.VERIFIED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t.iCehw9), tooltipDescription: e };
        case w._.PARTNERED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t.hfYfEE), tooltipDescription: e };
        case w._.VERIFIED_AND_PARTNERED:
            return { tooltipTitle: o, tooltipSubtitle: O.intl.string(O.t["TX+iFC"]), tooltipDescription: e };
        case w._.COMMUNITY:
            return { tooltipTitle: O.intl.string(O.t.K7iRig), tooltipDescription: e };
        case w._.DISCOVERABLE:
            return { tooltipTitle: O.intl.string(O.t.SiZQ0N), tooltipDescription: O.intl.string(O.t.op2cJ6) };
        default:
            return { tooltipTitle: O.intl.string(O.t["iZRkC/"]) };
    }
}
var j = e(652215),
    S = e(818357);
let V = {
    [w._.STAFF]: {
        IconComponent: c.StaffBadgeIcon,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [w._.VERIFIED_AND_PARTNERED]: {
        IconComponent: d.CheckmarkSmallIcon,
        foregroundDarkColor: a.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: a.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: a.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: a.A.unsafe_rawColors.GREEN_360.css,
    },
    [w._.VERIFIED]: {
        IconComponent: d.CheckmarkSmallIcon,
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
        premiumBackgroundColor: A.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: a.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [w._.DISCOVERABLE]: {},
    [w._.NONE]: {},
};
function F(r) {
    let { guildTraits: t } = r;
    return (0, o.jsxs)("div", {
        className: S.V8,
        children: [
            (0, o.jsxs)("div", {
                className: l()(S.f, S.N5),
                children: [
                    (0, o.jsx)(b, { width: 18, height: 18, className: S.F8 }),
                    (0, o.jsx)(f.E, {
                        variant: "body-xs/semibold",
                        color: "text-overlay-light",
                        children: L.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, o.jsx)("div", {
                className: S.f,
                children: (0, o.jsx)(f.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    children: O.intl.format(O.t["dR/SVH"], { count: t.premiumSubscriberCount }),
                }),
            }),
        ],
    });
}
function k(r) {
    let { badgeType: t, guildTraits: e } = r,
        { tooltipTitle: i, tooltipSubtitle: s, tooltipDescription: l } = M(t, e.visibility);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsxs)("div", {
                className: S.Rf,
                children: [
                    (0, o.jsx)(f.E, { color: "interactive-text-active", variant: "body-xs/semibold", children: i }),
                    null != s ? (0, o.jsx)(f.E, { color: "text-muted", variant: "body-xs/medium", children: s }) : null,
                    null != l ? (0, o.jsx)(f.E, { color: "text-muted", variant: "body-xs/medium", children: l }) : null,
                ],
            }),
            e.premium ? (0, o.jsx)(F, { guildTraits: e }) : null,
        ],
    });
}
function B(r) {
    let t,
        e,
        {
            guild: s,
            tooltipColor: c = C.ST.Colors.BRAND,
            tooltipPosition: d,
            className: E,
            flowerStarClassName: _,
            iconClassName: f,
            badgeStrokeColor: A,
            badgeColor: D,
            disableBoostClick: x,
            "aria-label": b,
            ...L
        } = r,
        O = L.size ?? 18,
        F = (0, n.bG)([T.default, R.Ay], () => {
            let r = T.default.getCurrentUser();
            return R.Ay.isMember(s?.id, r?.id);
        }),
        B = (0, n.bG)([N.A], () => N.A.theme),
        P = i.useId(),
        y = (0, v.Jp)(s),
        G = (0, w.K)(y),
        U = y.premium && F && !x;
    if (G === w._.NONE) return null;
    let Y = G === w._.DISCOVERABLE,
        {
            IconComponent: H,
            backgroundDarkColor: J,
            backgroundLightColor: W,
            foregroundDarkColor: Z,
            foregroundLightColor: K,
            premiumBackgroundColor: z,
            premiumForegroundColor: q,
            sizeAdjustment: Q,
        } = V[G];
    if (null == H && !Y) return null;
    y.premium && ((t = q), (e = z));
    let X = (0, u.M)(B) ? Z : K,
        $ = (0, u.M)(B) ? J : W;
    ((t = t ?? X), (e = e ?? $));
    let rr = Math.floor(0.75 * O) - (Q ?? 0),
        { tooltipTitle: rt, tooltipSubtitle: re } = M(G, y.visibility),
        ro = b ?? (null != re ? re : rt),
        ri = (0, o.jsx)(k, { badgeType: G, guildTraits: y }),
        rs =
            null == H
                ? (0, o.jsx)(h.ExperimentalWebBadgeIcon, {
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
                      color: e ?? D,
                      stroke: A,
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
                tooltipContentClassName: S.Hj,
                children: (r) =>
                    U
                        ? (0, o.jsx)(I.D, {
                              ...r,
                              "aria-label": ro,
                              "aria-describedby": P,
                              onClick: (t) => {
                                  (r.onClick?.(),
                                      U &&
                                          (t.stopPropagation(),
                                          t.preventDefault(),
                                          (0, m.K4)({
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
            (0, o.jsx)(p.A, { id: P, children: ri }),
        ],
    });
}
