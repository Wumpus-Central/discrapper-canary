n.d(t, {
    Ay: () => f,
});
var r = n(627968);
n(64700);
var i = n(435371),
    a = n(397927);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = c(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function u(e) {
    let { value: t, onChange: n, note: i, title: s, disabled: o } = e;
    return (0, r.jsx)(a.dOG, {
        checked: t,
        onChange: n,
        disabled: o,
        label: s,
        description: i,
    });
}

function d(e) {
    let { tooltipText: t } = e,
        n = l(e, ["tooltipText"]);
    return (0, r.jsx)(i.m_, {
        text: t,
        asContainer: !0,
        align: "right",
        caretConfig: {
            position: "bottom",
            align: "end",
        },
        children: (0, r.jsx)(u, o({}, n)),
    });
}

function f(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, r.jsx)(d, o({}, e)) : (0, r.jsx)(u, o({}, e));
}
