n.d(t, { Z: () => V }), n(953529), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(907331),
    c = n(793030),
    u = n(442837),
    d = n(481060),
    f = n(100527),
    _ = n(906732),
    p = n(879892),
    h = n(245004),
    m = n(430824),
    g = n(63063),
    E = n(755458),
    b = n(60482),
    y = n(713081),
    O = n(905128),
    v = n(156732),
    I = n(639777),
    S = n(70300),
    T = n(973772),
    A = n(441536),
    C = n(535396),
    N = n(981631),
    R = n(97200),
    P = n(789142),
    w = n(388032),
    D = n(722177),
    x = n(546241),
    L = n(611087);
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
function j(e) {
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
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: c,
            cost: u,
            costDecorator: g,
            imageUrl: E,
            skuId: b,
            isNew: y,
            onClose: O,
            onHover: v,
        } = e,
        { analyticsLocations: S } = (0, _.ZP)(),
        T = n !== C.A3.INACTIVE,
        R = (0, I.Z)(t),
        [L, M] = i.useState(!1),
        [k, G] = i.useState(!1),
        B = k,
        Z = i.useCallback(() => {
            let e = m.Z.getGuild(t);
            null != e &&
                (0, p.u)({
                    analyticsLocation: {
                        page: N.ZY5.GUILD_POWERUPS_MARKETING,
                        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: S,
                    guild: e,
                });
        }, [t, S]),
        F = i.useCallback(() => {
            O(), (0, A.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, b);
        }, [t, b, O]),
        V = {
            tension: 400,
            friction: 30,
        },
        H = (0, d.q_F)({
            transform: B
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: V,
        }),
        Y = (0, d.q_F)({
            y: B ? -25 : 0,
            config: V,
        }),
        W = (0, d.q_F)({
            opacity: +!!B,
            transform: B ? "translateY(0)" : "translateY(20px)",
            config: V,
        }),
        K = i.useCallback((e) => {
            e && M(!0);
        }, []),
        z = (0, l.O)(K);
    return (0, r.jsxs)("div", {
        className: o()(x.topPerksCard, x.animatedTopPerksCard, D.powerupCard, { [x.animate]: L }),
        onMouseEnter: () => {
            G(!0), null == v || v(!0);
        },
        onMouseLeave: () => {
            G(!1), null == v || v(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: x.intObserver,
                ref: z,
            }),
            (0, r.jsx)("div", {
                className: x.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(x.topPerksCardImage, D.image),
                    src: E,
                    alt: "",
                    style: H,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: U(j({}, Y), { transform: Y.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(x.contentContainer, D.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: a,
                        description: c,
                        label: w.intl.formatToPlainString(P.default.QOacIS, {
                            quantity: u,
                            decorator: null != g ? g : "",
                        }),
                        isEnabled: T,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: W,
                        className: x.buttonsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: x.button,
                                children: (0, r.jsx)(d.Button, {
                                    variant: "primary",
                                    text: w.intl.string(w.t.oPAx73),
                                    onClick: Z,
                                    fullWidth: !0,
                                }),
                            }),
                            R &&
                                (0, r.jsx)("div", {
                                    className: x.button,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: w.intl.string(w.t.GoCQxU),
                                        onClick: F,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            y &&
                (0, r.jsx)(d.IGR, {
                    className: x.topPerksCardNew,
                    text: w.intl.string(w.t.y2b7CA),
                }),
            L && (0, r.jsx)("div", { className: x.shineLine }),
        ],
    });
}
function B(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        [o, s] = i.useState(!1),
        l = (0, T.ZP)(t, n).type,
        c = (0, v.Z)(n, o);
    return (0, r.jsx)(G, {
        guildId: t,
        activeStatus: l,
        title: n.title,
        description: n.description,
        cost: n.cost,
        imageUrl: c,
        skuId: n.skuId,
        onClose: a,
        onHover: (e) => s(e),
    });
}
let Z = 3,
    F = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id),
                O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.BN)(n.id);
        }, [n.id]);
        let o = (0, E.BU)(n.id, "GuildPowerupsMarketingPowerupCards"),
            s = (0, u.e7)([b.Z], () => b.Z.getLowestGameCostForGuild(n.id)),
            l = (0, S.Z)(n.id),
            d = (null != l ? l : []).slice(0, Z);
        return 0 === d.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: D.container,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: w.intl.string(P.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.xvT, {
                          variant: "text-lg/medium",
                          children: w.intl.format(P.default.S562fn, {
                              helpDeskArticle: g.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: D.powerupsContainer,
                          children: [
                              d.map((e) =>
                                  (0, r.jsx)(
                                      B,
                                      {
                                          guildId: n.id,
                                          powerup: e,
                                          onClose: a,
                                      },
                                      "guild-powerup-marketing-".concat(e.skuId),
                                  ),
                              ),
                              o &&
                                  d.length < Z &&
                                  null != s &&
                                  (0, r.jsx)(G, {
                                      guildId: n.id,
                                      activeStatus: C.A3.INACTIVE,
                                      title: w.intl.string(R.default["B3OfL/"]),
                                      description: w.intl.string(R.default.EGkJAG),
                                      cost: s,
                                      costDecorator: "+",
                                      imageUrl: L.Z,
                                      onClose: a,
                                      isNew: !0,
                                  }),
                          ],
                      }),
                  ],
              });
    });
F.displayName = "GuildPowerupsMarketingPowerupCards";
let V = F;
