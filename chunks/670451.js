n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(28664),
    o = n(481060),
    s = n(386019),
    l = n(388032),
    c = n(704543);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        s.Z,
        p(d({}, e), {
            targetElementRef: t,
            children: (e) =>
                (0, r.jsx)(a.u, {
                    targetElementRef: t,
                    text: l.intl.string(l.t["UKOtz+"]),
                    "aria-label": !1,
                    children: (0, r.jsx)(
                        o.P3F,
                        p(d({}, e), {
                            innerRef: t,
                            "aria-label": l.intl.string(l.t["UKOtz+"]),
                            onClick: (t) => {
                                t.stopPropagation(), e.onClick(t);
                            },
                            onContextMenu: (t) => {
                                t.preventDefault(), e.onClick(t);
                            },
                            className: c.contextMenu,
                            children: (0, r.jsx)(o.xhG, {
                                color: o.TVs.colors.INTERACTIVE_TEXT_DEFAULT,
                                size: "xs",
                            }),
                        }),
                    ),
                }),
        }),
    );
}
