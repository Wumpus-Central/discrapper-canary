(n.d(t, { Z: () => k }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(264738),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(100527),
    _ = n(906732),
    p = n(879892),
    h = n(245004),
    m = n(430824),
    g = n(63063),
    E = n(713081),
    b = n(905128),
    y = n(156732),
    O = n(690786),
    v = n(639777),
    I = n(441536),
    T = n(535396),
    S = n(981631),
    A = n(93841),
    N = n(388032),
    C = n(840969),
    R = n(501867);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: l } = (0, _.ZP)(),
        c = null != (0, O.Z)(t, n),
        g = (0, v.Z)(t),
        [E, b] = i.useState(!1),
        [T, P] = i.useState(!1),
        D = T,
        x = i.useCallback(() => {
            let e = m.Z.getGuild(t);
            null != e &&
                (0, p.u)({
                    analyticsLocation: {
                        page: S.ZY5.GUILD_POWERUPS_MARKETING,
                        section: S.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: l,
                    guild: e
                });
        }, [t, l]),
        M = i.useCallback(() => {
            (a(), (0, I.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, n.skuId));
        }, [t, n.skuId, a]),
        k = {
            tension: 400,
            friction: 30
        },
        j = (0, u.q_F)({
            transform: D ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: k
        }),
        U = (0, u.q_F)({
            y: D ? -25 : 0,
            config: k
        }),
        G = (0, u.q_F)({
            opacity: +!!D,
            transform: D ? 'translateY(0)' : 'translateY(20px)',
            config: k
        }),
        B = i.useCallback((e) => {
            e && b(!0);
        }, []),
        V = (0, d.O)(B),
        F = (0, y.Z)(n, T);
    return (0, r.jsxs)('div', {
        className: o()(R.topPerksCard, R.animatedTopPerksCard, C.powerupCard, { [R.animate]: E }),
        onMouseEnter: () => P(!0),
        onMouseLeave: () => P(!1),
        children: [
            (0, r.jsx)('div', {
                className: R.intObserver,
                ref: V
            }),
            (0, r.jsx)('div', {
                className: R.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(R.topPerksCardImage, C.image),
                    src: F,
                    alt: '',
                    style: j
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: L(w({}, U), { transform: U.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(R.contentContainer, C.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: n.title,
                        description: n.description,
                        label: N.intl.formatToPlainString(A.default.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: G,
                        className: R.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: x,
                                color: u.zxk.Colors.BRAND,
                                className: R.button,
                                children: N.intl.string(N.t['oPAx7+'])
                            }),
                            g &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: M,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: R.button,
                                    children: N.intl.string(N.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: R.topPerksCardNew,
                text: N.intl.string(N.t.y2b7CA)
            }),
            E && (0, r.jsx)('div', { className: R.shineLine })
        ]
    });
}
let M = i.forwardRef((e, t) => {
    var n, a;
    let { guild: o, onClose: s } = e;
    i.useEffect(() => {
        (b.Z.shouldFetchCatalogForGuild(o.id) && (0, E.Sn)(o.id), b.Z.shouldFetchPowerupsForGuild(o.id) && (0, E.Fm)(o.id));
    }, [o.id]);
    let u = (0, c.e7)([b.Z], () => b.Z.getStateForGuild(o.id)),
        d = null != (a = null == u || null == (n = u.powerupCatalog) ? void 0 : n[T.Us.PERK]) ? a : [];
    return 0 === d.length
        ? null
        : (0, r.jsxs)('div', {
              ref: t,
              className: C.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: N.intl.string(A.default.wjI18f)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: N.intl.format(A.default.S562fn, { helpDeskArticle: g.Z.getArticleURL(S.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: C.powerupsContainer,
                      children: d.map((e) =>
                          (0, r.jsx)(
                              x,
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
M.displayName = 'GuildPowerupsMarketingPowerupCards';
let k = M;
