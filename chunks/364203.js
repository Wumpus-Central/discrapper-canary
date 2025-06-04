n.d(t, { Z: () => J }), n(388685);
var r = n(255367),
    i = n(73800),
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
    E = n(784238),
    b = n(612659),
    y = n(703656),
    O = n(727939),
    v = n(592125),
    I = n(626135),
    S = n(839606),
    T = n(411149),
    A = n(988290),
    N = n(721359),
    C = n(640963),
    P = n(628309),
    R = n(461762),
    w = n(680783),
    D = n(981631),
    L = n(921944),
    x = n(474936),
    k = n(388032),
    M = n(874577);
function j(e, t, n) {
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
function U(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function G(e, t) {
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
function B(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = 88,
    V = 'remove-wallpaper',
    Z = 0.5,
    H = 250;
function Y(e) {
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
                        (0, r.jsx)(d.lBU, { text: k.intl.string(k.t.oW0eUV) }),
                        (0, r.jsx)(d.olH, {
                            className: M.coachmarkCloseIcon,
                            onClick: () => {
                                I.default.track(D.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: M.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: k.intl.string(k.t.dFhhcX)
                        }),
                        (0, r.jsx)(d.Text, {
                            className: M.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: k.intl.string(k.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function W(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: M.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        children: k.intl.string(k.t.EJ4k19)
                    }),
                    (0, r.jsx)(d.Text, {
                        className: M.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? k.intl.string(k.t.MnUZLS) : k.intl.string(k.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(d.olH, {
                className: M.closeContainer,
                onClick: () => {
                    I.default.track(D.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function K(e) {
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
            { threshold: Z }
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
                    className: a()(f, t && M.wallpaperSelected),
                    children: (0, r.jsx)(
                        d.P3F,
                        B(U({}, e, p), {
                            className: M.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? D.dG4 : () => n(o),
                            children: _
                        })
                    )
                })
        })
    );
}
function z(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: o } = e,
        a = (0, R.Z)(o.id),
        { label: s, designGroupId: l } = o,
        [c, u] = i.useState(!1);
    return (i.useEffect(() => {
        let e;
        if (t) {
            var n;
            let t = !1,
                r = (0, m.I)(null != (n = null == a ? void 0 : a.asset) ? n : '');
            (0, g.p)(r, () => {
                u(!1), (t = !0);
            }),
                (e = setTimeout(() => {
                    t || u(!0);
                }, H));
        } else u(!1);
        return () => {
            clearTimeout(e), u(!1);
        };
    }, [t, a]),
    null == a)
        ? null
        : (0, r.jsxs)(K, {
              isSelected: t,
              onSelect: n,
              selectionId: l,
              tooltipText: s,
              label: s,
              className: M.wallpaper,
              children: [
                  c && (0, r.jsx)(d.$jN, { className: M.previewLoadingSpinner }),
                  (0, r.jsx)('img', {
                      src: (0, m.I)(a.icon),
                      alt: s,
                      width: F,
                      height: F,
                      draggable: !1,
                      className: M.wallpaperImage
                  })
              ]
          });
}
function q(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(K, {
        isSelected: t,
        onSelect: n,
        selectionId: V,
        tooltipText: k.intl.string(k.t['C/MRFx']),
        label: k.intl.string(k.t['C/MRFx']),
        className: M.wallpaperRemoveSelection,
        children: (0, r.jsx)(d.t6m, {
            size: 'lg',
            color: d.TVs.colors.TEXT_MUTED
        })
    });
}
function Q(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
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
                    I.default.track(D.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: k.intl.string(k.t['3nPvdH'])
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
                            I.default.track(D.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: k.intl.string(k.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: k.intl.string(k.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function X() {
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
                children: k.intl.format(k.t['0Tapv7'], {
                    onClickNitro: () => {
                        I.default.track(D.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, y.uL)(D.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(E.Z, {
                className: M.getNitroButton,
                textOptions: {
                    textOverride: k.intl.string(k.t.JST6jo),
                    textClassName: M.getNitroButtonText
                },
                subscriptionTier: x.Si.TIER_2,
                showGradient: !0,
                color: d.Ttl.BRAND,
                size: d.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let J = function (e) {
    let { className: t, position: o = D.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, p.ZP)(_.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: h, setPreviewWallpaperId: m } = (0, S.B)(),
        g = (0, w.Z)(c),
        E = (0, b.m)(x.p9.TIER_2),
        [y, R] = i.useState(!1),
        j = (0, A.e)(y),
        U = (0, P.u)();
    (0, N.W)();
    let G = (0, u.e7)([T.Z], () => T.Z.isFetchingWallpapers),
        B = (0, u.e7)([T.Z], () => T.Z.failedToFetchWallpapers),
        F = (0, u.e7)([T.Z], () => T.Z.getWallpaperById(null == g ? void 0 : g.wallpaperId)),
        V = i.useRef(null),
        Z = i.useRef(null);
    (0, d.Tbt)(Z),
        i.useEffect(() => {
            Z.current = V.current;
        }, [V]),
        i.useEffect(() => {
            null != F && R(F.isBlurred && E);
        }, [F, E]);
    let H = i.useCallback(() => {
            h();
        }, [h]),
        { isUpdating: K, updateChatWallpaper: J } = (0, C.x)({
            channelId: c,
            onUpdateComplete: H
        }),
        $ = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L.L.USER_DISMISS;
                (null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), h();
            },
            [h, s]
        );
    (0, f.ZP)(() => () => {
        $(L.L.INDIRECT_ACTION);
    });
    let ee = i.useCallback(() => {
            if (null == c || null == g || void 0 === g.wallpaperId) return;
            let e = v.Z.getChannel(c);
            I.default.track(D.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                wallpaper_id: g.wallpaperId,
                is_blur_enabled: y,
                channel_id: c,
                channel_type: null == e ? void 0 : e.type
            }),
                J(c, g.wallpaperId, () => {
                    (0, d.showToast)((0, d.createToast)(k.intl.string(k.t.F8FvU1), d.ToastType.FAILURE));
                });
        }, [c, g, J, y]),
        et = i.useCallback(
            (e) => {
                if ((null == F ? void 0 : F.designGroupId) != null) {
                    var t;
                    let n = U[F.designGroupId].find((t) => t.isBlurred === e);
                    m(null != (t = null == n ? void 0 : n.id) ? t : null);
                } else R(e);
            },
            [null == F ? void 0 : F.designGroupId, U, m]
        ),
        en = i.useCallback(
            (e) => {
                let t = U[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === y);
                null != n &&
                    (I.default.track(D.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    m(n.id));
            },
            [y, U, m]
        ),
        er = i.useCallback(
            (e) => {
                e.keyCode === D.yXg.ESCAPE && $();
            },
            [$]
        );
    i.useEffect(() => {
        let e = (e) => {
            var t;
            Z.current = (null == (t = V.current) ? void 0 : t.contains(e.target)) ? V.current : null;
        };
        return (
            document.addEventListener('mousedown', e),
            () => {
                document.removeEventListener('mousedown', e);
            }
        );
    }, [V]);
    let ei = null == c && (null == s ? void 0 : s.pickerType) !== S.j.COACHMARK,
        eo = null;
    return (
        (eo =
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
                              children: k.intl.string(k.t.F8FvU1)
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
                                    (0, r.jsx)(q, {
                                        isSelected: null == g || null === g.wallpaperId,
                                        onSelect: () => {
                                            I.default.track(D.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                m(null);
                                        }
                                    }),
                                    j.map((e) =>
                                        (0, r.jsx)(
                                            z,
                                            {
                                                isSelected: (null == F ? void 0 : F.designGroupId) === e.designGroupId,
                                                onSelect: en,
                                                chatWallpaperMetadata: e
                                            },
                                            e.id
                                        )
                                    )
                                ]
                            }),
                            E
                                ? (0, r.jsx)(Q, {
                                      canApply: (null == g ? void 0 : g.wallpaperId) !== void 0,
                                      isUpdating: K,
                                      isBlurEnabled: y,
                                      onBlurEnabledChange: et,
                                      onClose: $,
                                      onApply: ee
                                  })
                                : (0, r.jsx)(X, {})
                        ]
                    })),
        (0, r.jsx)(p.Gt, {
            value: l,
            children: (0, r.jsx)(O.Z, {
                className: a()(M.draggableContainer, t),
                defaultPosition: o,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: M.container,
                    ref: V,
                    onKeyDown: er,
                    children: [
                        (null == s ? void 0 : s.pickerType) === S.j.COACHMARK
                            ? (0, r.jsx)(Y, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: E
                              })
                            : (0, r.jsx)(W, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: E
                              }),
                        (0, r.jsx)('div', { className: M.divider }),
                        (0, r.jsx)(d.JcV, {
                            containerRef: V,
                            children: eo
                        })
                    ]
                })
            })
        })
    );
};
