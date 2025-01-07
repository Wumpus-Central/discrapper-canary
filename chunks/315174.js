n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(752877),
    s = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    h = n(695346),
    p = n(768581),
    f = n(358555),
    m = n(981631),
    g = n(647086),
    v = n(388032),
    C = n(837349);
function x(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: d } = l.springs,
        f = h.QK.getSetting(),
        m = (0, u.Q3)('AnimatedBanner') ? 150 : 90;
    return (0, i.jsx)(o.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * m, 'px)'))
        },
        children: (0, i.jsx)(o.animated.div, {
            className: a()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (f ? 'translateY('.concat((1 - e) * m * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * m, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = p.ZP.getGuildBannerURL(
                            {
                                id: n.id,
                                banner: r
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
function I(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: s } = n.springs,
        u = t.hasFeature(m.oNc.DISCOVERABLE),
        d = (0, i.jsx)('div', {
            className: C.communityInfo,
            children:
                u &&
                (0, i.jsx)(c.Tooltip, {
                    text: v.intl.string(v.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: C.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.GlobeEarthIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: C.communityIcon
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: v.intl.string(v.t['B/vjCg'])
                                })
                            ]
                        })
                })
        });
    return r
        ? (0, i.jsx)('div', {
              className: a()(C.communityInfoContainer, C.hasSubheader),
              children: d
          })
        : (0, i.jsx)(o.animated.div, {
              className: C.communityInfoContainer,
              style: l ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function _() {
    return (0, i.jsx)(c.StarIcon, {
        size: 'custom',
        color: 'currentColor',
        className: C.favoritesIcon,
        height: 20,
        width: 20
    });
}
t.ZP = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: o, onContextMenu: Z, onMouseDown: b, disableBannerAnimation: S, 'aria-expanded': N, 'aria-controls': E, guild: y, guildBanner: j, animationOverlayHeight: T, children: P, headerClassName: A, communityInfoVisible: w, hasSubheader: M } = e,
        L = y.hasFeature(m.oNc.ANIMATED_BANNER),
        R = (0, d.Z)(y),
        D = !R && y.hasCommunityInfoSubheader(),
        G = !R && w,
        B = (0, p.xR)(j) && L && !S,
        [k, U] = l.useState(!1),
        O = l.useRef(),
        V = l.useRef(null),
        H = l.useRef(),
        F = h.QK.getSetting();
    l.useEffect(() => {
        if (B && t && !O.current && F)
            return (
                U(!0),
                (H.current = setTimeout(() => {
                    U(!1);
                }, 5000)),
                () => {
                    clearTimeout(H.current);
                }
            );
    }, [B, t, F]),
        l.useEffect(() => {
            O.current = t;
        }, [t]);
    let W = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        z = (0, u.Q3)('GuildHeader');
    return (0, i.jsx)(c.ThemeProvider, {
        theme: t ? m.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: V,
                        className: a()(r, {
                            [C.container]: !0,
                            [C.clickable]: null != o,
                            [C.selected]: null != o && N,
                            [C.hasBanner]: W(),
                            [C.bannerVisible]: t,
                            [e]: !z && t,
                            [C.communityInfoVisible]: G || (M && D)
                        }),
                        onMouseDown: b,
                        onContextMenu: Z,
                        onClick: o,
                        children: [
                            (0, i.jsxs)('header', {
                                className: a()(C.header, A, { [C.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: a()(C.headerContent, C.primaryInfo),
                                        children: [
                                            (0, i.jsx)(f.Z, {
                                                guild: y,
                                                isBannerVisible: t
                                            }),
                                            y.id === g._ && (0, i.jsx)(_, {}),
                                            (0, i.jsx)(c.Heading, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: C.name,
                                                children: y.toString()
                                            }),
                                            null != o &&
                                                (0, i.jsx)(c.Clickable, {
                                                    className: C.headerButton,
                                                    'aria-controls': E,
                                                    'aria-expanded': N,
                                                    focusProps: {
                                                        ringTarget: V,
                                                        offset: 4
                                                    },
                                                    onClick: o,
                                                    onContextMenu: Z,
                                                    'aria-label': v.intl.formatToPlainString(v.t.xMXpl5, { guildName: null !== (l = null == y ? void 0 : y.toString()) && void 0 !== l ? l : '' })
                                                }),
                                            (0, i.jsx)('div', {
                                                className: C.headerChildren,
                                                children: P
                                            })
                                        ]
                                    }),
                                    D &&
                                        (0, i.jsx)(I, {
                                            guild: y,
                                            controller: n,
                                            hasBanner: null != j,
                                            hasSubheader: null != M && M
                                        })
                                ]
                            }),
                            null != j
                                ? (0, i.jsx)(x, {
                                      guild: y,
                                      controller: n,
                                      guildBanner: j,
                                      animate: k
                                  })
                                : null
                        ]
                    }),
                    B && W()
                        ? (0, i.jsx)('div', {
                              className: C.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  U(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => U(!1),
                              style: { height: T }
                          })
                        : null
                ]
            });
        }
    });
});
