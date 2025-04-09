n.d(t, {
    ZP: () => E,
    wD: () => S
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(200100),
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
    _ = n(388032),
    y = n(917669);
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
        className: y.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(y.bannerImage, { [y.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !p ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(y.bannerImg, { [y.bannerImgFullWidth]: s.tq }),
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
function C(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        u = t.hasFeature(m.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: y.communityInfo,
            children:
                u &&
                (0, r.jsx)(c.ua7, {
                    text: _.NW.string(_.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            O(v({ className: y.communityInfoPill }, e), {
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
                                        children: _.NW.string(_.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(y.communityInfoContainer, y.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: y.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function x() {
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
        size: 'xs',
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
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: u, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === b._ && (0, r.jsx)(x, {}),
            (0, r.jsx)(P, { guild: i }),
            null != l &&
                (0, r.jsx)(c.P3F, {
                    className: y.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: u,
                        offset: 4
                    },
                    'aria-label': _.NW.formatToPlainString(_.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
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
                className: y.guildDropdown,
                'aria-controls': u,
                'aria-expanded': d,
                'aria-label': _.NW.formatToPlainString(_.t.xMXpl5, { guildName: null != (t = null == o ? void 0 : o.toString()) ? t : '' }),
                onClick: a,
                onContextMenu: s,
                children: [
                    (0, r.jsxs)('div', {
                        className: y.guildBadgeAndName,
                        children: [
                            (0, r.jsx)(g.Z, {
                                guild: o,
                                isBannerVisible: l
                            }),
                            o.id === b._ && (0, r.jsx)(x, {}),
                            (0, r.jsx)(P, { guild: o })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: y.headerChildren,
                        children: p
                    })
                ]
            }),
            o.id !== b._ &&
                (0, r.jsx)(c.ua7, {
                    text: _.NW.string(_.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            c.P3F,
                            O(v({ className: y.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), h();
                                },
                                children: (0, r.jsx)(c.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                })
        ]
    });
}
let E = i.memo(function (e) {
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: g, onMouseDown: b, disableBannerAnimation: _, 'aria-expanded': x, 'aria-controls': S, guild: P, guildBanner: E, animationOverlayHeight: w, children: T, headerClassName: A, communityInfoVisible: D, hasSubheader: R } = e,
        L = P.hasFeature(m.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(P),
        M = !k && P.hasCommunityInfoSubheader(),
        G = !k && D,
        B = (0, f.xR)(E) && L && !_,
        [U, W] = i.useState(!1),
        V = i.useRef(!1),
        H = i.useRef(null),
        F = i.useRef(void 0),
        z = h.QK.getSetting();
    i.useEffect(() => {
        if (B && t && !V.current && z)
            return (
                W(!0),
                (F.current = setTimeout(() => {
                    W(!1);
                }, 5000)),
                () => {
                    clearTimeout(F.current);
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
        { enabled: K } = (0, p._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: t,
            guild: P,
            onClick: a,
            onContextMenu: g,
            ariaControls: S,
            ariaExpanded: x,
            guildHeaderRef: H
        };
    return (0, r.jsx)(c.f6W, {
        theme: t ? m.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: H,
                        className: o()(l, {
                            [y.container]: !0,
                            [y.clickable]: !K && null != a,
                            [y.selected]: !K && null != a && x,
                            [y.hasBanner]: Y(),
                            [y.bannerVisible]: t,
                            [e]: !q && t,
                            [y.communityInfoVisible]: G || (R && M),
                            [y.invitesRefresh]: K
                        }),
                        onMouseDown: b,
                        onClick: K ? void 0 : a,
                        onContextMenu: K ? void 0 : g,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(y.header, A, { [y.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(y.headerContent, y.primaryInfo),
                                        children: K ? (0, r.jsx)(N, O(v({}, Q), { children: T })) : (0, r.jsx)(I, O(v({}, Q), { children: T }))
                                    }),
                                    M &&
                                        (0, r.jsx)(C, {
                                            guild: P,
                                            controller: n,
                                            hasBanner: null != E,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != E
                                ? (0, r.jsx)(j, {
                                      guild: P,
                                      controller: n,
                                      guildBanner: E,
                                      animate: U,
                                      isRefreshEnabled: q
                                  })
                                : null,
                            (0, r.jsx)(Z, { controller: n })
                        ]
                    }),
                    B && Y()
                        ? (0, r.jsx)('div', {
                              className: y.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  W(!0), clearTimeout(F.current);
                              },
                              onMouseLeave: () => W(!1),
                              style: { height: w }
                          })
                        : null
                ]
            })
    });
});
function Z(e) {
    let { controller: t } = e,
        n = (0, u.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, c.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: y.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: y.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: y.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, c.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
