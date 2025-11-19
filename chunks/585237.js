n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(755721),
    a = n(481060),
    o = n(600164),
    s = n(353965);
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
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var p = (function (e) {
    return (e.SMALL = "SMALL"), (e.MEDIUM = "MEDIUM"), (e.LARGE = "LARGE"), e;
})(p || {});
let h = {
        SMALL: s.dropdownSmall,
        MEDIUM: s.dropdownMedium,
        LARGE: s.dropdownLarge,
    },
    m = (e) => {
        var { onDropdownClick: t, children: n, contentClassName: l, dropdownSize: u = "MEDIUM" } = e,
            _ = f(e, ["onDropdownClick", "children", "contentClassName", "dropdownSize"]);
        return (0, r.jsx)(
            i.zx,
            d(c({}, _), {
                children: (0, r.jsxs)(o.Z, {
                    align: o.Z.Align.CENTER,
                    children: [
                        (0, r.jsx)(o.Z.Child, {
                            className: l,
                            children: n,
                        }),
                        null != t
                            ? (0, r.jsxs)(a.P3F, {
                                  className: h[u],
                                  onClick: (e) => {
                                      e.stopPropagation(), null != t && t(e);
                                  },
                                  children: [
                                      (0, r.jsx)("div", { className: s.arrowSeparator }),
                                      (0, r.jsx)(a.CJ0, {
                                          size: "md",
                                          color: "currentColor",
                                          className: s.dropdownArrow,
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            }),
        );
    };
(m.DropdownSizes = p), (m.Sizes = i.zx.Sizes), (m.Colors = i.zx.Colors), (m.Looks = i.zx.Looks);
let g = m;
