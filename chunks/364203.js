n.d(t, { Z: () => z }), n(388685);
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
    g = n(612659),
    E = n(409100),
    b = n(703656),
    y = n(727939),
    v = n(626135),
    O = n(839606),
    I = n(411149),
    S = n(988290),
    T = n(721359),
    N = n(640963),
    A = n(628309),
    C = n(680783),
    R = n(981631),
    P = n(921944),
    w = n(474936),
    D = n(388032),
    L = n(874577);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let U = 88,
    G = 'remove-wallpaper',
    B = 0.5;
function F(e) {
    let { handleClose: t } = e;
    return (
        (0, h.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: L.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: L.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(d.lBU, { text: D.NW.string(D.t.oW0eUV) }),
                        (0, r.jsx)(d.olH, {
                            className: L.coachmarkCloseIcon,
                            onClick: () => {
                                v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: L.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: D.NW.string(D.t.dFhhcX)
                        }),
                        (0, r.jsx)(d.Text, {
                            className: L.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: D.NW.string(D.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function V(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: L.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        children: D.NW.string(D.t.EJ4k19)
                    }),
                    (0, r.jsx)(d.Text, {
                        className: L.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? D.NW.string(D.t.MnUZLS) : D.NW.string(D.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(d.olH, {
                className: L.closeContainer,
                onClick: () => {
                    v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function Z(e) {
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
            { threshold: B }
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
                    className: a()(f, t && L.wallpaperSelected),
                    children: (0, r.jsx)(
                        d.P3F,
                        j(M({}, e, p), {
                            className: L.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? R.dG4 : () => n(o),
                            children: _
                        })
                    )
                })
        })
    );
}
function H(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(Z, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: L.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, m.I)(a.icon),
            alt: o,
            width: U,
            height: U,
            draggable: !1,
            className: L.wallpaperImage
        })
    });
}
function W(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(Z, {
        isSelected: t,
        onSelect: n,
        selectionId: G,
        tooltipText: D.NW.string(D.t['C/MRFx']),
        label: D.NW.string(D.t['C/MRFx']),
        className: L.wallpaperRemoveSelection,
        children: (0, r.jsx)(d.t6m, {
            size: 'lg',
            color: d.TVs.colors.TEXT_MUTED
        })
    });
}
function Y(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: L.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: D.NW.string(D.t['3nPvdH'])
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
                            v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: D.NW.string(D.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: D.NW.string(D.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function K() {
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: L.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: L.nonTier2FooterText,
                children: D.NW.format(D.t['0Tapv7'], {
                    onClickNitro: () => {
                        v.default.track(R.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, b.uL)(R.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(E.Z, {
                className: L.getNitroButton,
                buttonTextClassName: L.getNitroButtonText,
                subscribeButtonText: D.NW.string(D.t.JST6jo),
                subscriptionTier: w.Si.TIER_2,
                showGradient: !0,
                size: d.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let z = function (e) {
    let { className: t, position: o = R.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, p.ZP)(_.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: h, setPreviewWallpaperId: m } = (0, O.B)(),
        E = (0, C.Z)(c),
        b = (0, g.m)(w.p9.TIER_2),
        [x, M] = i.useState(!1),
        k = (0, S.e)(),
        j = (0, A.u)();
    (0, T.W)();
    let U = (0, u.e7)([I.Z], () => I.Z.isFetchingWallpapers),
        G = (0, u.e7)([I.Z], () => I.Z.failedToFetchWallpapers),
        B = (0, u.e7)([I.Z], () => I.Z.getWallpaperById(null == E ? void 0 : E.wallpaperId)),
        Z = i.useRef(null),
        z = i.useRef(null);
    (0, d.Tbt)(z),
        i.useEffect(() => {
            z.current = Z.current;
        }, [Z]),
        i.useEffect(() => {
            null != B && M(B.isBlurred && b);
        }, [B, b]);
    let q = i.useCallback(() => {
            h();
        }, [h]),
        { isUpdating: Q, updateChatWallpaper: X } = (0, N.x)({
            channelId: c,
            onUpdateComplete: q
        }),
        J = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.L.USER_DISMISS;
                (null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), h();
            },
            [h, s]
        );
    (0, f.ZP)(() => () => {
        J(P.L.INDIRECT_ACTION);
    });
    let $ = i.useCallback(() => {
            null != c &&
                null != E &&
                void 0 !== E.wallpaperId &&
                (v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: E.wallpaperId,
                    is_blur_enabled: x,
                    channel_id: c
                }),
                X(c, E.wallpaperId, () => {
                    (0, d.showToast)((0, d.createToast)(D.NW.string(D.t.F8FvU1), d.ToastType.FAILURE));
                }));
        }, [c, E, X, x]),
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
                let n = t.find((e) => e.isBlurred === x);
                null != n &&
                    (v.default.track(R.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    m(n.id));
            },
            [x, j, m]
        ),
        en = i.useCallback(
            (e) => {
                e.keyCode === R.yXg.ESCAPE && J();
            },
            [J]
        );
    i.useEffect(() => {
        let e = (e) => {
            var t;
            z.current = (null == (t = Z.current) ? void 0 : t.contains(e.target)) ? Z.current : null;
        };
        return (
            document.addEventListener('mousedown', e),
            () => {
                document.removeEventListener('mousedown', e);
            }
        );
    }, [Z]);
    let er = null == c && (null == s ? void 0 : s.pickerType) !== O.j.COACHMARK,
        ei = null;
    return (
        (ei =
            G || er
                ? (0, r.jsxs)('div', {
                      className: L.errorContainer,
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
                              className: L.errorText,
                              children: D.NW.string(D.t.F8FvU1)
                          })
                      ]
                  })
                : U
                  ? (0, r.jsx)('div', {
                        className: L.loadingContainer,
                        children: (0, r.jsx)(d.$jN, {})
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(d.Ttm, {
                                className: L.wallpapersContainer,
                                children: [
                                    (0, r.jsx)(W, {
                                        isSelected: null == E || null === E.wallpaperId,
                                        onSelect: () => {
                                            v.default.track(R.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                m(null);
                                        }
                                    }),
                                    k.map((e) =>
                                        (0, r.jsx)(
                                            H,
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
                                ? (0, r.jsx)(Y, {
                                      canApply: (null == E ? void 0 : E.wallpaperId) !== void 0,
                                      isUpdating: Q,
                                      isBlurEnabled: x,
                                      onBlurEnabledChange: ee,
                                      onClose: J,
                                      onApply: $
                                  })
                                : (0, r.jsx)(K, {})
                        ]
                    })),
        (0, r.jsx)(p.Gt, {
            value: l,
            children: (0, r.jsx)(y.Z, {
                className: a()(L.draggableContainer, t),
                defaultPosition: o,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: L.container,
                    ref: Z,
                    onKeyDown: en,
                    children: [
                        (null == s ? void 0 : s.pickerType) === O.j.COACHMARK
                            ? (0, r.jsx)(F, {
                                  handleClose: J,
                                  isPremiumTier2Subscriber: b
                              })
                            : (0, r.jsx)(V, {
                                  handleClose: J,
                                  isPremiumTier2Subscriber: b
                              }),
                        (0, r.jsx)('div', { className: L.divider }),
                        (0, r.jsx)(d.JcV, {
                            containerRef: Z,
                            children: ei
                        })
                    ]
                })
            })
        })
    );
};
