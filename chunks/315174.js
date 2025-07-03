(n.d(t, {
    ZP: () => M,
    wD: () => T
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(405499),
    s = n(873546),
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
    y = n(598056),
    v = n(358555),
    C = n(981631),
    j = n(647086),
    E = n(982183),
    S = n(388032),
    x = n(917669);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
function N(e) {
    var t;
    let { guild: n, controller: i, guildBanner: l, animate: c } = e,
        { value: u } = i.springs;
    return (0, r.jsx)(a.animated.div, {
        className: x.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(x.bannerImage, { [x.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => 'translateY('.concat((1 - e) * 90, 'px)')) },
            children: (0, r.jsx)('img', {
                className: o()(x.bannerImg, { [x.bannerImgFullWidth]: s.tq }),
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
function w(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        c = t.features.has(C.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: x.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: S.intl.string(S.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            P(I({ className: x.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: x.communityIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: S.intl.string(S.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(x.communityInfoContainer, x.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: x.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function Z() {
    return (0, r.jsx)(u.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: x.favoritesIcon,
        height: 20,
        width: 20
    });
}
let T = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: 'xs',
        color: 'currentColor'
    });
};
function A(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: x.name,
        children: t.name
    });
}
function R(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === j._ && (0, r.jsx)(Z, {}),
            (0, r.jsx)(A, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: x.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4
                    },
                    'aria-label': S.intl.formatToPlainString(S.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.name) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: x.headerChildren,
                children: d
            })
        ]
    });
}
let D = [j._, E.yG];
function L(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: a, children: s } = e,
        h = i.useRef(null),
        f = (0, c.e7)([m.Z], () => m.Z.theme),
        b = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('87154'), n.e('21443'), n.e('12519')]).then(n.bind(n, 859432));
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
        y = i.useCallback(() => {
            O
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              P(I({}, t), {
                                  guild: l,
                                  source: C.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, I({}, t));
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
                        P(
                            I(
                                {
                                    innerRef: h,
                                    className: x.guildDropdown,
                                    'aria-label': S.intl.formatToPlainString(S.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.name) ? n : '' }),
                                    onContextMenu: a
                                },
                                e
                            ),
                            {
                                onClick: (t) => {
                                    var n;
                                    (null == e || null == (n = e.onClick) || n.call(e, t), null == o || o(t));
                                },
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: x.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(v.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === j._ && (0, r.jsx)(Z, {}),
                                            (0, r.jsx)(A, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: x.headerChildren,
                                        children: s
                                    })
                                ]
                            }
                        )
                    );
                }
            }),
            !D.includes(l.id) &&
                (0, r.jsx)(u.ua7, {
                    text: S.intl.string(S.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            P(I({ className: x.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    (null == (t = e.onClick) || t.call(e), y());
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
            l.id === E.yG &&
                (0, r.jsx)(p.JO, {
                    icon: u.ewm,
                    iconClassName: x.settingsButtonIcon,
                    className: x.settingsButton,
                    'aria-hidden': !0,
                    tooltip: S.intl.string(S.t.h850Sk),
                    onClick: () => d.Z.open(C.oAB.NOTIFICATIONS, void 0)
                })
        ]
    });
}
let M = i.memo(function (e) {
    let { ref: t, bannerVisible: n, controller: l, className: a, onClick: c, onContextMenu: d, onMouseDown: p, disableBannerAnimation: g, 'aria-expanded': m, 'aria-controls': _, guild: v, guildBanner: j, animationOverlayHeight: E, children: S, headerClassName: Z, communityInfoVisible: T, hasSubheader: A } = e,
        D = v.features.has(C.oNc.ANIMATED_BANNER),
        M = (0, h.Z)(v),
        U = !M && (0, y.Z)(v),
        G = !M && T,
        B = (0, O.xR)(j) && D && !g,
        [F, V] = i.useState(!1),
        H = i.useRef(!1),
        z = i.useRef(null),
        W = null != t ? t : z,
        K = i.useRef(void 0),
        Y = b.QK.getSetting();
    (i.useEffect(() => {
        if (B && n && !H.current && Y)
            return (
                V(!0),
                (K.current = setTimeout(() => {
                    V(!1);
                }, 5000)),
                () => {
                    clearTimeout(K.current);
                }
            );
    }, [B, n, Y]),
        i.useEffect(() => {
            H.current = n;
        }, [n]));
    let q = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        { entrypoints: X } = (0, f._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: n,
            guild: v,
            onClick: c,
            onContextMenu: d,
            ariaControls: _,
            ariaExpanded: m,
            guildHeaderRef: W
        };
    return (0, r.jsx)(u.f6W, {
        theme: n ? C.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        'data-has-banner': q(),
                        'data-banner-visible': n,
                        ref: W,
                        className: o()(a, {
                            [x.container]: !0,
                            [x.clickable]: !X && null != c,
                            [x.selected]: !X && null != c && m,
                            [x.hasBanner]: q(),
                            [x.bannerVisible]: n,
                            [e]: !1,
                            [x.communityInfoVisible]: G || (A && U),
                            [x.invitesRefresh]: X
                        }),
                        onMouseDown: p,
                        onClick: X ? void 0 : c,
                        onContextMenu: d,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(x.header, Z, { [x.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(x.headerContent, x.primaryInfo),
                                        children: X ? (0, r.jsx)(L, P(I({}, Q), { children: S })) : (0, r.jsx)(R, P(I({}, Q), { children: S }))
                                    }),
                                    U &&
                                        (0, r.jsx)(w, {
                                            guild: v,
                                            controller: l,
                                            hasBanner: null != j,
                                            hasSubheader: null != A && A
                                        })
                                ]
                            }),
                            null != j
                                ? (0, r.jsx)(N, {
                                      guild: v,
                                      controller: l,
                                      guildBanner: j,
                                      animate: F
                                  })
                                : null,
                            (0, r.jsx)(k, { controller: l })
                        ]
                    }),
                    B && q()
                        ? (0, r.jsx)('div', {
                              className: x.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  (V(!0), clearTimeout(K.current));
                              },
                              onMouseLeave: () => V(!1),
                              style: { height: E }
                          })
                        : null
                ]
            })
    });
});
function k(e) {
    let { controller: t } = e,
        { theme: n } = (0, u.TCT)(),
        i = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: x.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.headerEllipseForeground,
                style: { opacity: i.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: x.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(n) ? i.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
