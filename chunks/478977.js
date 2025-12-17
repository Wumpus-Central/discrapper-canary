n.d(t, { Z: () => d });
var a = n(54381),
    r = n(473749),
    l = n(866442),
    i = n(481060),
    s = n(607814);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = function (e) {
    let { colorKey: t, value: n, onChange: d, title: u } = e,
        m = r.useRef(null);
    return (0, a.jsx)(i.gNt, {
        label: u,
        children: (0, a.jsx)(i.yRy, {
            targetElementRef: m,
            renderPopout: (e) =>
                (0, a.jsx)(
                    i.Z$W,
                    c(o({}, e), {
                        value: n,
                        onChange: (e) => d(t, (0, l.Rf)(e)),
                    }),
                ),
            children: (e) =>
                (0, a.jsx)(
                    i.P3F,
                    c(o({}, e), {
                        innerRef: m,
                        tag: "span",
                        "aria-label": "Select a color",
                        className: s.swatchContainer,
                        style: { backgroundColor: n },
                        children: (0, a.jsx)(i.ilE, {
                            size: "xs",
                            color: "currentColor",
                            className: s.swatchIcon,
                        }),
                    }),
                ),
        }),
    });
};
