n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(685578),
    s = n(953782);
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
    let { attributes: n, children: i, element: a } = t;
    return "timestampMentionInput" === a.type
        ? (0, r.jsx)(_, {
              attributes: n,
              element: a,
              children: i,
          })
        : null;
}
let _ = (e) => {
    let { element: t, attributes: n, children: i } = e,
        l = (0, o.vt)(),
        u = (0, o.UE)(),
        f = a()(s.inlineElement, s.optionPill, s.timestampMention, {
            [s.selectedPill]: u && l,
            [s.erroredPill]: t.error,
        }),
        _ = (0, r.jsx)("span", {
            className: s.optionPillValue,
            children: i,
        });
    return (0, r.jsxs)(
        "span",
        d(c({}, n), {
            className: f,
            children: [
                (0, r.jsxs)("span", {
                    className: s.optionPillKey,
                    contentEditable: !1,
                    children: ["@time", "\u200B"],
                }),
                _,
                (0, r.jsx)("span", {
                    contentEditable: !1,
                    children: "\u200B",
                }),
            ],
        }),
    );
};
