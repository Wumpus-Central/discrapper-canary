n.d(t, {
    ZP: () => Y,
    jQ: () => U
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
    d = n(100527),
    f = n(906732),
    _ = n(213609),
    p = n(357352),
    h = n(612659),
    m = n(409100),
    g = n(703656),
    E = n(727939),
    b = n(626135),
    v = n(411149),
    y = n(988290),
    O = n(721359),
    I = n(640963),
    S = n(611725),
    T = n(628309),
    A = n(680783),
    N = n(981631),
    C = n(921944),
    R = n(474936),
    P = n(388032),
    w = n(154950);
function D(e, t, n) {
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
function L(e) {
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
                D(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
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
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : x(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let k = 88,
    j = 'remove-wallpaper';
var U = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function G(e) {
    let { handleClose: t } = e;
    return (
        (0, _.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: w.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: w.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(u.lBU, { text: P.NW.string(P.t.oW0eUV) }),
                        (0, r.jsx)(u.olH, {
                            className: w.coachmarkCloseIcon,
                            onClick: () => {
                                b.default.track(N.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: w.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(u.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: P.NW.string(P.t.dFhhcX)
                        }),
                        (0, r.jsx)(u.Text, {
                            className: w.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: P.NW.string(P.t.u7Hzjo)
                        })
                    ]
                })
            ]
        })
    );
}
function B(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: w.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        children: P.NW.string(P.t.EJ4k19)
                    }),
                    (0, r.jsx)(u.Text, {
                        className: w.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? P.NW.string(P.t.MnUZLS) : P.NW.string(P.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(u.olH, {
                className: w.closeContainer,
                onClick: () => {
                    b.default.track(N.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
function F(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: c } = e,
        d = (0, u.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(u.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && w.wallpaperSelected),
                children: (0, r.jsx)(
                    u.P3F,
                    M(L({}, e, d), {
                        className: w.wallpaperSelectionClickableContainer,
                        tabIndex: d.tabIndex,
                        onClick: t ? N.dG4 : () => n(i),
                        children: c
                    })
                )
            })
    });
}
function V(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(F, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: w.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, p.I)(a.icon),
            alt: o,
            width: k,
            height: k,
            draggable: !1,
            className: w.wallpaperImage
        })
    });
}
function Z(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(F, {
        isSelected: t,
        onSelect: n,
        selectionId: j,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: w.wallpaperRemoveSelection,
        children: (0, r.jsx)(u.t6m, {
            size: 'lg',
            color: c.Z.colors.BLACK.css
        })
    });
}
function H(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: w.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    b.default.track(N.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: P.NW.string(P.t['3nPvdH'])
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
                            b.default.track(N.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: P.NW.string(P.t['ETE/oK'])
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: P.NW.string(P.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function W() {
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: w.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: w.nonTier2FooterText,
                children: P.NW.format(P.t['0Tapv7'], {
                    onClickNitro: () => {
                        b.default.track(N.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, g.uL)(N.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(m.Z, {
                className: w.getNitroButton,
                buttonTextClassName: w.getNitroButtonText,
                subscribeButtonText: P.NW.string(P.t.JST6jo),
                subscriptionTier: R.Si.TIER_2,
                showGradient: !0,
                size: u.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let Y = function (e) {
    let { className: t, position: n = N.VD2.BOTTOM_RIGHT, config: o } = e,
        { analyticsLocations: s } = (0, f.ZP)(d.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: c, closePicker: _, setPreviewWallpaperId: p } = (0, S.B)(),
        m = (0, A.Z)(c),
        g = (0, h.m)(R.p9.TIER_2),
        [P, D] = i.useState(!1),
        L = (0, y.e)(),
        x = (0, T.u)();
    (0, O.W)();
    let M = (0, l.e7)([v.Z], () => v.Z.isFetchingWallpapers),
        k = (0, l.e7)([v.Z], () => v.Z.getWallpaperById(null == m ? void 0 : m.wallpaperId));
    i.useEffect(() => {
        null != k && D(k.isBlurred);
    }, [k]);
    let j = i.useCallback(() => {
            _();
        }, [_]),
        { isUpdating: U, updateChatWallpaper: F } = (0, I.x)(j),
        Y = () => {
            _(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(C.L.USER_DISMISS);
        },
        K = i.useCallback(() => {
            null != c &&
                null != m &&
                void 0 !== m.wallpaperId &&
                (b.default.track(N.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: m.wallpaperId,
                    is_blur_enabled: P,
                    channel_id: c
                }),
                F(c, m.wallpaperId));
        }, [c, m, F, P]),
        z = i.useCallback(
            (e) => {
                if ((null == k ? void 0 : k.designGroupId) != null) {
                    var t;
                    let n = x[k.designGroupId].find((t) => t.isBlurred === e);
                    p(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null);
                } else D(e);
            },
            [null == k ? void 0 : k.designGroupId, x, p]
        ),
        q = i.useCallback(
            (e) => {
                let t = x[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === P);
                null != n &&
                    (b.default.track(N.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    p(n.id));
            },
            [P, x, p]
        );
    if (0 === L.length || (null == c && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let Q = null;
    return (
        (Q = M
            ? (0, r.jsx)('div', {
                  className: w.loadingContainer,
                  children: (0, r.jsx)(u.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(u.Ttm, {
                          className: w.wallpapersContainer,
                          children: [
                              (0, r.jsx)(Z, {
                                  isSelected: null == m || null === m.wallpaperId,
                                  onSelect: () => {
                                      b.default.track(N.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                          wallpaper_id: null,
                                          is_blurred: !1
                                      }),
                                          p(null);
                                  }
                              }),
                              L.map((e) =>
                                  (0, r.jsx)(
                                      V,
                                      {
                                          isSelected: (null == k ? void 0 : k.designGroupId) === e.designGroupId,
                                          onSelect: q,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      g
                          ? (0, r.jsx)(H, {
                                canApply: (null == m ? void 0 : m.wallpaperId) !== void 0,
                                isUpdating: U,
                                isBlurEnabled: P,
                                onBlurEnabledChange: z,
                                onClose: Y,
                                onApply: K
                            })
                          : (0, r.jsx)(W, {})
                  ]
              })),
        (0, r.jsx)(f.Gt, {
            value: s,
            children: (0, r.jsx)(E.Z, {
                className: a()(w.draggableContainer, t),
                defaultPosition: n,
                children: (0, r.jsxs)('div', {
                    className: w.container,
                    children: [
                        (null == o ? void 0 : o.pickerType) === 1
                            ? (0, r.jsx)(G, {
                                  handleClose: Y,
                                  isPremiumTier2Subscriber: g
                              })
                            : (0, r.jsx)(B, {
                                  handleClose: Y,
                                  isPremiumTier2Subscriber: g
                              }),
                        (0, r.jsx)('div', { className: w.divider }),
                        Q
                    ]
                })
            })
        })
    );
};
