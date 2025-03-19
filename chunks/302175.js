n.d(t, { Z: () => k }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(906732),
    _ = n(879892),
    p = n(245004),
    h = n(430824),
    m = n(496675),
    g = n(713081),
    E = n(905128),
    b = n(50101),
    v = n(690786),
    y = n(639777),
    O = n(441536),
    I = n(535396),
    S = n(981631),
    T = n(367123),
    N = n(388032),
    A = n(840987),
    C = n(782763),
    R = n(952567);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    let { guildId: t, powerup: n, onClose: o } = e,
        { analyticsLocations: l } = (0, f.ZP)(),
        g = null != (0, v.Z)(t, n),
        E = (0, c.e7)([h.Z, m.Z], () => (0, y.D)(m.Z, h.Z.getGuild(t))),
        [b, I] = i.useState(!1),
        [P, D] = i.useState(!1),
        x = P,
        M = i.useCallback(() => {
            let e = h.Z.getGuild(t);
            null != e &&
                (0, _.u)({
                    analyticsLocation: {
                        page: S.ZY5.GUILD_POWERUPS_MARKETING,
                        section: S.jXE.GUILD_POWERUPS_MARKETING_PERKS_SECTION
                    },
                    numberOfBoostsToAdd: 1,
                    analyticsLocations: l,
                    guild: e
                });
        }, [t, l]),
        k = i.useCallback(() => {
            o(), (0, O.Z)(t, n.skuId);
        }, [t, n.skuId, o]),
        j = {
            tension: 400,
            friction: 30
        },
        U = (0, u.q_F)({
            transform: x ? 'translateX(-50%) translateY(0px) scale(2.40)' : 'translateX(-50%) translateY(32px) scale(1)',
            borderRadius: x ? '7px' : '0px',
            opacity: x ? 0.3 : 1,
            transformOrigin: 'center 0%',
            config: j
        }),
        G = (0, u.q_F)({
            y: x ? -25 : 0,
            config: j
        }),
        B = (0, u.q_F)({
            opacity: +!!x,
            transform: x ? 'translateY(0)' : 'translateY(20px)',
            config: j
        }),
        F = (0, u.q_F)({
            opacity: +!!x,
            config: j
        }),
        V = i.useCallback((e) => {
            e && I(!0);
        }, []),
        Z = (0, d.O)(V);
    return (0, r.jsxs)('div', {
        className: a()(C.topPerksCard, C.animatedTopPerksCard, A.powerupCard, { [C.animate]: b }),
        onMouseEnter: () => D(!0),
        onMouseLeave: () => D(!1),
        children: [
            (0, r.jsx)('div', {
                className: C.intObserver,
                ref: Z
            }),
            (0, r.jsxs)('div', {
                className: C.topPerksCardImageWrapper,
                children: [
                    (0, r.jsx)(s.animated.img, {
                        className: a()(C.topPerksCardImage, A.image),
                        src: R,
                        alt: '',
                        style: U
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: C.imageGradientOverlay,
                        style: F
                    })
                ]
            }),
            x && (0, r.jsx)('div', { className: C.borderGlowOverlay }),
            (0, r.jsxs)(s.animated.div, {
                style: L(w({}, G), { transform: G.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: a()(C.contentContainer, A.contentContainer),
                children: [
                    (0, r.jsx)(p.xm, {
                        heading: n.title,
                        description: n.description,
                        label: N.NW.formatToPlainString(T.Z.QOacIS, { quantity: n.cost }),
                        isEnabled: g
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: B,
                        className: C.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: M,
                                color: u.zxk.Colors.BRAND,
                                className: C.button,
                                children: N.NW.string(N.t['oPAx7+'])
                            }),
                            E &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: k,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: C.button,
                                    children: N.NW.string(N.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: C.topPerksCardNew,
                text: N.NW.string(N.t.y2b7CA)
            }),
            b && (0, r.jsx)('div', { className: C.shineLine })
        ]
    });
}
let M = i.forwardRef((e, t) => {
    var n;
    let { guild: o, onClose: a } = e,
        s = (0, b.Ek)(o, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        s && ((0, g.Sn)(o.id), (0, g.Fm)(o.id));
    }, [s, o.id]);
    let u = (0, c.e7)([E.Z], () => E.Z.getStateForGuild(o.id)),
        d = null !== (n = null == u ? void 0 : u.catalog.get(I.Us.PERK)) && void 0 !== n ? n : [];
    return s && 0 !== d.length
        ? (0, r.jsxs)('div', {
              ref: t,
              className: A.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: N.NW.string(T.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: N.NW.string(T.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: A.powerupsContainer,
                      children: d.map((e) =>
                          (0, r.jsx)(
                              x,
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
M.displayName = 'GuildPowerupsMarketingPowerupCards';
let k = M;
