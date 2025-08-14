n.d(t, { Z: () => Z }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(717976),
    l = n(831209),
    c = n(494497),
    u = n(793030),
    d = n(755721),
    f = n(481060),
    _ = n(434650),
    p = n(100527),
    h = n(906732),
    m = n(879892),
    g = n(245004),
    E = n(430824),
    b = n(63063),
    y = n(713081),
    O = n(905128),
    v = n(158638),
    I = n(156732),
    T = n(639777),
    S = n(70300),
    A = n(973772),
    N = n(441536),
    C = n(535396),
    R = n(981631),
    P = n(989308),
    w = n(388032),
    D = n(765179),
    L = n(630564);
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
function M(e) {
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
function k(e, t) {
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
function U(e) {
    let { guildId: t, powerup: n, onClose: o } = e,
        { analyticsLocations: u } = (0, h.ZP)(),
        b = (0, v.g1)(t, "GuildPowerupMarketingPowerupCard"),
        y = n.skuId === c.A$,
        O = (0, A.ZP)(t, n).type !== C.A3.INACTIVE,
        S = (0, T.Z)(t),
        [x, j] = i.useState(!1),
        [U, G] = i.useState(!1),
        B = U,
        Z = i.useCallback(() => {
            let e = E.Z.getGuild(t);
            null != e &&
                (0, m.u)({
                    analyticsLocation: {
                        page: R.ZY5.GUILD_POWERUPS_MARKETING,
                        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION,
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: u,
                    guild: e,
                });
        }, [t, u]),
        F = i.useCallback(() => {
            o(), (0, N.Z)(t, p.Z.GUILD_POWERUPS_MARKETING, n.skuId);
        }, [t, n.skuId, o]),
        V = {
            tension: 400,
            friction: 30,
        },
        H = (0, f.q_F)({
            transform: B
                ? "translateX(-50%) translateY(16px) scale(1)"
                : "translateX(-50%) translateY(24px) scale(1.40)",
            borderRadius: "0px",
            transformOrigin: "center 0%",
            config: V,
        }),
        Y = (0, f.q_F)({
            y: B ? -25 : 0,
            config: V,
        }),
        W = (0, f.q_F)({
            opacity: +!!B,
            transform: B ? "translateY(0)" : "translateY(20px)",
            config: V,
        }),
        K = i.useCallback((e) => {
            e && j(!0);
        }, []),
        z = (0, _.O)(K),
        q = (0, I.Z)(n, U);
    return (0, r.jsxs)("div", {
        className: a()(L.topPerksCard, L.animatedTopPerksCard, D.powerupCard, { [L.animate]: x }),
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: [
            (0, r.jsx)("div", {
                className: L.intObserver,
                ref: z,
            }),
            (0, r.jsx)("div", {
                className: L.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: a()(L.topPerksCardImage, D.image),
                    src: q,
                    alt: "",
                    style: H,
                }),
            }),
            (0, r.jsxs)(s.animated.div, {
                style: k(M({}, Y), { transform: Y.y.to((e) => "translateY(".concat(e, "px)")) }),
                className: a()(L.contentContainer, D.contentContainer),
                children: [
                    (0, r.jsx)(g.xm, {
                        heading: n.title,
                        description: n.description,
                        label: w.intl.formatToPlainString(P.default.QOacIS, { quantity: n.cost }),
                        isEnabled: O,
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: W,
                        className: L.buttonsContainer,
                        children: [
                            (0, r.jsx)(d.zx, {
                                grow: !0,
                                onClick: Z,
                                color: d.zx.Colors.BRAND,
                                className: L.button,
                                children: w.intl.string(w.t["oPAx7+"]),
                            }),
                            S &&
                                (0, r.jsx)(d.zx, {
                                    grow: !0,
                                    onClick: F,
                                    color: d.zx.Colors.PRIMARY,
                                    className: L.button,
                                    children: w.intl.string(w.t.GoCQxc),
                                }),
                        ],
                    }),
                ],
            }),
            !b &&
                !y &&
                (0, r.jsx)(f.IGR, {
                    className: L.topPerksCardNew,
                    text: w.intl.string(w.t.y2b7CA),
                }),
            y &&
                (0, r.jsx)(f.IGR, {
                    className: L.topPerksCardNew,
                    text: w.intl.string(w.t.oW0eUV),
                    color: l.Z.BG_BRAND,
                }),
            x && (0, r.jsx)("div", { className: L.shineLine }),
        ],
    });
}
let G = 3,
    B = i.forwardRef((e, t) => {
        let { guild: n, onClose: o } = e;
        i.useEffect(() => {
            O.Z.shouldFetchCatalogForGuild(n.id) && (0, y.Sn)(n.id),
                O.Z.shouldFetchPowerupsForGuild(n.id) && (0, y.Fm)(n.id);
        }, [n.id]);
        let a = (0, S.Z)(n.id),
            s = (null != a ? a : []).slice(0, G);
        return 0 === s.length
            ? null
            : (0, r.jsxs)("div", {
                  ref: t,
                  className: D.container,
                  children: [
                      (0, r.jsx)(u.X6, {
                          variant: "heading-xxl/extrabold",
                          children: w.intl.string(P.default.wjI18f),
                      }),
                      (0, r.jsx)(u.xv, {
                          variant: "text-lg/medium",
                          children: w.intl.format(P.default.S562fn, {
                              helpDeskArticle: b.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ),
                          }),
                      }),
                      (0, r.jsx)("div", {
                          className: D.powerupsContainer,
                          children: s.map((e) =>
                              (0, r.jsx)(
                                  U,
                                  {
                                      guildId: n.id,
                                      powerup: e,
                                      onClose: o,
                                  },
                                  "guild-powerup-marketing-".concat(e.skuId),
                              ),
                          ),
                      }),
                  ],
              });
    });
B.displayName = "GuildPowerupsMarketingPowerupCards";
let Z = B;
