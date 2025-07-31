(n.d(t, { Z: () => ee }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(954955),
    l = n.n(s),
    c = n(990547),
    u = n(442837),
    d = n(146187),
    _ = n(755721),
    f = n(481060),
    p = n(493773),
    h = n(100527),
    m = n(906732),
    g = n(213609),
    E = n(357352),
    b = n(565942),
    y = n(784238),
    O = n(612659),
    v = n(703656),
    I = n(727939),
    T = n(592125),
    S = n(626135),
    A = n(839606),
    N = n(411149),
    C = n(988290),
    R = n(721359),
    P = n(640963),
    w = n(628309),
    D = n(461762),
    L = n(680783),
    x = n(981631),
    k = n(921944),
    M = n(474936),
    j = n(388032),
    U = n(874577);
function G(e, t, n) {
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
function B(e) {
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
                G(e, t, n[t]);
            }));
    }
    return e;
}
function V(e, t) {
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
function F(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Z = 88,
    H = 'remove-wallpaper',
    Y = 0.5,
    W = 250;
function K(e) {
    let { handleClose: t } = e;
    return (
        (0, g.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: U.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: U.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(f.lBU, { text: j.intl.string(j.t.oW0eUV) }),
                        (0, r.jsx)('div', {
                            className: U.coachmarkCloseIcon,
                            children: (0, r.jsx)(d.P, {
                                size: 'sm',
                                onClick: () => {
                                    (S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t());
                                }
                            })
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: U.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(f.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: j.intl.string(j.t.dFhhcX)
                        }),
                        (0, r.jsx)(f.Text, {
                            className: U.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: j.intl.string(j.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function z(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: U.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(f.X6q, {
                        variant: 'heading-md/semibold',
                        children: j.intl.string(j.t.EJ4k19)
                    }),
                    (0, r.jsx)(f.Text, {
                        className: U.subtitle,
                        variant: 'text-sm/medium',
                        children: t ? j.intl.string(j.t.MnUZLS) : j.intl.string(j.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: U.closeContainer,
                children: (0, r.jsx)(d.P, {
                    size: 'sm',
                    onClick: () => {
                        (S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n());
                    }
                })
            })
        ]
    });
}
function q(e) {
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
                        (0, g.h)({
                            type: c.ImpressionTypes.VIEW,
                            name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
                            properties: { design_group_id: a }
                        });
                });
            },
            { threshold: Y }
        );
        return (
            null != h.current && e.observe(h.current),
            () => {
                e.disconnect();
            }
        );
    }, [a, h]);
    let [m, E] = i.useState('top');
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
            position: m,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: h,
                    className: o()(d, t && U.wallpaperSelected),
                    children: (0, r.jsx)(
                        f.P3F,
                        F(B({}, e, p), {
                            className: U.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? x.dG4 : () => n(a),
                            children: _
                        })
                    )
                })
        })
    );
}
function X(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: a } = e,
        o = (0, D.Z)(a.id),
        { label: s, designGroupId: l } = a,
        [c, u] = i.useState(!1);
    return (i.useEffect(() => {
        let e;
        if (t) {
            var n;
            let t = !1,
                r = (0, E.I)(null != (n = null == o ? void 0 : o.asset) ? n : '');
            ((0, b.p)(r, () => {
                (u(!1), (t = !0));
            }),
                (e = setTimeout(() => {
                    t || u(!0);
                }, W)));
        } else u(!1);
        return () => {
            (clearTimeout(e), u(!1));
        };
    }, [t, o]),
    null == o)
        ? null
        : (0, r.jsxs)(q, {
              isSelected: t,
              onSelect: n,
              selectionId: l,
              tooltipText: s,
              label: s,
              className: U.wallpaper,
              children: [
                  c && (0, r.jsx)(f.$jN, { className: U.previewLoadingSpinner }),
                  (0, r.jsx)('img', {
                      src: (0, E.I)(o.icon),
                      alt: s,
                      width: Z,
                      height: Z,
                      draggable: !1,
                      className: U.wallpaperImage
                  })
              ]
          });
}
function Q(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(q, {
        isSelected: t,
        onSelect: n,
        selectionId: H,
        tooltipText: j.intl.string(j.t['C/MRFx']),
        label: j.intl.string(j.t['C/MRFx']),
        className: U.wallpaperRemoveSelection,
        children: (0, r.jsx)(f.t6m, {
            size: 'lg',
            color: f.TVs.colors.TEXT_MUTED
        })
    });
}
function J(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: a, onClose: o, onApply: s } = e;
    return (0, r.jsxs)(f.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: U.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(f.XZJ, {
                type: f.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    (S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), a(t));
                },
                children: j.intl.string(j.t['3nPvdH'])
            }),
            (0, r.jsx)(f.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: (0, r.jsxs)(f.hE2, {
                    children: [
                        (0, r.jsx)(f.zxk, {
                            variant: 'secondary',
                            text: j.intl.string(j.t['ETE/oK']),
                            onClick: () => {
                                (S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), o());
                            },
                            disabled: n
                        }),
                        (0, r.jsx)(f.zxk, {
                            variant: 'primary',
                            text: j.intl.string(j.t['1Qm829']),
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
function $() {
    return (0, r.jsxs)(f.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: U.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(f.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: U.nonTier2FooterText,
                children: j.intl.format(j.t['0Tapv7'], {
                    onClickNitro: () => {
                        (S.default.track(x.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, v.uL)(x.Z5c.NITRO_HOME));
                    }
                })
            }),
            (0, r.jsx)(y.Z, {
                className: U.getNitroButton,
                textOptions: {
                    textOverride: j.intl.string(j.t.JST6jo),
                    textClassName: U.getNitroButtonText
                },
                subscriptionTier: M.Si.TIER_2,
                showGradient: !0,
                color: _.Tt.BRAND,
                size: _.zx.Sizes.MEDIUM
            })
        ]
    });
}
let ee = function (e) {
    let { className: t, position: a = x.VD2.TOP_RIGHT, config: s } = e,
        { analyticsLocations: l } = (0, m.ZP)(h.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: d, setPreviewWallpaperId: _ } = (0, A.B)(),
        g = (0, L.Z)(c),
        E = (0, O.m)(M.p9.TIER_2),
        [b, y] = i.useState(!1),
        v = (0, C.e)(b),
        D = (0, w.u)();
    (0, R.W)();
    let G = (0, u.e7)([N.Z], () => N.Z.isFetchingWallpapers),
        B = (0, u.e7)([N.Z], () => N.Z.failedToFetchWallpapers),
        V = (0, u.e7)([N.Z], () => N.Z.getWallpaperById(null == g ? void 0 : g.wallpaperId)),
        F = i.useRef(null),
        Z = i.useRef(null);
    ((0, f.Tbt)(Z),
        i.useEffect(() => {
            Z.current = F.current;
        }, [F]),
        i.useEffect(() => {
            null != V && y(V.isBlurred && E);
        }, [V, E]));
    let H = i.useCallback(() => {
            d();
        }, [d]),
        { isUpdating: Y, updateChatWallpaper: W } = (0, P.x)({
            channelId: c,
            onUpdateComplete: H
        }),
        q = i.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k.L.USER_DISMISS;
                ((null == s ? void 0 : s.markDismissed) != null && s.markDismissed(e), d());
            },
            [d, s]
        );
    (0, p.ZP)(() => () => {
        q(k.L.INDIRECT_ACTION);
    });
    let ee = i.useCallback(() => {
            if (null == c || null == g || void 0 === g.wallpaperId) return;
            let e = T.Z.getChannel(c);
            (S.default.track(x.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                wallpaper_id: g.wallpaperId,
                is_blur_enabled: b,
                channel_id: c,
                channel_type: null == e ? void 0 : e.type
            }),
                W(c, g.wallpaperId, () => {
                    (0, f.showToast)((0, f.createToast)(j.intl.string(j.t.F8FvU1), f.ToastType.FAILURE));
                }));
        }, [c, g, W, b]),
        et = i.useCallback(
            (e) => {
                if ((null == V ? void 0 : V.designGroupId) != null) {
                    var t;
                    let n = D[V.designGroupId].find((t) => t.isBlurred === e);
                    _(null != (t = null == n ? void 0 : n.id) ? t : null);
                } else y(e);
            },
            [null == V ? void 0 : V.designGroupId, D, _]
        ),
        en = i.useCallback(
            (e) => {
                let t = D[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === b);
                null != n &&
                    (S.default.track(x.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    _(n.id));
            },
            [b, D, _]
        ),
        er = i.useCallback(
            (e) => {
                e.keyCode === x.yXg.ESCAPE && q();
            },
            [q]
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
    let ei = null == c && (null == s ? void 0 : s.pickerType) !== A.j.COACHMARK,
        ea = null;
    return (
        (ea =
            B || ei
                ? (0, r.jsxs)('div', {
                      className: U.errorContainer,
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
                              className: U.errorText,
                              children: j.intl.string(j.t.F8FvU1)
                          })
                      ]
                  })
                : G
                  ? (0, r.jsx)('div', {
                        className: U.loadingContainer,
                        children: (0, r.jsx)(f.$jN, {})
                    })
                  : (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(f.Ttm, {
                                className: U.wallpapersContainer,
                                children: [
                                    (0, r.jsx)(Q, {
                                        isSelected: null == g || null === g.wallpaperId,
                                        onSelect: () => {
                                            (S.default.track(x.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                                wallpaper_id: null,
                                                is_blurred: !1
                                            }),
                                                _(null));
                                        }
                                    }),
                                    v.map((e) =>
                                        (0, r.jsx)(
                                            X,
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
                                ? (0, r.jsx)(J, {
                                      canApply: (null == g ? void 0 : g.wallpaperId) !== void 0,
                                      isUpdating: Y,
                                      isBlurEnabled: b,
                                      onBlurEnabledChange: et,
                                      onClose: q,
                                      onApply: ee
                                  })
                                : (0, r.jsx)($, {})
                        ]
                    })),
        (0, r.jsx)(m.Gt, {
            value: l,
            children: (0, r.jsx)(I.Z, {
                className: o()(U.draggableContainer, t),
                defaultPosition: a,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: U.container,
                    ref: F,
                    onKeyDown: er,
                    children: [
                        (null == s ? void 0 : s.pickerType) === A.j.COACHMARK
                            ? (0, r.jsx)(K, {
                                  handleClose: q,
                                  isPremiumTier2Subscriber: E
                              })
                            : (0, r.jsx)(z, {
                                  handleClose: q,
                                  isPremiumTier2Subscriber: E
                              }),
                        (0, r.jsx)('div', { className: U.divider }),
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
