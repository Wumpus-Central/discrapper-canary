n.d(t, { Z: () => d });
var r = n(951288),
    s = n(647438),
    a = n(866442),
    o = n(481060),
    i = n(188764);
function l(e) {
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
        p = s.useRef(null);
    return (0, r.jsx)(o.gNt, {
        label: u,
        children: (0, r.jsx)(o.yRy, {
            targetElementRef: p,
            renderPopout: (e) =>
                (0, r.jsx)(
                    o.Z$W,
                    c(l({}, e), {
                        value: n,
                        onChange: (e) => d(t, (0, a.Rf)(e)),
                    }),
                ),
            children: (e) =>
                (0, r.jsx)(
                    o.P3F,
                    c(l({}, e), {
                        innerRef: p,
                        tag: "span",
                        "aria-label": "Select a color",
                        className: i.swatchContainer,
                        style: { backgroundColor: n },
                        children: (0, r.jsx)(o.ilE, {
                            size: "xs",
                            color: "currentColor",
                            className: i.swatchIcon,
                        }),
                    }),
                ),
        }),
    });
};
