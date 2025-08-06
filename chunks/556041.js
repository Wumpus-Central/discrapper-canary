n.d(t, { Z: () => _ }), n(953529);
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(600164),
    a = n(245315),
    s = n(388032),
    l = n(49791);
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
let _ = () =>
    (0, r.jsxs)(o.Z, {
        align: o.Z.Align.CENTER,
        justify: o.Z.Justify.CENTER,
        direction: o.Z.Direction.VERTICAL,
        className: l.popout,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: (0, a.QA)(),
                className: l.avatar,
            }),
            (0, r.jsxs)(o.Z, {
                align: o.Z.Align.CENTER,
                justify: o.Z.Justify.CENTER,
                className: l.nameWrapper,
                children: [
                    (0, r.jsx)(i.ua7, {
                        text: s.intl.string(s.t.oMx98P),
                        children: (e) => (0, r.jsx)("div", f(u({}, e), { className: l.staffBadge })),
                    }),
                    (0, r.jsx)(i.X6q, {
                        className: l.header,
                        variant: "heading-md/semibold",
                        children: s.intl.string(s.t.xfAlNz),
                    }),
                ],
            }),
            (0, r.jsx)(i.Text, {
                className: l.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: s.intl.string(s.t.BUZ0sr),
            }),
            (0, r.jsx)(i.Text, {
                className: l.description,
                color: "header-secondary",
                variant: "text-sm/normal",
                children: s.intl.string(s.t.w5beJC),
            }),
        ],
    });
