n.d(t, { Z: () => M }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(200100),
    l = n(793030),
    c = n(442837),
    u = n(481060),
    d = n(434650),
    f = n(906732),
    _ = n(879892),
    p = n(245004),
    h = n(430824),
    m = n(713081),
    g = n(905128),
    E = n(50101),
    b = n(156732),
    y = n(690786),
    v = n(639777),
    O = n(441536),
    I = n(535396),
    S = n(981631),
    T = n(680278),
    N = n(388032),
    A = n(840969),
    C = n(501867);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function L(e) {
    let { guildId: t, powerup: n, onClose: o } = e,
        { analyticsLocations: l } = (0, f.ZP)(),
        c = null != (0, y.Z)(t, n),
        m = (0, v.Z)(t),
        [g, E] = i.useState(!1),
        [I, R] = i.useState(!1),
        w = I,
        L = i.useCallback(() => {
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
        x = i.useCallback(() => {
            o(), (0, O.Z)(t, n.skuId);
        }, [t, n.skuId, o]),
        M = {
            tension: 400,
            friction: 30
        },
        k = (0, u.q_F)({
            transform: w ? 'translateX(-50%) translateY(16px) scale(1)' : 'translateX(-50%) translateY(24px) scale(1.40)',
            borderRadius: '0px',
            transformOrigin: 'center 0%',
            config: M
        }),
        j = (0, u.q_F)({
            y: w ? -25 : 0,
            config: M
        }),
        U = (0, u.q_F)({
            opacity: +!!w,
            transform: w ? 'translateY(0)' : 'translateY(20px)',
            config: M
        }),
        G = i.useCallback((e) => {
            e && E(!0);
        }, []),
        B = (0, d.O)(G),
        V = (0, b.Z)(n, I);
    return (0, r.jsxs)('div', {
        className: a()(C.topPerksCard, C.animatedTopPerksCard, A.powerupCard, { [C.animate]: g }),
        onMouseEnter: () => R(!0),
        onMouseLeave: () => R(!1),
        children: [
            (0, r.jsx)('div', {
                className: C.intObserver,
                ref: B
            }),
            (0, r.jsx)('div', {
                className: C.topPerksCardImageWrapper,
                children: (0, r.jsx)(s.animated.img, {
                    className: a()(C.topPerksCardImage, A.image),
                    src: V,
                    alt: '',
                    style: k
                })
            }),
            (0, r.jsxs)(s.animated.div, {
                style: D(P({}, j), { transform: j.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: a()(C.contentContainer, A.contentContainer),
                children: [
                    (0, r.jsx)(p.xm, {
                        heading: n.title,
                        description: n.description,
                        label: N.NW.formatToPlainString(T.Z.QOacIS, { quantity: n.cost }),
                        isEnabled: c
                    }),
                    (0, r.jsxs)(s.animated.div, {
                        style: U,
                        className: C.buttonsContainer,
                        children: [
                            (0, r.jsx)(u.zxk, {
                                grow: !0,
                                onClick: L,
                                color: u.zxk.Colors.BRAND,
                                className: C.button,
                                children: N.NW.string(N.t['oPAx7+'])
                            }),
                            m &&
                                (0, r.jsx)(u.zxk, {
                                    grow: !0,
                                    onClick: x,
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
            g && (0, r.jsx)('div', { className: C.shineLine })
        ]
    });
}
let x = i.forwardRef((e, t) => {
    var n;
    let { guild: o, onClose: a } = e,
        s = (0, E.Ek)(o.id, 'GuildPowerupsMarketingPowerupCards');
    i.useEffect(() => {
        s && ((0, m.Sn)(o.id), (0, m.Fm)(o.id));
    }, [s, o.id]);
    let u = (0, c.e7)([g.Z], () => g.Z.getStateForGuild(o.id)),
        d = null != (n = null == u ? void 0 : u.catalog.get(I.Us.PERK)) ? n : [];
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
                              L,
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
x.displayName = 'GuildPowerupsMarketingPowerupCards';
let M = x;
