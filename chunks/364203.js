(n.d(t, { Z: () => $ }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(755721),
    f = n(481060),
    _ = n(493773),
    p = n(100527),
    h = n(906732),
    m = n(213609),
    g = n(357352),
    E = n(565942),
    b = n(784238),
    y = n(612659),
    O = n(703656),
    v = n(727939),
    I = n(592125),
    T = n(626135),
    S = n(839606),
    A = n(411149),
    N = n(988290),
    C = n(721359),
    R = n(640963),
    P = n(628309),
    w = n(461762),
    D = n(680783),
    L = n(981631),
    x = n(921944),
    k = n(474936),
    M = n(388032),
    j = n(874577);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            }));
    }
    return e;
}
function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : B(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let F = 88,
    Z = 'remove-wallpaper',
    H = 0.5,
    Y = 250;
function W(e) {
    let { handleClose: t } = e;
    return (
        (0, m.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: j.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: j.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(f.lBU, { text: M.intl.string(M.t.oW0eUV) }),
                        (0, r.jsx)(f.olH, {
                            className: j.coachmarkCloseIcon,
                            onClick: () => {
                                (T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t());
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: j.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: M.intl.string(M.t.dFhhcX)
                        }),
                        (0, r.jsx)(f.Text, {
                            className: j.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: M.intl.string(M.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function K(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: j.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/semibold',
                        children: M.intl.string(M.t.EJ4k19)
                    }),
                    (0, r.jsx)(f.Text, {
                        className: j.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? M.intl.string(M.t.MnUZLS) : M.intl.string(M.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(f.olH, {
                className: j.closeContainer,
                onClick: () => {
                    (T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n());
                }
            })
        ]
    });
}
function z(e) {
    let { isSelected: t, onSelect: n, selectionId: a, tooltipText: s, label: u, className: d, children: _ } = e,
        p = (0, f.xUy)({
            label: u,
            isSelected: t
        }),
        h = i.useRef(null);
    i.useEffect(() => {
        let e = new IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    e.isIntersecting &&
                        (0, m.h)({
                            type: c.ImpressionTypes.VIEW,
                            name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
                            properties: { design_group_id: a }
                        });
                });
            },
            { threshold: H }
        );
        return (
            null != h.current && e.observe(h.current),
            () => {
                e.disconnect();
            }
        );
    }, [a, h]);
    let [g, E] = i.useState('top');
    return (
        i.useEffect(() => {
            let e = h.current;
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
                    (n.disconnect(), t.cancel());
                }
            );
        }, []),
        (0, r.jsx)(f.ua7, {
            text: s,
            position: g,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: h,
                    className: o()(d, t && j.wallpaperSelected),
                    children: (0, r.jsx)(
                        f.P3F,
                        V(G({}, e, p), {
                            className: j.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? L.dG4 : () => n(a),
                            children: _
                        })
                    )
                })
        })
    );
}
function q(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: a } = e,
        o = (0, w.Z)(a.id),
        { label: s, designGroupId: l } = a,
        [c, u] = i.useState(!1);
    return (i.useEffect(() => {
        let e;
        if (t) {
            var n;
            let t = !1,
                r = (0, g.I)(null != (n = null == o ? void 0 : o.asset) ? n : '');
            ((0, E.p)(r, () => {
                (u(!1), (t = !0));
            }),
                (e = setTimeout(() => {
                    t || u(!0);
                }, Y)));
        } else u(!1);
        return () => {
            (clearTimeout(e), u(!1));
        };
    }, [t, o]),
    null == o)
        ? null
        : (0, r.jsxs)(z, {
              isSelected: t,
              onSelect: n,
              selectionId: l,
              tooltipText: s,
              label: s,
              className: j.wallpaper,
              children: [
                  c && (0, r.jsx)(f.$jN, { className: j.previewLoadingSpinner }),
                  (0, r.jsx)('img', {
                      src: (0, g.I)(o.icon),
                      alt: s,
                      width: F,
                      height: F,
                      draggable: !1,
                      className: j.wallpaperImage
                  })
              ]
          });
}
function X(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(z, {
        isSelected: t,
        onSelect: n,
        selectionId: Z,
        tooltipText: M.intl.string(M.t['C/MRFx']),
        label: M.intl.string(M.t['C/MRFx']),
        className: j.wallpaperRemoveSelection,
        children: (0, r.jsx)(f.t6m, {
            size: 'lg',
            color: f.TVs.colors.TEXT_MUTED
        })
    });
}
function Q(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: a, onClose: o, onApply: s } = e;
    return (0, r.jsxs)(f.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: j.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(f.XZJ, {
                type: f.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    (T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), a(t));
                },
                children: M.intl.string(M.t['3nPvdH'])
            }),
            (0, r.jsx)(f.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: (0, r.jsxs)(f.hE2, {
                    children: [
                        (0, r.jsx)(f.zxk, {
                            variant: 'secondary',
                            text: M.intl.string(M.t['ETE/oK']),
                            onClick: () => {
                                (T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), o());
                            },
                            disabled: n
                        }),
                        (0, r.jsx)(f.zxk, {
                            variant: 'primary',
                            text: M.intl.string(M.t['1Qm829']),
                            onClick: s,
                            disabled: !t,
                            loading: n
                        })
                    ]
                })
            })
        ]
    });
}
function J() {
    return (0, r.jsxs)(f.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: j.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(f.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: j.nonTier2FooterText,
                children: M.intl.format(M.t['0Tapv7'], {
                    onClickNitro: () => {
                        (T.default.track(L.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, O.uL)(L.Z5c.NITRO_HOME));
                    }
                })
            }),
            (0, r.jsx)(b.Z, {
                className: j.getNitroButton,
                textOptions: {
                    textOverride: M.intl.string(M.t.JST6jo),
                    textClassName: j.getNitroButtonText
                },
                subscriptionTier: k.Si.TIER_2,
                showGradient: !0,
                color: d.Tt.BRAND,
                size: d.zx.Sizes.MEDIUM
            })
        ]
    });
}
let $ = function (e) {
    let { className: t, position: a = L.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, h.ZP)(p.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: d, setPreviewWallpaperId: m } = (0, S.B)(),
        g = (0, D.Z)(c),
        E = (0, y.m)(k.p9.TIER_2),
        [b, O] = i.useState(!1),
        w = (0, N.e)(b),
        U = (0, P.u)();
    (0, C.W)();
    let G = (0, u.e7)([A.Z], () => A.Z.isFetchingWallpapers),
        B = (0, u.e7)([A.Z], () => A.Z.failedToFetchWallpapers),
        V = (0, u.e7)([A.Z], () => A.Z.getWallpaperById(null == g ? void 0 : g.wallpaperId)),
        F = i.useRef(null),
        Z = i.useRef(null);
    ((0, f.Tbt)(Z),
        i.useEffect(() => {
            Z.current = F.current;
        }, [F]),
        i.useEffect(() => {
            null != V && O(V.isBlurred && E);
        }, [V, E]));
    let H = i.useCallback(() => {
            d();
        }, [d]),
        { isUpdating: Y, updateChatWallpaper: z } = (0, R.x)({
            channelId: c,
            onUpdateComplete: H
        }),
        $ = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x.L.USER_DISMISS;
                ((null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), d());
            },
            [d, s]
        );
    (0, _.ZP)(() => () => {
        $(x.L.INDIRECT_ACTION);
    });
    let ee = i.useCallback(() => {
            if (null == c || null == g || void 0 === g.wallpaperId) return;
            let e = I.Z.getChannel(c);
            (T.default.track(L.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                wallpaper_id: g.wallpaperId,
                is_blur_enabled: b,
                channel_id: c,
                channel_type: null == e ? void 0 : e.type
            }),
                z(c, g.wallpaperId, () => {
                    (0, f.showToast)((0, f.createToast)(M.intl.string(M.t.F8FvU1), f.ToastType.FAILURE));
                }));
        }, [c, g, z, b]),
        et = i.useCallback(
            (e) => {
                if ((null == V ? void 0 : V.designGroupId) != null) {
                    var t;
                    let n = U[V.designGroupId].find((t) => t.isBlurred === e);
                    m(null != (t = null == n ? void 0 : n.id) ? t : null);
                } else O(e);
            },
            [null == V ? void 0 : V.designGroupId, U, m]
        ),
        en = i.useCallback(
            (e) => {
                let t = U[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === b);
                null != n &&
                    (T.default.track(L.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    m(n.id));
            },
            [b, U, m]
        ),
        er = i.useCallback(
            (e) => {
                e.keyCode === L.yXg.ESCAPE && $();
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
                      className: j.errorContainer,
                      children: [
                          (0, r.jsx)(f.Eep, {
                              src: n(167969),
                              alt: 'Error',
                              height: 100,
                              width: 200
                          }),
                          (0, r.jsx)(f.Text, {
                              variant: 'text-sm/medium',
                              color: 'text-muted',
                              className: j.errorText,
                              children: M.intl.string(M.t.F8FvU1)
                          })
                      ]
                  })
                : G
                  ? (0, r.jsx)('div', {
                        className: j.loadingContainer,
                        children: (0, r.jsx)(f.$jN, {})
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(f.Ttm, {
                                className: j.wallpapersContainer,
                                children: [
                                    (0, r.jsx)(X, {
                                        isSelected: null == g || null === g.wallpaperId,
                                        onSelect: () => {
                                            (T.default.track(L.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                m(null));
                                        }
                                    }),
                                    w.map((e) =>
                                        (0, r.jsx)(
                                            q,
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
                            E
                                ? (0, r.jsx)(Q, {
                                      canApply: (null == g ? void 0 : g.wallpaperId) !== void 0,
                                      isUpdating: Y,
                                      isBlurEnabled: b,
                                      onBlurEnabledChange: et,
                                      onClose: $,
                                      onApply: ee
                                  })
                                : (0, r.jsx)(J, {})
                        ]
                    })),
        (0, r.jsx)(h.Gt, {
            value: l,
            children: (0, r.jsx)(v.Z, {
                className: o()(j.draggableContainer, t),
                defaultPosition: a,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: j.container,
                    ref: F,
                    onKeyDown: er,
                    children: [
                        (null == s ? void 0 : s.pickerType) === S.j.COACHMARK
                            ? (0, r.jsx)(W, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: E
                              })
                            : (0, r.jsx)(K, {
                                  handleClose: $,
                                  isPremiumTier2Subscriber: E
                              }),
                        (0, r.jsx)('div', { className: j.divider }),
                        (0, r.jsx)(f.JcV, {
                            containerRef: F,
                            children: ea
                        })
                    ]
                })
            })
        })
    );
};
