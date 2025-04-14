n.d(t, {
    ZP: () => w,
    wD: () => I
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(200100),
    s = n(873546),
    c = n(442837),
    u = n(481060),
    d = n(540059),
    p = n(666188),
    h = n(340541),
    f = n(210887),
    g = n(695346),
    m = n(768581),
    b = n(358555),
    _ = n(981631),
    y = n(647086),
    v = n(388032),
    O = n(917669);
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
function C(e, t) {
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
        p = g.QK.getSetting();
    return (0, r.jsx)(a.animated.div, {
        className: O.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(O.bannerImage, { [O.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !p ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(O.bannerImg, { [O.bannerImgFullWidth]: s.tq }),
                src:
                    null !=
                    (t = m.ZP.getGuildBannerURL(
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
function S(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        c = t.hasFeature(_.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: O.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: v.NW.string(v.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            C(j({ className: O.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: O.communityIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: v.NW.string(v.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(O.communityInfoContainer, O.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: O.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function P() {
    return (0, r.jsx)(u.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: O.favoritesIcon,
        height: 20,
        width: 20
    });
}
let I = (e) => {
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
        className: O.name,
        children: t.toString()
    });
}
function E(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(b.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === y._ && (0, r.jsx)(P, {}),
            (0, r.jsx)(N, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: O.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4
                    },
                    'aria-label': v.NW.formatToPlainString(v.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: O.headerChildren,
                children: d
            })
        ]
    });
}
function Z(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: a, children: s } = e,
        d = (0, c.e7)([f.Z], () => f.Z.theme),
        p = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('69760'), n.e('20246')]).then(n.bind(n, 859432));
            return (t) => {
                let { closePopout: n } = t;
                return (0, r.jsx)(u.f6W, {
                    theme: d,
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
        }, [l, d]),
        h = i.useCallback(() => {
            (0, u.ZDy)(async () => {
                let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        C(j({}, t), {
                            guild: l,
                            source: _.t4x.GUILD_HEADER
                        })
                    );
            });
        }, [l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                renderPopout: p,
                position: 'bottom',
                align: 'left',
                animation: u.yRy.Animation.SCALE,
                spacing: 4,
                children: (e) => {
                    var n;
                    return (0, r.jsxs)(
                        u.P3F,
                        C(
                            j(
                                {
                                    className: O.guildDropdown,
                                    'aria-label': v.NW.formatToPlainString(v.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.toString()) ? n : '' }),
                                    onContextMenu: a
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
                                        className: O.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(b.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === y._ && (0, r.jsx)(P, {}),
                                            (0, r.jsx)(N, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: O.headerChildren,
                                        children: s
                                    })
                                ]
                            }
                        )
                    );
                }
            }),
            l.id !== y._ &&
                (0, r.jsx)(u.ua7, {
                    text: v.NW.string(v.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            C(j({ className: O.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), h();
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
let w = i.memo(function (e) {
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: c, onMouseDown: f, disableBannerAnimation: b, 'aria-expanded': y, 'aria-controls': v, guild: P, guildBanner: I, animationOverlayHeight: N, children: w, headerClassName: A, communityInfoVisible: D, hasSubheader: R } = e,
        L = P.hasFeature(_.oNc.ANIMATED_BANNER),
        k = (0, p.Z)(P),
        M = !k && P.hasCommunityInfoSubheader(),
        G = !k && D,
        B = (0, m.xR)(I) && L && !b,
        [U, W] = i.useState(!1),
        V = i.useRef(!1),
        H = i.useRef(null),
        F = i.useRef(void 0),
        z = g.QK.getSetting();
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
        q = (0, d.Q3)('GuildHeader'),
        { enabled: K } = (0, h._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: t,
            guild: P,
            onClick: a,
            onContextMenu: c,
            ariaControls: v,
            ariaExpanded: y,
            guildHeaderRef: H
        };
    return (0, r.jsx)(u.f6W, {
        theme: t ? _.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: H,
                        className: o()(l, {
                            [O.container]: !0,
                            [O.clickable]: !K && null != a,
                            [O.selected]: !K && null != a && y,
                            [O.hasBanner]: Y(),
                            [O.bannerVisible]: t,
                            [e]: !q && t,
                            [O.communityInfoVisible]: G || (R && M),
                            [O.invitesRefresh]: K
                        }),
                        onMouseDown: f,
                        onClick: K ? void 0 : a,
                        onContextMenu: c,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(O.header, A, { [O.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(O.headerContent, O.primaryInfo),
                                        children: K ? (0, r.jsx)(Z, C(j({}, Q), { children: w })) : (0, r.jsx)(E, C(j({}, Q), { children: w }))
                                    }),
                                    M &&
                                        (0, r.jsx)(S, {
                                            guild: P,
                                            controller: n,
                                            hasBanner: null != I,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != I
                                ? (0, r.jsx)(x, {
                                      guild: P,
                                      controller: n,
                                      guildBanner: I,
                                      animate: U,
                                      isRefreshEnabled: q
                                  })
                                : null,
                            (0, r.jsx)(T, { controller: n })
                        ]
                    }),
                    B && Y()
                        ? (0, r.jsx)('div', {
                              className: O.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  W(!0), clearTimeout(F.current);
                              },
                              onMouseLeave: () => W(!1),
                              style: { height: N }
                          })
                        : null
                ]
            })
    });
});
function T(e) {
    let { controller: t } = e,
        n = (0, d.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, u.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: O.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: O.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: O.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
