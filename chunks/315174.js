n.d(t, { ZP: () => j }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    p = n(695346),
    h = n(768581),
    f = n(358555),
    g = n(981631),
    m = n(647086),
    b = n(388032),
    v = n(252189);
function y(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: d } = i.springs,
        f = p.QK.getSetting(),
        g = (0, u.Q3)('AnimatedBanner') ? 150 : 90;
    return (0, r.jsx)(a.animated.div, {
        className: v.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * g, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(v.bannerImage, { [v.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (f ? 'translateY('.concat((1 - e) * g * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * g, 'px)'))) },
            children: (0, r.jsx)('img', {
                className: o()(v.bannerImg, { [v.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = h.ZP.getGuildBannerURL(
                            {
                                id: n.id,
                                banner: l
                            },
                            c
                        )) && void 0 !== t
                        ? t
                        : '',
                alt: '',
                'aria-hidden': !0
            })
        })
    });
}
function _(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        u = t.hasFeature(g.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: v.communityInfo,
            children:
                u &&
                (0, r.jsx)(c.ua7, {
                    text: b.NW.string(b.t.O8lDIy),
                    position: 'right',
                    children: (e) => {
                        var t, n;
                        return (0, r.jsxs)(
                            'div',
                            ((t = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ className: v.communityInfoPill }, e)),
                            (n = n =
                                {
                                    children: [
                                        (0, r.jsx)(c.enf, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 12,
                                            height: 12,
                                            className: v.communityIcon
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'none',
                                            children: b.NW.string(b.t['B/vjCg'])
                                        })
                                    ]
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(v.communityInfoContainer, v.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: v.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function O() {
    return (0, r.jsx)(c.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: v.favoritesIcon,
        height: 20,
        width: 20
    });
}
let j = i.memo(function (e) {
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: j, onMouseDown: C, disableBannerAnimation: x, 'aria-expanded': P, 'aria-controls': S, guild: I, guildBanner: N, animationOverlayHeight: Z, children: w, headerClassName: E, communityInfoVisible: T, hasSubheader: A } = e,
        D = I.hasFeature(g.oNc.ANIMATED_BANNER),
        R = (0, d.Z)(I),
        L = !R && I.hasCommunityInfoSubheader(),
        M = !R && T,
        k = (0, h.xR)(N) && D && !x,
        [G, B] = i.useState(!1),
        U = i.useRef(),
        W = i.useRef(null),
        V = i.useRef(),
        F = p.QK.getSetting();
    i.useEffect(() => {
        if (k && t && !U.current && F)
            return (
                B(!0),
                (V.current = setTimeout(() => {
                    B(!1);
                }, 5000)),
                () => {
                    clearTimeout(V.current);
                }
            );
    }, [k, t, F]),
        i.useEffect(() => {
            U.current = t;
        }, [t]);
    let H = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        z = (0, u.Q3)('GuildHeader');
    return (0, r.jsx)(c.f6W, {
        theme: t ? g.BRd.DARK : void 0,
        children: (e) => {
            var i;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: W,
                        className: o()(l, {
                            [v.container]: !0,
                            [v.clickable]: null != a,
                            [v.selected]: null != a && P,
                            [v.hasBanner]: H(),
                            [v.bannerVisible]: t,
                            [e]: !z && t,
                            [v.communityInfoVisible]: M || (A && L)
                        }),
                        onMouseDown: C,
                        onContextMenu: j,
                        onClick: a,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(v.header, E, { [v.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: o()(v.headerContent, v.primaryInfo),
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                guild: I,
                                                isBannerVisible: t
                                            }),
                                            I.id === m._ && (0, r.jsx)(O, {}),
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: v.name,
                                                children: I.toString()
                                            }),
                                            null != a &&
                                                (0, r.jsx)(c.P3F, {
                                                    className: v.headerButton,
                                                    'aria-controls': S,
                                                    'aria-expanded': P,
                                                    focusProps: {
                                                        ringTarget: W,
                                                        offset: 4
                                                    },
                                                    onClick: a,
                                                    onContextMenu: j,
                                                    'aria-label': b.NW.formatToPlainString(b.t.xMXpl5, { guildName: null !== (i = null == I ? void 0 : I.toString()) && void 0 !== i ? i : '' })
                                                }),
                                            (0, r.jsx)('div', {
                                                className: v.headerChildren,
                                                children: w
                                            })
                                        ]
                                    }),
                                    L &&
                                        (0, r.jsx)(_, {
                                            guild: I,
                                            controller: n,
                                            hasBanner: null != N,
                                            hasSubheader: null != A && A
                                        })
                                ]
                            }),
                            null != N
                                ? (0, r.jsx)(y, {
                                      guild: I,
                                      controller: n,
                                      guildBanner: N,
                                      animate: G
                                  })
                                : null
                        ]
                    }),
                    k && H()
                        ? (0, r.jsx)('div', {
                              className: v.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  B(!0), clearTimeout(V.current);
                              },
                              onMouseLeave: () => B(!1),
                              style: { height: Z }
                          })
                        : null
                ]
            });
        }
    });
});
