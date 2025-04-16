n.d(t, { Z: () => Q }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
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
    O = n(626135),
    I = n(839606),
    S = n(411149),
    T = n(988290),
    N = n(721359),
    A = n(640963),
    C = n(628309),
    R = n(680783),
    P = n(981631),
    w = n(921944),
    D = n(474936),
    L = n(388032),
    x = n(874577);
function M(e, t, n) {
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
function k(e) {
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
                M(e, t, n[t]);
            });
    }
    return e;
}
function j(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : j(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let G = 88,
    B = 'remove-wallpaper',
    F = 0.5,
    V = 250;
function Z(e) {
    let { handleClose: t } = e;
    return (
        (0, h.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: x.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: x.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(d.lBU, { text: L.NW.string(L.t.oW0eUV) }),
                        (0, r.jsx)(d.olH, {
                            className: x.coachmarkCloseIcon,
                            onClick: () => {
                                O.default.track(P.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: x.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: L.NW.string(L.t.dFhhcX)
                        }),
                        (0, r.jsx)(d.Text, {
                            className: x.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: L.NW.string(L.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function H(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: x.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        children: L.NW.string(L.t.EJ4k19)
                    }),
                    (0, r.jsx)(d.Text, {
                        className: x.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? L.NW.string(L.t.MnUZLS) : L.NW.string(L.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(d.olH, {
                className: x.closeContainer,
                onClick: () => {
                    O.default.track(P.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function W(e) {
    let { isSelected: t, onSelect: n, selectionId: o, tooltipText: s, label: u, className: f, children: _ } = e,
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
                            properties: { design_group_id: o }
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
    }, [o, m]);
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
                    className: a()(f, t && x.wallpaperSelected),
                    children: (0, r.jsx)(
                        d.P3F,
                        U(k({}, e, p), {
                            className: x.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? P.dG4 : () => n(o),
                            children: _
                        })
                    )
                })
        })
    );
}
function Y(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: o } = e,
        { label: a, default: s, designGroupId: l } = o,
        [c, u] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            if (t) {
                let t = !1,
                    n = (0, m.I)(o.default.asset);
                (0, g.p)(n, () => {
                    u(!1), (t = !0);
                }),
                    (e = setTimeout(() => {
                        t || u(!0);
                    }, V));
            } else u(!1);
            return () => {
                clearTimeout(e), u(!1);
            };
        }, [t, o]),
        (0, r.jsxs)(W, {
            isSelected: t,
            onSelect: n,
            selectionId: l,
            tooltipText: a,
            label: a,
            className: x.wallpaper,
            children: [
                c && (0, r.jsx)(d.$jN, { className: x.previewLoadingSpinner }),
                (0, r.jsx)('img', {
                    src: (0, m.I)(s.icon),
                    alt: a,
                    width: G,
                    height: G,
                    draggable: !1,
                    className: x.wallpaperImage
                })
            ]
        })
    );
}
function K(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(W, {
        isSelected: t,
        onSelect: n,
        selectionId: B,
        tooltipText: L.NW.string(L.t['C/MRFx']),
        label: L.NW.string(L.t['C/MRFx']),
        className: x.wallpaperRemoveSelection,
        children: (0, r.jsx)(d.t6m, {
            size: 'lg',
            color: d.TVs.colors.TEXT_MUTED
        })
    });
}
function z(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: x.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    O.default.track(P.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: L.NW.string(L.t['3nPvdH'])
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
                            O.default.track(P.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: L.NW.string(L.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: L.NW.string(L.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function q() {
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: x.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: x.nonTier2FooterText,
                children: L.NW.format(L.t['0Tapv7'], {
                    onClickNitro: () => {
                        O.default.track(P.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, y.uL)(P.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(b.Z, {
                className: x.getNitroButton,
                buttonTextClassName: x.getNitroButtonText,
                subscribeButtonText: L.NW.string(L.t.JST6jo),
                subscriptionTier: D.Si.TIER_2,
                showGradient: !0,
                size: d.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let Q = function (e) {
    let { className: t, position: o = P.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, p.ZP)(_.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: h, setPreviewWallpaperId: m } = (0, I.B)(),
        g = (0, R.Z)(c),
        b = (0, E.m)(D.p9.TIER_2),
        [y, M] = i.useState(!1),
        k = (0, T.e)(y),
        j = (0, C.u)();
    (0, N.W)();
    let U = (0, u.e7)([S.Z], () => S.Z.isFetchingWallpapers),
        G = (0, u.e7)([S.Z], () => S.Z.failedToFetchWallpapers),
        B = (0, u.e7)([S.Z], () => S.Z.getWallpaperById(null == g ? void 0 : g.wallpaperId)),
        F = i.useRef(null),
        V = i.useRef(null);
    (0, d.Tbt)(V),
        i.useEffect(() => {
            V.current = F.current;
        }, [F]),
        i.useEffect(() => {
            null != B && M(B.isBlurred && b);
        }, [B, b]);
    let W = i.useCallback(() => {
            h();
        }, [h]),
        { isUpdating: Q, updateChatWallpaper: X } = (0, A.x)({
            channelId: c,
            onUpdateComplete: W
        }),
        J = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w.L.USER_DISMISS;
                (null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), h();
            },
            [h, s]
        );
    (0, f.ZP)(() => () => {
        J(w.L.INDIRECT_ACTION);
    });
    let $ = i.useCallback(() => {
            null != c &&
                null != g &&
                void 0 !== g.wallpaperId &&
                (O.default.track(P.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: g.wallpaperId,
                    is_blur_enabled: y,
                    channel_id: c
                }),
                X(c, g.wallpaperId, () => {
                    (0, d.showToast)((0, d.createToast)(L.NW.string(L.t.F8FvU1), d.ToastType.FAILURE));
                }));
        }, [c, g, X, y]),
        ee = i.useCallback(
            (e) => {
                if ((null == B ? void 0 : B.designGroupId) != null) {
                    var t;
                    let n = j[B.designGroupId].find((t) => t.isBlurred === e);
                    m(null != (t = null == n ? void 0 : n.id) ? t : null);
                } else M(e);
            },
            [null == B ? void 0 : B.designGroupId, j, m]
        ),
        et = i.useCallback(
            (e) => {
                let t = j[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === y);
                null != n &&
                    (O.default.track(P.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    m(n.id));
            },
            [y, j, m]
        ),
        en = i.useCallback(
            (e) => {
                e.keyCode === P.yXg.ESCAPE && J();
            },
            [J]
        );
    i.useEffect(() => {
        let e = (e) => {
            var t;
            V.current = (null == (t = F.current) ? void 0 : t.contains(e.target)) ? F.current : null;
        };
        return (
            document.addEventListener('mousedown', e),
            () => {
                document.removeEventListener('mousedown', e);
            }
        );
    }, [F]);
    let er = null == c && (null == s ? void 0 : s.pickerType) !== I.j.COACHMARK,
        ei = null;
    return (
        (ei =
            G || er
                ? (0, r.jsxs)('div', {
                      className: x.errorContainer,
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
                              className: x.errorText,
                              children: L.NW.string(L.t.F8FvU1)
                          })
                      ]
                  })
                : U
                  ? (0, r.jsx)('div', {
                        className: x.loadingContainer,
                        children: (0, r.jsx)(d.$jN, {})
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(d.Ttm, {
                                className: x.wallpapersContainer,
                                children: [
                                    (0, r.jsx)(K, {
                                        isSelected: null == g || null === g.wallpaperId,
                                        onSelect: () => {
                                            O.default.track(P.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                m(null);
                                        }
                                    }),
                                    k.map((e) =>
                                        (0, r.jsx)(
                                            Y,
                                            {
                                                isSelected: (null == B ? void 0 : B.designGroupId) === e.designGroupId,
                                                onSelect: et,
                                                chatWallpaperMetadata: e
                                            },
                                            e.id
                                        )
                                    )
                                ]
                            }),
                            b
                                ? (0, r.jsx)(z, {
                                      canApply: (null == g ? void 0 : g.wallpaperId) !== void 0,
                                      isUpdating: Q,
                                      isBlurEnabled: y,
                                      onBlurEnabledChange: ee,
                                      onClose: J,
                                      onApply: $
                                  })
                                : (0, r.jsx)(q, {})
                        ]
                    })),
        (0, r.jsx)(p.Gt, {
            value: l,
            children: (0, r.jsx)(v.Z, {
                className: a()(x.draggableContainer, t),
                defaultPosition: o,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: x.container,
                    ref: F,
                    onKeyDown: en,
                    children: [
                        (null == s ? void 0 : s.pickerType) === I.j.COACHMARK
                            ? (0, r.jsx)(Z, {
                                  handleClose: J,
                                  isPremiumTier2Subscriber: b
                              })
                            : (0, r.jsx)(H, {
                                  handleClose: J,
                                  isPremiumTier2Subscriber: b
                              }),
                        (0, r.jsx)('div', { className: x.divider }),
                        (0, r.jsx)(d.JcV, {
                            containerRef: F,
                            children: ei
                        })
                    ]
                })
            })
        })
    );
};
