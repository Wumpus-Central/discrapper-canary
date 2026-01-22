n.d(t, {
    A: () => j,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(582754),
    u = n(397927),
    d = n(404374),
    f = n(509536),
    p = n(496885),
    _ = n(544028),
    h = n(696451),
    m = n(287809),
    g = n(816166),
    E = n(813098),
    b = n(473145),
    y = n(426983),
    O = n(176128),
    A = n(981883),
    v = n(652215),
    S = n(985018),
    I = n(106967);

function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = P(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let D = {
    [y._.STAFF]: {
        IconComponent: u.VaJ,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [y._.VERIFIED_AND_PARTNERED]: {
        IconComponent: u.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [y._.VERIFIED]: {
        IconComponent: u.Uzd,
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.GREEN_360.css,
        backgroundLightColor: l.A.unsafe_rawColors.GREEN_360.css,
    },
    [y._.PARTNERED]: {
        IconComponent: (0, u.kHD)(g.A),
        foregroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.BRAND_500.css,
        backgroundLightColor: l.A.unsafe_rawColors.BRAND_500.css,
    },
    [y._.COMMUNITY]: {
        IconComponent: u.fAJ,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [y._.DISCOVERABLE]: {
        IconComponent: u.L_e,
        foregroundDarkColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        foregroundLightColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundDarkColor: l.A.unsafe_rawColors.WHITE.css,
        backgroundLightColor: l.A.unsafe_rawColors.PRIMARY_500.css,
        premiumBackgroundColor: d.k0.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
        premiumForegroundColor: l.A.unsafe_rawColors.WHITE.css,
        sizeAdjustment: 2,
    },
    [y._.NONE]: {},
};

function x(e) {
    let { guildTraits: t } = e;
    return (0, r.jsxs)("div", {
        className: I.V8,
        children: [
            (0, r.jsxs)("div", {
                className: s()(I.f, I.N5),
                children: [
                    (0, r.jsx)(E.A, {
                        width: 18,
                        height: 18,
                        className: I.F8,
                    }),
                    (0, r.jsx)(u.Text, {
                        variant: "text-xs/semibold",
                        color: "always-white",
                        children: b.gb(t.premiumTier),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: I.f,
                children: (0, r.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "always-white",
                    children: S.intl.format(S.t["dR/SVH"], {
                        count: t.premiumSubscriberCount,
                    }),
                }),
            }),
        ],
    });
}

function L(e) {
    let { badgeType: t, guildTraits: n } = e,
        { tooltipTitle: i, tooltipSubtitle: a, tooltipDescription: s } = (0, A.V)(t, n.visibility);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: I.Rf,
                children: [
                    (0, r.jsx)(u.Text, {
                        color: "interactive-text-active",
                        variant: "text-xs/bold",
                        children: i,
                    }),
                    null != a
                        ? (0, r.jsx)(u.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: a,
                          })
                        : null,
                    null != s
                        ? (0, r.jsx)(u.Text, {
                              color: "text-muted",
                              variant: "text-xs/medium",
                              children: s,
                          })
                        : null,
                ],
            }),
            n.premium
                ? (0, r.jsx)(x, {
                      guildTraits: n,
                  })
                : null,
        ],
    });
}

function j(e) {
    var t;
    let n,
        a,
        {
            guild: s,
            tooltipColor: l = u.STz.Colors.BRAND,
            tooltipPosition: d,
            className: g,
            flowerStarClassName: E,
            iconClassName: b,
            badgeStrokeColor: A,
            badgeColor: S,
            disableBoostClick: T,
            "aria-label": N = !1,
        } = e,
        P =
            null !=
            (t = w(e, [
                "guild",
                "tooltipColor",
                "tooltipPosition",
                "className",
                "flowerStarClassName",
                "iconClassName",
                "badgeStrokeColor",
                "badgeColor",
                "disableBoostClick",
                "aria-label",
            ]).size)
                ? t
                : 18,
        x = (0, o.bG)([m.default, h.Ay], () => {
            let e = m.default.getCurrentUser();
            return h.Ay.isMember(null == s ? void 0 : s.id, null == e ? void 0 : e.id);
        }),
        j = (0, o.bG)([_.A], () => _.A.theme),
        M = (0, O.Jp)(s),
        k = (0, y.K)(M),
        U = i.useMemo(() => M.premium && x && !T, [T, M.premium, x]),
        G = i.useCallback(
            (e) => {
                U &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, f.K)({
                        guildId: s.id,
                        location: {
                            section: v.JJy.GUILD_HEADER,
                            object: v.ZSU.BOOST_GEM_ICON,
                        },
                    }));
            },
            [U, s.id],
        );
    if (k === y._.NONE) return null;
    let {
        IconComponent: V,
        backgroundDarkColor: F,
        backgroundLightColor: B,
        foregroundDarkColor: H,
        foregroundLightColor: Y,
        premiumBackgroundColor: W,
        premiumForegroundColor: K,
        sizeAdjustment: z,
    } = D[k];
    if (null == V) return null;
    M.premium && ((n = K), (a = W));
    let q = (0, c.Mw)(j) ? H : Y,
        X = (0, c.Mw)(j) ? F : B;
    (n = null != n ? n : q), (a = null != a ? a : X);
    let Z = Math.floor(0.75 * P) - (null != z ? z : 0);
    return (0, r.jsx)(u.STz, {
        color: l,
        position: d,
        "aria-label": N,
        text: (0, r.jsx)(L, {
            badgeType: k,
            guildTraits: M,
        }),
        tooltipContentClassName: I.Hj,
        children: (e) =>
            (0, r.jsx)(u.DUT, {
                onClick: G,
                tabIndex: U ? 0 : -1,
                children: (0, r.jsx)(
                    p.A,
                    R(C({}, e), {
                        className: g,
                        flowerStarClassName: E,
                        allowFullSizedIcon: !0,
                        color: null != a ? a : S,
                        stroke: A,
                        size: P,
                        children: (0, r.jsx)(V, {
                            size: "custom",
                            width: Z,
                            height: Z,
                            className: b,
                            color: null != n ? n : "currentColor",
                        }),
                    }),
                ),
            }),
    });
}
