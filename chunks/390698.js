n.d(t, { U: () => _ });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(863577);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(o.ua7, {
              tooltipClassName: l.partiallyOwnedDisclaimer,
              position: "top",
              align: "left",
              text: s.intl.string(s.t.y1VWkZ),
              children: (e) =>
                  (0, r.jsxs)(
                      "div",
                      f(u({ className: a()(l.partialOwnStateContainer, t) }, e), {
                          children: [
                              (0, r.jsx)("span", {
                                  className: l.iconWrapper,
                                  children: (0, r.jsx)(o.d3s, {
                                      size: "md",
                                      color: "currentColor",
                                      className: l.infoIcon,
                                  }),
                              }),
                              (0, r.jsx)(o.Text, {
                                  variant: "text-md/semibold",
                                  children: s.intl.string(s.t.BEjTio),
                              }),
                          ],
                      }),
                  ),
          })
        : (0, r.jsx)(o.Text, {
              variant: "text-md/semibold",
              className: t,
              children: s.intl.string(s.t["6cfuDg"]),
          });
};
