n.d(t, { Z: () => x }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(704215),
    l = n(692547),
    c = n(481060),
    u = n(357352),
    d = n(243778),
    f = n(727939),
    _ = n(988290),
    p = n(721359),
    h = n(640963),
    m = n(611725),
    g = n(680783),
    E = n(981631),
    b = n(921944),
    v = n(388032),
    y = n(154950);
function O(e, t, n) {
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
function I(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 88,
    A = 'remove-wallpaper';
function C(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: y.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: y.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(c.lBU, { text: v.NW.string(v.t.oW0eUV) }),
                    (0, r.jsx)(c.olH, {
                        className: y.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/extrabold',
                children: v.NW.string(v.t.GX3dSU)
            }),
            (0, r.jsx)(c.Text, {
                className: y.subtitle,
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: v.NW.string(v.t.u7Hzjo)
            })
        ]
    });
}
function R(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: y.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: v.NW.string(v.t.EJ4k19)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: y.subtitle,
                        variant: 'text-xs/medium',
                        children: v.NW.string(v.t.MnUZLS)
                    })
                ]
            }),
            (0, r.jsx)(c.olH, {
                className: y.closeContainer,
                onClick: t
            })
        ]
    });
}
function P(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: u } = e,
        d = (0, c.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(c.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && y.wallpaperSelected),
                children: (0, r.jsx)(
                    c.P3F,
                    T(I({}, e, d), {
                        tabIndex: d.tabIndex,
                        onClick: t ? E.dG4 : () => n(i),
                        children: u
                    })
                )
            })
    });
}
function w(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: a, default: s } = i;
    return (0, r.jsx)(P, {
        isSelected: t,
        onSelect: n,
        selectionId: o,
        tooltipText: a,
        label: a,
        className: y.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, u.I)(s.icon),
            alt: a,
            width: N,
            height: N,
            draggable: !1,
            className: y.wallpaperImage
        })
    });
}
function D(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(P, {
        isSelected: t,
        onSelect: n,
        selectionId: A,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: y.wallpaperRemoveSelection,
        children: (0, r.jsx)(c.t6m, {
            size: 'lg',
            color: l.Z.colors.BLACK.css
        })
    });
}
function L(e) {
    let { canApply: t, isUpdating: n, isBlurEnabled: i, onBlurEnabledChange: o, onClose: a, onApply: s } = e;
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: y.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: i,
                onChange: (e, t) => o(t),
                children: v.NW.string(v.t['3nPvdH'])
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
                        children: v.NW.string(v.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: s,
                        disabled: !t,
                        submitting: n,
                        children: v.NW.string(v.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
let x = function (e) {
    let { className: t, position: n = E.VD2.BOTTOM_RIGHT } = e,
        { activePickerChannelId: o, closePicker: l, setPreviewWallpaperId: u } = (0, m.B)(),
        v = (0, g.Z)(o),
        [O, I] = i.useState(!1),
        S = (0, _.e)(O ? _.x.BLURRED : _.x.DEFAULT);
    (0, p.W)();
    let T = i.useCallback(() => {
            l();
        }, [l]),
        { isUpdating: N, updateChatWallpaper: A } = (0, h.x)(T),
        [P, x] = (0, d.US)(S.length > 0 ? [s.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        M = P === s.z.CHAT_WALLPAPERS_PICKER_COACHMARK,
        k = () => {
            l(), M && x(b.L.USER_DISMISS);
        },
        j = i.useCallback(() => {
            null != o && null != v && void 0 !== v.wallpaperId && A(o, v.wallpaperId);
        }, [o, v, A]);
    return 0 === S.length || null == o
        ? null
        : (0, r.jsx)(f.Z, {
              className: a()(y.draggableContainer, t),
              defaultPosition: n,
              children: (0, r.jsxs)('div', {
                  className: y.container,
                  children: [
                      M ? (0, r.jsx)(C, { handleClose: k }) : (0, r.jsx)(R, { handleClose: k }),
                      (0, r.jsx)('div', { className: y.divider }),
                      (0, r.jsxs)(c.Ttm, {
                          className: y.wallpapersContainer,
                          children: [
                              (0, r.jsx)(D, {
                                  isSelected: null == v || null === v.wallpaperId,
                                  onSelect: () => u(null)
                              }),
                              S.map((e) =>
                                  (0, r.jsx)(
                                      w,
                                      {
                                          isSelected: (null == v ? void 0 : v.wallpaperId) === e.id,
                                          onSelect: () => u(e.id),
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      (0, r.jsx)(L, {
                          canApply: (null == v ? void 0 : v.wallpaperId) != null,
                          isUpdating: N,
                          isBlurEnabled: O,
                          onBlurEnabledChange: I,
                          onClose: k,
                          onApply: j
                      })
                  ]
              })
          });
};
