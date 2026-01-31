r.d(t, {
    default: () => u,
}),
    r(896048);
var n = r(627968),
    o = r(64700),
    c = r(989349),
    i = r.n(c),
    l = r(158954),
    a = r(397927),
    s = r(985018),
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
        [b, f] = o.useState(() => i()()),
        [O, y] = o.useState(() => i()()),
        j = o.useCallback(() => {
            c(b.toDate());
        }, [c, b]),
        g = (e) => {
            e.isValid() && f(e);
        };
    return (0, n.jsx)(
        l.ConfirmModal,
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
                title: s.intl.string(s.t.VKsXpY),
                confirmText: s.intl.string(s.t["R3BPH+"]),
                cancelText: s.intl.string(s.t["ETE/oC"]),
                onConfirm: j,
            },
            u,
        )),
        (r = r =
            {
                variant: "primary",
                children: (0, n.jsxs)("div", {
                    className: p.U,
                    children: [
                        (0, n.jsx)(a.J3s, {
                            label: s.intl.string(s.t.pSZKvM),
                            required: !0,
                            value: b,
                            onSelect: g,
                            minDate: O,
                        }),
                        (0, n.jsx)(a.czz, {
                            label: s.intl.string(s.t.GOmEb8),
                            required: !0,
                            value: b,
                            onChange: g,
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
