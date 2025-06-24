n.d(t, {
    ZP: () => L,
    wD: () => Z
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(524979),
    a = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(230711),
    h = n(666188),
    p = n(665149),
    f = n(340541),
    g = n(159300),
    m = n(210887),
    b = n(695346),
    _ = n(496675),
    O = n(768581),
    y = n(358555),
    v = n(981631),
    C = n(647086),
    j = n(982183),
    E = n(388032),
    S = n(917669);
function x(e) {
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
function I(e, t) {
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
function P(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: u } = i.springs;
    return (0, r.jsx)(s.animated.div, {
        className: S.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(s.animated.div, {
            className: o()(S.bannerImage, { [S.bannerImgFullWidth]: a.tq }),
            style: { transform: u.to((e) => 'translateY('.concat((1 - e) * 90, 'px)')) },
            children: (0, r.jsx)('img', {
                className: o()(S.bannerImg, { [S.bannerImgFullWidth]: a.tq }),
                src:
                    null !=
                    (t = O.ZP.getGuildBannerURL(
                        {
                            id: n.id,
                            banner: l
                        },
                        c
                    ))
                        ? t
                        : '',
                alt: '',
                'aria-hidden': !0
            })
        })
    });
}
function N(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: a } = n.springs,
        c = t.hasFeature(v.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: S.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: E.intl.string(E.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            I(x({ className: S.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: S.communityIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: E.intl.string(E.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(S.communityInfoContainer, S.hasSubheader),
              children: d
          })
        : (0, r.jsx)(s.animated.div, {
              className: S.communityInfoContainer,
              style: i ? { opacity: a } : { height: a.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function w() {
    return (0, r.jsx)(u.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: S.favoritesIcon,
        height: 20,
        width: 20
    });
}
let Z = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: 'xs',
        color: 'currentColor'
    });
};
function T(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: S.name,
        children: t.toString()
    });
}
function A(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: s, ariaExpanded: a, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === C._ && (0, r.jsx)(w, {}),
            (0, r.jsx)(T, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: S.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': s,
                    'aria-expanded': a,
                    focusProps: {
                        ringTarget: c,
                        offset: 4
                    },
                    'aria-label': E.intl.formatToPlainString(E.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: S.headerChildren,
                children: d
            })
        ]
    });
}
let R = [C._, j.yG];
function D(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: s, children: a } = e,
        h = i.useRef(null),
        f = (0, c.e7)([m.Z], () => m.Z.theme),
        b = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('87154'), n.e('42018')]).then(n.bind(n, 859432));
            return (t) => {
                let { closePopout: n } = t;
                return (0, r.jsx)(u.f6W, {
                    theme: f,
                    children: (t) =>
                        (0, r.jsx)('div', {
                            className: t,
                            children: (0, r.jsx)(e, {
                                onClose: n,
                                guild: l
                            })
                        })
                });
            };
        }, [l, f]),
        O = (0, c.e7)([_.Z], () => (0, g.b)(_.Z, l)),
        P = i.useCallback(() => {
            O
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              I(x({}, t), {
                                  guild: l,
                                  source: v.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, x({}, t));
                  });
        }, [O, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                targetElementRef: h,
                renderPopout: b,
                position: 'bottom',
                align: 'left',
                animation: u.yRy.Animation.SCALE,
                spacing: 4,
                children: (e) => {
                    var n;
                    return (0, r.jsxs)(
                        u.P3F,
                        I(
                            x(
                                {
                                    innerRef: h,
                                    className: S.guildDropdown,
                                    'aria-label': E.intl.formatToPlainString(E.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.toString()) ? n : '' }),
                                    onContextMenu: s
                                },
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    null == e || null == (n = e.onClick) || n.call(e, t), null == o || o(t);
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: S.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === C._ && (0, r.jsx)(w, {}),
                                            (0, r.jsx)(T, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: S.headerChildren,
                                        children: a
                                    })
                                ]
                            }
                        )
                    );
                }
            }),
            !R.includes(l.id) &&
                (0, r.jsx)(u.ua7, {
                    text: E.intl.string(E.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            I(x({ className: S.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), P();
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
            l.id === j.yG &&
                (0, r.jsx)(p.JO, {
                    icon: u.ewm,
                    iconClassName: S.settingsButtonIcon,
                    className: S.settingsButton,
                    'aria-hidden': !0,
                    tooltip: E.intl.string(E.t.h850Sk),
                    onClick: () => d.Z.open(v.oAB.NOTIFICATIONS, void 0)
                })
        ]
    });
}
let L = i.memo(function (e) {
    let { ref: t, bannerVisible: n, controller: l, className: s, onClick: c, onContextMenu: d, onMouseDown: p, disableBannerAnimation: g, 'aria-expanded': m, 'aria-controls': _, guild: y, guildBanner: C, animationOverlayHeight: j, children: E, headerClassName: w, communityInfoVisible: Z, hasSubheader: T } = e,
        R = y.hasFeature(v.oNc.ANIMATED_BANNER),
        L = (0, h.Z)(y),
        k = !L && y.hasCommunityInfoSubheader(),
        U = !L && Z,
        G = (0, O.xR)(C) && R && !g,
        [B, F] = i.useState(!1),
        V = i.useRef(!1),
        H = i.useRef(null),
        z = null != t ? t : H,
        W = i.useRef(void 0),
        K = b.QK.getSetting();
    i.useEffect(() => {
        if (G && n && !V.current && K)
            return (
                F(!0),
                (W.current = setTimeout(() => {
                    F(!1);
                }, 5000)),
                () => {
                    clearTimeout(W.current);
                }
            );
    }, [G, n, K]),
        i.useEffect(() => {
            V.current = n;
        }, [n]);
    let Y = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        { entrypoints: q } = (0, f._k)({ location: 'guild_header' }),
        X = {
            bannerVisible: n,
            guild: y,
            onClick: c,
            onContextMenu: d,
            ariaControls: _,
            ariaExpanded: m,
            guildHeaderRef: z
        };
    return (0, r.jsx)(u.f6W, {
        theme: n ? v.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        'data-has-banner': Y(),
                        'data-banner-visible': n,
                        ref: z,
                        className: o()(s, {
                            [S.container]: !0,
                            [S.clickable]: !q && null != c,
                            [S.selected]: !q && null != c && m,
                            [S.hasBanner]: Y(),
                            [S.bannerVisible]: n,
                            [e]: !1,
                            [S.communityInfoVisible]: U || (T && k),
                            [S.invitesRefresh]: q
                        }),
                        onMouseDown: p,
                        onClick: q ? void 0 : c,
                        onContextMenu: d,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(S.header, w, { [S.themedHeaderMobile]: a.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(S.headerContent, S.primaryInfo),
                                        children: q ? (0, r.jsx)(D, I(x({}, X), { children: E })) : (0, r.jsx)(A, I(x({}, X), { children: E }))
                                    }),
                                    k &&
                                        (0, r.jsx)(N, {
                                            guild: y,
                                            controller: l,
                                            hasBanner: null != C,
                                            hasSubheader: null != T && T
                                        })
                                ]
                            }),
                            null != C
                                ? (0, r.jsx)(P, {
                                      guild: y,
                                      controller: l,
                                      guildBanner: C,
                                      animate: B
                                  })
                                : null,
                            (0, r.jsx)(M, { controller: l })
                        ]
                    }),
                    G && Y()
                        ? (0, r.jsx)('div', {
                              className: S.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  F(!0), clearTimeout(W.current);
                              },
                              onMouseLeave: () => F(!1),
                              style: { height: j }
                          })
                        : null
                ]
            })
    });
});
function M(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.TCT)(),
        i = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: S.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: S.headerEllipseForeground,
                style: { opacity: i.to((e) => e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: S.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(n) ? i.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
