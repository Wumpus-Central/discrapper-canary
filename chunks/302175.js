n.d(t, { Z: () => B }), n(388685), n(953529);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(831209),
    c = n(494497),
    u = n(793030),
    d = n(481060),
    f = n(434650),
    _ = n(100527),
    p = n(906732),
    h = n(879892),
    m = n(245004),
    g = n(430824),
    E = n(63063),
    b = n(713081),
    y = n(905128),
    O = n(158638),
    v = n(156732),
    I = n(639777),
    T = n(70300),
    S = n(973772),
    A = n(441536),
    C = n(535396),
    N = n(981631),
    R = n(989308),
    P = n(388032),
    w = n(765179),
    D = n(630564);
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
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: u } = (0, p.ZP)(),
        E = (0, O.g1)(t, "GuildPowerupMarketingPowerupCard"),
        b = n.skuId === c.A$,
        y = (0, S.ZP)(t, n).type !== C.A3.INACTIVE,
        T = (0, I.Z)(t),
        [x, j] = i.useState(!1),
        [k, U] = i.useState(!1),
        G = k,
        B = i.useCallback(() => {
            let e = g.Z.getGuild(t);
            null != e &&
                (0, h.u)({
                    analyticsLocation: {
                        page: N.ZY5.GUILD_POWERUPS_MARKETING,
                        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: u,
                    guild: e,
                });
        }, [t, u]),
        Z = i.useCallback(() => {
            a(), (0, A.Z)(t, _.Z.GUILD_POWERUPS_MARKETING, n.skuId);
        }, [t, n.skuId, a]),
        F = {
            tension: 400,
            friction: 30,
        },
        V = (0, d.q_F)({
            transform: G
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: F,
        }),
        H = (0, d.q_F)({
            y: G ? -25 : 0,
            config: F,
        }),
        Y = (0, d.q_F)({
            opacity: +!!G,
            transform: G ? "translateY(0)" : "translateY(20px)",
            config: F,
        }),
        W = i.useCallback((e) => {
            e && j(!0);
        }, []),
        K = (0, f.O)(W),
        z = (0, v.Z)(n, k);
    return (0, r.jsxs)("div", {
        className: o()(D.topPerksCard, D.animatedTopPerksCard, w.powerupCard, { [D.animate]: x }),
        onMouseEnter: () => U(!0),
        onMouseLeave: () => U(!1),
        children: [
            (0, r.jsx)("div", {
                className: D.intObserver,
                ref: K,
            }),
            (0, r.jsx)("div", {
                className: D.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(D.topPerksCardImage, w.image),
                    src: z,
                    alt: "",
                    style: V,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: M(L({}, H), { transform: H.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(D.contentContainer, w.contentContainer),
                children: [
                    (0, r.jsx)(m.xm, {
                        heading: n.title,
                        description: n.description,
                        label: P.intl.formatToPlainString(R.default.QOacIS, { quantity: n.cost }),
                        isEnabled: y,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: Y,
                        className: D.buttonsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: D.button,
                                children: (0, r.jsx)(d.zxk, {
                                    variant: "primary",
                                    text: P.intl.string(P.t["oPAx7+"]),
                                    onClick: B,
                                    fullWidth: !0,
                                }),
                            }),
                            T &&
                                (0, r.jsx)("div", {
                                    className: D.button,
                                    children: (0, r.jsx)(d.zxk, {
                                        variant: "secondary",
                                        text: P.intl.string(P.t.GoCQxc),
                                        onClick: Z,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            !E &&
                !b &&
                (0, r.jsx)(d.IGR, {
                    className: D.topPerksCardNew,
                    text: P.intl.string(P.t.y2b7CA),
                }),
            b &&
                (0, r.jsx)(d.IGR, {
                    className: D.topPerksCardNew,
                    text: P.intl.string(P.t.oW0eUV),
                    color: l.Z.BG_BRAND,
                }),
            x && (0, r.jsx)("div", { className: D.shineLine }),
        ],
    });
}
let U = 3,
    G = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            y.Z.shouldFetchCatalogForGuild(n.id) && (0, b.Sn)(n.id),
                y.Z.shouldFetchPowerupsForGuild(n.id) && (0, b.BN)(n.id);
        }, [n.id]);
        let o = (0, T.Z)(n.id),
            s = (null != o ? o : []).slice(0, U);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: w.container,
                  children: [
                      (0, r.jsx)(u.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: P.intl.string(R.default.wjI18f),
                      }),
                      (0, r.jsx)(u.xvT, {
                          variant: "text-lg/medium",
                          children: P.intl.format(R.default.S562fn, {
                              helpDeskArticle: E.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: w.powerupsContainer,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  k,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      onClose: a,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
G.displayName = "GuildPowerupsMarketingPowerupCards";
let B = G;
