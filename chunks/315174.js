n.d(t, { ZP: () => I }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(642128),
    s = n(873546),
    c = n(481060),
    d = n(540059),
    u = n(666188),
    h = n(695346),
    p = n(768581),
    m = n(358555),
    g = n(981631),
    f = n(647086),
    _ = n(388032),
    v = n(338680);
function C(e) {
    var t;
    let { guild: n, controller: l, guildBanner: r, animate: c } = e,
        { value: u } = l.springs,
        m = h.QK.getSetting(),
        g = (0, d.Q3)('AnimatedBanner') ? 150 : 90;
    return (0, i.jsx)(o.animated.div, {
        className: v.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * g, 'px)'))
        },
        children: (0, i.jsx)(o.animated.div, {
            className: a()(v.bannerImage, { [v.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => (m ? 'translateY('.concat((1 - e) * g * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')') : 'translateY('.concat((1 - e) * g, 'px)'))) },
            children: (0, i.jsx)('img', {
                className: a()(v.bannerImg, { [v.bannerImgFullWidth]: s.tq }),
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
function x(e) {
    let { guild: t, controller: n, hasBanner: l, hasSubheader: r } = e,
        { value: s } = n.springs,
        d = t.hasFeature(g.oNc.DISCOVERABLE),
        u = (0, i.jsx)('div', {
            className: v.communityInfo,
            children:
                d &&
                (0, i.jsx)(c.ua7, {
                    text: _.intl.string(_.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, i.jsxs)('div', {
                            className: v.communityInfoPill,
                            ...e,
                            children: [
                                (0, i.jsx)(c.enf, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 12,
                                    height: 12,
                                    className: v.communityIcon
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: _.intl.string(_.t['B/vjCg'])
                                })
                            ]
                        })
                })
        });
    return r
        ? (0, i.jsx)('div', {
              className: a()(v.communityInfoContainer, v.hasSubheader),
              children: u
          })
        : (0, i.jsx)(o.animated.div, {
              className: v.communityInfoContainer,
              style: l ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: u
          });
}
function Z() {
    return (0, i.jsx)(c.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: v.favoritesIcon,
        height: 20,
        width: 20
    });
}
let I = l.memo(function (e) {
    let { bannerVisible: t, controller: n, className: r, onClick: o, onContextMenu: I, onMouseDown: b, disableBannerAnimation: S, 'aria-expanded': N, 'aria-controls': E, guild: j, guildBanner: y, animationOverlayHeight: P, children: A, headerClassName: T, communityInfoVisible: w, hasSubheader: R } = e,
        L = j.hasFeature(g.oNc.ANIMATED_BANNER),
        M = (0, u.Z)(j),
        D = !M && j.hasCommunityInfoSubheader(),
        G = !M && w,
        k = (0, p.xR)(y) && L && !S,
        [B, O] = l.useState(!1),
        U = l.useRef(),
        V = l.useRef(null),
        F = l.useRef(),
        H = h.QK.getSetting();
    l.useEffect(() => {
        if (k && t && !U.current && H)
            return (
                O(!0),
                (F.current = setTimeout(() => {
                    O(!1);
                }, 5000)),
                () => {
                    clearTimeout(F.current);
                }
            );
    }, [k, t, H]),
        l.useEffect(() => {
            U.current = t;
        }, [t]);
    let z = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        W = (0, d.Q3)('GuildHeader');
    return (0, i.jsx)(c.f6W, {
        theme: t ? g.BRd.DARK : void 0,
        children: (e) => {
            var l;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsxs)('div', {
                        ref: V,
                        className: a()(r, {
                            [v.container]: !0,
                            [v.clickable]: null != o,
                            [v.selected]: null != o && N,
                            [v.hasBanner]: z(),
                            [v.bannerVisible]: t,
                            [e]: !W && t,
                            [v.communityInfoVisible]: G || (R && D)
                        }),
                        onMouseDown: b,
                        onContextMenu: I,
                        onClick: o,
                        children: [
                            (0, i.jsxs)('header', {
                                className: a()(v.header, T, { [v.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: a()(v.headerContent, v.primaryInfo),
                                        children: [
                                            (0, i.jsx)(m.Z, {
                                                guild: j,
                                                isBannerVisible: t
                                            }),
                                            j.id === f._ && (0, i.jsx)(Z, {}),
                                            (0, i.jsx)(c.X6q, {
                                                variant: 'text-md/semibold',
                                                lineClamp: 1,
                                                className: v.name,
                                                children: j.toString()
                                            }),
                                            null != o &&
                                                (0, i.jsx)(c.P3F, {
                                                    className: v.headerButton,
                                                    'aria-controls': E,
                                                    'aria-expanded': N,
                                                    focusProps: {
                                                        ringTarget: V,
                                                        offset: 4
                                                    },
                                                    onClick: o,
                                                    onContextMenu: I,
                                                    'aria-label': _.intl.formatToPlainString(_.t.xMXpl5, { guildName: null !== (l = null == j ? void 0 : j.toString()) && void 0 !== l ? l : '' })
                                                }),
                                            (0, i.jsx)('div', {
                                                className: v.headerChildren,
                                                children: A
                                            })
                                        ]
                                    }),
                                    D &&
                                        (0, i.jsx)(x, {
                                            guild: j,
                                            controller: n,
                                            hasBanner: null != y,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != y
                                ? (0, i.jsx)(C, {
                                      guild: j,
                                      controller: n,
                                      guildBanner: y,
                                      animate: B
                                  })
                                : null
                        ]
                    }),
                    k && z()
                        ? (0, i.jsx)('div', {
                              className: v.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  O(!0), clearTimeout(F.current);
                              },
                              onMouseLeave: () => O(!1),
                              style: { height: P }
                          })
                        : null
                ]
            });
        }
    });
});
