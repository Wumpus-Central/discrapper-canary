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
    v = n(15256);
function y(e) {
    var t;
    let { isRefreshEnabled: n, guild: i, controller: l, guildBanner: c, animate: u } = e,
        { value: d } = l.springs,
        f = p.QK.getSetting();
    return (0, r.jsx)(a.animated.div, {
        className: v.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(v.bannerImage, { [v.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !f ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(v.bannerImg, { [v.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = h.ZP.getGuildBannerURL(
                            {
                                id: i.id,
                                banner: c
                            },
                            u
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
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: j, onMouseDown: x, disableBannerAnimation: S, 'aria-expanded': P, 'aria-controls': I, guild: N, guildBanner: Z, animationOverlayHeight: E, children: w, headerClassName: T, communityInfoVisible: A, hasSubheader: D } = e,
        R = N.hasFeature(g.oNc.ANIMATED_BANNER),
        L = (0, d.Z)(N),
        k = !L && N.hasCommunityInfoSubheader(),
        M = !L && A,
        G = (0, h.xR)(Z) && R && !S,
        [B, U] = i.useState(!1),
        W = i.useRef(),
        V = i.useRef(null),
        F = i.useRef(),
        H = p.QK.getSetting();
    i.useEffect(() => {
        if (G && t && !W.current && H)
            return (
                U(!0),
                (F.current = setTimeout(() => {
                    U(!1);
                }, 5000)),
                () => {
                    clearTimeout(F.current);
                }
            );
    }, [G, t, H]),
        i.useEffect(() => {
            W.current = t;
        }, [t]);
    let z = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        Y = (0, u.Q3)('GuildHeader');
    return (0, r.jsx)(c.f6W, {
        theme: t ? g.BRd.DARK : void 0,
        children: (e) => {
            var i;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: V,
                        className: o()(l, {
                            [v.container]: !0,
                            [v.clickable]: null != a,
                            [v.selected]: null != a && P,
                            [v.hasBanner]: z(),
                            [v.bannerVisible]: t,
                            [e]: !Y && t,
                            [v.communityInfoVisible]: M || (D && k)
                        }),
                        onMouseDown: x,
                        onContextMenu: j,
                        onClick: a,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(v.header, T, { [v.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: o()(v.headerContent, v.primaryInfo),
                                        children: [
                                            (0, r.jsx)(f.Z, {
                                                guild: N,
                                                isBannerVisible: t
                                            }),
                                            N.id === m._ && (0, r.jsx)(O, {}),
                                            (0, r.jsx)(c.X6q, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: v.name,
                                                children: N.toString()
                                            }),
                                            null != a &&
                                                (0, r.jsx)(c.P3F, {
                                                    className: v.headerButton,
                                                    'aria-controls': I,
                                                    'aria-expanded': P,
                                                    focusProps: {
                                                        ringTarget: V,
                                                        offset: 4
                                                    },
                                                    onClick: a,
                                                    onContextMenu: j,
                                                    'aria-label': b.NW.formatToPlainString(b.t.xMXpl5, { guildName: null !== (i = null == N ? void 0 : N.toString()) && void 0 !== i ? i : '' })
                                                }),
                                            (0, r.jsx)('div', {
                                                className: v.headerChildren,
                                                children: w
                                            })
                                        ]
                                    }),
                                    k &&
                                        (0, r.jsx)(_, {
                                            guild: N,
                                            controller: n,
                                            hasBanner: null != Z,
                                            hasSubheader: null != D && D
                                        })
                                ]
                            }),
                            null != Z
                                ? (0, r.jsx)(y, {
                                      guild: N,
                                      controller: n,
                                      guildBanner: Z,
                                      animate: B,
                                      isRefreshEnabled: Y
                                  })
                                : null,
                            (0, r.jsx)(C, { controller: n })
                        ]
                    }),
                    G && z()
                        ? (0, r.jsx)('div', {
                              className: v.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  U(!0), clearTimeout(F.current);
                              },
                              onMouseLeave: () => U(!1),
                              style: { height: E }
                          })
                        : null
                ]
            });
        }
    });
});
function C(e) {
    let { controller: t } = e,
        n = (0, u.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, c.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: v.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: v.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: v.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, c.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
