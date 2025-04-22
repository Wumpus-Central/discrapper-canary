n.d(t, { Z: () => X }), n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(481060),
    f = n(493773),
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(357352),
    g = n(565942),
    E = n(612659),
    b = n(409100),
    y = n(703656),
    v = n(727939),
    O = n(592125),
    I = n(626135),
    S = n(839606),
    T = n(411149),
    A = n(988290),
    N = n(721359),
    C = n(640963),
    R = n(628309),
    P = n(680783),
    w = n(981631),
    D = n(921944),
    L = n(474936),
    x = n(388032),
    M = n(874577);
function k(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let B = 88,
    V = 'remove-wallpaper',
    F = 0.5,
    Z = 250;
function H(e) {
    let { handleClose: t } = e;
    return (
        (0, h.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: M.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: M.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(d.lBU, { text: x.intl.string(x.t.oW0eUV) }),
                        (0, r.jsx)(d.olH, {
                            className: M.coachmarkCloseIcon,
                            onClick: () => {
                                I.default.track(w.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: M.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: x.intl.string(x.t.dFhhcX)
                        }),
                        (0, r.jsx)(d.Text, {
                            className: M.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: x.intl.string(x.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function Y(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: M.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        children: x.intl.string(x.t.EJ4k19)
                    }),
                    (0, r.jsx)(d.Text, {
                        className: M.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? x.intl.string(x.t.MnUZLS) : x.intl.string(x.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(d.olH, {
                className: M.closeContainer,
                onClick: () => {
                    I.default.track(w.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function W(e) {
    let { isSelected: t, onSelect: n, selectionId: a, tooltipText: s, label: u, className: f, children: _ } = e,
        p = (0, d.xUy)({
            label: u,
            isSelected: t
        }),
        m = i.useRef(null);
    i.useEffect(() => {
        let e = new IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    e.isIntersecting &&
                        (0, h.h)({
                            type: c.ImpressionTypes.VIEW,
                            name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
                            properties: { design_group_id: a }
                        });
                });
            },
            { threshold: F }
        );
        return (
            null != m.current && e.observe(m.current),
            () => {
                e.disconnect();
            }
        );
    }, [a, m]);
    let [g, E] = i.useState('top');
    return (
        i.useEffect(() => {
            let e = m.current;
            if (null == e) return;
            let t = l()((e) => {
                    E(e.intersectionRect.top === e.boundingClientRect.top ? 'top' : 'bottom');
                }, 200),
                n = new IntersectionObserver(
                    (e) => {
                        e.forEach((e) => {
                            t(e);
                        });
                    },
                    {
                        threshold: [0, 1]
                    }
                );
            return (
                n.observe(e),
                () => {
                    n.disconnect(), t.cancel();
                }
            );
        }, []),
        (0, r.jsx)(d.ua7, {
            text: s,
            position: g,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: m,
                    className: o()(f, t && M.wallpaperSelected),
                    children: (0, r.jsx)(
                        d.P3F,
                        G(j({}, e, p), {
                            className: M.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? w.dG4 : () => n(a),
                            children: _
                        })
                    )
                })
        })
    );
}
function K(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: a } = e,
        { label: o, default: s, designGroupId: l } = a,
        [c, u] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            if (t) {
                let t = !1,
                    n = (0, m.I)(a.default.asset);
                (0, g.p)(n, () => {
                    u(!1), (t = !0);
                }),
                    (e = setTimeout(() => {
                        t || u(!0);
                    }, Z));
            } else u(!1);
            return () => {
                clearTimeout(e), u(!1);
            };
        }, [t, a]),
        (0, r.jsxs)(W, {
            isSelected: t,
            onSelect: n,
            selectionId: l,
            tooltipText: o,
            label: o,
            className: M.wallpaper,
            children: [
                c && (0, r.jsx)(d.$jN, { className: M.previewLoadingSpinner }),
                (0, r.jsx)('img', {
                    src: (0, m.I)(s.icon),
                    alt: o,
                    width: B,
                    height: B,
                    draggable: !1,
                    className: M.wallpaperImage
                })
            ]
        })
    );
}
function z(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(W, {
        isSelected: t,
        onSelect: n,
        selectionId: V,
        tooltipText: x.intl.string(x.t['C/MRFx']),
        label: x.intl.string(x.t['C/MRFx']),
        className: M.wallpaperRemoveSelection,
        children: (0, r.jsx)(d.t6m, {
            size: 'lg',
            color: d.TVs.colors.TEXT_MUTED
        })
    });
}
function q(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: a, onClose: o, onApply: s } = e;
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: M.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    I.default.track(w.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), a(t);
                },
                children: x.intl.string(x.t['3nPvdH'])
            }),
            (0, r.jsxs)(d.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: [
                    (0, r.jsx)(d.zxk, {
                        look: d.zxk.Looks.LINK,
                        size: d.zxk.Sizes.MEDIUM,
                        color: d.zxk.Colors.PRIMARY,
                        onClick: () => {
                            I.default.track(w.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), o();
                        },
                        disabled: n,
                        children: x.intl.string(x.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: x.intl.string(x.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function Q() {
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: M.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: M.nonTier2FooterText,
                children: x.intl.format(x.t['0Tapv7'], {
                    onClickNitro: () => {
                        I.default.track(w.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, y.uL)(w.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(b.Z, {
                className: M.getNitroButton,
                buttonTextClassName: M.getNitroButtonText,
                subscribeButtonText: x.intl.string(x.t.JST6jo),
                subscriptionTier: L.Si.TIER_2,
                showGradient: !0,
                size: d.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let X = function (e) {
    let { className: t, position: a = w.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, p.ZP)(_.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: h, setPreviewWallpaperId: m } = (0, S.B)(),
        g = (0, P.Z)(c),
        b = (0, E.m)(L.p9.TIER_2),
        [y, k] = i.useState(!1),
        j = (0, A.e)(y),
        U = (0, R.u)();
    (0, N.W)();
    let G = (0, u.e7)([T.Z], () => T.Z.isFetchingWallpapers),
        B = (0, u.e7)([T.Z], () => T.Z.failedToFetchWallpapers),
        V = (0, u.e7)([T.Z], () => T.Z.getWallpaperById(null == g ? void 0 : g.wallpaperId)),
        F = i.useRef(null),
        Z = i.useRef(null);
    (0, d.Tbt)(Z),
        i.useEffect(() => {
            Z.current = F.current;
        }, [F]),
        i.useEffect(() => {
            null != V && k(V.isBlurred && b);
        }, [V, b]);
    let W = i.useCallback(() => {
            h();
        }, [h]),
        { isUpdating: X, updateChatWallpaper: J } = (0, C.x)({
            channelId: c,
            onUpdateComplete: W
        }),
        $ = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D.L.USER_DISMISS;
                (null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), h();
            },
            [h, s]
        );
    (0, f.ZP)(() => () => {
        $(D.L.INDIRECT_ACTION);
    });
    let ee = i.useCallback(() => {
            if (null == c || null == g || void 0 === g.wallpaperId) return;
            let e = O.Z.getChannel(c);
            I.default.track(w.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                wallpaper_id: g.wallpaperId,
                is_blur_enabled: y,
                channel_id: c,
                channel_type: null == e ? void 0 : e.type
            }),
                J(c, g.wallpaperId, () => {
                    (0, d.showToast)((0, d.createToast)(x.intl.string(x.t.F8FvU1), d.ToastType.FAILURE));
                });
        }, [c, g, J, y]),
        et = i.useCallback(
            (e) => {
                if ((null == V ? void 0 : V.designGroupId) != null) {
                    var t;
                    let n = U[V.designGroupId].find((t) => t.isBlurred === e);
                    m(null != (t = null == n ? void 0 : n.id) ? t : null);
                } else k(e);
            },
            [null == V ? void 0 : V.designGroupId, U, m]
        ),
        en = i.useCallback(
            (e) => {
                let t = U[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === y);
                null != n &&
                    (I.default.track(w.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    m(n.id));
            },
            [y, U, m]
        ),
        er = i.useCallback(
            (e) => {
                e.keyCode === w.yXg.ESCAPE && $();
            },
            [$]
        );
    i.useEffect(() => {
        let e = (e) => {
            var t;
            Z.current = (null == (t = F.current) ? void 0 : t.contains(e.target)) ? F.current : null;
        };
        return (
            document.addEventListener('mousedown', e),
            () => {
                document.removeEventListener('mousedown', e);
            }
        );
    }, [F]);
    let ei = null == c && (null == s ? void 0 : s.pickerType) !== S.j.COACHMARK,
        ea = null;
    return (
        (ea =
            B || ei
                ? (0, r.jsxs)('div', {
                      className: M.errorContainer,
                      children: [
                          (0, r.jsx)(d.Eep, {
                              src: n(167969),
                              alt: 'Error',
                              height: 100,
                              width: 200
                          }),
                          (0, r.jsx)(d.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-muted',
                              className: M.errorText,
                              children: x.intl.string(x.t.F8FvU1)
                          })
                      ]
                  })
                : G
                  ? (0, r.jsx)('div', {
                        className: M.loadingContainer,
                        children: (0, r.jsx)(d.$jN, {})
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(d.Ttm, {
                                className: M.wallpapersContainer,
                                children: [
                                    (0, r.jsx)(z, {
                                        isSelected: null == g || null === g.wallpaperId,
                                        onSelect: () => {
                                            I.default.track(w.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                m(null);
                                        }
                                    }),
                                    j.map((e) =>
                                        (0, r.jsx)(
                                            K,
                                            {
                                                isSelected: (null == V ? void 0 : V.designGroupId) === e.designGroupId,
                                                onSelect: en,
                                                chatWallpaperMetadata: e
                                            },
                                            e.id
                                        )
                                    )
                                ]
                            }),
                            b
                                ? (0, r.jsx)(q, {
                                      canApply: (null == g ? void 0 : g.wallpaperId) !== void 0,
                                      isUpdating: X,
                                      isBlurEnabled: y,
                                      onBlurEnabledChange: et,
                                      onClose: $,
                                      onApply: ee
                                  })
                                : (0, r.jsx)(Q, {})
                        ]
                    })),
        (0, r.jsx)(p.Gt, {
            value: l,
            children: (0, r.jsx)(v.Z, {
                className: o()(M.draggableContainer, t),
                defaultPosition: a,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: M.container,
                    ref: F,
                    onKeyDown: er,
                    children: [
                        (null == s ? void 0 : s.pickerType) === S.j.COACHMARK
                            ? (0, r.jsx)(H, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: b
                              })
                            : (0, r.jsx)(Y, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: b
                              }),
                        (0, r.jsx)('div', { className: M.divider }),
                        (0, r.jsx)(d.JcV, {
                            containerRef: F,
                            children: ea
                        })
                    ]
                })
            })
        })
    );
};
