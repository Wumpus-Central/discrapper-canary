(n.d(t, { Z: () => j }), n(388685), n(953529));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(71347),
    l = n(793030),
    c = n(442837),
    u = n(755721),
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
    O = n(156732),
    v = n(639777),
    I = n(973772),
    T = n(441536),
    S = n(535396),
    A = n(981631),
    N = n(93841),
    C = n(388032),
    R = n(840969),
    P = n(501867);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: l } = (0, p.ZP)(),
        c = (0, I.Z)(t, n).type !== S.A3.INACTIVE,
        E = (0, v.Z)(t),
        [b, y] = i.useState(!1),
        [w, L] = i.useState(!1),
        M = w,
        k = i.useCallback(() => {
            let e = g.Z.getGuild(t);
            null != e &&
                (0, h.u)({
                    analyticsLocation: {
                        page: A.ZY5.GUILD_POWERUPS_MARKETING,
                        section: A.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: l,
                    guild: e
                });
        }, [t, l]),
        j = i.useCallback(() => {
            (a(), (0, T.Z)(t, _.Z.GUILD_POWERUPS_MARKETING, n.skuId));
        }, [t, n.skuId, a]),
        U = {
            tension: 400,
            friction: 30
        },
        G = (0, d.q_F)({
            transform: M ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: U
        }),
        B = (0, d.q_F)({
            y: M ? -25 : 0,
            config: U
        }),
        V = (0, d.q_F)({
            opacity: +!!M,
            transform: M ? 'translateY(0)' : 'translateY(20px)',
            config: U
        }),
        F = i.useCallback((e) => {
            e && y(!0);
        }, []),
        Z = (0, f.O)(F),
        H = (0, O.Z)(n, w);
    return (0, r.jsxs)('div', {
        className: o()(P.topPerksCard, P.animatedTopPerksCard, R.powerupCard, { [P.animate]: b }),
        onMouseEnter: () => L(!0),
        onMouseLeave: () => L(!1),
        children: [
            (0, r.jsx)('div', {
                className: P.intObserver,
                ref: Z
            }),
            (0, r.jsx)('div', {
                className: P.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(P.topPerksCardImage, R.image),
                    src: H,
                    alt: '',
                    style: G
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: x(D({}, B), { transform: B.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(P.contentContainer, R.contentContainer),
                children: [
                    (0, r.jsx)(m.xm, {
                        heading: n.title,
                        description: n.description,
                        label: C.intl.formatToPlainString(N.default.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: V,
                        className: P.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zx, {
                                grow: !0,
                                onClick: k,
                                color: u.zx.Colors.BRAND,
                                className: P.button,
                                children: C.intl.string(C.t['oPAx7+'])
                            }),
                            E &&
                                (0, r.jsx)(u.zx, {
                                    grow: !0,
                                    onClick: j,
                                    color: u.zx.Colors.PRIMARY,
                                    className: P.button,
                                    children: C.intl.string(C.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(d.IGR, {
                className: P.topPerksCardNew,
                text: C.intl.string(C.t.y2b7CA)
            }),
            b && (0, r.jsx)('div', { className: P.shineLine })
        ]
    });
}
let k = i.forwardRef((e, t) => {
    var n, a;
    let { guild: o, onClose: s } = e;
    i.useEffect(() => {
        (y.Z.shouldFetchCatalogForGuild(o.id) && (0, b.Sn)(o.id), y.Z.shouldFetchPowerupsForGuild(o.id) && (0, b.Fm)(o.id));
    }, [o.id]);
    let u = (0, c.e7)([y.Z], () => y.Z.getStateForGuild(o.id)),
        d = null != (a = null == u || null == (n = u.powerupCatalog) ? void 0 : n[S.Us.PERK]) ? a : [];
    return 0 === d.length
        ? null
        : (0, r.jsxs)('div', {
              ref: t,
              className: R.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: C.intl.string(N.default.wjI18f)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: C.intl.format(N.default.S562fn, { helpDeskArticle: E.Z.getArticleURL(A.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: R.powerupsContainer,
                      children: d.map((e) =>
                          (0, r.jsx)(
                              M,
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
k.displayName = 'GuildPowerupsMarketingPowerupCards';
let j = k;
