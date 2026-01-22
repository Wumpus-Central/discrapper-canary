r.d(t, { default: () => s });
var n = r(627968),
    o = r(64700),
    c = r(421380),
    i = r(397927),
    l = r(985018);
function s(e) {
    var t, r;
    let { onConfirm: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["onConfirm"]),
        p = o.useCallback(() => {
            s(), (0, i.s7G)();
        }, [s]);
    return (0, n.jsxs)(
        i.EOs,
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
        })({ size: i.rIJ.SMALL }, a)),
        (r = r =
            {
                parentComponent: "DisableLandingPageWarningModal",
                children: [
                    (0, n.jsx)(i.$mQ, {
                        children: (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            style: { marginTop: 24 },
                            children: l.intl.string(l.t.nmBUv7),
                        }),
                    }),
                    (0, n.jsxs)(i.jlY, {
                        children: [
                            (0, n.jsx)(i.Button, {
                                variant: "secondary",
                                text: l.intl.string(l.t["ETE/oC"]),
                                onClick: i.s7G,
                            }),
                            (0, n.jsx)(c.$n, {
                                color: c.XD.RED,
                                onClick: p,
                                style: { marginRight: 8 },
                                children: l.intl.string(l.t.R9GHya),
                            }),
                        ],
                    }),
                ],
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
