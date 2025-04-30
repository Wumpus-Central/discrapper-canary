n.d(t, { Z: () => U }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(272573),
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
    C = n(680278),
    R = n(388032),
    P = n(840969),
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
function M(e, t) {
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
function k(e) {
    let { guildId: t, powerup: n, onClose: o } = e,
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
            o(), (0, T.Z)(t, f.Z.GUILD_POWERUPS_MARKETING, n.skuId);
        }, [t, n.skuId, o]),
        k = {
            tension: 400,
            friction: 30
        },
        j = (0, u.q_F)({
            transform: A ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: k
        }),
        U = (0, u.q_F)({
            y: A ? -25 : 0,
            config: k
        }),
        G = (0, u.q_F)({
            opacity: +!!A,
            transform: A ? 'translateY(0)' : 'translateY(20px)',
            config: k
        }),
        B = i.useCallback((e) => {
            e && b(!0);
        }, []),
        V = (0, d.O)(B),
        F = (0, v.Z)(n, y);
    return (0, r.jsxs)('div', {
        className: a()(w.topPerksCard, w.animatedTopPerksCard, P.powerupCard, { [w.animate]: E }),
        onMouseEnter: () => O(!0),
        onMouseLeave: () => O(!1),
        children: [
            (0, r.jsx)('div', {
                className: w.intObserver,
                ref: V
            }),
            (0, r.jsx)('div', {
                className: w.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: a()(w.topPerksCardImage, P.image),
                    src: F,
                    alt: '',
                    style: j
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: M(L({}, U), { transform: U.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: a()(w.contentContainer, P.contentContainer),
                children: [
                    (0, r.jsx)(m.xm, {
                        heading: n.title,
                        description: n.description,
                        label: R.intl.formatToPlainString(C.default.QOacIS, { quantity: n.cost }),
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
                                children: R.intl.string(R.t['oPAx7+'])
                            }),
                            p &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: x,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: w.button,
                                    children: R.intl.string(R.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: w.topPerksCardNew,
                text: R.intl.string(R.t.y2b7CA)
            }),
            E && (0, r.jsx)('div', { className: w.shineLine })
        ]
    });
}
let j = i.forwardRef((e, t) => {
    var n;
    let { guild: o, onClose: a } = e,
        s = (0, O.Ek)(o.id, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        s && ((0, b.Sn)(o.id), (0, b.Fm)(o.id));
    }, [s, o.id]);
    let d = (0, c.e7)([y.Z], () => y.Z.getStateForGuild(o.id)),
        f = null != (n = null == d ? void 0 : d.powerupCatalog[A.Us.PERK]) ? n : [];
    return s && 0 !== f.length
        ? (0, r.jsxs)('div', {
              ref: t,
              className: P.container,
              children: [
                  (0, r.jsxs)('div', {
                      className: P.headerContainer,
                      children: [
                          (0, r.jsx)(l.X6, {
                              variant: 'heading-xxl/extrabold',
                              children: R.intl.string(C.default.wjI18f)
                          }),
                          (0, r.jsx)(u.IGR, {
                              text: R.intl.string(R.t.oW0eUV),
                              color: p.Z.BG_BRAND
                          })
                      ]
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: R.intl.format(C.default.S562fn, { helpDeskArticle: E.Z.getArticleURL(N.BhN.GUILD_BOOSTING_FAQ) })
                  }),
                  (0, r.jsx)('div', {
                      className: P.powerupsContainer,
                      children: f.map((e) =>
                          (0, r.jsx)(
                              k,
                              {
                                  guildId: o.id,
                                  powerup: e,
                                  onClose: a
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
