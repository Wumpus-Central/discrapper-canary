n.d(t, { Z: () => S }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(727939),
    u = n(411149),
    d = n(611725),
    f = n(981631),
    _ = n(388032),
    p = n(154950);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 88;
function v(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: p.coachmarkHeaderContainer,
        children: [
            (0, r.jsxs)('div', {
                className: p.badgeAndCloseRow,
                children: [
                    (0, r.jsx)(l.lBU, { text: _.NW.string(_.t.oW0eUV) }),
                    (0, r.jsx)(l.olH, {
                        className: p.coachmarkCloseIcon,
                        withCircleBackground: !0,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsx)(l.X6q, {
                variant: 'heading-lg/extrabold',
                children: _.NW.string(_.t.GX3dSU)
            }),
            (0, r.jsx)(l.Text, {
                className: p.subtitle,
                variant: 'text-xs/medium',
                color: 'text-muted',
                children: _.NW.string(_.t.u7Hzjo)
            })
        ]
    });
}
function y(e) {
    let { handleClose: t } = e;
    return (0, r.jsxs)('div', {
        className: p.headerContainer,
        children: [
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        children: _.NW.string(_.t.EJ4k19)
                    }),
                    (0, r.jsx)(l.Text, {
                        className: p.subtitle,
                        variant: 'text-xs/medium',
                        children: _.NW.string(_.t.MnUZLS)
                    })
                ]
            }),
            (0, r.jsx)(l.olH, {
                className: p.closeContainer,
                onClick: t
            })
        ]
    });
}
function O(e) {
    let { isSelected: t, onSelect: n, chatWallpaperMetadata: i } = e,
        { id: o, label: s, default: c } = i,
        u = (0, l.xUy)({
            label: s,
            isSelected: t
        });
    return (0, r.jsx)(l.ua7, {
        text: s,
        children: (e) =>
            (0, r.jsx)('div', {
                className: a()(p.wallpaper, t && p.wallpaperSelected),
                children: (0, r.jsx)(
                    l.P3F,
                    E(m({}, e, u), {
                        tabIndex: u.tabIndex,
                        onClick: t ? f.dG4 : () => n(o),
                        children: (0, r.jsx)('img', {
                            src: c.asset,
                            alt: s,
                            width: b,
                            height: b,
                            draggable: !1,
                            className: p.wallpaperImage
                        })
                    })
                )
            })
    });
}
function I(e) {
    let { isBlurEnabled: t, onBlurEnabledChange: n, onClose: i } = e;
    return (0, r.jsxs)(l.Kqy, {
        direction: 'horizontal',
        justify: 'space-between',
        className: p.footerContainerStack,
        padding: 16,
        children: [
            (0, r.jsx)(l.XZJ, {
                type: l.XZJ.Types.INVERTED,
                value: t,
                onChange: (e, t) => n(t),
                children: _.NW.string(_.t['3nPvdH'])
            }),
            (0, r.jsxs)(l.Kqy, {
                direction: 'horizontal',
                justify: 'end',
                gap: 0,
                children: [
                    (0, r.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        size: l.zxk.Sizes.MEDIUM,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: i,
                        children: _.NW.string(_.t['ETE/oK'])
                    }),
                    (0, r.jsx)(l.zxk, { children: _.NW.string(_.t['1Qm829']) })
                ]
            })
        ]
    });
}
let S = function (e) {
    let { className: t, position: n = f.VD2.BOTTOM_RIGHT } = e,
        [o, _] = i.useState(null),
        [h, m] = i.useState(!1),
        g = (0, s.Wu)([u.Z], () => u.Z.wallpapers),
        { closePickerForChannel: E } = (0, d.B)(),
        b = () => {
            E();
        },
        S = !1;
    return 0 === g.length
        ? null
        : (0, r.jsx)(c.Z, {
              className: a()(p.draggableContainer, t),
              defaultPosition: n,
              children: (0, r.jsxs)('div', {
                  className: p.container,
                  children: [
                      S ? (0, r.jsx)(v, { handleClose: b }) : (0, r.jsx)(y, { handleClose: b }),
                      (0, r.jsx)('div', { className: p.divider }),
                      (0, r.jsx)(l.Ttm, {
                          className: p.wallpapersContainer,
                          children: g.map((e) =>
                              (0, r.jsx)(
                                  O,
                                  {
                                      isSelected: o === e.id,
                                      onSelect: _,
                                      chatWallpaperMetadata: e
                                  },
                                  e.id
                              )
                          )
                      }),
                      (0, r.jsx)(I, {
                          isBlurEnabled: h,
                          onBlurEnabledChange: m,
                          onClose: b
                      })
                  ]
              })
          });
};
