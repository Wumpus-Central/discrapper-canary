n.d(t, {
    ZP: () => A,
    wD: () => P
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(200100),
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
    v = n(981631),
    O = n(647086),
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
function N(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: a } = n.springs,
        c = t.hasFeature(v.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: S.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: C.NW.string(C.t.O8lDIy),
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
                                        children: C.NW.string(C.t['B/vjCg'])
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
let P = (e) => {
    let { open: t } = e,
        n = t ? u.u04 : u.CJ0;
    return (0, r.jsx)(n, {
        size: 'xs',
        color: 'currentColor'
    });
};
function w(e) {
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
            i.id === O._ && (0, r.jsx)(I, {}),
            (0, r.jsx)(w, { guild: i }),
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
                    'aria-label': C.NW.formatToPlainString(C.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
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
        d = (0, c.e7)([g.Z], () => g.Z.theme),
        h = i.useCallback(async () => {
            let { default: e } = await Promise.all([n.e('87154'), n.e('42018')]).then(n.bind(n, 859432));
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
        p = (0, c.e7)([b.Z], () => (0, f.b)(b.Z, l)),
        m = i.useCallback(() => {
            p
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              E(j({}, t), {
                                  guild: l,
                                  source: v.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, j({}, t));
                  });
        }, [p, l]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.KeG, {
                renderPopout: h,
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
                                    className: S.guildDropdown,
                                    'aria-label': C.NW.formatToPlainString(C.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.toString()) ? n : '' }),
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
                                            l.id === O._ && (0, r.jsx)(I, {}),
                                            (0, r.jsx)(w, { guild: l })
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
            l.id !== O._ &&
                (0, r.jsx)(u.ua7, {
                    text: C.NW.string(C.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            E(j({ className: S.inviteButton }, e), {
                                onClick: () => {
                                    var t;
                                    null == (t = e.onClick) || t.call(e), m();
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
    let { bannerVisible: t, controller: n, className: l, onClick: s, onContextMenu: c, onMouseDown: f, disableBannerAnimation: g, 'aria-expanded': b, 'aria-controls': y, guild: O, guildBanner: C, animationOverlayHeight: I, children: P, headerClassName: w, communityInfoVisible: A, hasSubheader: D } = e,
        L = O.hasFeature(v.oNc.ANIMATED_BANNER),
        k = (0, h.Z)(O),
        M = !k && O.hasCommunityInfoSubheader(),
        U = !k && A,
        G = (0, _.xR)(C) && L && !g,
        [B, W] = i.useState(!1),
        V = i.useRef(!1),
        H = i.useRef(null),
        F = i.useRef(void 0),
        z = m.QK.getSetting();
    i.useEffect(() => {
        if (G && t && !V.current && z)
            return (
                W(!0),
                (F.current = setTimeout(() => {
                    W(!1);
                }, 5000)),
                () => {
                    clearTimeout(F.current);
                }
            );
    }, [G, t, z]),
        i.useEffect(() => {
            V.current = t;
        }, [t]);
    let Y = () => {
            let { renderBanner: t, guildBanner: n } = e;
            return null != n && !t;
        },
        K = (0, d.Q3)('GuildHeader'),
        { entrypoints: q } = (0, p._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: t,
            guild: O,
            onClick: s,
            onContextMenu: c,
            ariaControls: y,
            ariaExpanded: b,
            guildHeaderRef: H
        };
    return (0, r.jsx)(u.f6W, {
        theme: t ? v.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: H,
                        className: o()(l, {
                            [S.container]: !0,
                            [S.clickable]: !q && null != s,
                            [S.selected]: !q && null != s && b,
                            [S.hasBanner]: Y(),
                            [S.bannerVisible]: t,
                            [e]: !K && t,
                            [S.communityInfoVisible]: U || (D && M),
                            [S.invitesRefresh]: q
                        }),
                        onMouseDown: f,
                        onClick: q ? void 0 : s,
                        onContextMenu: c,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(S.header, w, { [S.themedHeaderMobile]: a.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(S.headerContent, S.primaryInfo),
                                        children: q ? (0, r.jsx)(T, E(j({}, Q), { children: P })) : (0, r.jsx)(Z, E(j({}, Q), { children: P }))
                                    }),
                                    M &&
                                        (0, r.jsx)(N, {
                                            guild: O,
                                            controller: n,
                                            hasBanner: null != C,
                                            hasSubheader: null != D && D
                                        })
                                ]
                            }),
                            null != C
                                ? (0, r.jsx)(x, {
                                      guild: O,
                                      controller: n,
                                      guildBanner: C,
                                      animate: B,
                                      isRefreshEnabled: K
                                  })
                                : null,
                            (0, r.jsx)(R, { controller: n })
                        ]
                    }),
                    G && Y()
                        ? (0, r.jsx)('div', {
                              className: S.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  W(!0), clearTimeout(F.current);
                              },
                              onMouseLeave: () => W(!1),
                              style: { height: I }
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
