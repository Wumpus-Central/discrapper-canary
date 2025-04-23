n.d(t, { Z: () => j }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(200100),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(906732),
    _ = n(377171),
    p = n(879892),
    h = n(245004),
    m = n(430824),
    g = n(63063),
    E = n(713081),
    b = n(905128),
    y = n(50101),
    v = n(156732),
    O = n(690786),
    I = n(639777),
    S = n(441536),
    T = n(535396),
    A = n(981631),
    N = n(680278),
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
function M(e) {
    let { guildId: t, powerup: n, onClose: a } = e,
        { analyticsLocations: l } = (0, f.ZP)(),
        c = null != (0, O.Z)(t, n),
        _ = (0, I.Z)(t),
        [g, E] = i.useState(!1),
        [b, y] = i.useState(!1),
        T = b,
        w = i.useCallback(() => {
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
        L = i.useCallback(() => {
            a(), (0, S.Z)(t, n.skuId);
        }, [t, n.skuId, a]),
        M = {
            tension: 400,
            friction: 30
        },
        k = (0, u.q_F)({
            transform: T ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: M
        }),
        j = (0, u.q_F)({
            y: T ? -25 : 0,
            config: M
        }),
        U = (0, u.q_F)({
            opacity: +!!T,
            transform: T ? 'translateY(0)' : 'translateY(20px)',
            config: M
        }),
        G = i.useCallback((e) => {
            e && E(!0);
        }, []),
        B = (0, d.O)(G),
        V = (0, v.Z)(n, b);
    return (0, r.jsxs)('div', {
        className: o()(P.topPerksCard, P.animatedTopPerksCard, R.powerupCard, { [P.animate]: g }),
        onMouseEnter: () => y(!0),
        onMouseLeave: () => y(!1),
        children: [
            (0, r.jsx)('div', {
                className: P.intObserver,
                ref: B
            }),
            (0, r.jsx)('div', {
                className: P.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: o()(P.topPerksCardImage, R.image),
                    src: V,
                    alt: '',
                    style: k
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: x(D({}, j), { transform: j.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: o()(P.contentContainer, R.contentContainer),
                children: [
                    (0, r.jsx)(h.xm, {
                        heading: n.title,
                        description: n.description,
                        label: C.intl.formatToPlainString(N.default.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: U,
                        className: P.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: w,
                                color: u.zxk.Colors.BRAND,
                                className: P.button,
                                children: C.intl.string(C.t['oPAx7+'])
                            }),
                            _ &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: L,
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
            g && (0, r.jsx)('div', { className: P.shineLine })
        ]
    });
}
let k = i.forwardRef((e, t) => {
    var n;
    let { guild: a, onClose: o } = e,
        s = (0, y.Ek)(a.id, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        s && ((0, E.Sn)(a.id), (0, E.Fm)(a.id));
    }, [s, a.id]);
    let d = (0, c.e7)([b.Z], () => b.Z.getStateForGuild(a.id)),
        f = null != (n = null == d ? void 0 : d.powerupCatalog[T.Us.PERK]) ? n : [];
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
                              children: C.intl.string(N.default.wjI18f)
                          }),
                          (0, r.jsx)(u.IGR, {
                              text: C.intl.string(C.t.oW0eUV),
                              color: _.Z.BG_BRAND
                          })
                      ]
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: C.intl.format(N.default.S562fn, { helpDeskArticle: g.Z.getArticleURL(A.BhN.GUILD_BOOSTING_FAQ) })
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
k.displayName = 'GuildPowerupsMarketingPowerupCards';
let j = k;
