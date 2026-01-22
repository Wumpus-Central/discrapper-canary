r.d(t, {
    default: () => u,
}),
    r(896048);
var n = r(627968),
    o = r(64700),
    c = r(989349),
    l = r.n(c),
    i = r(421380),
    s = r(397927),
    a = r(985018),
    p = r(826063);

function u(e) {
    var t, r;
    let { createReminder: c } = e,
        u = (function (e, t) {
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
        })(e, ["createReminder"]),
        [b, f] = o.useState(() => l()()),
        [O, y] = o.useState(() => l()()),
        d = o.useCallback(() => {
            c(b.toDate());
        }, [c, b]),
        j = (e) => {
            e.isValid() && f(e);
        };
    return (0, n.jsx)(
        s.VoidConfirmModal,
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
        })(
            {
                header: a.intl.string(a.t.VKsXpY),
                confirmText: a.intl.string(a.t["R3BPH+"]),
                cancelText: a.intl.string(a.t["ETE/oC"]),
                confirmButtonColor: i.$n.Colors.BRAND,
                onConfirm: d,
            },
            u,
        )),
        (r = r =
            {
                children: (0, n.jsxs)("div", {
                    className: p.U,
                    children: [
                        (0, n.jsx)(s.J3s, {
                            label: a.intl.string(a.t.pSZKvM),
                            required: !0,
                            value: b,
                            onSelect: j,
                            minDate: O,
                        }),
                        (0, n.jsx)(s.czz, {
                            label: a.intl.string(a.t.GOmEb8),
                            required: !0,
                            value: b,
                            onChange: j,
                        }),
                    ],
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
