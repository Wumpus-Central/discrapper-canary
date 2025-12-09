n.d(t, { Z: () => B }), n(953529), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(205120),
    l = n(907331),
    c = n(793030),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    p = n(879892),
    _ = n(245004),
    m = n(430824),
    h = n(63063),
    g = n(713081),
    E = n(905128),
    b = n(156732),
    y = n(639777),
    O = n(70300),
    v = n(973772),
    S = n(441536),
    I = n(619733),
    T = n(535396),
    A = n(981631),
    C = n(810878),
    N = n(388032),
    P = n(765179),
    R = n(630564);
function D(e, t, n) {
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
function w(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let {
            guildId: t,
            activeStatus: n,
            title: a,
            description: c,
            cost: h,
            costDecorator: g,
            imageUrl: E,
            skuId: b,
            isNew: O,
            onClose: v,
            onHover: I,
        } = e,
        { analyticsLocations: D } = (0, f.ZP)(),
        x = n !== T.A3.INACTIVE,
        j = (0, y.Z)(t),
        [M, k] = i.useState(!1),
        [U, G] = i.useState(!1),
        Z = U,
        B = i.useCallback(() => {
            let e = m.Z.getGuild(t);
            null != e &&
                (0, p.u)({
                    analyticsLocation: {
                        page: A.ZY5.GUILD_POWERUPS_MARKETING,
                        section: A.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: D,
                    guild: e,
                });
        }, [t, D]),
        F = i.useCallback(() => {
            v(), (0, S.Z)(t, d.Z.GUILD_POWERUPS_MARKETING, b);
        }, [t, b, v]),
        V = {
            tension: 400,
            friction: 30,
        },
        H = (0, u.q_F)({
            transform: Z
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: V,
        }),
        Y = (0, u.q_F)({
            y: Z ? -25 : 0,
            config: V,
        }),
        W = (0, u.q_F)({
            opacity: +!!Z,
            transform: Z ? "translateY(0)" : "translateY(20px)",
            config: V,
        }),
        K = i.useCallback((e) => {
            e && k(!0);
        }, []),
        z = (0, l.O)(K);
    return (0, r.jsxs)("div", {
        className: o()(R.topPerksCard, R.animatedTopPerksCard, P.powerupCard, { [R.animate]: M }),
        onMouseEnter: () => {
            G(!0), null == I || I(!0);
        },
        onMouseLeave: () => {
            G(!1), null == I || I(!1);
        },
        children: [
            (0, r.jsx)("div", {
                className: R.intObserver,
                ref: z,
            }),
            (0, r.jsx)("div", {
                className: R.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(R.topPerksCardImage, P.image),
                    src: E,
                    alt: "",
                    style: H,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: L(w({}, Y), { transform: Y.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: o()(R.contentContainer, P.contentContainer),
                children: [
                    (0, r.jsx)(_.xm, {
                        heading: a,
                        description: c,
                        label: N.intl.formatToPlainString(C.default.QOacIS, {
                            quantity: h,
                            decorator: null != g ? g : "",
                        }),
                        isEnabled: x,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: W,
                        className: R.buttonsContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: R.button,
                                children: (0, r.jsx)(u.Button, {
                                    variant: "primary",
                                    text: N.intl.string(N.t.oPAx73),
                                    onClick: B,
                                    fullWidth: !0,
                                }),
                            }),
                            j &&
                                (0, r.jsx)("div", {
                                    className: R.button,
                                    children: (0, r.jsx)(u.Button, {
                                        variant: "secondary",
                                        text: N.intl.string(N.t.GoCQxU),
                                        onClick: F,
                                        fullWidth: !0,
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            O &&
                (0, r.jsx)(u.IGR, {
                    className: R.topPerksCardNew,
                    text: N.intl.string(N.t.y2b7CA),
                }),
            M && (0, r.jsx)("div", { className: R.shineLine }),
        ],
    });
}
function M(e) {
    let { guildId: t, powerup: n, costDecorator: a, isNew: o, onClose: s } = e,
        [l, c] = i.useState(!1),
        u = (0, v.ZP)(t, n).type,
        d = (0, b.Z)(n, l);
    return (0, r.jsx)(j, {
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
let k = 3,
    U = new Set([I.fj]),
    G = new Map([[I.fj, "+"]]),
    Z = i.forwardRef((e, t) => {
        let { guild: n, onClose: a } = e;
        i.useEffect(() => {
            E.Z.shouldFetchCatalogForGuild(n.id) && (0, g.Sn)(n.id),
                E.Z.shouldFetchPowerupsForGuild(n.id) && (0, g.BN)(n.id);
        }, [n.id]);
        let o = (0, O.Z)(n.id),
            s = (null != o ? o : []).slice(0, k);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: P.container,
                  children: [
                      (0, r.jsx)(c.X6q, {
                          variant: "heading-xxl/extrabold",
                          children: N.intl.string(C.default.wjI18Q),
                      }),
                      (0, r.jsx)(c.xvT, {
                          variant: "text-lg/medium",
                          children: N.intl.format(C.default.S562fn, {
                              helpDeskArticle: h.Z.getArticleURL(A.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: P.powerupsContainer,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  M,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      costDecorator: G.get(e.skuId),
                                      isNew: U.has(e.skuId),
                                      onClose: a,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
Z.displayName = "GuildPowerupsMarketingPowerupCards";
let B = Z;
