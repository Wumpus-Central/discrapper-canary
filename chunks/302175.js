n.d(t, { Z: () => R }), n(47120), n(266796);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(245004),
    _ = n(713081),
    p = n(905128),
    h = n(50101),
    m = n(690786),
    g = n(535396),
    E = n(730621),
    b = n(388032),
    v = n(840987),
    y = n(782763),
    O = n(952567);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e) {
    let { guildId: t, powerup: n } = e,
        o = null != (0, m.Z)(t, n),
        [l, c] = i.useState(!1),
        [_, p] = i.useState(!1),
        h = _,
        g = i.useCallback(() => {}, []),
        I = i.useCallback(() => {}, []),
        T = {
            tension: 400,
            friction: 30
        },
        A = (0, u.q_F)({
            transform: h ? 'translateX(-50%) translateY(0px) scale(2.40)' : 'translateX(-50%) translateY(32px) scale(1)',
            borderRadius: h ? '7px' : '0px',
            opacity: h ? 0.3 : 1,
            transformOrigin: 'center 0%',
            config: T
        }),
        C = (0, u.q_F)({
            y: h ? -25 : 0,
            config: T
        }),
        R = (0, u.q_F)({
            opacity: +!!h,
            transform: h ? 'translateY(0)' : 'translateY(20px)',
            config: T
        }),
        P = (0, u.q_F)({
            opacity: +!!h,
            config: T
        }),
        w = i.useCallback((e) => {
            e && c(!0);
        }, []),
        D = (0, d.O)(w);
    return (0, r.jsxs)('div', {
        className: a()(y.topPerksCard, y.animatedTopPerksCard, v.powerupCard, { [y.animate]: l }),
        onMouseEnter: () => p(!0),
        onMouseLeave: () => p(!1),
        children: [
            (0, r.jsx)('div', {
                className: y.intObserver,
                ref: D
            }),
            (0, r.jsxs)('div', {
                className: y.topPerksCardImageWrapper,
                children: [
                    (0, r.jsx)(s.animated.img, {
                        className: a()(y.topPerksCardImage, v.image),
                        src: O,
                        alt: '',
                        style: A
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: y.imageGradientOverlay,
                        style: P
                    })
                ]
            }),
            h && (0, r.jsx)('div', { className: y.borderGlowOverlay }),
            (0, r.jsxs)(s.animated.div, {
                style: N(S({}, C), { transform: C.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: a()(y.contentContainer, v.contentContainer),
                children: [
                    (0, r.jsx)(f.xm, {
                        heading: n.title,
                        description: n.description,
                        label: b.NW.formatToPlainString(E.Z.QOacIS, { quantity: n.cost }),
                        isEnabled: o
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: R,
                        className: y.buttonsContainer,
                        children: [
                            null != g &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    color: u.zxk.Colors.BRAND,
                                    className: y.button,
                                    children: b.NW.string(b.t['oPAx7+'])
                                }),
                            null != I &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    color: u.zxk.Colors.PRIMARY,
                                    className: y.button,
                                    children: b.NW.string(b.t.GoCQxc)
                                })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(u.IGR, {
                className: y.topPerksCardNew,
                text: b.NW.string(b.t.y2b7CA)
            }),
            l && (0, r.jsx)('div', { className: y.shineLine })
        ]
    });
}
let C = i.forwardRef((e, t) => {
    var n;
    let { guild: o } = e,
        a = (0, h.Ek)(o, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        a && ((0, _.Sn)(o.id), (0, _.Fm)(o.id));
    }, [a, o.id]);
    let s = (0, c.e7)([p.Z], () => p.Z.getStateForGuild(o.id)),
        u = null !== (n = null == s ? void 0 : s.catalog.get(g.Us.PERK)) && void 0 !== n ? n : [];
    return a && 0 !== u.length
        ? (0, r.jsxs)('div', {
              ref: t,
              className: v.container,
              children: [
                  (0, r.jsx)(l.X6, {
                      variant: 'heading-xxl/extrabold',
                      children: b.NW.string(E.Z.p6HUDQ)
                  }),
                  (0, r.jsx)(l.xv, {
                      variant: 'text-lg/medium',
                      children: b.NW.string(E.Z.MYYPa2)
                  }),
                  (0, r.jsx)('div', {
                      className: v.powerupsContainer,
                      children: u.map((e) =>
                          (0, r.jsx)(
                              A,
                              {
                                  guildId: o.id,
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
C.displayName = 'GuildPowerupsMarketingPowerupCards';
let R = C;
