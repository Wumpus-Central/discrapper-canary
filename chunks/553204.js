n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(477690),
    o = n(481060),
    c = n(91218),
    d = n(518738),
    u = n(208567),
    m = n(624138),
    g = n(388032),
    p = n(973217);
let h = (0, m.Mg)(l.Z.ROLE_ICON_UPLOADER_ICON_SIZE);
function f(e) {
    let { role: t, 'aria-label': n = g.NW.string(g.t['MsUY/f']), className: s, onClick: l, disabled: m = !1 } = e,
        f = i.useRef(null),
        b = i.useMemo(() => (null != t ? (0, d.Kz)(t, h) : null), [t]),
        x =
            null != b
                ? (0, r.jsx)(
                      c.Z,
                      (function (e) {
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
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              enableTooltip: !1,
                              className: p.icon
                          },
                          b
                      )
                  )
                : (0, r.jsx)(o.FmF, {
                      size: 'md',
                      color: 'currentColor',
                      className: p.icon
                  });
    return (0, r.jsx)(o.tEY, {
        ringTarget: f,
        children: (0, r.jsxs)(o.P3F, {
            'aria-label': n,
            className: a()(p.container, s, { [p.disabled]: m }),
            onClick: m ? void 0 : l,
            'aria-disabled': m,
            children: [
                (0, r.jsx)('div', {
                    ref: f,
                    className: p.preview,
                    children: x
                }),
                null != b ? (0, r.jsx)(u.S, { className: p.uploaderIcon }) : null
            ]
        })
    });
}
