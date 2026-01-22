n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(235986),
    o = n(460404);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
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

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
var _ = (function (e) {
    return (e.SMALL = "SMALL"), (e.MEDIUM = "MEDIUM"), (e.LARGE = "LARGE"), e;
})(_ || {});
let h = {
        SMALL: o.rA,
        MEDIUM: o.Bx,
        LARGE: o.bU,
    },
    m = (e) => {
        let { onDropdownClick: t, children: n, contentClassName: l, dropdownSize: u = "MEDIUM" } = e,
            p = f(e, ["onDropdownClick", "children", "contentClassName", "dropdownSize"]);
        return (0, r.jsx)(
            i.$n,
            d(c({}, p), {
                children: (0, r.jsxs)(s.A, {
                    align: s.A.Align.CENTER,
                    children: [
                        (0, r.jsx)(s.A.Child, {
                            className: l,
                            children: n,
                        }),
                        null != t
                            ? (0, r.jsxs)(a.DUT, {
                                  className: h[u],
                                  onClick: (e) => {
                                      e.stopPropagation(), null != t && t(e);
                                  },
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: o.ly,
                                      }),
                                      (0, r.jsx)(a.abt, {
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
        );
    };
(m.DropdownSizes = _), (m.Sizes = i.$n.Sizes), (m.Colors = i.$n.Colors), (m.Looks = i.$n.Looks);
let g = m;
