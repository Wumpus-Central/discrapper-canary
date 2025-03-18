n.d(t, { Z: () => M }), n(47120);
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
    _ = n(727939),
    p = n(592125),
    h = n(988290),
    m = n(721359),
    g = n(640963),
    E = n(611725),
    b = n(981631),
    v = n(921944),
    y = n(388032),
    O = n(154950);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 88,
    C = 'remove-wallpaper';
function R(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: O.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: O.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(u.lBU, { text: y.NW.string(y.t.oW0eUV) }),
                    (0, r.jsx)(u.olH, {
                        className: O.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsx)(u.X6q, {
                variant: 'heading-lg/extrabold',
                children: y.NW.string(y.t.GX3dSU)
            }),
            (0, r.jsx)(u.Text, {
                className: O.subtitle,
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: y.NW.string(y.t.u7Hzjo)
            })
        ]
    });
}
function P(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: O.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(u.X6q, {
                        variant: 'heading-md/semibold',
                        children: y.NW.string(y.t.EJ4k19)
                    }),
                    (0, r.jsx)(u.Text, {
                        className: O.subtitle,
                        variant: 'text-xs/medium',
                        children: y.NW.string(y.t.MnUZLS)
                    })
                ]
            }),
            (0, r.jsx)(u.olH, {
                className: O.closeContainer,
                onClick: t
            })
        ]
    });
}
function w(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: c } = e,
        d = (0, u.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(u.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && O.wallpaperSelected),
                children: (0, r.jsx)(
                    u.P3F,
                    N(S({}, e, d), {
                        tabIndex: d.tabIndex,
                        onClick: t ? b.dG4 : () => n(i),
                        children: c
                    })
                )
            })
    });
}
function D(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: a, default: s } = i;
    return (0, r.jsx)(w, {
        isSelected: t,
        onSelect: n,
        selectionId: o,
        tooltipText: a,
        label: a,
        className: O.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, d.I)(s.icon),
            alt: a,
            width: A,
            height: A,
            draggable: !1,
            className: O.wallpaperImage
        })
    });
}
function L(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(w, {
        isSelected: t,
        onSelect: n,
        selectionId: C,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: O.wallpaperRemoveSelection,
        children: (0, r.jsx)(u.t6m, {
            size: 'lg',
            color: c.Z.colors.BLACK.css
        })
    });
}
function x(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(u.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: O.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(u.XZJ, {
                type: u.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => o(t),
                children: y.NW.string(y.t['3nPvdH'])
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
                        children: y.NW.string(y.t['ETE/oK'])
                    }),
                    (0, r.jsx)(u.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: y.NW.string(y.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
let M = function (e) {
    let { className: t, position: n = b.VD2.BOTTOM_RIGHT } = e,
        { activePickerChannelId: o, closePickerForChannel: c } = (0, E.B)(),
        [d, y] = i.useState(null),
        I = i.useRef(!1),
        S = (0, s.e7)([p.Z], () => {
            var e;
            return null === (e = p.Z.getChannel(o)) || void 0 === e ? void 0 : e.wallpaper;
        });
    i.useEffect(() => {
        I.current || (null == S ? void 0 : S.wallpaperId) == null || (y(S.wallpaperId), (I.current = !0));
    }, [S]);
    let [T, N] = i.useState(!1),
        A = (0, h.e)(T ? h.x.BLURRED : h.x.DEFAULT);
    (0, m.W)();
    let w = i.useCallback(() => {
            c();
        }, [c]),
        { isUpdating: M, updateChatWallpaper: k } = (0, g.x)(w),
        [j, U] = (0, f.US)(A.length > 0 ? [l.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        G = j === l.z.CHAT_WALLPAPERS_PICKER_COACHMARK,
        B = () => {
            c(), G && U(v.L.USER_DISMISS);
        },
        F = i.useCallback(() => {
            null != o && k(o, d === C ? null : d);
        }, [o, d, k]);
    return 0 === A.length || null == o
        ? null
        : (0, r.jsx)(_.Z, {
              className: a()(O.draggableContainer, t),
              defaultPosition: n,
              children: (0, r.jsxs)('div', {
                  className: O.container,
                  children: [
                      G ? (0, r.jsx)(R, { handleClose: B }) : (0, r.jsx)(P, { handleClose: B }),
                      (0, r.jsx)('div', { className: O.divider }),
                      (0, r.jsxs)(u.Ttm, {
                          className: O.wallpapersContainer,
                          children: [
                              (0, r.jsx)(L, {
                                  isSelected: d === C,
                                  onSelect: y
                              }),
                              A.map((e) =>
                                  (0, r.jsx)(
                                      D,
                                      {
                                          isSelected: d === e.id,
                                          onSelect: y,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      (0, r.jsx)(x, {
                          canApply: null != d,
                          isUpdating: M,
                          isBlurEnabled: T,
                          onBlurEnabledChange: N,
                          onClose: B,
                          onApply: F
                      })
                  ]
              })
          });
};
