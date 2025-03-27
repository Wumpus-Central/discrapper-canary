n.d(t, {
    ZP: () => Z,
    wD: () => S
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(642128),
    s = n(873546),
    c = n(481060),
    u = n(540059),
    d = n(666188),
    p = n(340541),
    h = n(695346),
    f = n(768581),
    g = n(358555),
    m = n(981631),
    b = n(647086),
    v = n(388032),
    y = n(15256);
function _(e) {
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
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    var t;
    let { isRefreshEnabled: n, guild: i, controller: o, guildBanner: c, animate: u } = e,
        { value: d } = o.springs,
        p = h.QK.getSetting();
    return (0, r.jsx)(a.animated.div, {
        className: y.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: l()(y.bannerImage, { [y.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !p ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: l()(y.bannerImg, { [y.bannerImgFullWidth]: s.tq }),
                src:
                    null !==
                        (t = f.ZP.getGuildBannerURL(
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
function x(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: o } = e,
        { value: s } = n.springs,
        u = t.hasFeature(m.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: y.communityInfo,
            children:
                u &&
                (0, r.jsx)(c.ua7, {
                    text: v.NW.string(v.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            O(_({ className: y.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(c.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: y.communityIcon
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: v.NW.string(v.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return o
        ? (0, r.jsx)('div', {
              className: l()(y.communityInfoContainer, y.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: y.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function C() {
    return (0, r.jsx)(c.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: y.favoritesIcon,
        height: 20,
        width: 20
    });
}
let S = (e) => {
    let { open: t } = e,
        n = t ? c.u04 : c.CJ0;
    return (0, r.jsx)(n, {
        size: 'refresh_sm',
        color: 'currentColor'
    });
};
function P(e) {
    let { guild: t } = e;
    return (0, r.jsx)(c.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: y.name,
        children: t.toString()
    });
}
function I(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: o, onContextMenu: l, ariaControls: a, ariaExpanded: s, guildHeaderRef: u, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === b._ && (0, r.jsx)(C, {}),
            (0, r.jsx)(P, { guild: i }),
            null != o &&
                (0, r.jsx)(c.P3F, {
                    className: y.headerButton,
                    onClick: o,
                    onContextMenu: l,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: u,
                        offset: 4
                    },
                    'aria-label': v.NW.formatToPlainString(v.t.xMXpl5, { guildName: null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: y.headerChildren,
                children: d
            })
        ]
    });
}
function N(e) {
    var t;
    let { bannerVisible: o, guild: l, onClick: a, onContextMenu: s, ariaControls: u, ariaExpanded: d, children: p } = e,
        h = i.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('6377')]).then(n.bind(n, 560114));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        O(_({}, t), {
                            guild: l,
                            source: m.t4x.GUILD_HEADER
                        })
                    );
            });
        }, [l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.P3F, {
                className: y.guildDropdown,
                'aria-controls': u,
                'aria-expanded': d,
                'aria-label': v.NW.formatToPlainString(v.t.xMXpl5, { guildName: null !== (t = null == l ? void 0 : l.toString()) && void 0 !== t ? t : '' }),
                onClick: a,
                onContextMenu: s,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(g.Z, {
                                guild: l,
                                isBannerVisible: o
                            }),
                            l.id === b._ && (0, r.jsx)(C, {}),
                            (0, r.jsx)(P, { guild: l })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: y.headerChildren,
                        children: p
                    })
                ]
            }),
            (0, r.jsx)(c.ua7, {
                text: v.NW.string(v.t.Sd8Ix8),
                position: 'bottom',
                children: (e) =>
                    (0, r.jsx)(
                        c.zxk,
                        O(
                            _(
                                {
                                    className: y.inviteButton,
                                    size: c.zxk.Sizes.ICON,
                                    look: c.zxk.Looks.BLANK
                                },
                                e
                            ),
                            {
                                onClick: () => {
                                    var t;
                                    null === (t = e.onClick) || void 0 === t || t.call(e), h();
                                },
                                children: (0, r.jsx)(c.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            }
                        )
                    )
            })
        ]
    });
}
let Z = i.memo(function (e) {
    let { bannerVisible: t, controller: n, className: o, onClick: a, onContextMenu: g, onMouseDown: b, disableBannerAnimation: v, 'aria-expanded': C, 'aria-controls': S, guild: P, guildBanner: Z, animationOverlayHeight: E, children: T, headerClassName: A, communityInfoVisible: D, hasSubheader: R } = e,
        L = P.hasFeature(m.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(P),
        M = !k && P.hasCommunityInfoSubheader(),
        G = !k && D,
        B = (0, f.xR)(Z) && L && !v,
        [U, W] = i.useState(!1),
        V = i.useRef(),
        F = i.useRef(null),
        H = i.useRef(),
        z = h.QK.getSetting();
    i.useEffect(() => {
        if (B && t && !V.current && z)
            return (
                W(!0),
                (H.current = setTimeout(() => {
                    W(!1);
                }, 5000)),
                () => {
                    clearTimeout(H.current);
                }
            );
    }, [B, t, z]),
        i.useEffect(() => {
            V.current = t;
        }, [t]);
    let Y = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        q = (0, u.Q3)('GuildHeader'),
        { enabled: Q } = (0, p._k)({ location: 'guild_header' }),
        K = {
            bannerVisible: t,
            guild: P,
            onClick: a,
            onContextMenu: g,
            ariaControls: S,
            ariaExpanded: C,
            guildHeaderRef: F
        };
    return (0, r.jsx)(c.f6W, {
        theme: t ? m.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: F,
                        className: l()(o, {
                            [y.container]: !0,
                            [y.clickable]: !Q && null != a,
                            [y.selected]: !Q && null != a && C,
                            [y.hasBanner]: Y(),
                            [y.bannerVisible]: t,
                            [e]: !q && t,
                            [y.communityInfoVisible]: G || (R && M),
                            [y.invitesRefresh]: Q
                        }),
                        onMouseDown: b,
                        onClick: Q ? void 0 : a,
                        onContextMenu: Q ? void 0 : g,
                        children: [
                            (0, r.jsxs)('header', {
                                className: l()(y.header, A, { [y.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: l()(y.headerContent, y.primaryInfo),
                                        children: Q ? (0, r.jsx)(N, O(_({}, K), { children: T })) : (0, r.jsx)(I, O(_({}, K), { children: T }))
                                    }),
                                    M &&
                                        (0, r.jsx)(x, {
                                            guild: P,
                                            controller: n,
                                            hasBanner: null != Z,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != Z
                                ? (0, r.jsx)(j, {
                                      guild: P,
                                      controller: n,
                                      guildBanner: Z,
                                      animate: U,
                                      isRefreshEnabled: q
                                  })
                                : null,
                            (0, r.jsx)(w, { controller: n })
                        ]
                    }),
                    B && Y()
                        ? (0, r.jsx)('div', {
                              className: y.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  W(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => W(!1),
                              style: { height: E }
                          })
                        : null
                ]
            })
    });
});
function w(e) {
    let { controller: t } = e,
        n = (0, u.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, c.TCT)();
    if (!n) return null;
    let o = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: y.headerEllipseBackdrop,
                style: { opacity: o.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: y.headerEllipseForeground,
                style: { opacity: o.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: y.headerGlass,
                style: {
                    opacity: o.to((e) => (1 - e) * 6),
                    filter: (0, c.apv)(i) ? o.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
