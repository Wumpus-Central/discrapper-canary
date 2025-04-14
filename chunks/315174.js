n.d(t, {
    ZP: () => A,
    wD: () => Z
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
    f = n(159300),
    g = n(210887),
    m = n(695346),
    b = n(496675),
    _ = n(768581),
    y = n(358555),
    v = n(981631),
    O = n(647086),
    j = n(388032),
    C = n(917669);
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
function S(e, t) {
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
    let { isRefreshEnabled: n, guild: i, controller: l, guildBanner: c, animate: u } = e,
        { value: d } = l.springs,
        p = m.QK.getSetting();
    return (0, r.jsx)(a.animated.div, {
        className: C.animatedContainer,
        style: {
            opacity: d,
            transform: d.to((e) => 'translateY(-'.concat((1 - e) * 90, 'px)'))
        },
        children: (0, r.jsx)(a.animated.div, {
            className: o()(C.bannerImage, { [C.bannerImgFullWidth]: s.tq }),
            style: { transform: d.to((e) => (n || !p ? 'translateY('.concat((1 - e) * 90, 'px)') : 'translateY('.concat((1 - e) * 90 * (2 / 3), 'px) scale(').concat(1 + (1 - e) * 0.2, ')'))) },
            children: (0, r.jsx)('img', {
                className: o()(C.bannerImg, { [C.bannerImgFullWidth]: s.tq }),
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
function I(e) {
    let { guild: t, controller: n, hasBanner: i, hasSubheader: l } = e,
        { value: s } = n.springs,
        c = t.hasFeature(v.oNc.DISCOVERABLE),
        d = (0, r.jsx)('div', {
            className: C.communityInfo,
            children:
                c &&
                (0, r.jsx)(u.ua7, {
                    text: j.NW.string(j.t.O8lDIy),
                    position: 'right',
                    children: (e) =>
                        (0, r.jsxs)(
                            'div',
                            S(x({ className: C.communityInfoPill }, e), {
                                children: [
                                    (0, r.jsx)(u.enf, {
                                        size: 'custom',
                                        color: 'currentColor',
                                        width: 12,
                                        height: 12,
                                        className: C.communityIcon
                                    }),
                                    (0, r.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: j.NW.string(j.t['B/vjCg'])
                                    })
                                ]
                            })
                        )
                })
        });
    return l
        ? (0, r.jsx)('div', {
              className: o()(C.communityInfoContainer, C.hasSubheader),
              children: d
          })
        : (0, r.jsx)(a.animated.div, {
              className: C.communityInfoContainer,
              style: i ? { opacity: s } : { height: s.to((e) => ''.concat(20 * e, 'px')) },
              children: d
          });
}
function N() {
    return (0, r.jsx)(u.r7p, {
        size: 'custom',
        color: 'currentColor',
        className: C.favoritesIcon,
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
function E(e) {
    let { guild: t } = e;
    return (0, r.jsx)(u.X6q, {
        variant: 'text-md/semibold',
        lineClamp: 1,
        className: C.name,
        children: t.toString()
    });
}
function w(e) {
    var t;
    let { bannerVisible: n, guild: i, onClick: l, onContextMenu: o, ariaControls: a, ariaExpanded: s, guildHeaderRef: c, children: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(y.Z, {
                guild: i,
                isBannerVisible: n
            }),
            i.id === O._ && (0, r.jsx)(N, {}),
            (0, r.jsx)(E, { guild: i }),
            null != l &&
                (0, r.jsx)(u.P3F, {
                    className: C.headerButton,
                    onClick: l,
                    onContextMenu: o,
                    'aria-controls': a,
                    'aria-expanded': s,
                    focusProps: {
                        ringTarget: c,
                        offset: 4
                    },
                    'aria-label': j.NW.formatToPlainString(j.t.xMXpl5, { guildName: null != (t = null == i ? void 0 : i.toString()) ? t : '' })
                }),
            (0, r.jsx)('div', {
                className: C.headerChildren,
                children: d
            })
        ]
    });
}
function T(e) {
    let { bannerVisible: t, guild: l, onClick: o, onContextMenu: a, children: s } = e,
        d = (0, c.e7)([g.Z], () => g.Z.theme),
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
        h = (0, c.e7)([b.Z], () => (0, f.b)(b.Z, l)),
        m = i.useCallback(() => {
            h
                ? (0, u.ZDy)(async () => {
                      let { default: e } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              S(x({}, t), {
                                  guild: l,
                                  source: v.t4x.GUILD_HEADER
                              })
                          );
                  })
                : (0, u.ZDy)(async () => {
                      let { default: e } = await n.e('88358').then(n.bind(n, 598402));
                      return (t) => (0, r.jsx)(e, x({}, t));
                  });
        }, [h, l]);
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
                        S(
                            x(
                                {
                                    className: C.guildDropdown,
                                    'aria-label': j.NW.formatToPlainString(j.t.xMXpl5, { guildName: null != (n = null == l ? void 0 : l.toString()) ? n : '' }),
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
                                        className: C.guildBadgeAndName,
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                guild: l,
                                                isBannerVisible: t
                                            }),
                                            l.id === O._ && (0, r.jsx)(N, {}),
                                            (0, r.jsx)(E, { guild: l })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: C.headerChildren,
                                        children: s
                                    })
                                ]
                            }
                        )
                    );
                }
            }),
            l.id !== O._ &&
                (0, r.jsx)(u.ua7, {
                    text: j.NW.string(j.t.Sd8Ix8),
                    position: 'bottom',
                    children: (e) =>
                        (0, r.jsx)(
                            u.P3F,
                            S(x({ className: C.inviteButton }, e), {
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
    let { bannerVisible: t, controller: n, className: l, onClick: a, onContextMenu: c, onMouseDown: f, disableBannerAnimation: g, 'aria-expanded': b, 'aria-controls': y, guild: O, guildBanner: j, animationOverlayHeight: N, children: Z, headerClassName: E, communityInfoVisible: A, hasSubheader: R } = e,
        L = O.hasFeature(v.oNc.ANIMATED_BANNER),
        k = (0, p.Z)(O),
        M = !k && O.hasCommunityInfoSubheader(),
        G = !k && A,
        B = (0, _.xR)(j) && L && !g,
        [U, W] = i.useState(!1),
        V = i.useRef(!1),
        F = i.useRef(null),
        H = i.useRef(void 0),
        z = m.QK.getSetting();
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
        q = (0, d.Q3)('GuildHeader'),
        { entrypoints: K } = (0, h._k)({ location: 'guild_header' }),
        Q = {
            bannerVisible: t,
            guild: O,
            onClick: a,
            onContextMenu: c,
            ariaControls: y,
            ariaExpanded: b,
            guildHeaderRef: F
        };
    return (0, r.jsx)(u.f6W, {
        theme: t ? v.BRd.DARK : void 0,
        children: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)('div', {
                        ref: F,
                        className: o()(l, {
                            [C.container]: !0,
                            [C.clickable]: !K && null != a,
                            [C.selected]: !K && null != a && b,
                            [C.hasBanner]: Y(),
                            [C.bannerVisible]: t,
                            [e]: !q && t,
                            [C.communityInfoVisible]: G || (R && M),
                            [C.invitesRefresh]: K
                        }),
                        onMouseDown: f,
                        onClick: K ? void 0 : a,
                        onContextMenu: c,
                        children: [
                            (0, r.jsxs)('header', {
                                className: o()(C.header, E, { [C.themedHeaderMobile]: s.tq }),
                                children: [
                                    (0, r.jsx)('div', {
                                        className: o()(C.headerContent, C.primaryInfo),
                                        children: K ? (0, r.jsx)(T, S(x({}, Q), { children: Z })) : (0, r.jsx)(w, S(x({}, Q), { children: Z }))
                                    }),
                                    M &&
                                        (0, r.jsx)(I, {
                                            guild: O,
                                            controller: n,
                                            hasBanner: null != j,
                                            hasSubheader: null != R && R
                                        })
                                ]
                            }),
                            null != j
                                ? (0, r.jsx)(P, {
                                      guild: O,
                                      controller: n,
                                      guildBanner: j,
                                      animate: U,
                                      isRefreshEnabled: q
                                  })
                                : null,
                            (0, r.jsx)(D, { controller: n })
                        ]
                    }),
                    B && Y()
                        ? (0, r.jsx)('div', {
                              className: C.animatedBannerHoverLayer,
                              onMouseEnter: () => {
                                  W(!0), clearTimeout(H.current);
                              },
                              onMouseLeave: () => W(!1),
                              style: { height: N }
                          })
                        : null
                ]
            })
    });
});
function D(e) {
    let { controller: t } = e,
        n = (0, d.Q3)('GuildHeaderOverlay'),
        { theme: i } = (0, u.TCT)();
    if (!n) return null;
    let l = t.springs.value;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.animated.div, {
                className: C.headerEllipseBackdrop,
                style: { opacity: l.to((e) => 0.5 * e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: C.headerEllipseForeground,
                style: { opacity: l.to((e) => e) }
            }),
            (0, r.jsx)(a.animated.div, {
                className: C.headerGlass,
                style: {
                    opacity: l.to((e) => (1 - e) * 6),
                    filter: (0, u.apv)(i) ? l.to((e) => 'brightness('.concat(0.75 + 0.25 * e, ')')) : void 0
                }
            })
        ]
    });
}
