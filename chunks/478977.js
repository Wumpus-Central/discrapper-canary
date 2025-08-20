n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(866442),
    o = n(481060),
    s = n(301188);
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
let f = function (e) {
    let { colorKey: t, value: n, onChange: l, title: u } = e,
        f = i.useRef(null);
    return (0, r.jsxs)(o.xJW, {
        children: [
            (0, r.jsx)(o.vwX, {
                tag: o.RB0.H5,
                children: u,
            }),
            (0, r.jsx)(o.yRy, {
                targetElementRef: f,
                renderPopout: (e) =>
                    (0, r.jsx)(
                        o.Z$W,
                        d(c({}, e), {
                            value: n,
                            onChange: (e) => l(t, (0, a.Rf)(e)),
                        }),
                    ),
                children: (e) =>
                    (0, r.jsx)(
                        o.P3F,
                        d(c({}, e), {
                            innerRef: f,
                            tag: "span",
                            "aria-label": "Select a color",
                            className: s.swatchContainer,
                            style: { backgroundColor: n },
                            children: (0, r.jsx)(o.ilE, {
                                size: "xs",
                                color: "currentColor",
                                className: s.swatchIcon,
                            }),
                        }),
                    ),
            }),
        ],
    });
};
