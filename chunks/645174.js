n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(685578),
    l = n(887490),
    c = n(299477);
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
function _(e, t) {
    let { attributes: n, children: i, element: a } = t;
    return "gameMentionInput" === a.type
        ? (0, r.jsx)(m, {
              attributes: n,
              element: a,
              children: i,
          })
        : null;
}
let m = (e) => {
    let { element: t, attributes: n, children: a } = e,
        u = (0, s.vt)(),
        f = (0, s.UE)(),
        _ = (0, s._7)(),
        m = o()(c.inlineElement, c.optionPill, c.gameMention, {
            [c.selectedPill]: f && u,
            [c.erroredPill]: t.error,
        }),
        h = i.useCallback(() => {
            l.bN.isVoid(_, t);
        }, [_, t]),
        g = (0, r.jsx)("span", {
            className: c.optionPillValue,
            children: a,
        });
    return (0, r.jsxs)(
        "span",
        p(d({}, n), {
            className: m,
            children: [
                (0, r.jsxs)("span", {
                    className: c.optionPillKey,
                    contentEditable: !1,
                    onClick: h,
                    children: ["@game", "\u200B"],
                }),
                g,
                (0, r.jsx)("span", {
                    contentEditable: !1,
                    children: "\u200B",
                }),
            ],
        }),
    );
};
