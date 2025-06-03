n.d(t, {
    ZP: () => M,
    wD: () => T
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(240894),
    a = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(230711),
    h = n(540059),
    p = n(666188),
    f = n(665149),
    g = n(340541),
    m = n(159300),
    b = n(210887),
    y = n(695346),
    O = n(496675),
    v = n(768581),
    _ = n(358555),
    C = n(981631),
    j = n(647086),
    S = n(982183),
    E = n(388032),
    x = n(917669);
function P(e) {
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
function w(e) {
    var t;
    let { isRefreshEnabled: n, guild: i, controller: l, guildBanner: c, animate: u } = e,
        { value: d } = l.springs,
        h = y.QK.getSetting();
    return (0, r.jsx)(s.animated.div, {
        className: x.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(s.animated.div, {
            className: o()(x.bannerImage, { [x.bannerImgFullWidth]: a.tq }),
            style: { transform: d.to((e) => (n || !h ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(x.bannerImg, { [x.bannerImgFullWidth]: a.tq }),
                src:
                    null !=
                    (t = v.ZP.getGuildBannerURL(
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
function N(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: a } = n.springs,
        c = t.hasFeature(C.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: x.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: E.intl.string(E.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            I(P({ className: x.communityInfoPill }, e), {
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
                                        children: E.intl.string(E.t['B/vjCg'])
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
        : (0, r.jsx)(s.animated.div, {
              className: x.communityInfoContainer,
              style: i ? { opacity: a } : { height: a.to((e) => ''.concat(20 * e, 'px')) },
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
function R(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: x.name,
        children: t.toString()
    });
}
function A(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: s, ariaExpanded: a, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(_.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === j._ && (0, r.jsx)(Z, {}),
            (0, r.jsx)(R, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: x.headerButton,
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
                className: x.headerChildren,
                children: d
            })
        ]
    });
}
let D = [j._, S.yG];
function L(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: s, children: a } = e,
        h = i.useRef(null),
        p = (0, c.e7)([b.Z], () => b.Z.theme),
        g = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('87154'), n.e('42018')]).then(n.bind(n, 859432));
            return (t) => {
                let { closePopout: n } = t;
                return (0, r.jsx)(u.f6W, {
                    theme: p,
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
        }, [l, p]),
        y = (0, c.e7)([O.Z], () => (0, m.b)(O.Z, l)),
        v = i.useCallback(() => {
            y
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              I(P({}, t), {
                                  guild: l,
                                  source: C.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, P({}, t));
                  });
        }, [y, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                targetElementRef: h,
                renderPopout: g,
                position: 'bottom',
                align: 'left',
                animation: u.yRy.Animation.SCALE,
                spacing: 4,
                children: (e) => {
                    var n;
                    return (0, r.jsxs)(
                        u.P3F,
                        I(
                            P(
                                {
                                    innerRef: h,
                                    className: x.guildDropdown,
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
                                        className: x.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(_.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === j._ && (0, r.jsx)(Z, {}),
                                            (0, r.jsx)(R, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: x.headerChildren,
                                        children: a
                                    })
                                ]
                            }
                        )
                    );
                }
            }),
            !D.includes(l.id) &&
                (0, r.jsx)(u.ua7, {
                    text: E.intl.string(E.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            I(P({ className: x.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), v();
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                }),
            l.id === S.yG &&
                (0, r.jsx)(f.JO, {
                    icon: u.ewm,
                    iconClassName: x.settingsButtonIcon,
                    className: x.settingsButton,
                    'aria-hidden': !0,
                    tooltip: E.intl.string(E.t.h850Sk),
                    onClick: () => d.Z.open(C.oAB.NOTIFICATIONS, void 0)
                })
        ]
    });
}
let M = i.memo(function (e) {
    let { ref: t, bannerVisible: n, controller: l, className: s, onClick: c, onContextMenu: d, onMouseDown: f, disableBannerAnimation: m, 'aria-expanded': b, 'aria-controls': O, guild: _, guildBanner: j, animationOverlayHeight: S, children: E, headerClassName: Z, communityInfoVisible: T, hasSubheader: R } = e,
        D = _.hasFeature(C.oNc.ANIMATED_BANNER),
        M = (0, p.Z)(_),
        U = !M && _.hasCommunityInfoSubheader(),
        G = !M && T,
        B = (0, v.xR)(j) && D && !m,
        [V, H] = i.useState(!1),
        F = i.useRef(!1),
        z = i.useRef(null),
        W = null != t ? t : z,
        Y = i.useRef(void 0),
        K = y.QK.getSetting();
    i.useEffect(() => {
        if (B && n && !F.current && K)
            return (
                H(!0),
                (Y.current = setTimeout(() => {
                    H(!1);
                }, 5000)),
                () => {
                    clearTimeout(Y.current);
                }
            );
    }, [B, n, K]),
        i.useEffect(() => {
            F.current = n;
        }, [n]);
    let q = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        Q = (0, h.Q3)('GuildHeader'),
        { entrypoints: X } = (0, g._k)({ location: 'guild_header' }),
        J = {
            bannerVisible: n,
            guild: _,
            onClick: c,
            onContextMenu: d,
            ariaControls: O,
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
                        className: o()(s, {
                            [x.container]: !0,
                            [x.clickable]: !X && null != c,
                            [x.selected]: !X && null != c && b,
                            [x.hasBanner]: q(),
                            [x.bannerVisible]: n,
                            [e]: !Q && n,
                            [x.communityInfoVisible]: G || (R && U),
                            [x.invitesRefresh]: X
                        }),
                        onMouseDown: f,
                        onClick: X ? void 0 : c,
                        onContextMenu: d,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(x.header, Z, { [x.themedHeaderMobile]: a.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(x.headerContent, x.primaryInfo),
                                        children: X ? (0, r.jsx)(L, I(P({}, J), { children: E })) : (0, r.jsx)(A, I(P({}, J), { children: E }))
                                    }),
                                    U &&
                                        (0, r.jsx)(N, {
                                            guild: _,
                                            controller: l,
                                            hasBanner: null != j,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != j
                                ? (0, r.jsx)(w, {
                                      guild: _,
                                      controller: l,
                                      guildBanner: j,
                                      animate: V,
                                      isRefreshEnabled: Q
                                  })
                                : null,
                            (0, r.jsx)(k, { controller: l })
                        ]
                    }),
                    B && q()
                        ? (0, r.jsx)('div', {
                              className: x.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  H(!0), clearTimeout(Y.current);
                              },
                              onMouseLeave: () => H(!1),
                              style: { height: S }
                          })
                        : null
                ]
            })
    });
});
function k(e) {
    let { controller: t } = e,
        n = (0, h.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, u.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: x.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: x.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: x.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
