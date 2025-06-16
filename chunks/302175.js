n.d(t, { Z: () => j }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(524979),
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
    y = n(50101),
    O = n(156732),
    v = n(690786),
    I = n(639777),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function k(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: l } = (0, _.ZP)(),
        c = null != (0, v.Z)(t, n),
        g = (0, I.Z)(t),
        [E, b] = i.useState(!1),
        [y, S] = i.useState(!1),
        w = y,
        L = i.useCallback(() => {
            let e = m.Z.getGuild(t);
            null != e &&
                (0, p.u)({
                    analyticsLocation: {
                        page: A.ZY5.GUILD_POWERUPS_MARKETING,
                        section: A.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: l,
                    guild: e
                });
        }, [t, l]),
        k = i.useCallback(() => {
            a(), (0, T.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, n.skuId);
        }, [t, n.skuId, a]),
        M = {
            tension: 400,
            friction: 30
        },
        j = (0, u.q_F)({
            transform: w ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: M
        }),
        U = (0, u.q_F)({
            y: w ? -25 : 0,
            config: M
        }),
        G = (0, u.q_F)({
            opacity: +!!w,
            transform: w ? 'translateY(0)' : 'translateY(20px)',
            config: M
        }),
        B = i.useCallback((e) => {
            e && b(!0);
        }, []),
        V = (0, d.O)(B),
        F = (0, O.Z)(n, y);
    return (0, r.jsxs)('div', {
        className: o()(P.topPerksCard, P.animatedTopPerksCard, R.powerupCard, { [P.animate]: E }),
        onMouseEnter: () => S(!0),
        onMouseLeave: () => S(!1),
        children: [
            (0, r.jsx)('div', {
                className: P.intObserver,
                ref: V
            }),
            (0, r.jsx)('div', {
                className: P.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(P.topPerksCardImage, R.image),
                    src: F,
                    alt: '',
                    style: j
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: x(D({}, U), { transform: U.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(P.contentContainer, R.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: n.title,
                        description: n.description,
                        label: C.intl.formatToPlainString(N.default.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: G,
                        className: P.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: L,
                                color: u.zxk.Colors.BRAND,
                                className: P.button,
                                children: C.intl.string(C.t['oPAx7+'])
                            }),
                            g &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: k,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: P.button,
                                    children: C.intl.string(C.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: P.topPerksCardNew,
                text: C.intl.string(C.t.y2b7CA)
            }),
            E && (0, r.jsx)('div', { className: P.shineLine })
        ]
    });
}
let M = i.forwardRef((e, t) => {
    var n, a;
    let { guild: o, onClose: s } = e,
        u = (0, y.Ek)(o.id, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        u && (b.Z.shouldFetchCatalogForGuild(o.id) && (0, E.Sn)(o.id), b.Z.shouldFetchPowerupsForGuild(o.id) && (0, E.Fm)(o.id));
    }, [u, o.id]);
    let d = (0, c.e7)([b.Z], () => b.Z.getStateForGuild(o.id)),
        f = null != (a = null == d || null == (n = d.powerupCatalog) ? void 0 : n[S.Us.PERK]) ? a : [];
    return u && 0 !== f.length
        ? (0, r.jsxs)('div', {
              ref: t,
              className: R.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: C.intl.string(N.default.wjI18f)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: C.intl.format(N.default.S562fn, { helpDeskArticle: g.Z.getArticleURL(A.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: R.powerupsContainer,
                      children: f.map((e) =>
                          (0, r.jsx)(
                              k,
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
          })
        : null;
});
M.displayName = 'GuildPowerupsMarketingPowerupCards';
let j = M;
