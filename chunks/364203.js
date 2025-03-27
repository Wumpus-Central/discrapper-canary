n.d(t, {
    ZP: () => z,
    jQ: () => B
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
    f = n(100527),
    _ = n(906732),
    p = n(213609),
    h = n(357352),
    m = n(612659),
    g = n(409100),
    E = n(703656),
    b = n(727939),
    v = n(626135),
    y = n(411149),
    O = n(988290),
    I = n(721359),
    S = n(640963),
    T = n(611725),
    A = n(628309),
    N = n(680783),
    C = n(981631),
    R = n(921944),
    P = n(474936),
    w = n(388032),
    D = n(154950);
function L(e, t, n) {
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
function x(e) {
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
                L(e, t, n[t]);
            });
    }
    return e;
}
function M(e, t) {
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
function k(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : M(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let j = 88,
    U = 'remove-wallpaper',
    G = 0.5;
var B = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function F(e) {
    let { handleClose: t } = e;
    return (
        (0, p.Z)({
            type: c.ImpressionTypes.POPOUT,
            name: c.ImpressionNames.CHAT_WALLPAPER_PICKER_COACHMARK
        }),
        (0, r.jsxs)('div', {
            className: D.coachmarkHeaderContainer,
            children: [
                (0, r.jsxs)('div', {
                    className: D.badgeAndCloseRow,
                    children: [
                        (0, r.jsx)(d.lBU, { text: w.NW.string(w.t.oW0eUV) }),
                        (0, r.jsx)(d.olH, {
                            className: D.coachmarkCloseIcon,
                            onClick: () => {
                                v.default.track(C.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'coachmark_header' }), t();
                            }
                        })
                    ]
                }),
                (0, r.jsxs)('div', {
                    className: D.coachmarkHeaderTextContainer,
                    children: [
                        (0, r.jsx)(d.X6q, {
                            variant: 'heading-lg/extrabold',
                            children: w.NW.string(w.t.dFhhcX)
                        }),
                        (0, r.jsx)(d.Text, {
                            className: D.subtitle,
                            variant: 'text-xs/medium',
                            color: 'text-muted',
                            children: w.NW.string(w.t.u7Hzjo)
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
        className: D.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(d.X6q, {
                        variant: 'heading-md/semibold',
                        children: w.NW.string(w.t.EJ4k19)
                    }),
                    (0, r.jsx)(d.Text, {
                        className: D.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? w.NW.string(w.t.MnUZLS) : w.NW.string(w.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(d.olH, {
                className: D.closeContainer,
                onClick: () => {
                    v.default.track(C.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'header' }), n();
                }
            })
        ]
    });
}
let Z = i.forwardRef((e) => {
    let { isSelected: t, onSelect: n, selectionId: o, tooltipText: s, label: u, className: f, children: _ } = e,
        h = (0, d.xUy)({
            label: u,
            isSelected: t
        }),
        m = i.useRef(null);
    i.useEffect(() => {
        let e = new IntersectionObserver(
            (e) => {
                e.forEach((e) => {
                    e.isIntersecting &&
                        (0, p.h)({
                            type: c.ImpressionTypes.VIEW,
                            name: c.ImpressionNames.CHAT_WALLPAPER_WALLPAPER_OPTION,
                            properties: { design_group_id: o }
                        });
                });
            },
            { threshold: G }
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
                    className: a()(f, t && D.wallpaperSelected),
                    children: (0, r.jsx)(
                        d.P3F,
                        k(x({}, e, h), {
                            className: D.wallpaperSelectionClickableContainer,
                            tabIndex: h.tabIndex,
                            onClick: t ? C.dG4 : () => n(o),
                            children: _
                        })
                    )
                })
        })
    );
});
function H(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(Z, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: D.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, h.I)(a.icon),
            alt: o,
            width: j,
            height: j,
            draggable: !1,
            className: D.wallpaperImage
        })
    });
}
function W(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(Z, {
        isSelected: t,
        onSelect: n,
        selectionId: U,
        tooltipText: w.NW.string(w.t['C/MRFx']),
        label: w.NW.string(w.t['C/MRFx']),
        className: D.wallpaperRemoveSelection,
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
        className: D.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.XZJ, {
                type: d.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => {
                    v.default.track(C.rMx.CHAT_WALLPAPER_PICKER_BLUR_TOGGLED, { selected: t }), o(t);
                },
                children: w.NW.string(w.t['3nPvdH'])
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
                            v.default.track(C.rMx.CHAT_WALLPAPER_PICKER_CANCEL_CLICKED, { cta_location: 'footer' }), a();
                        },
                        disabled: n,
                        children: w.NW.string(w.t['ETE/oK'])
                    }),
                    (0, r.jsx)(d.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: w.NW.string(w.t['1Qm829'])
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
        className: D.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(d.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: D.nonTier2FooterText,
                children: w.NW.format(w.t['0Tapv7'], {
                    onClickNitro: () => {
                        v.default.track(C.rMx.CHAT_WALLPAPER_NITRO_LINK_CLICKED), (0, E.uL)(C.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(g.Z, {
                className: D.getNitroButton,
                buttonTextClassName: D.getNitroButtonText,
                subscribeButtonText: w.NW.string(w.t.JST6jo),
                subscriptionTier: P.Si.TIER_2,
                showGradient: !0,
                size: d.zxk.Sizes.MEDIUM
            })
        ]
    });
}
Z.displayName = 'BaseChatWallpaperSelection';
let z = function (e) {
    let { className: t, position: n = C.VD2.BOTTOM_RIGHT, config: o } = e,
        { analyticsLocations: s } = (0, _.ZP)(f.Z.CHAT_WALLPAPER_PICKER),
        { activePickerChannelId: l, closePicker: c, setPreviewWallpaperId: p } = (0, T.B)(),
        h = (0, N.Z)(l),
        g = (0, m.m)(P.p9.TIER_2),
        [E, w] = i.useState(!1),
        L = (0, O.e)(),
        x = (0, A.u)();
    (0, I.W)();
    let M = (0, u.e7)([y.Z], () => y.Z.isFetchingWallpapers),
        k = (0, u.e7)([y.Z], () => y.Z.getWallpaperById(null == h ? void 0 : h.wallpaperId));
    i.useEffect(() => {
        null != k && w(k.isBlurred);
    }, [k]);
    let j = i.useCallback(() => {
            c();
        }, [c]),
        { isUpdating: U, updateChatWallpaper: G } = (0, S.x)(j),
        B = () => {
            c(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(R.L.USER_DISMISS);
        },
        Z = i.useCallback(() => {
            null != l &&
                null != h &&
                void 0 !== h.wallpaperId &&
                (v.default.track(C.rMx.CHAT_WALLPAPER_PICKER_APPLY_CLICKED, {
                    wallpaper_id: h.wallpaperId,
                    is_blur_enabled: E,
                    channel_id: l
                }),
                G(l, h.wallpaperId));
        }, [l, h, G, E]),
        z = i.useCallback(
            (e) => {
                if ((null == k ? void 0 : k.designGroupId) != null) {
                    var t;
                    let n = x[k.designGroupId].find((t) => t.isBlurred === e);
                    p(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null);
                } else w(e);
            },
            [null == k ? void 0 : k.designGroupId, x, p]
        ),
        q = i.useCallback(
            (e) => {
                let t = x[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === E);
                null != n &&
                    (v.default.track(C.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                        wallpaper_id: n.id,
                        is_blurred: n.isBlurred
                    }),
                    p(n.id));
            },
            [E, x, p]
        );
    if (0 === L.length || (null == l && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let Q = null;
    return (
        (Q = M
            ? (0, r.jsx)('div', {
                  className: D.loadingContainer,
                  children: (0, r.jsx)(d.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(d.Ttm, {
                          className: D.wallpapersContainer,
                          children: [
                              (0, r.jsx)(W, {
                                  isSelected: null == h || null === h.wallpaperId,
                                  onSelect: () => {
                                      v.default.track(C.rMx.CHAT_WALLPAPER_WALLPAPER_OPTION_SELECTED, {
                                          wallpaper_id: null,
                                          is_blurred: !1
                                      }),
                                          p(null);
                                  }
                              }),
                              L.map((e) =>
                                  (0, r.jsx)(
                                      H,
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
                          ? (0, r.jsx)(Y, {
                                canApply: (null == h ? void 0 : h.wallpaperId) !== void 0,
                                isUpdating: U,
                                isBlurEnabled: E,
                                onBlurEnabledChange: z,
                                onClose: B,
                                onApply: Z
                            })
                          : (0, r.jsx)(K, {})
                  ]
              })),
        (0, r.jsx)(_.Gt, {
            value: s,
            children: (0, r.jsx)(b.Z, {
                className: a()(D.draggableContainer, t),
                defaultPosition: n,
                children: (0, r.jsxs)('div', {
                    className: D.container,
                    children: [
                        (null == o ? void 0 : o.pickerType) === 1
                            ? (0, r.jsx)(F, {
                                  handleClose: B,
                                  isPremiumTier2Subscriber: g
                              })
                            : (0, r.jsx)(V, {
                                  handleClose: B,
                                  isPremiumTier2Subscriber: g
                              }),
                        (0, r.jsx)('div', { className: D.divider }),
                        Q
                    ]
                })
            })
        })
    );
};
