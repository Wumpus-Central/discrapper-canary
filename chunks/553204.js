n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(477690),
    o = n(481060),
    c = n(518738),
    d = n(208567),
    u = n(48950),
    g = n(624138),
    m = n(388032),
    p = n(257466);
let f = (0, g.Mg)(s.Z.ROLE_ICON_UPLOADER_ICON_SIZE);
function h(e) {
    let { role: t, "aria-label": n = m.intl.string(m.t["MsUY/S"]), className: l, onClick: s, disabled: g = !1 } = e,
        h = i.useRef(null),
        b = i.useMemo(() => (0, c.Kz)(t, f), [t]),
        x =
            null != b
                ? (0, r.jsx)(
                      u.Z,
                      (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (t) {
                                      var r;
                                      (r = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = r);
                                  });
                          }
                          return e;
                      })(
                          {
                              enableTooltip: !1,
                              className: p.icon,
                          },
                          b,
                      ),
                  )
                : (0, r.jsx)(o.FmF, {
                      size: "md",
                      color: "currentColor",
                      className: p.icon,
                  });
    return (0, r.jsx)(o.tEY, {
        ringTarget: h,
        children: (0, r.jsxs)(o.P3F, {
            "aria-label": n,
            className: a()(p.container, l, { [p.disabled]: g }),
            onClick: g ? void 0 : s,
            "aria-disabled": g,
            children: [
                (0, r.jsx)("div", {
                    ref: h,
                    className: p.preview,
                    children: x,
                }),
                null != b ? (0, r.jsx)(d.S, { className: p.uploaderIcon }) : null,
            ],
        }),
    });
}
