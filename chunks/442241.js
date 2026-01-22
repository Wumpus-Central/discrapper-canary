r.d(t, { default: () => p }), r(896048), r(228524);
var n = r(627968),
    o = r(64700),
    a = r(158954),
    c = r(397927),
    l = r(49999),
    i = r(985018),
    s = r(216705);
function p(e) {
    var t, r;
    let { modalConfig: p, markAsDismissed: f } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.getOwnPropertyNames(e);
                    for (n = 0; n < a.length; n++)
                        (r = a[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a;
        })(e, ["modalConfig", "markAsDismissed"]),
        u = o.useCallback(
            (e) => {
                var t;
                null == (t = p.onPrimaryClick) || t.call(p, e), f(l.i.TAKE_ACTION);
            },
            [p, f],
        ),
        y = [p.firstHeader, p.secondHeader].filter(Boolean).join(" "),
        d = [
            {
                variant: "secondary",
                text: i.intl.string(i.t["ETE/oC"]),
                onClick: b.onClose,
            },
            ...(null != p.primaryButtonText
                ? [
                      {
                          variant: "primary",
                          text: p.primaryButtonText,
                          onClick: u,
                      },
                  ]
                : []),
        ];
    return (0, n.jsx)(
        a.Modal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, b)),
        (r = r =
            {
                title: y,
                actions: d,
                size: "md",
                children: (0, n.jsx)("div", {
                    className: s.kL,
                    children: (0, n.jsxs)("div", {
                        className: s.hQ,
                        children: [
                            (0, n.jsx)(c.Text, {
                                tag: "span",
                                className: s.h_,
                                variant: "text-sm/normal",
                                children: p.firstBody,
                            }),
                            (0, n.jsx)(c.Text, {
                                tag: "span",
                                className: s.h_,
                                variant: "text-sm/normal",
                                children: p.secondBody,
                            }),
                            (0, n.jsx)(c.Text, {
                                tag: "span",
                                className: s.h_,
                                variant: "text-sm/normal",
                                children: p.thirdBody,
                            }),
                        ],
                    }),
                }),
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
