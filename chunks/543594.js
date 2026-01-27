n.d(t, {
    A: () => p,
});
var r,
    i = n(627968);
n(64700);
var l = n(421380),
    a = n(397927),
    s = n(235986),
    o = n(460404),
    c = (((r = c || {}).SMALL = "SMALL"), (r.MEDIUM = "MEDIUM"), (r.LARGE = "LARGE"), r);
let u = {
        SMALL: o.rA,
        MEDIUM: o.Bx,
        LARGE: o.bU,
    },
    d = (e) => {
        var t, n;
        let { onDropdownClick: r, children: c, contentClassName: d, dropdownSize: p = "MEDIUM" } = e,
            m = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i,
                    l = {};
                if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                }
                if (
                    ((l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.getOwnPropertyNames(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                        return i;
                    })(e, t)),
                    Object.getOwnPropertySymbols)
                )
                    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                        (r = n[i]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            })(e, ["onDropdownClick", "children", "contentClassName", "dropdownSize"]);
        return (0, i.jsx)(
            l.$n,
            ((t = (function (e) {
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
            })({}, m)),
            (n = n =
                {
                    children: (0, i.jsxs)(s.A, {
                        align: s.A.Align.CENTER,
                        children: [
                            (0, i.jsx)(s.A.Child, {
                                className: d,
                                children: c,
                            }),
                            null != r
                                ? (0, i.jsxs)(a.DUT, {
                                      className: u[p],
                                      onClick: (e) => {
                                          e.stopPropagation(), null != r && r(e);
                                      },
                                      children: [
                                          (0, i.jsx)("div", {
                                              className: o.ly,
                                          }),
                                          (0, i.jsx)(a.abt, {
                                              size: "md",
                                              color: "currentColor",
                                              className: o.z3,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    };
(d.DropdownSizes = c), (d.Sizes = l.$n.Sizes), (d.Colors = l.$n.Colors), (d.Looks = l.$n.Looks);
let p = d;
