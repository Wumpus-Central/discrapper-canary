s.d(t, { Z: () => u });
var n = s(951288),
    r = s(647438),
    a = s(866442),
    i = s(481060),
    l = s(188764);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(s);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = s[t]),
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, n);
                  }
                  return s;
              })(Object(t)).forEach(function (s) {
                  Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(t, s));
              }),
        e
    );
}
let u = function (e) {
    let { colorKey: t, value: s, onChange: u, title: d } = e,
        g = r.useRef(null);
    return (0, n.jsxs)(i.xJW, {
        children: [
            (0, n.jsx)(i.vwX, { children: d }),
            (0, n.jsx)(i.yRy, {
                targetElementRef: g,
                renderPopout: (e) =>
                    (0, n.jsx)(
                        i.Z$W,
                        c(o({}, e), {
                            value: s,
                            onChange: (e) => u(t, (0, a.Rf)(e)),
                        }),
                    ),
                children: (e) =>
                    (0, n.jsx)(
                        i.P3F,
                        c(o({}, e), {
                            innerRef: g,
                            tag: "span",
                            "aria-label": "Select a color",
                            className: l.swatchContainer,
                            style: { backgroundColor: s },
                            children: (0, n.jsx)(i.ilE, {
                                size: "xs",
                                color: "currentColor",
                                className: l.swatchIcon,
                            }),
                        }),
                    ),
            }),
        ],
    });
};
