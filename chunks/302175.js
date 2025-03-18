n.d(t, { Z: () => C }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(481060),
    u = n(434650),
    d = n(245004),
    f = n(713081),
    _ = n(50101),
    p = n(690786),
    h = n(111360),
    m = n(535396),
    g = n(730621),
    E = n(388032),
    b = n(840987),
    v = n(782763),
    y = n(952567);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { guildId: t, powerup: n } = e,
        o = null != (0, p.Z)(t, n),
        [l, f] = i.useState(!1),
        [_, h] = i.useState(!1),
        m = _,
        O = i.useCallback(() => {}, []),
        S = i.useCallback(() => {}, []),
        N = {
            tension: 400,
            friction: 30
        },
        A = (0, c.q_F)({
            transform: m ? 'translateX(-50%) translateY(0px) scale(2.40)' : 'translateX(-50%) translateY(32px) scale(1)',
            borderRadius: m ? '7px' : '0px',
            opacity: m ? 0.3 : 1,
            transformOrigin: 'center 0%',
            config: N
        }),
        C = (0, c.q_F)({
            y: m ? -25 : 0,
            config: N
        }),
        R = (0, c.q_F)({
            opacity: +!!m,
            transform: m ? 'translateY(0)' : 'translateY(20px)',
            config: N
        }),
        P = (0, c.q_F)({
            opacity: +!!m,
            config: N
        }),
        w = i.useCallback((e) => {
            e && f(!0);
        }, []),
        D = (0, u.O)(w);
    return (0, r.jsxs)('div', {
        className: a()(v.topPerksCard, v.animatedTopPerksCard, b.powerupCard, { [v.animate]: l }),
        onMouseEnter: () => h(!0),
        onMouseLeave: () => h(!1),
        children: [
            (0, r.jsx)('div', {
                className: v.intObserver,
                ref: D
            }),
            (0, r.jsxs)('div', {
                className: v.topPerksCardImageWrapper,
                children: [
                    (0, r.jsx)(s.animated.img, {
                        className: a()(v.topPerksCardImage, b.image),
                        src: y,
                        alt: '',
                        style: A
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: v.imageGradientOverlay,
                        style: P
                    })
                ]
            }),
            m && (0, r.jsx)('div', { className: v.borderGlowOverlay }),
            (0, r.jsxs)(s.animated.div, {
                style: T(I({}, C), { transform: C.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: a()(v.contentContainer, b.contentContainer),
                children: [
                    (0, r.jsx)(d.xm, {
                        heading: n.title,
                        description: n.description,
                        label: E.NW.formatToPlainString(g.Z.QOacIS, { quantity: n.cost }),
                        isEnabled: o
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: R,
                        className: v.buttonsContainer,
                        children: [
                            null != O &&
                                (0, r.jsx)(c.zxk, {
                                    grow: !0,
                                    color: c.zxk.Colors.BRAND,
                                    className: v.button,
                                    children: E.NW.string(E.t['oPAx7+'])
                                }),
                            null != S &&
                                (0, r.jsx)(c.zxk, {
                                    grow: !0,
                                    color: c.zxk.Colors.PRIMARY,
                                    className: v.button,
                                    children: E.NW.string(E.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.IGR, {
                className: v.topPerksCardNew,
                text: E.NW.string(E.t.y2b7CA)
            }),
            l && (0, r.jsx)('div', { className: v.shineLine })
        ]
    });
}
let A = i.forwardRef((e, t) => {
    var n, o, a;
    let { guild: s } = e,
        c = (0, _.Ek)(s, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        c && ((0, f.Sn)(s.id), (0, f.Fm)(s.id));
    }, [c, s.id]);
    let u = (0, h.Z)(s.id);
    return c && null != u && (null !== (a = null === (n = u.get(m.Us.PERK)) || void 0 === n ? void 0 : n.length) && void 0 !== a ? a : 0) !== 0
        ? (0, r.jsxs)('div', {
              ref: t,
              className: b.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: E.NW.string(g.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: E.NW.string(g.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: b.powerupsContainer,
                      children:
                          null === (o = u.get(m.Us.PERK)) || void 0 === o
                              ? void 0
                              : o.map((e) =>
                                    (0, r.jsx)(
                                        N,
                                        {
                                            guildId: s.id,
                                            powerup: e
                                        },
                                        'guild-powerup-marketing-'.concat(e.skuId)
                                    )
                                )
                  })
              ]
          })
        : null;
});
A.displayName = 'GuildPowerupsMarketingPowerupCards';
let C = A;
