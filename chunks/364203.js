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
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(213609),
    _ = n(357352),
    p = n(612659),
    h = n(409100),
    m = n(703656),
    g = n(727939),
    E = n(626135),
    b = n(411149),
    v = n(988290),
    y = n(721359),
    O = n(640963),
    I = n(611725),
    S = n(628309),
    T = n(680783),
    A = n(981631),
    N = n(921944),
    C = n(474936),
    R = n(388032),
    P = n(154950);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = 88,
    k = 'remove-wallpaper',
    j = 0.5;
var U = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function G(e) {
    let { handleClose: t } = e;
    return (
        (0, f.Z)({
            type: s.ImpressionTypes.POPOUT,
            name: s.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: P.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: P.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(c.lBU, { text: R.NW.string(R.t.oW0eUV) }),
                        (0, r.jsx)(c.olH, {
                            className: P.coachmarkCloseIcon,
                            onClick: () => {
                                E.default.track(A.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: P.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(c.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: R.NW.string(R.t.dFhhcX)
                        }),
                        (0, r.jsx)(c.Text, {
                            className: P.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: R.NW.string(R.t.u7Hzjo)
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
        className: P.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: R.NW.string(R.t.EJ4k19)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: P.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? R.NW.string(R.t.MnUZLS) : R.NW.string(R.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(c.olH, {
                className: P.closeContainer,
                onClick: () => {
                    E.default.track(A.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
let F = i.forwardRef((e) => {
    let { isSelected: t, onSelect: n, selectionId: o, tooltipText: l, label: u, className: d, children: _ } = e,
        p = (0, c.xUy)({
            label: u,
            isSelected: t
        }),
        h = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = new IntersectionObserver(
                (e) => {
                    e.forEach((e) => {
                        e.isIntersecting &&
                            (0, f.h)({
                                type: s.ImpressionTypes.VIEW,
                                name: s.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
                                properties: { design_group_id: o }
                            });
                    });
                },
                { threshold: j }
            );
            return (
                null != h.current && e.observe(h.current),
                () => {
                    e.disconnect();
                }
            );
        }, [o, h]),
        (0, r.jsx)(c.ua7, {
            text: l,
            children: (e) =>
                (0, r.jsx)('div', {
                    ref: h,
                    className: a()(d, t && P.wallpaperSelected),
                    children: (0, r.jsx)(
                        c.P3F,
                        x(D({}, e, p), {
                            className: P.wallpaperSelectionClickableContainer,
                            tabIndex: p.tabIndex,
                            onClick: t ? A.dG4 : () => n(o),
                            children: _
                        })
                    )
                })
        })
    );
});
function V(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(F, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: P.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, _.I)(a.icon),
            alt: o,
            width: M,
            height: M,
            draggable: !1,
            className: P.wallpaperImage
        })
    });
}
function Z(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(F, {
        isSelected: t,
        onSelect: n,
        selectionId: k,
        tooltipText: R.NW.string(R.t['C/MRFx']),
        label: R.NW.string(R.t['C/MRFx']),
        className: P.wallpaperRemoveSelection,
        children: (0, r.jsx)(c.t6m, {
            size: 'lg',
            color: c.TVs.colors.TEXT_MUTED
        })
    });
}
function H(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: P.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    E.default.track(A.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: R.NW.string(R.t['3nPvdH'])
            }),
            (0, r.jsxs)(c.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: [
                    (0, r.jsx)(c.zxk, {
                        look: c.zxk.Looks.LINK,
                        size: c.zxk.Sizes.MEDIUM,
                        color: c.zxk.Colors.PRIMARY,
                        onClick: () => {
                            E.default.track(A.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: R.NW.string(R.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: R.NW.string(R.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function W() {
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: P.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: P.nonTier2FooterText,
                children: R.NW.format(R.t['0Tapv7'], {
                    onClickNitro: () => {
                        E.default.track(A.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, m.uL)(A.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(h.Z, {
                className: P.getNitroButton,
                buttonTextClassName: P.getNitroButtonText,
                subscribeButtonText: R.NW.string(R.t.JST6jo),
                subscriptionTier: C.Si.TIER_2,
                showGradient: !0,
                size: c.zxk.Sizes.MEDIUM
            })
        ]
    });
}
F.displayName = 'BaseChatWallpaperSelection';
let Y = function (e) {
    let { className: t, position: n = A.VD2.BOTTOM_RIGHT, config: o } = e,
        { analyticsLocations: s } = (0, d.ZP)(u.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: f, closePicker: _, setPreviewWallpaperId: h } = (0, I.B)(),
        m = (0, T.Z)(f),
        R = (0, p.m)(C.p9.TIER_2),
        [w, D] = i.useState(!1),
        L = (0, v.e)(),
        x = (0, S.u)();
    (0, y.W)();
    let M = (0, l.e7)([b.Z], () => b.Z.isFetchingWallpapers),
        k = (0, l.e7)([b.Z], () => b.Z.getWallpaperById(null == m ? void 0 : m.wallpaperId));
    i.useEffect(() => {
        null != k && D(k.isBlurred);
    }, [k]);
    let j = i.useCallback(() => {
            _();
        }, [_]),
        { isUpdating: U, updateChatWallpaper: F } = (0, O.x)(j),
        Y = () => {
            _(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(N.L.USER_DISMISS);
        },
        K = i.useCallback(() => {
            null != f &&
                null != m &&
                void 0 !== m.wallpaperId &&
                (E.default.track(A.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: m.wallpaperId,
                    is_blur_enabled: w,
                    channel_id: f
                }),
                F(f, m.wallpaperId));
        }, [f, m, F, w]),
        z = i.useCallback(
            (e) => {
                if ((null == k ? void 0 : k.designGroupId) != null) {
                    var t;
                    let n = x[k.designGroupId].find((t) => t.isBlurred === e);
                    h(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null);
                } else D(e);
            },
            [null == k ? void 0 : k.designGroupId, x, h]
        ),
        q = i.useCallback(
            (e) => {
                let t = x[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === w);
                null != n &&
                    (E.default.track(A.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    h(n.id));
            },
            [w, x, h]
        );
    if (0 === L.length || (null == f && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let Q = null;
    return (
        (Q = M
            ? (0, r.jsx)('div', {
                  className: P.loadingContainer,
                  children: (0, r.jsx)(c.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(c.Ttm, {
                          className: P.wallpapersContainer,
                          children: [
                              (0, r.jsx)(Z, {
                                  isSelected: null == m || null === m.wallpaperId,
                                  onSelect: () => {
                                      E.default.track(A.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                          wallpaper_id: null,
                                          is_blurred: !1
                                      }),
                                          h(null);
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
                      R
                          ? (0, r.jsx)(H, {
                                canApply: (null == m ? void 0 : m.wallpaperId) !== void 0,
                                isUpdating: U,
                                isBlurEnabled: w,
                                onBlurEnabledChange: z,
                                onClose: Y,
                                onApply: K
                            })
                          : (0, r.jsx)(W, {})
                  ]
              })),
        (0, r.jsx)(d.Gt, {
            value: s,
            children: (0, r.jsx)(g.Z, {
                className: a()(P.draggableContainer, t),
                defaultPosition: n,
                children: (0, r.jsxs)('div', {
                    className: P.container,
                    children: [
                        (null == o ? void 0 : o.pickerType) === 1
                            ? (0, r.jsx)(G, {
                                  handleClose: Y,
                                  isPremiumTier2Subscriber: R
                              })
                            : (0, r.jsx)(B, {
                                  handleClose: Y,
                                  isPremiumTier2Subscriber: R
                              }),
                        (0, r.jsx)('div', { className: P.divider }),
                        Q
                    ]
                })
            })
        })
    );
};
