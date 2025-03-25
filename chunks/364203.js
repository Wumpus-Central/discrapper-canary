n.d(t, {
    ZP: () => F,
    jQ: () => L
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
    v = n(628309),
    y = n(680783),
    O = n(981631),
    I = n(921944),
    S = n(474936),
    T = n(388032),
    N = n(154950);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 88,
    D = 'remove-wallpaper';
var L = (function (e) {
    return (e[(e.DEFAULT = 0)] = 'DEFAULT'), (e[(e.COACHMARK = 1)] = 'COACHMARK'), e;
})({});
function x(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: N.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: N.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(c.lBU, { text: T.NW.string(T.t.oW0eUV) }),
                    (0, r.jsx)(c.olH, {
                        className: N.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: T.NW.string(T.t.dFhhcX)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: N.subtitle,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: T.NW.string(T.t.u7Hzjo)
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: N.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: T.NW.string(T.t.EJ4k19)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: N.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? T.NW.string(T.t.MnUZLS) : T.NW.string(T.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(c.olH, {
                className: N.closeContainer,
                onClick: n
            })
        ]
    });
}
function k(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: u } = e,
        d = (0, c.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(c.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && N.wallpaperSelected),
                children: (0, r.jsx)(
                    c.P3F,
                    P(C({}, e, d), {
                        className: N.wallpaperSelectionClickableContainer,
                        tabIndex: d.tabIndex,
                        onClick: t ? O.dG4 : () => n(i),
                        children: u
                    })
                )
            })
    });
}
function j(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { label: o, default: a, designGroupId: s } = i;
    return (0, r.jsx)(k, {
        isSelected: t,
        onSelect: n,
        selectionId: s,
        tooltipText: o,
        label: o,
        className: N.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, u.I)(a.icon),
            alt: o,
            width: w,
            height: w,
            draggable: !1,
            className: N.wallpaperImage
        })
    });
}
function U(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(k, {
        isSelected: t,
        onSelect: n,
        selectionId: D,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: N.wallpaperRemoveSelection,
        children: (0, r.jsx)(c.t6m, {
            size: 'lg',
            color: l.Z.colors.BLACK.css
        })
    });
}
function G(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: N.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => o(t),
                children: T.NW.string(T.t['3nPvdH'])
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
                        children: T.NW.string(T.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: T.NW.string(T.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function B() {
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: N.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: N.nonTier2FooterText,
                children: T.NW.format(T.t['0Tapv7'], {
                    onClickNitro: () => {
                        (0, _.uL)(O.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(f.Z, {
                className: N.getNitroButton,
                buttonTextClassName: N.getNitroButtonText,
                subscribeButtonText: T.NW.string(T.t.JST6jo),
                subscriptionTier: S.Si.TIER_2,
                showGradient: !0,
                size: c.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let F = function (e) {
    let { className: t, position: n = O.VD2.BOTTOM_RIGHT, config: o } = e,
        { activePickerChannelId: l, closePicker: u, setPreviewWallpaperId: f } = (0, b.B)(),
        _ = (0, y.Z)(l),
        T = (0, d.m)(S.p9.TIER_2),
        [A, C] = i.useState(!1),
        R = (0, m.e)(),
        P = (0, v.u)();
    (0, g.W)();
    let w = (0, s.e7)([h.Z], () => h.Z.isFetchingWallpapers),
        D = (0, s.e7)([h.Z], () => h.Z.getWallpaperById(null == _ ? void 0 : _.wallpaperId));
    i.useEffect(() => {
        null != D && C(D.isBlurred);
    }, [D]);
    let L = i.useCallback(() => {
            u();
        }, [u]),
        { isUpdating: k, updateChatWallpaper: F } = (0, E.x)(L),
        V = () => {
            u(), (null == o ? void 0 : o.markDismissed) != null && o.markDismissed(I.L.USER_DISMISS);
        },
        Z = i.useCallback(() => {
            null != l && null != _ && void 0 !== _.wallpaperId && F(l, _.wallpaperId);
        }, [l, _, F]),
        H = i.useCallback(
            (e) => {
                if ((null == D ? void 0 : D.designGroupId) != null) {
                    var t;
                    let n = P[D.designGroupId].find((t) => t.isBlurred === e);
                    f(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : null);
                } else C(e);
            },
            [null == D ? void 0 : D.designGroupId, P, f]
        ),
        W = i.useCallback(
            (e) => {
                let t = P[e];
                if (null == t) return;
                let n = t.find((e) => e.isBlurred === A);
                null != n && f(n.id);
            },
            [A, P, f]
        );
    if (0 === R.length || (null == l && (null == o ? void 0 : o.pickerType) !== 1)) return null;
    let Y = null;
    return (
        (Y = w
            ? (0, r.jsx)('div', {
                  className: N.loadingContainer,
                  children: (0, r.jsx)(c.$jN, {})
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(c.Ttm, {
                          className: N.wallpapersContainer,
                          children: [
                              (0, r.jsx)(U, {
                                  isSelected: null == _ || null === _.wallpaperId,
                                  onSelect: () => f(null)
                              }),
                              R.map((e) =>
                                  (0, r.jsx)(
                                      j,
                                      {
                                          isSelected: (null == D ? void 0 : D.designGroupId) === e.designGroupId,
                                          onSelect: W,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      T
                          ? (0, r.jsx)(G, {
                                canApply: (null == _ ? void 0 : _.wallpaperId) !== void 0,
                                isUpdating: k,
                                isBlurEnabled: A,
                                onBlurEnabledChange: H,
                                onClose: V,
                                onApply: Z
                            })
                          : (0, r.jsx)(B, {})
                  ]
              })),
        (0, r.jsx)(p.Z, {
            className: a()(N.draggableContainer, t),
            defaultPosition: n,
            children: (0, r.jsxs)('div', {
                className: N.container,
                children: [
                    (null == o ? void 0 : o.pickerType) === 1
                        ? (0, r.jsx)(x, {
                              handleClose: V,
                              isPremiumTier2Subscriber: T
                          })
                        : (0, r.jsx)(M, {
                              handleClose: V,
                              isPremiumTier2Subscriber: T
                          }),
                    (0, r.jsx)('div', { className: N.divider }),
                    Y
                ]
            })
        })
    );
};
