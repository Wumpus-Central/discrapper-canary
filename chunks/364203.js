n.d(t, { Z: () => D }), n(47120);
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
    h = n(611725),
    m = n(981631),
    g = n(921944),
    E = n(388032),
    b = n(154950);
function v(e, t, n) {
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
function y(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 88,
    T = 'remove-wallpaper';
function N(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: b.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: b.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(c.lBU, { text: E.NW.string(E.t.oW0eUV) }),
                    (0, r.jsx)(c.olH, {
                        className: b.coachmarkCloseIcon,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsx)(c.X6q, {
                variant: 'heading-lg/extrabold',
                children: E.NW.string(E.t.GX3dSU)
            }),
            (0, r.jsx)(c.Text, {
                className: b.subtitle,
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: E.NW.string(E.t.u7Hzjo)
            })
        ]
    });
}
function A(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: b.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        children: E.NW.string(E.t.EJ4k19)
                    }),
                    (0, r.jsx)(c.Text, {
                        className: b.subtitle,
                        variant: 'text-xs/medium',
                        children: E.NW.string(E.t.MnUZLS)
                    })
                ]
            }),
            (0, r.jsx)(c.olH, {
                className: b.closeContainer,
                onClick: t
            })
        ]
    });
}
function C(e) {
    let { isSelected: t, onSelect: n, selectionId: i, tooltipText: o, label: s, className: l, children: u } = e,
        d = (0, c.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(c.ua7, {
        text: o,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(l, t && b.wallpaperSelected),
                children: (0, r.jsx)(
                    c.P3F,
                    I(y({}, e, d), {
                        tabIndex: d.tabIndex,
                        onClick: t ? m.dG4 : () => n(i),
                        children: u
                    })
                )
            })
    });
}
function R(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: a, default: s } = i;
    return (0, r.jsx)(C, {
        isSelected: t,
        onSelect: n,
        selectionId: o,
        tooltipText: a,
        label: a,
        className: b.wallpaper,
        children: (0, r.jsx)('img', {
            src: (0, u.I)(s.icon),
            alt: a,
            width: S,
            height: S,
            draggable: !1,
            className: b.wallpaperImage
        })
    });
}
function P(e) {
    let { isSelected: t, onSelect: n } = e;
    return (0, r.jsx)(C, {
        isSelected: t,
        onSelect: n,
        selectionId: T,
        tooltipText: 'Remove wallpaper',
        label: 'Remove Wallpaper',
        className: b.wallpaperRemoveSelection,
        children: (0, r.jsx)(c.t6m, {
            size: 'lg',
            color: l.Z.colors.BLACK.css
        })
    });
}
function w(e) {
    let { isBlurEnabled: t, onBlurEnabledChange: n, onClose: i, onApply: o } = e;
    return (0, r.jsxs)(c.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: b.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(c.XZJ, {
                type: c.XZJ.Types.INVERTED,
                value: t,
                onChange: (e, t) => n(t),
                children: E.NW.string(E.t['3nPvdH'])
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
                        onClick: i,
                        children: E.NW.string(E.t['ETE/oK'])
                    }),
                    (0, r.jsx)(c.zxk, {
                        onClick: o,
                        children: E.NW.string(E.t['1Qm829'])
                    })
                ]
            })
        ]
    });
}
let D = function (e) {
    let { className: t, position: n = m.VD2.BOTTOM_RIGHT } = e,
        [o, l] = i.useState(null),
        [u, E] = i.useState(!1),
        v = (0, _.e)(u ? _.x.BLURRED : _.x.DEFAULT);
    (0, p.W)();
    let { closePickerForChannel: y } = (0, h.B)(),
        [O, I] = (0, d.US)(v.length > 0 ? [s.z.CHAT_WALLPAPERS_PICKER_COACHMARK] : []),
        S = O === s.z.CHAT_WALLPAPERS_PICKER_COACHMARK,
        C = () => {
            y(), S && I(g.L.USER_DISMISS);
        },
        D = () => {};
    return 0 === v.length
        ? null
        : (0, r.jsx)(f.Z, {
              className: a()(b.draggableContainer, t),
              defaultPosition: n,
              children: (0, r.jsxs)('div', {
                  className: b.container,
                  children: [
                      S ? (0, r.jsx)(N, { handleClose: C }) : (0, r.jsx)(A, { handleClose: C }),
                      (0, r.jsx)('div', { className: b.divider }),
                      (0, r.jsxs)(c.Ttm, {
                          className: b.wallpapersContainer,
                          children: [
                              (0, r.jsx)(P, {
                                  isSelected: o === T,
                                  onSelect: l
                              }),
                              v.map((e) =>
                                  (0, r.jsx)(
                                      R,
                                      {
                                          isSelected: o === e.id,
                                          onSelect: l,
                                          chatWallpaperMetadata: e
                                      },
                                      e.id
                                  )
                              )
                          ]
                      }),
                      (0, r.jsx)(w, {
                          isBlurEnabled: u,
                          onBlurEnabledChange: E,
                          onClose: C,
                          onApply: D
                      })
                  ]
              })
          });
};
