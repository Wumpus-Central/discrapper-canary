n.d(t, {
    ZP: () => Q,
    jQ: () => V
}),
    n(47120);
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
    O = n(411149),
    I = n(988290),
    S = n(721359),
    T = n(640963),
    N = n(611725),
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
    B = 0.5,
    F = 'blur';
var V = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function Z(e) {
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
function H(e) {
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
let W = i.forwardRef((e) => {
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
});
function Y(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(W, {
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
function K(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(W, {
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
function z(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: o, onToggleBlur: a, onClose: s, onApply: l } = e,
        c = i.useMemo(
            () => [
                {
                    name: D.NW.string(D.t['3nPvdH']),
                    value: F,
                    radioBarClassName: L.blurToggle
                }
            ],
            []
        );
    return (0, r.jsxs)(d.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        align: 'center',
        className: L.footerContainerStack,
        padding: 12,
        children: [
            (0, r.jsx)(d.FXm, {
                onChange: a,
                options: c,
                value: o ? F : void 0,
                size: d.FXm.Sizes.NONE,
                withTransparentBackground: !0
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
                            v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), s();
                        },
                        disabled: n,
                        children: D.NW.string(D.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: l,
                        disabled: !t,
                        submitting: n,
                        children: D.NW.string(D.t['1Qm829'])
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
W.displayName = 'BaseChatWallpaperSelection';
let Q = function (e) {
    let { className: t, position: n = R.VD2.TOP_RIGHT, config: o } = e,
        { analyticsLocations: s } = (0, p.ZP)(_.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: l, closePicker: c, setPreviewWallpaperId: h } = (0, N.B)(),
        m = (0, C.Z)(l),
        E = (0, g.m)(w.p9.TIER_2),
        [b, D] = i.useState(!1),
        x = (0, I.e)(),
        M = (0, A.u)();
    (0, S.W)();
    let k = (0, u.e7)([O.Z], () => O.Z.isFetchingWallpapers),
        j = (0, u.e7)([O.Z], () => O.Z.getWallpaperById(null == m ? void 0 : m.wallpaperId));
    i.useEffect(() => {
        null != j && D(j.isBlurred && E);
    }, [j, E]);
    let U = i.useCallback(() => {
            c();
        }, [c]),
        { isUpdating: G, updateChatWallpaper: B } = (0, T.x)(U),
        F = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P.L.USER_DISMISS;
            (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(e), c();
        };
    (0, f.ZP)(() => () => {
        F(P.L.INDIRECT_ACTION);
    });
    let V = i.useCallback(() => {
            null != l &&
                null != m &&
                void 0 !== m.wallpaperId &&
                (v.default.track(R.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: m.wallpaperId,
                    is_blur_enabled: b,
                    channel_id: l
                }),
                B(l, m.wallpaperId));
        }, [l, m, B, b]),
        W = i.useCallback(() => {
            let e = !b;
            if ((null == j ? void 0 : j.designGroupId) != null) {
                var t;
                let n = M[j.designGroupId].find((t) => t.isBlurred === e);
                h(null != (t = null == n ? void 0 : n.id) ? t : null);
            } else D(e);
        }, [null == j ? void 0 : j.designGroupId, M, h, b]),
        Q = i.useCallback(
            (e) => {
                let t = M[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === b);
                null != n &&
                    (v.default.track(R.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    h(n.id));
            },
            [b, M, h]
        );
    if (0 === x.length || (null == l && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let X = null;
    return (
        (X = k
            ? (0, r.jsx)('div', {
                  className: L.loadingContainer,
                  children: (0, r.jsx)(d.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(d.Ttm, {
                          className: L.wallpapersContainer,
                          children: [
                              (0, r.jsx)(K, {
                                  isSelected: null == m || null === m.wallpaperId,
                                  onSelect: () => {
                                      v.default.track(R.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                          wallpaper_id: null,
                                          is_blurred: !1
                                      }),
                                          h(null);
                                  }
                              }),
                              x.map((e) =>
                                  (0, r.jsx)(
                                      Y,
                                      {
                                          isSelected: (null == j ? void 0 : j.designGroupId) === e.designGroupId,
                                          onSelect: Q,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      E
                          ? (0, r.jsx)(z, {
                                canApply: (null == m ? void 0 : m.wallpaperId) !== void 0,
                                isUpdating: G,
                                isBlurEnabled: b,
                                onToggleBlur: W,
                                onClose: F,
                                onApply: V
                            })
                          : (0, r.jsx)(q, {})
                  ]
              })),
        (0, r.jsx)(p.Gt, {
            value: s,
            children: (0, r.jsx)(y.Z, {
                className: a()(L.draggableContainer, t),
                defaultPosition: n,
                topOffset: 88,
                children: (0, r.jsxs)('div', {
                    className: L.container,
                    children: [
                        (null == o ? void 0 : o.pickerType) === 1
                            ? (0, r.jsx)(Z, {
                                  handleClose: F,
                                  isPremiumTier2Subscriber: E
                              })
                            : (0, r.jsx)(H, {
                                  handleClose: F,
                                  isPremiumTier2Subscriber: E
                              }),
                        (0, r.jsx)('div', { className: L.divider }),
                        X
                    ]
                })
            })
        })
    );
};
