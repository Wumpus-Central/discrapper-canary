n.d(t, { Z: () => V }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(790519),
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
    T = n(70300),
    S = n(973772),
    A = n(441536),
    C = n(535396),
    N = n(981631),
    R = n(732031),
    P = n(18853),
    D = n(388032),
    w = n(765179),
    L = n(630564),
    x = n(611087);
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
function j(e, t) {
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
            : j(Object(t)).forEach(function (n) {
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
        { analyticsLocations: T } = (0, _.ZP)(),
        S = n !== C.A3.INACTIVE,
        R = (0, I.Z)(t),
        [x, M] = i.useState(!1),
        [j, G] = i.useState(!1),
        B = j,
        Z = i.useCallback(() => {
            let e = m.Z.getGuild(t);
            null != e &&
                (0, p.u)({
                    analyticsLocation: {
                        page: N.ZY5.GUILD_POWERUPS_MARKETING,
                        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: T,
                    guild: e,
                });
        }, [t, T]),
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
        className: o()(L.topPerksCard, L.animatedTopPerksCard, w.powerupCard, { [L.animate]: x }),
        onMouseEnter: () => {
            G(!0), null == v || v(!0);
        },
        onMouseLeave: () => {
            G(!1), null == v || v(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: L.intObserver,
                ref: z,
            }),
            (0, r.jsx)("div", {
                className: L.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(L.topPerksCardImage, w.image),
                    src: E,
                    alt: "",
                    style: H,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: U(k({}, Y), { transform: Y.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(L.contentContainer, w.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: a,
                        description: c,
                        label: D.intl.formatToPlainString(P.default.QOacIS, {
                            quantity: u,
                            decorator: null != g ? g : "",
                        }),
                        isEnabled: S,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: W,
                        className: L.buttonsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.button,
                                children: (0, r.jsx)(d.Button, {
                                    variant: "primary",
                                    text: D.intl.string(D.t.oPAx73),
                                    onClick: Z,
                                    fullWidth: !0,
                                }),
                            }),
                            R &&
                                (0, r.jsx)("div", {
                                    className: L.button,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: D.intl.string(D.t.GoCQxU),
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
                    className: L.topPerksCardNew,
                    text: D.intl.string(D.t.y2b7CA),
                }),
            x && (0, r.jsx)("div", { className: L.shineLine }),
        ],
    });
}
function B(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        [o, s] = i.useState(!1),
        l = (0, S.ZP)(t, n).type,
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
            l = (0, T.Z)(n.id),
            d = (null != l ? l : []).slice(0, Z);
        return 0 === d.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: w.container,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: D.intl.string(P.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.xvT, {
                          variant: "text-lg/medium",
                          children: D.intl.format(P.default.S562fn, {
                              helpDeskArticle: g.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          className: w.powerupsContainer,
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
                                      title: D.intl.string(R.default["B3OfL/"]),
                                      description: D.intl.string(R.default.EGkJAG),
                                      cost: s,
                                      costDecorator: "+",
                                      imageUrl: x.Z,
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
