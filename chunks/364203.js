n.d(t, { Z: () => F }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(704215),
    c = n(692547),
    u = n(481060),
    d = n(357352),
    f = n(243778),
    _ = n(612659),
    p = n(409100),
    h = n(703656),
    m = n(727939),
    g = n(411149),
    E = n(988290),
    b = n(721359),
    v = n(640963),
    y = n(611725),
    O = n(680783),
    I = n(981631),
    S = n(921944),
    T = n(474936),
    N = n(388032),
    A = n(154950);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 88,
    L = 'remove-wallpaper';
function x(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: A.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: A.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(u.lBU, { text: N.NW.string(N.t.oW0eUV) }),
                    (0, r.jsx)(u.olH, {
                        className: A.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: A.coachmarkHeaderTextContainer,
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-lg/extrabold',
                        children: N.NW.string(N.t.dFhhcX)
                    }),
                    (0, r.jsx)(u.Text, {
                        className: A.subtitle,
                        variant: 'text-xs/medium',
                        color: 'text-muted',
                        children: N.NW.string(N.t.u7Hzjo)
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { isPremiumTier2Subscriber: t, handleClose: n } = e;
    return (0, r.jsxs)('div', {
        className: A.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        children: N.NW.string(N.t.EJ4k19)
                    }),
                    (0, r.jsx)(u.Text, {
                        className: A.subtitle,
                        variant: 'text-xs/medium',
                        children: t ? N.NW.string(N.t.MnUZLS) : N.NW.string(N.t.frNDKS)
                    })
                ]
            }),
            (0, r.jsx)(u.olH, {
                className: A.closeContainer,
                onClick: n
            })
        ]
    });
}
function k(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: c } = e,
        d = (0, u.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(u.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && A.wallpaperSelected),
                children: (0, r.jsx)(
                    u.P3F,
                    w(R({}, e, d), {
                        className: A.wallpaperSelectionClickableContainer,
                        tabIndex: d.tabIndex,
                        onClick: t ? I.dG4 : () => n(i),
                        children: c
                    })
                )
            })
    });
}
function j(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: a, default: s } = i;
    return (0, r.jsx)(k, {
        isSelected: t,
        onSelect: n,
        selectionId: o,
        tooltipText: a,
        label: a,
        className: A.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, d.I)(s.icon),
            alt: a,
            width: D,
            height: D,
            draggable: !1,
            className: A.wallpaperImage
        })
    });
}
function U(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(k, {
        isSelected: t,
        onSelect: n,
        selectionId: L,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: A.wallpaperRemoveSelection,
        children: (0, r.jsx)(u.t6m, {
            size: 'lg',
            color: c.Z.colors.BLACK.css
        })
    });
}
function G(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: A.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => o(t),
                children: N.NW.string(N.t['3nPvdH'])
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
                        onClick: a,
                        disabled: n,
                        children: N.NW.string(N.t['ETE/oK'])
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: N.NW.string(N.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
function B() {
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: A.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.Text, {
                variant: 'text-sm/medium',
                color: 'text-muted',
                className: A.nonTier2FooterText,
                children: N.NW.format(N.t['0Tapv7'], {
                    onClickNitro: () => {
                        (0, h.uL)(I.Z5c.NITRO_HOME);
                    }
                })
            }),
            (0, r.jsx)(p.Z, {
                className: A.getNitroButton,
                buttonTextClassName: A.getNitroButtonText,
                subscribeButtonText: N.NW.string(N.t.JST6jo),
                subscriptionTier: T.Si.TIER_2,
                showGradient: !0,
                size: u.zxk.Sizes.MEDIUM
            })
        ]
    });
}
let F = function (e) {
    let { className: t, position: n = I.VD2.BOTTOM_RIGHT } = e,
        { activePickerChannelId: o, closePicker: c, setPreviewWallpaperId: d } = (0, y.B)(),
        p = (0, O.Z)(o),
        h = (0, _.m)(T.p9.TIER_2),
        [N, C] = i.useState(!1),
        R = (0, E.e)(N ? E.x.BLURRED : E.x.DEFAULT);
    (0, b.W)();
    let P = (0, s.e7)([g.Z], () => g.Z.getWallpaperById(null == p ? void 0 : p.wallpaperId));
    i.useEffect(() => {
        null != P && C(P.isBlurred);
    }, [P]);
    let w = i.useCallback(() => {
            c();
        }, [c]),
        { isUpdating: D, updateChatWallpaper: L } = (0, v.x)(w),
        [k, F] = (0, f.US)(R.length > 0 ? [l.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        V = k === l.z.CHAT_WALLPAPERS_PICKER_COACHMARK,
        Z = () => {
            c(), V && F(S.L.USER_DISMISS);
        },
        H = i.useCallback(() => {
            null != o && null != p && void 0 !== p.wallpaperId && L(o, p.wallpaperId);
        }, [o, p, L]);
    return 0 === R.length || null == o
        ? null
        : (0, r.jsx)(m.Z, {
              className: a()(A.draggableContainer, t),
              defaultPosition: n,
              children: (0, r.jsxs)('div', {
                  className: A.container,
                  children: [
                      V
                          ? (0, r.jsx)(x, {
                                handleClose: Z,
                                isPremiumTier2Subscriber: h
                            })
                          : (0, r.jsx)(M, {
                                handleClose: Z,
                                isPremiumTier2Subscriber: h
                            }),
                      (0, r.jsx)('div', { className: A.divider }),
                      (0, r.jsxs)(u.Ttm, {
                          className: A.wallpapersContainer,
                          children: [
                              (0, r.jsx)(U, {
                                  isSelected: null == p || null === p.wallpaperId,
                                  onSelect: () => d(null)
                              }),
                              R.map((e) =>
                                  (0, r.jsx)(
                                      j,
                                      {
                                          isSelected: (null == p ? void 0 : p.wallpaperId) === e.id,
                                          onSelect: () => d(e.id),
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      h
                          ? (0, r.jsx)(G, {
                                canApply: (null == p ? void 0 : p.wallpaperId) != null,
                                isUpdating: D,
                                isBlurEnabled: N,
                                onBlurEnabledChange: C,
                                onClose: Z,
                                onApply: H
                            })
                          : (0, r.jsx)(B, {})
                  ]
              })
          });
};
