n.d(t, {
    ZP: () => A,
    wD: () => w
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(950035),
    a = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(540059),
    h = n(666188),
    p = n(340541),
    f = n(159300),
    g = n(210887),
    m = n(695346),
    b = n(496675),
    _ = n(768581),
    y = n(358555),
    O = n(981631),
    v = n(647086),
    C = n(388032),
    S = n(917669);
function j(e) {
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
function E(e, t) {
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
function x(e) {
    var t;
    let { isRefreshEnabled: n, guild: i, controller: l, guildBanner: c, animate: u } = e,
        { value: d } = l.springs,
        h = m.QK.getSetting();
    return (0, r.jsx)(s.animated.div, {
        className: S.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(s.animated.div, {
            className: o()(S.bannerImage, { [S.bannerImgFullWidth]: a.tq }),
            style: { transform: d.to((e) => (n || !h ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(S.bannerImg, { [S.bannerImgFullWidth]: a.tq }),
                src:
                    null !=
                    (t = _.ZP.getGuildBannerURL(
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
function P(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: a } = n.springs,
        c = t.hasFeature(O.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: S.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: C.intl.string(C.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            E(j({ className: S.communityInfoPill }, e), {
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
                                        children: C.intl.string(C.t['B/vjCg'])
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
function I() {
    return (0, r.jsx)(u.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: S.favoritesIcon,
        height: 20,
        width: 20
    });
}
let w = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: 'xs',
        color: 'currentColor'
    });
};
function N(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: S.name,
        children: t.toString()
    });
}
function Z(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: s, ariaExpanded: a, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === v._ && (0, r.jsx)(I, {}),
            (0, r.jsx)(N, { guild: i }),
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
                    'aria-label': C.intl.formatToPlainString(C.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: S.headerChildren,
                children: d
            })
        ]
    });
}
function T(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: s, children: a } = e,
        d = i.useRef(null),
        h = (0, c.e7)([g.Z], () => g.Z.theme),
        p = i.useCallback(async () => {
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
        m = (0, c.e7)([b.Z], () => (0, f.b)(b.Z, l)),
        _ = i.useCallback(() => {
            m
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              E(j({}, t), {
                                  guild: l,
                                  source: O.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, j({}, t));
                  });
        }, [m, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                targetElementRef: d,
                renderPopout: p,
                position: 'bottom',
                align: 'left',
                animation: u.yRy.Animation.SCALE,
                spacing: 4,
                children: (e) => {
                    var n;
                    return (0, r.jsxs)(
                        u.P3F,
                        E(
                            j(
                                {
                                    innerRef: d,
                                    className: S.guildDropdown,
                                    'aria-label': C.intl.formatToPlainString(C.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.toString()) ? n : '' }),
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
                                            l.id === v._ && (0, r.jsx)(I, {}),
                                            (0, r.jsx)(N, { guild: l })
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
            l.id !== v._ &&
                (0, r.jsx)(u.ua7, {
                    text: C.intl.string(C.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            E(j({ className: S.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), _();
                                },
                                children: (0, r.jsx)(u.ejJ, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            })
                        )
                })
        ]
    });
}
let A = i.memo(function (e) {
    let { ref: t, bannerVisible: n, controller: l, className: s, onClick: c, onContextMenu: f, onMouseDown: g, disableBannerAnimation: b, 'aria-expanded': y, 'aria-controls': v, guild: C, guildBanner: I, animationOverlayHeight: w, children: N, headerClassName: A, communityInfoVisible: D, hasSubheader: L } = e,
        k = C.hasFeature(O.oNc.ANIMATED_BANNER),
        M = (0, h.Z)(C),
        U = !M && C.hasCommunityInfoSubheader(),
        G = !M && D,
        B = (0, _.xR)(I) && k && !b,
        [V, H] = i.useState(!1),
        F = i.useRef(!1),
        W = i.useRef(null),
        z = null != t ? t : W,
        Y = i.useRef(void 0),
        K = m.QK.getSetting();
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
        Q = (0, d.Q3)('GuildHeader'),
        { entrypoints: X } = (0, p._k)({ location: 'guild_header' }),
        J = {
            bannerVisible: n,
            guild: C,
            onClick: c,
            onContextMenu: f,
            ariaControls: v,
            ariaExpanded: y,
            guildHeaderRef: z
        };
    return (0, r.jsx)(u.f6W, {
        theme: n ? O.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: z,
                        className: o()(s, {
                            [S.container]: !0,
                            [S.clickable]: !X && null != c,
                            [S.selected]: !X && null != c && y,
                            [S.hasBanner]: q(),
                            [S.bannerVisible]: n,
                            [e]: !Q && n,
                            [S.communityInfoVisible]: G || (L && U),
                            [S.invitesRefresh]: X
                        }),
                        onMouseDown: g,
                        onClick: X ? void 0 : c,
                        onContextMenu: f,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(S.header, A, { [S.themedHeaderMobile]: a.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(S.headerContent, S.primaryInfo),
                                        children: X ? (0, r.jsx)(T, E(j({}, J), { children: N })) : (0, r.jsx)(Z, E(j({}, J), { children: N }))
                                    }),
                                    U &&
                                        (0, r.jsx)(P, {
                                            guild: C,
                                            controller: l,
                                            hasBanner: null != I,
                                            hasSubheader: null != L && L
                                        })
                                ]
                            }),
                            null != I
                                ? (0, r.jsx)(x, {
                                      guild: C,
                                      controller: l,
                                      guildBanner: I,
                                      animate: V,
                                      isRefreshEnabled: Q
                                  })
                                : null,
                            (0, r.jsx)(R, { controller: l })
                        ]
                    }),
                    B && q()
                        ? (0, r.jsx)('div', {
                              className: S.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  H(!0), clearTimeout(Y.current);
                              },
                              onMouseLeave: () => H(!1),
                              style: { height: w }
                          })
                        : null
                ]
            })
    });
});
function R(e) {
    let { controller: t } = e,
        n = (0, d.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, u.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.animated.div, {
                className: S.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: S.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(s.animated.div, {
                className: S.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
