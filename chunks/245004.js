n.d(t, {
    Q: () => I,
    Z: () => T
}),
    n(266796),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(413335),
    f = n(50101),
    _ = n(388032),
    p = n(783684),
    h = n(785157),
    g = n(567949),
    m = n(552781),
    E = n(952567),
    v = n(807159);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { description: t, heading: n, imgSrc: o, label: l, isNewPerk: u, animatedCard: f } = e,
        [p, g] = i.useState(!1),
        m = f && p,
        E = {
            tension: 400,
            friction: 30
        },
        v = (0, c.q_F)({
            transform: m ? 'translateX(-50%) translateY(0px) scale(2.25)' : 'translateX(-50%) translateY(32px) scale(1)',
            borderRadius: m ? '7px' : '0px',
            opacity: m ? 0.6 : 1,
            transformOrigin: 'center 0%',
            config: E
        }),
        b = (0, c.q_F)({
            y: m ? -25 : 0,
            config: E
        }),
        O = (0, c.q_F)({
            opacity: +!!m,
            transform: m ? 'translateY(0)' : 'translateY(20px)',
            config: E
        }),
        I = (0, c.q_F)({
            opacity: +!!m,
            config: E
        });
    return (0, r.jsxs)('div', {
        className: a()(h.topPerksCard, { [h.animatedTopPerksCard]: f }),
        onMouseEnter: () => g(!0),
        onMouseLeave: () => g(!1),
        children: [
            (0, r.jsxs)('div', {
                className: h.topPerksCardImageWrapper,
                children: [
                    (0, r.jsx)(s.animated.img, {
                        className: h.topPerksCardImage,
                        src: o,
                        alt: '',
                        style: v
                    }),
                    (0, r.jsx)(s.animated.div, {
                        className: h.imageGradientOverlay,
                        style: I
                    })
                ]
            }),
            m && (0, r.jsx)('div', { className: h.borderGlowOverlay }),
            (0, r.jsxs)(s.animated.div, {
                style: S(y({}, b), { transform: b.y.to((e) => 'translateY('.concat(e, 'px)')) }),
                className: h.contentContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        className: h.topPerksCardHeading,
                        variant: 'heading-lg/extrabold',
                        children: n
                    }),
                    (0, r.jsx)(c.Text, {
                        className: h.topPerksCardDescription,
                        variant: 'text-sm/normal',
                        children: t
                    }),
                    null != l &&
                        (0, r.jsxs)('div', {
                            className: h.topPerksCardLabelContainer,
                            children: [
                                (0, r.jsx)(d.Z, {}),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/semibold',
                                    children: l
                                })
                            ]
                        }),
                    f &&
                        (0, r.jsxs)(s.animated.div, {
                            style: O,
                            className: h.buttonsContainer,
                            children: [
                                (0, r.jsx)(c.zxk, {
                                    color: c.zxk.Colors.BRAND,
                                    className: h.button,
                                    children: _.NW.string(_.t['oPAx7+'])
                                }),
                                (0, r.jsx)(c.zxk, {
                                    color: c.zxk.Colors.PRIMARY,
                                    className: h.button,
                                    children: _.NW.string(_.t.GoCQxc)
                                })
                            ]
                        })
                ]
            }),
            u &&
                (0, r.jsx)(c.IGR, {
                    className: h.topPerksCardNew,
                    text: _.NW.string(_.t.y2b7CA)
                })
        ]
    });
}
let T = function (e) {
    let { guild: t } = e,
        n = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        i = (0, f.Ek)(t, 'GuildBoostingMarketingTopPerksCards');
    return (0, r.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, r.jsx)(c.X6q, {
                className: h.heading,
                variant: 'heading-xxl/extrabold',
                children: _.NW.string(_.t.aGdB3N)
            }),
            (0, r.jsxs)('div', {
                className: h.topPerksCards,
                children: [
                    (0, r.jsx)(I, {
                        description: _.NW.string(_.t.HTvLGh),
                        heading: _.NW.string(_.t.IpRQw8),
                        imgSrc: E,
                        label: i ? _.NW.string(p.Z.na6fmJ) : void 0
                    }),
                    (0, r.jsx)(I, {
                        description: _.NW.string(_.t.wOYbTk),
                        heading: _.NW.string(_.t.G6jZo6),
                        imgSrc: n ? m : g,
                        label: i ? _.NW.string(p.Z.dyNT9v) : void 0
                    }),
                    (0, r.jsx)(I, {
                        description: _.NW.string(_.t.yCjoUF),
                        heading: _.NW.string(_.t['/bX4Ji']),
                        imgSrc: v,
                        label: i ? _.NW.string(p.Z['8AEGEx']) : void 0
                    })
                ]
            })
        ]
    });
};
