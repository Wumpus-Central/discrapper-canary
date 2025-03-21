n.d(t, {
    ZP: () => B,
    jQ: () => D
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(692547),
    c = n(481060),
    u = n(357352),
    d = n(612659),
    f = n(409100),
    _ = n(703656),
    p = n(727939),
    h = n(411149),
    m = n(988290),
    g = n(721359),
    E = n(640963),
    b = n(611725),
    v = n(680783),
    y = n(981631),
    O = n(921944),
    I = n(474936),
    S = n(388032),
    T = n(154950);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 88,
    w = 'remove-wallpaper';
var D = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function L(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: T.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: T.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(c.lBU, { text: S.NW.string(S.t.oW0eUV) }),
                    (0, r.jsx)(c.olH, {
                        className: T.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: T.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: S.NW.string(S.t.dFhhcX)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: T.subtitle,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: S.NW.string(S.t.u7Hzjo)
                    })
                ]
            })
        ]
    });
}
function x(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: T.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: S.NW.string(S.t.EJ4k19)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: T.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? S.NW.string(S.t.MnUZLS) : S.NW.string(S.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(c.olH, {
                className: T.closeContainer,
                onClick: n
            })
        ]
    });
}
function M(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: u } = e,
        d = (0, c.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(c.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && T.wallpaperSelected),
                children: (0, r.jsx)(
                    c.P3F,
                    R(A({}, e, d), {
                        className: T.wallpaperSelectionClickableContainer,
                        tabIndex: d.tabIndex,
                        onClick: t ? y.dG4 : () => n(i),
                        children: u
                    })
                )
            })
    });
}
function k(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: a, default: s } = i;
    return (0, r.jsx)(M, {
        isSelected: t,
        onSelect: n,
        selectionId: o,
        tooltipText: a,
        label: a,
        className: T.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, u.I)(s.icon),
            alt: a,
            width: P,
            height: P,
            draggable: !1,
            className: T.wallpaperImage
        })
    });
}
function j(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(M, {
        isSelected: t,
        onSelect: n,
        selectionId: w,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: T.wallpaperRemoveSelection,
        children: (0, r.jsx)(c.t6m, {
            size: 'lg',
            color: l.Z.colors.BLACK.css
        })
    });
}
function U(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: T.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => o(t),
                children: S.NW.string(S.t['3nPvdH'])
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
                        onClick: a,
                        disabled: n,
                        children: S.NW.string(S.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: S.NW.string(S.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function G() {
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: T.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: T.nonTier2FooterText,
                children: S.NW.format(S.t['0Tapv7'], {
                    onClickNitro: () => {
                        (0, _.uL)(y.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(f.Z, {
                className: T.getNitroButton,
                buttonTextClassName: T.getNitroButtonText,
                subscribeButtonText: S.NW.string(S.t.JST6jo),
                subscriptionTier: I.Si.TIER_2,
                showGradient: !0,
                size: c.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let B = function (e) {
    let { className: t, position: n = y.VD2.BOTTOM_RIGHT, config: o } = e,
        { activePickerChannelId: l, closePicker: u, setPreviewWallpaperId: f } = (0, b.B)(),
        _ = (0, v.Z)(l),
        S = (0, d.m)(I.p9.TIER_2),
        [N, A] = i.useState(!1),
        C = (0, m.e)(N ? m.x.BLURRED : m.x.DEFAULT);
    (0, g.W)();
    let R = (0, s.e7)([h.Z], () => h.Z.isFetchingWallpapers),
        P = (0, s.e7)([h.Z], () => h.Z.getWallpaperById(null == _ ? void 0 : _.wallpaperId));
    i.useEffect(() => {
        null != P && A(P.isBlurred);
    }, [P]);
    let w = i.useCallback(() => {
            u();
        }, [u]),
        { isUpdating: D, updateChatWallpaper: M } = (0, E.x)(w),
        B = () => {
            u(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(O.L.USER_DISMISS);
        },
        F = i.useCallback(() => {
            null != l && null != _ && void 0 !== _.wallpaperId && M(l, _.wallpaperId);
        }, [l, _, M]);
    if (0 === C.length || (null == l && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let V = null;
    return (
        (V = R
            ? (0, r.jsx)('div', {
                  className: T.loadingContainer,
                  children: (0, r.jsx)(c.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(c.Ttm, {
                          className: T.wallpapersContainer,
                          children: [
                              (0, r.jsx)(j, {
                                  isSelected: null == _ || null === _.wallpaperId,
                                  onSelect: () => f(null)
                              }),
                              C.map((e) =>
                                  (0, r.jsx)(
                                      k,
                                      {
                                          isSelected: (null == _ ? void 0 : _.wallpaperId) === e.id,
                                          onSelect: () => f(e.id),
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      S
                          ? (0, r.jsx)(U, {
                                canApply: (null == _ ? void 0 : _.wallpaperId) !== void 0,
                                isUpdating: D,
                                isBlurEnabled: N,
                                onBlurEnabledChange: A,
                                onClose: B,
                                onApply: F
                            })
                          : (0, r.jsx)(G, {})
                  ]
              })),
        (0, r.jsx)(p.Z, {
            className: a()(T.draggableContainer, t),
            defaultPosition: n,
            children: (0, r.jsxs)('div', {
                className: T.container,
                children: [
                    (null == o ? void 0 : o.pickerType) === 1
                        ? (0, r.jsx)(L, {
                              handleClose: B,
                              isPremiumTier2Subscriber: S
                          })
                        : (0, r.jsx)(x, {
                              handleClose: B,
                              isPremiumTier2Subscriber: S
                          }),
                    (0, r.jsx)('div', { className: T.divider }),
                    V
                ]
            })
        })
    );
};
