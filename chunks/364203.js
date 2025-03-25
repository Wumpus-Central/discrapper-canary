n.d(t, {
    ZP: () => H,
    jQ: () => k
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(990547),
    l = n(442837),
    c = n(692547),
    u = n(481060),
    d = n(213609),
    f = n(357352),
    _ = n(612659),
    p = n(409100),
    h = n(703656),
    m = n(727939),
    g = n(626135),
    E = n(411149),
    b = n(988290),
    v = n(721359),
    y = n(640963),
    O = n(611725),
    I = n(628309),
    S = n(680783),
    T = n(981631),
    A = n(921944),
    N = n(474936),
    C = n(388032),
    R = n(154950);
function P(e, t, n) {
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
function w(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
function D(e, t) {
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
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let x = 88,
    M = 'remove-wallpaper';
var k = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function j(e) {
    let { handleClose: t } = e;
    return (
        (0, d.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: R.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: R.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(u.lBU, { text: C.NW.string(C.t.oW0eUV) }),
                        (0, r.jsx)(u.olH, {
                            className: R.coachmarkCloseIcon,
                            onClick: () => {
                                g.default.track(T.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: R.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: C.NW.string(C.t.dFhhcX)
                        }),
                        (0, r.jsx)(u.Text, {
                            className: R.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: C.NW.string(C.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function U(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: R.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        children: C.NW.string(C.t.EJ4k19)
                    }),
                    (0, r.jsx)(u.Text, {
                        className: R.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? C.NW.string(C.t.MnUZLS) : C.NW.string(C.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(u.olH, {
                className: R.closeContainer,
                onClick: () => {
                    g.default.track(T.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function G(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: c } = e,
        d = (0, u.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(u.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && R.wallpaperSelected),
                children: (0, r.jsx)(
                    u.P3F,
                    L(w({}, e, d), {
                        className: R.wallpaperSelectionClickableContainer,
                        tabIndex: d.tabIndex,
                        onClick: t ? T.dG4 : () => n(i),
                        children: c
                    })
                )
            })
    });
}
function B(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(G, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: R.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, f.I)(a.icon),
            alt: o,
            width: x,
            height: x,
            draggable: !1,
            className: R.wallpaperImage
        })
    });
}
function F(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(G, {
        isSelected: t,
        onSelect: n,
        selectionId: M,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: R.wallpaperRemoveSelection,
        children: (0, r.jsx)(u.t6m, {
            size: 'lg',
            color: c.Z.colors.BLACK.css
        })
    });
}
function V(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: R.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    g.default.track(T.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: C.NW.string(C.t['3nPvdH'])
            }),
            (0, r.jsxs)(u.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: [
                    (0, r.jsx)(u.zxk, {
                        look: u.zxk.Looks.LINK,
                        size: u.zxk.Sizes.MEDIUM,
                        color: u.zxk.Colors.PRIMARY,
                        onClick: () => {
                            g.default.track(T.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: C.NW.string(C.t['ETE/oK'])
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: C.NW.string(C.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function Z() {
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: R.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: R.nonTier2FooterText,
                children: C.NW.format(C.t['0Tapv7'], {
                    onClickNitro: () => {
                        (0, h.uL)(T.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(p.Z, {
                className: R.getNitroButton,
                buttonTextClassName: R.getNitroButtonText,
                subscribeButtonText: C.NW.string(C.t.JST6jo),
                subscriptionTier: N.Si.TIER_2,
                showGradient: !0,
                size: u.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let H = function (e) {
    let { className: t, position: n = T.VD2.BOTTOM_RIGHT, config: o } = e,
        { activePickerChannelId: s, closePicker: c, setPreviewWallpaperId: d } = (0, O.B)(),
        f = (0, S.Z)(s),
        p = (0, _.m)(N.p9.TIER_2),
        [h, C] = i.useState(!1),
        P = (0, b.e)(),
        w = (0, I.u)();
    (0, v.W)();
    let D = (0, l.e7)([E.Z], () => E.Z.isFetchingWallpapers),
        L = (0, l.e7)([E.Z], () => E.Z.getWallpaperById(null == f ? void 0 : f.wallpaperId));
    i.useEffect(() => {
        null != L && C(L.isBlurred);
    }, [L]);
    let x = i.useCallback(() => {
            c();
        }, [c]),
        { isUpdating: M, updateChatWallpaper: k } = (0, y.x)(x),
        G = () => {
            c(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(A.L.USER_DISMISS);
        },
        H = i.useCallback(() => {
            null != s &&
                null != f &&
                void 0 !== f.wallpaperId &&
                (g.default.track(T.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: f.wallpaperId,
                    is_blur_enabled: h,
                    channel_id: s
                }),
                k(s, f.wallpaperId));
        }, [s, f, k, h]),
        W = i.useCallback(
            (e) => {
                if ((null == L ? void 0 : L.designGroupId) != null) {
                    var t;
                    let n = w[L.designGroupId].find((t) => t.isBlurred === e);
                    d(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null);
                } else C(e);
            },
            [null == L ? void 0 : L.designGroupId, w, d]
        ),
        Y = i.useCallback(
            (e) => {
                let t = w[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === h);
                null != n && d(n.id);
            },
            [h, w, d]
        );
    if (0 === P.length || (null == s && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let K = null;
    return (
        (K = D
            ? (0, r.jsx)('div', {
                  className: R.loadingContainer,
                  children: (0, r.jsx)(u.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(u.Ttm, {
                          className: R.wallpapersContainer,
                          children: [
                              (0, r.jsx)(F, {
                                  isSelected: null == f || null === f.wallpaperId,
                                  onSelect: () => d(null)
                              }),
                              P.map((e) =>
                                  (0, r.jsx)(
                                      B,
                                      {
                                          isSelected: (null == L ? void 0 : L.designGroupId) === e.designGroupId,
                                          onSelect: Y,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      p
                          ? (0, r.jsx)(V, {
                                canApply: (null == f ? void 0 : f.wallpaperId) !== void 0,
                                isUpdating: M,
                                isBlurEnabled: h,
                                onBlurEnabledChange: W,
                                onClose: G,
                                onApply: H
                            })
                          : (0, r.jsx)(Z, {})
                  ]
              })),
        (0, r.jsx)(m.Z, {
            className: a()(R.draggableContainer, t),
            defaultPosition: n,
            children: (0, r.jsxs)('div', {
                className: R.container,
                children: [
                    (null == o ? void 0 : o.pickerType) === 1
                        ? (0, r.jsx)(j, {
                              handleClose: G,
                              isPremiumTier2Subscriber: p
                          })
                        : (0, r.jsx)(U, {
                              handleClose: G,
                              isPremiumTier2Subscriber: p
                          }),
                    (0, r.jsx)('div', { className: R.divider }),
                    K
                ]
            })
        })
    );
};
