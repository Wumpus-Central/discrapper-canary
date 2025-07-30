(n.d(t, {
    ZP: () => L,
    wD: () => T
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(564854),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(666188),
    h = n(340541),
    p = n(159300),
    f = n(553984),
    g = n(210887),
    m = n(695346),
    b = n(496675),
    _ = n(768581),
    O = n(598056),
    y = n(358555),
    C = n(981631),
    v = n(647086),
    j = n(982183),
    E = n(388032),
    S = n(917669);
function x(e) {
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
    return (0, r.jsx)(a.animated.div, {
        className: S.animatedContainer,
        style: {
            opacity: u,
            transform: u.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(S.bannerImage, { [S.bannerImgFullWidth]: s.tq }),
            style: { transform: u.to((e) => 'translateY('.concat((1 - e) * 90, 'px)')) },
            children: (0, r.jsx)('img', {
                className: o()(S.bannerImg, { [S.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = _.ZP.getGuildBannerURL(
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
        { value: s } = n.springs,
        c = t.features.has(C.oNc.DISCOVERABLE),
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
        : (0, r.jsx)(a.animated.div, {
              className: S.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
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
let T = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: 'xs',
        color: 'currentColor'
    });
};
function Z(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: S.name,
        children: t.name
    });
}
function A(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === v._ && (0, r.jsx)(w, {}),
            (0, r.jsx)(Z, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: S.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4
                    },
                    'aria-label': E.intl.formatToPlainString(E.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.name) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: S.headerChildren,
                children: d
            })
        ]
    });
}
let R = [v._, j.yG];
function D(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: a, children: s } = e,
        d = i.useRef(null),
        h = (0, c.e7)([g.Z], () => g.Z.theme),
        m = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('87154'), n.e('42018')]).then(n.bind(n, 859432));
            return (t) => {
                let { closePopout: n } = t;
                return (0, r.jsx)(u.f6W, {
                    theme: h,
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
        }, [l, h]),
        _ = (0, c.e7)([b.Z], () => (0, p.b)(b.Z, l)),
        O = i.useCallback(() => {
            _
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              I(x({}, t), {
                                  guild: l,
                                  source: C.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, x({}, t));
                  });
        }, [_, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                targetElementRef: d,
                renderPopout: m,
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
                                    innerRef: d,
                                    className: S.guildDropdown,
                                    'aria-label': E.intl.formatToPlainString(E.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.name) ? n : '' }),
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
                                        className: S.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === v._ && (0, r.jsx)(w, {}),
                                            (0, r.jsx)(Z, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: S.headerChildren,
                                        children: s
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
                                    (null == (t = e.onClick) || t.call(e), O());
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
            l.id === j.yG && (0, r.jsx)(f.p, {})
        ]
    });
}
let L = i.memo(function (e) {
    let { ref: t, bannerVisible: n, controller: l, className: a, onClick: c, onContextMenu: p, onMouseDown: f, disableBannerAnimation: g, 'aria-expanded': b, 'aria-controls': y, guild: v, guildBanner: j, animationOverlayHeight: E, children: w, headerClassName: T, communityInfoVisible: Z, hasSubheader: R } = e,
        L = v.features.has(C.oNc.ANIMATED_BANNER),
        k = (0, d.Z)(v),
        U = !k && (0, O.Z)(v),
        G = !k && Z,
        B = (0, _.xR)(j) && L && !g,
        [V, F] = i.useState(!1),
        H = i.useRef(!1),
        z = i.useRef(null),
        W = null != t ? t : z,
        K = i.useRef(void 0),
        Y = m.QK.getSetting();
    (i.useEffect(() => {
        if (B && n && !H.current && Y)
            return (
                F(!0),
                (K.current = setTimeout(() => {
                    F(!1);
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
        { entrypoints: X } = (0, h._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: n,
            guild: v,
            onClick: c,
            onContextMenu: p,
            ariaControls: y,
            ariaExpanded: b,
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
                            [S.container]: !0,
                            [S.clickable]: !X && null != c,
                            [S.selected]: !X && null != c && b,
                            [S.hasBanner]: q(),
                            [S.bannerVisible]: n,
                            [e]: !1,
                            [S.communityInfoVisible]: G || (R && U),
                            [S.invitesRefresh]: X
                        }),
                        onMouseDown: f,
                        onClick: X ? void 0 : c,
                        onContextMenu: p,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(S.header, T, { [S.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(S.headerContent, S.primaryInfo),
                                        children: X ? (0, r.jsx)(D, I(x({}, Q), { children: w })) : (0, r.jsx)(A, I(x({}, Q), { children: w }))
                                    }),
                                    U &&
                                        (0, r.jsx)(N, {
                                            guild: v,
                                            controller: l,
                                            hasBanner: null != j,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != j
                                ? (0, r.jsx)(P, {
                                      guild: v,
                                      controller: l,
                                      guildBanner: j,
                                      animate: V
                                  })
                                : null,
                            (0, r.jsx)(M, { controller: l })
                        ]
                    }),
                    B && q()
                        ? (0, r.jsx)('div', {
                              className: S.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  (F(!0), clearTimeout(K.current));
                              },
                              onMouseLeave: () => F(!1),
                              style: { height: E }
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
            (0, r.jsx)(a.animated.div, {
                className: S.headerEllipseBackdrop,
                style: { opacity: i.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: S.headerEllipseForeground,
                style: { opacity: i.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: S.headerGlass,
                style: {
                    opacity: i.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(n) ? i.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
