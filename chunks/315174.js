n.d(t, {
    ZP: () => Z,
    wD: () => S
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
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
    y = n(388032),
    _ = n(917669);
function v(e) {
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
    let { isRefreshEnabled: n, guild: i, controller: l, guildBanner: c, animate: u } = e,
        { value: d } = l.springs,
        p = h.QK.getSetting();
    return (0, r.jsx)(a.animated.div, {
        className: _.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(_.bannerImage, { [_.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !p ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(_.bannerImg, { [_.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = f.ZP.getGuildBannerURL(
                        {
                            id: i.id,
                            banner: c
                        },
                        u
                    ))
                        ? t
                        : '',
                alt: '',
                'aria-hidden': !0
            })
        })
    });
}
function x(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        u = t.hasFeature(m.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: _.communityInfo,
            children:
                u &&
                (0, r.jsx)(c.ua7, {
                    text: y.NW.string(y.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            O(v({ className: _.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(c.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: _.communityIcon
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: y.NW.string(y.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(_.communityInfoContainer, _.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: _.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function C() {
    return (0, r.jsx)(c.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: _.favoritesIcon,
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
        className: _.name,
        children: t.toString()
    });
}
function I(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: u, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === b._ && (0, r.jsx)(C, {}),
            (0, r.jsx)(P, { guild: i }),
            null != l &&
                (0, r.jsx)(c.P3F, {
                    className: _.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: u,
                        offset: 4
                    },
                    'aria-label': y.NW.formatToPlainString(y.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: _.headerChildren,
                children: d
            })
        ]
    });
}
function N(e) {
    var t;
    let { bannerVisible: l, guild: o, onClick: a, onContextMenu: s, ariaControls: u, ariaExpanded: d, children: p } = e,
        h = i.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        O(v({}, t), {
                            guild: o,
                            source: m.t4x.GUILD_HEADER
                        })
                    );
            });
        }, [o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.P3F, {
                className: _.guildDropdown,
                'aria-controls': u,
                'aria-expanded': d,
                'aria-label': y.NW.formatToPlainString(y.t.xMXpl5, { guildName: null != (t = null == o ? void 0 : o.toString()) ? t : '' }),
                onClick: a,
                onContextMenu: s,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(g.Z, {
                                guild: o,
                                isBannerVisible: l
                            }),
                            o.id === b._ && (0, r.jsx)(C, {}),
                            (0, r.jsx)(P, { guild: o })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: _.headerChildren,
                        children: p
                    })
                ]
            }),
            (0, r.jsx)(c.ua7, {
                text: y.NW.string(y.t.Sd8Ix8),
                position: 'bottom',
                children: (e) =>
                    (0, r.jsx)(
                        c.zxk,
                        O(
                            v(
                                {
                                    className: _.inviteButton,
                                    size: c.zxk.Sizes.ICON,
                                    look: c.zxk.Looks.BLANK
                                },
                                e
                            ),
                            {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), h();
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
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: g, onMouseDown: b, disableBannerAnimation: y, 'aria-expanded': C, 'aria-controls': S, guild: P, guildBanner: Z, animationOverlayHeight: E, children: T, headerClassName: A, communityInfoVisible: D, hasSubheader: R } = e,
        L = P.hasFeature(m.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(P),
        M = !k && P.hasCommunityInfoSubheader(),
        G = !k && D,
        B = (0, f.xR)(Z) && L && !y,
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
                        className: o()(l, {
                            [_.container]: !0,
                            [_.clickable]: !Q && null != a,
                            [_.selected]: !Q && null != a && C,
                            [_.hasBanner]: Y(),
                            [_.bannerVisible]: t,
                            [e]: !q && t,
                            [_.communityInfoVisible]: G || (R && M),
                            [_.invitesRefresh]: Q
                        }),
                        onMouseDown: b,
                        onClick: Q ? void 0 : a,
                        onContextMenu: Q ? void 0 : g,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(_.header, A, { [_.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(_.headerContent, _.primaryInfo),
                                        children: Q ? (0, r.jsx)(N, O(v({}, K), { children: T })) : (0, r.jsx)(I, O(v({}, K), { children: T }))
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
                              className: _.animatedBannerHoverLayer,
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
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: _.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: _.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: _.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, c.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
