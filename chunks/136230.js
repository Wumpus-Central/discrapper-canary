n.d(t, {
    A: () => p,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(319060),
    c = n(397927),
    o = n(201275),
    d = n(342298),
    u = n(657048),
    f = n(240248),
    g = n(985018),
    b = n(802652);
let m = (0, f.xI)(a.A.ROLE_ICON_UPLOADER_ICON_SIZE);

function p(e) {
    let { role: t, "aria-label": n = g.intl.string(g.t["MsUY/S"]), className: l, onClick: a, disabled: f = !1 } = e,
        p = i.useRef(null),
        x = i.useMemo(() => (0, o.ox)(t, m), [t]),
        h =
            null != x
                ? (0, r.jsx)(
                      u.A,
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
                              className: b.Kk,
                          },
                          x,
                      ),
                  )
                : (0, r.jsx)(c.XGR, {
                      size: "md",
                      color: "currentColor",
                      className: b.Kk,
                  });
    return (0, r.jsx)(c.vN3, {
        ringTarget: p,
        children: (0, r.jsxs)(c.DUT, {
            "aria-label": n,
            className: s()(b.kL, l, {
                [b.r9]: f,
            }),
            onClick: f ? void 0 : a,
            "aria-disabled": f,
            children: [
                (0, r.jsx)("div", {
                    ref: p,
                    className: b.VH,
                    children: h,
                }),
                null != x
                    ? (0, r.jsx)(d.L, {
                          className: b.Sl,
                      })
                    : null,
            ],
        }),
    });
}
