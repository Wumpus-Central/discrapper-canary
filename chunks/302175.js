(n.d(t, { Z: () => B }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(66546),
    l = n(831209),
    c = n(494497),
    u = n(793030),
    d = n(442837),
    f = n(755721),
    _ = n(481060),
    p = n(434650),
    h = n(100527),
    m = n(906732),
    g = n(879892),
    E = n(245004),
    b = n(430824),
    y = n(63063),
    O = n(713081),
    v = n(905128),
    I = n(158638),
    T = n(156732),
    S = n(639777),
    A = n(973772),
    N = n(441536),
    C = n(535396),
    R = n(981631),
    P = n(93841),
    w = n(388032),
    D = n(840969),
    L = n(501867);
function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                x(e, t, n[t]);
            }));
    }
    return e;
}
function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function U(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: u } = (0, m.ZP)(),
        d = (0, I.g1)(t, 'GuildPowerupMarketingPowerupCard'),
        y = n.skuId === c.A$,
        O = (0, A.Z)(t, n).type !== C.A3.INACTIVE,
        v = (0, S.Z)(t),
        [x, M] = i.useState(!1),
        [U, G] = i.useState(!1),
        B = U,
        V = i.useCallback(() => {
            let e = b.Z.getGuild(t);
            null != e &&
                (0, g.u)({
                    analyticsLocation: {
                        page: R.ZY5.GUILD_POWERUPS_MARKETING,
                        section: R.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: u,
                    guild: e
                });
        }, [t, u]),
        F = i.useCallback(() => {
            (a(), (0, N.Z)(t, h.Z.GUILD_POWERUPS_MARKETING, n.skuId));
        }, [t, n.skuId, a]),
        Z = {
            tension: 400,
            friction: 30
        },
        H = (0, _.q_F)({
            transform: B ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: Z
        }),
        Y = (0, _.q_F)({
            y: B ? -25 : 0,
            config: Z
        }),
        W = (0, _.q_F)({
            opacity: +!!B,
            transform: B ? 'translateY(0)' : 'translateY(20px)',
            config: Z
        }),
        K = i.useCallback((e) => {
            e && M(!0);
        }, []),
        z = (0, p.O)(K),
        q = (0, T.Z)(n, U);
    return (0, r.jsxs)('div', {
        className: o()(L.topPerksCard, L.animatedTopPerksCard, D.powerupCard, { [L.animate]: x }),
        onMouseEnter: () => G(!0),
        onMouseLeave: () => G(!1),
        children: [
            (0, r.jsx)('div', {
                className: L.intObserver,
                ref: z
            }),
            (0, r.jsx)('div', {
                className: L.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(L.topPerksCardImage, D.image),
                    src: q,
                    alt: '',
                    style: H
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: j(k({}, Y), { transform: Y.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(L.contentContainer, D.contentContainer),
                children: [
                    (0, r.jsx)(E.xm, {
                        heading: n.title,
                        description: n.description,
                        label: w.intl.formatToPlainString(P.default.QOacIS, { quantity: n.cost }),
                        isEnabled: O
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: W,
                        className: L.buttonsContainer,
                        children: [
                            (0, r.jsx)(f.zx, {
                                grow: !0,
                                onClick: V,
                                color: f.zx.Colors.BRAND,
                                className: L.button,
                                children: w.intl.string(w.t['oPAx7+'])
                            }),
                            v &&
                                (0, r.jsx)(f.zx, {
                                    grow: !0,
                                    onClick: F,
                                    color: f.zx.Colors.PRIMARY,
                                    className: L.button,
                                    children: w.intl.string(w.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            !d &&
                !y &&
                (0, r.jsx)(_.IGR, {
                    className: L.topPerksCardNew,
                    text: w.intl.string(w.t.y2b7CA)
                }),
            y &&
                (0, r.jsx)(_.IGR, {
                    className: L.topPerksCardNew,
                    text: w.intl.string(w.t.oW0eUV),
                    color: l.Z.BG_BRAND
                }),
            x && (0, r.jsx)('div', { className: L.shineLine })
        ]
    });
}
let G = i.forwardRef((e, t) => {
    var n, a;
    let { guild: o, onClose: s } = e;
    i.useEffect(() => {
        (v.Z.shouldFetchCatalogForGuild(o.id) && (0, O.Sn)(o.id), v.Z.shouldFetchPowerupsForGuild(o.id) && (0, O.Fm)(o.id));
    }, [o.id]);
    let l = (0, d.e7)([v.Z], () => v.Z.getStateForGuild(o.id)),
        c = (null != (a = null == l || null == (n = l.powerupCatalog) ? void 0 : n[C.Us.PERK]) ? a : []).slice(0, 3);
    return 0 === c.length
        ? null
        : (0, r.jsxs)('div', {
              ref: t,
              className: D.container,
              children: [
                  (0, r.jsx)(u.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: w.intl.string(P.default.wjI18f)
                  }),
                  (0, r.jsx)(u.xv, {
                      variant: 'text-lg/medium',
                      children: w.intl.format(P.default.S562fn, { helpDeskArticle: y.Z.getArticleURL(R.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: D.powerupsContainer,
                      children: c.map((e) =>
                          (0, r.jsx)(
                              U,
                              {
                                  guildId: o.id,
                                  powerup: e,
                                  onClose: s
                              },
                              'guild-powerup-marketing-'.concat(e.skuId)
                          )
                      )
                  })
              ]
          });
});
G.displayName = 'GuildPowerupsMarketingPowerupCards';
let B = G;
