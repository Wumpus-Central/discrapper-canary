n.d(t, { Z: () => V }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(907331),
    c = n(793030),
    u = n(442837),
    d = n(481060),
    f = n(100527),
    p = n(906732),
    _ = n(879892),
    m = n(245004),
    h = n(430824),
    g = n(594174),
    E = n(63063),
    b = n(713081),
    y = n(905128),
    O = n(156732),
    v = n(639777),
    S = n(70300),
    I = n(973772),
    T = n(441536),
    C = n(619733),
    A = n(535396),
    N = n(981631),
    P = n(556970),
    R = n(388032),
    w = n(887143),
    D = n(918820);
function x(e, t, n) {
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
function L(e) {
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
                x(e, t, n[t]);
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
function M(e, t) {
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
function k(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: c,
            cost: E,
            costDecorator: b,
            imageUrl: y,
            skuId: O,
            isNew: S,
            onClose: I,
            onHover: C,
        } = e,
        { analyticsLocations: x } = (0, p.ZP)(),
        j = n !== A.A3.INACTIVE,
        k = (0, v.Z)(t),
        U = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        [G, Z] = i.useState(!1),
        [F, B] = i.useState(!1),
        V = F,
        H = i.useCallback(() => {
            let e = h.Z.getGuild(t);
            null != e &&
                (0, _.u)({
                    analyticsLocation: {
                        page: N.ZY5.GUILD_POWERUPS_MARKETING,
                        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: x,
                    guild: e,
                });
        }, [t, x]),
        Y = i.useCallback(() => {
            I(), (0, T.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, O);
        }, [t, O, I]),
        W = {
            tension: 400,
            friction: 30,
        },
        K = (0, d.q_F)({
            transform: V
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: W,
        }),
        z = (0, d.q_F)({
            y: V ? -25 : 0,
            config: W,
        }),
        q = (0, d.q_F)({
            opacity: +!!V,
            transform: V ? "translateY(0)" : "translateY(20px)",
            config: W,
        }),
        Q = i.useCallback((e) => {
            e && Z(!0);
        }, []),
        X = (0, l.O)(Q);
    return (0, r.jsxs)("div", {
        className: o()(D.topPerksCard, D.animatedTopPerksCard, w.powerupCard, { [D.animate]: G }),
        onMouseEnter: () => {
            B(!0), null == C || C(!0);
        },
        onMouseLeave: () => {
            B(!1), null == C || C(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: D.intObserver,
                ref: X,
            }),
            (0, r.jsx)("div", {
                className: D.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(D.topPerksCardImage, w.image),
                    src: y,
                    alt: "",
                    style: K,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: M(L({}, z), { transform: z.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(D.contentContainer, w.contentContainer),
                children: [
                    (0, r.jsx)(m.xm, {
                        heading: a,
                        description: c,
                        label: R.intl.formatToPlainString(P.default.QOacIS, {
                            quantity: E,
                            decorator: null != b ? b : "",
                        }),
                        isEnabled: j,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: q,
                        className: D.buttonsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: D.button,
                                children: (0, r.jsx)(d.Button, {
                                    variant: "primary",
                                    text: R.intl.string(R.t.oPAx73),
                                    onClick: H,
                                    disabled: null == U ? void 0 : U.isPremiumGroupMember(),
                                    fullWidth: !0,
                                }),
                            }),
                            k &&
                                (0, r.jsx)("div", {
                                    className: D.button,
                                    children: (0, r.jsx)(d.Button, {
                                        variant: "secondary",
                                        text: R.intl.string(R.t.GoCQxU),
                                        onClick: Y,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            S &&
                (0, r.jsx)(d.IGR, {
                    className: D.topPerksCardNew,
                    text: R.intl.string(R.t.y2b7CA),
                }),
            G && (0, r.jsx)("div", { className: D.shineLine }),
        ],
    });
}
function U(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: o, onClose: s } = e,
        [l, c] = i.useState(!1),
        u = (0, I.ZP)(t, n).type,
        d = (0, O.Z)(n, l);
    return (0, r.jsx)(k, {
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
let G = 3,
    Z = new Set([C.fj]),
    F = new Map([[C.fj, "+"]]),
    B = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            y.Z.shouldFetchCatalogForGuild(n.id) && (0, b.Sn)(n.id),
                y.Z.shouldFetchPowerupsForGuild(n.id) && (0, b.BN)(n.id);
        }, [n.id]);
        let o = (0, S.Z)(n.id),
            s = (null != o ? o : []).slice(0, G);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: w.container,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: R.intl.string(P.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.xvT, {
                          variant: "text-lg/medium",
                          children: R.intl.format(P.default.S562fn, {
                              helpDeskArticle: E.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: w.powerupsContainer,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: F.get(e.skuId),
                                      isNew: Z.has(e.skuId),
                                      onClose: a,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
B.displayName = "GuildPowerupsMarketingPowerupCards";
let V = B;
