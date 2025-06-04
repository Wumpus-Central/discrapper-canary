n.d(t, { Z: () => U }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(386230),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(100527),
    _ = n(906732),
    p = n(377171),
    h = n(879892),
    m = n(245004),
    g = n(430824),
    E = n(63063),
    b = n(713081),
    y = n(905128),
    O = n(50101),
    v = n(156732),
    I = n(690786),
    S = n(639777),
    T = n(441536),
    A = n(535396),
    N = n(981631),
    C = n(155457),
    P = n(388032),
    R = n(840969),
    w = n(501867);
function D(e, t, n) {
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
function L(e) {
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
function k(e, t) {
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
function M(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: l } = (0, _.ZP)(),
        c = null != (0, I.Z)(t, n),
        p = (0, S.Z)(t),
        [E, b] = i.useState(!1),
        [y, O] = i.useState(!1),
        A = y,
        D = i.useCallback(() => {
            let e = g.Z.getGuild(t);
            null != e &&
                (0, h.u)({
                    analyticsLocation: {
                        page: N.ZY5.GUILD_POWERUPS_MARKETING,
                        section: N.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: l,
                    guild: e
                });
        }, [t, l]),
        x = i.useCallback(() => {
            a(), (0, T.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, n.skuId);
        }, [t, n.skuId, a]),
        M = {
            tension: 400,
            friction: 30
        },
        j = (0, u.q_F)({
            transform: A ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: M
        }),
        U = (0, u.q_F)({
            y: A ? -25 : 0,
            config: M
        }),
        G = (0, u.q_F)({
            opacity: +!!A,
            transform: A ? 'translateY(0)' : 'translateY(20px)',
            config: M
        }),
        B = i.useCallback((e) => {
            e && b(!0);
        }, []),
        F = (0, d.O)(B),
        V = (0, v.Z)(n, y);
    return (0, r.jsxs)('div', {
        className: o()(w.topPerksCard, w.animatedTopPerksCard, R.powerupCard, { [w.animate]: E }),
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: [
            (0, r.jsx)('div', {
                className: w.intObserver,
                ref: F
            }),
            (0, r.jsx)('div', {
                className: w.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(w.topPerksCardImage, R.image),
                    src: V,
                    alt: '',
                    style: j
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: k(L({}, U), { transform: U.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(w.contentContainer, R.contentContainer),
                children: [
                    (0, r.jsx)(m.xm, {
                        heading: n.title,
                        description: n.description,
                        label: P.intl.formatToPlainString(C.default.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: G,
                        className: w.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: D,
                                color: u.zxk.Colors.BRAND,
                                className: w.button,
                                children: P.intl.string(P.t['oPAx7+'])
                            }),
                            p &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: x,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: w.button,
                                    children: P.intl.string(P.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: w.topPerksCardNew,
                text: P.intl.string(P.t.y2b7CA)
            }),
            E && (0, r.jsx)('div', { className: w.shineLine })
        ]
    });
}
let j = i.forwardRef((e, t) => {
    var n;
    let { guild: a, onClose: o } = e,
        s = (0, O.Ek)(a.id, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        s && (y.Z.shouldFetchCatalogForGuild(a.id) && (0, b.Sn)(a.id), y.Z.shouldFetchPowerupsForGuild(a.id) && (0, b.Fm)(a.id));
    }, [s, a.id]);
    let d = (0, c.e7)([y.Z], () => y.Z.getStateForGuild(a.id)),
        f = null != (n = null == d ? void 0 : d.powerupCatalog[A.Us.PERK]) ? n : [];
    return s && 0 !== f.length
        ? (0, r.jsxs)('div', {
              ref: t,
              className: R.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: R.headerContainer,
                      children: [
                          (0, r.jsx)(l.X6, {
                              variant: 'heading-xxl/extrabold',
                              children: P.intl.string(C.default.wjI18f)
                          }),
                          (0, r.jsx)(u.IGR, {
                              text: P.intl.string(P.t.oW0eUV),
                              color: p.Z.BG_BRAND
                          })
                      ]
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: P.intl.format(C.default.S562fn, { helpDeskArticle: E.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: R.powerupsContainer,
                      children: f.map((e) =>
                          (0, r.jsx)(
                              M,
                              {
                                  guildId: a.id,
                                  powerup: e,
                                  onClose: o
                              },
                              'guild-powerup-marketing-'.concat(e.skuId)
                          )
                      )
                  })
              ]
          })
        : null;
});
j.displayName = 'GuildPowerupsMarketingPowerupCards';
let U = j;
