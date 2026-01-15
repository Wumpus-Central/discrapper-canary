n.d(t, { Z: () => W }), n(953529), n(388685), n(583741);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(853590),
    l = n(907331),
    c = n(793030),
    u = n(442837),
    d = n(28664),
    f = n(481060),
    p = n(100527),
    _ = n(906732),
    m = n(879892),
    h = n(245004),
    g = n(430824),
    E = n(594174),
    b = n(63063),
    y = n(713081),
    O = n(905128),
    v = n(156732),
    S = n(639777),
    I = n(70300),
    T = n(973772),
    C = n(441536),
    A = n(619733),
    N = n(282793),
    P = n(535396),
    R = n(981631),
    w = n(353149),
    D = n(556970),
    x = n(388032),
    L = n(887143),
    j = n(918820);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: c,
            cost: b,
            costDecorator: y,
            imageUrl: O,
            skuId: v,
            isNew: I,
            onClose: T,
            onHover: A,
        } = e,
        { analyticsLocations: M } = (0, _.ZP)(),
        U = n !== P.A3.INACTIVE,
        Z = (0, S.Z)(t),
        F = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        [B, V] = i.useState(!1),
        [H, Y] = i.useState(!1),
        W = H,
        K = i.useCallback(() => {
            let e = g.Z.getGuild(t);
            null != e &&
                (0, m.u)({
                    analyticsLocation: {
                        page: R.ZY5.GUILD_POWERUPS_MARKETING,
                        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: M,
                    guild: e,
                });
        }, [t, M]),
        z = i.useCallback(() => {
            T(), (0, C.Z)(t, p.Z.GUILD_POWERUPS_MARKETING, v);
        }, [t, v, T]),
        q = {
            tension: 400,
            friction: 30,
        },
        Q = (0, f.q_F)({
            transform: W
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: q,
        }),
        X = (0, f.q_F)({
            y: W ? -25 : 0,
            config: q,
        }),
        J = (0, f.q_F)({
            opacity: +!!W,
            transform: W ? "translateY(0)" : "translateY(20px)",
            config: q,
        }),
        $ = i.useCallback((e) => {
            e && V(!0);
        }, []),
        ee = (0, l.O)($);
    return (0, r.jsxs)("div", {
        className: o()(j.topPerksCard, j.animatedTopPerksCard, L.powerupCard, { [j.animate]: B }),
        onMouseEnter: () => {
            Y(!0), null == A || A(!0);
        },
        onMouseLeave: () => {
            Y(!1), null == A || A(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: j.intObserver,
                ref: ee,
            }),
            (0, r.jsx)("div", {
                className: j.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(j.topPerksCardImage, L.image),
                    src: O,
                    alt: "",
                    style: Q,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: G(k({}, X), { transform: X.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(j.contentContainer, L.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: a,
                        description: c,
                        label: x.intl.formatToPlainString(D.default.QOacIS, {
                            quantity: b,
                            decorator: null != y ? y : "",
                        }),
                        isEnabled: U,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: J,
                        className: j.buttonsContainer,
                        children: [
                            (0, r.jsx)(d.u, {
                                text: x.intl.formatToPlainString(w.default["5xN/C1"], {
                                    premiumGroupProductName: (0, N.sO)(),
                                }),
                                shouldShow: (null == F ? void 0 : F.isPremiumGroupMember()) === !0,
                                children: (0, r.jsx)("div", {
                                    className: j.button,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "primary",
                                        text: x.intl.string(x.t.oPAx73),
                                        onClick: K,
                                        disabled: null == F ? void 0 : F.isPremiumGroupMember(),
                                        fullWidth: !0,
                                    }),
                                }),
                            }),
                            Z &&
                                (0, r.jsx)("div", {
                                    className: j.button,
                                    children: (0, r.jsx)(f.Button, {
                                        variant: "secondary",
                                        text: x.intl.string(x.t.GoCQxU),
                                        onClick: z,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            I &&
                (0, r.jsx)(f.IGR, {
                    className: j.topPerksCardNew,
                    text: x.intl.string(x.t.y2b7CA),
                }),
            B && (0, r.jsx)("div", { className: j.shineLine }),
        ],
    });
}
function F(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: o, onClose: s } = e,
        [l, c] = i.useState(!1),
        u = (0, T.ZP)(t, n).type,
        d = (0, v.Z)(n, l);
    return (0, r.jsx)(Z, {
        guildId: t,
        activeStatus: u,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: d,
        skuId: n.skuId,
        costDecorator: a,
        isNew: o,
        onClose: s,
        onHover: (e) => c(e),
    });
}
let B = 3,
    V = new Set([A.fj]),
    H = new Map([[A.fj, "+"]]),
    Y = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id),
                O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.BN)(n.id);
        }, [n.id]);
        let o = (0, I.Z)(n.id),
            s = Array.from(null != o ? o : [])
                .reverse()
                .slice(0, B);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: L.container,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: x.intl.string(D.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.xvT, {
                          variant: "text-lg/medium",
                          children: x.intl.format(D.default.OdCzjA, {
                              helpDeskArticle: b.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: L.powerupsContainer,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  F,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: H.get(e.skuId),
                                      isNew: V.has(e.skuId),
                                      onClose: a,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
Y.displayName = "GuildPowerupsMarketingPowerupCards";
let W = Y;
