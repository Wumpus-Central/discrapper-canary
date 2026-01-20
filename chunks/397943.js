n.d(t, { M: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(563040);
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = f(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var { value: t, onChange: n, hideValue: s, disabled: c = !1 } = e,
        f = d(e, ["value", "onChange", "hideValue", "disabled"]);
    let p = i.useMemo(() => new o.tR(), []),
        [_, h] = i.useState("");
    function m(e) {
        null != t && n((0, o.rK)(t, p.selectValue(e)));
    }
    function g(e) {
        if ("Enter" === e.key) {
            let e = (0, o.tj)(t, _);
            null != e && m(e);
        }
    }
    return (0, r.jsx)(
        a.VcW,
        u(l({}, f), {
            selectionMode: "single",
            options: p.getOptions(_),
            value: s ? void 0 : p.lookupByValue(t),
            onSelectionChange: m,
            disabled: c,
            onQueryChange: (e) => h(e.target.value),
            onKeyDown: g,
        }),
    );
}
