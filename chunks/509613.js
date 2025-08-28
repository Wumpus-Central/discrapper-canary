n.d(t, {
    $l: () => b,
    CB: () => E,
    Em: () => I,
    J9: () => T,
    ON: () => S,
    Ql: () => d,
    ax: () => O,
    k4: () => g,
    qs: () => v,
    so: () => _,
    vB: () => p,
    wf: () => h,
    x1: () => m,
}),
    n(388685),
    n(415506);
var r = n(28682);
function i(e, t, n) {
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
function a(e) {
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
                i(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
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
function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    return "function" == typeof (null == e ? void 0 : e.getLayout);
}
function d(e, t) {
    if (u(e)) {
        let t = e.getLayout().map((e) => d(e)),
            { getLayout: n } = e,
            r = s(a({}, l(e, ["getLayout"])), { layout: t });
        return t.forEach((e) => (e.parent = r)), r;
    }
    return e;
}
function f(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function _(e) {
    return f("$Root", r.J.ROOT, e);
}
function p(e, t) {
    return f(e, r.J.SECTION, t);
}
function h(e, t) {
    return f(e, r.J.PANEL, t);
}
function m(e, t) {
    return f(e, r.J.PANE, t);
}
function g(e, t) {
    return f(e, r.J.CATEGORY, t);
}
function E(e, t) {
    return f(e, r.J.ACCORDION, t);
}
function b(e, t) {
    return f(e, r.J.LIST, t);
}
function y(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function O(e, t) {
    return y(e, r.J.BUTTON, t);
}
function v(e, t) {
    return y(e, r.J.TOGGLE, t);
}
function I(e, t) {
    return y(e, r.J.SELECT, t);
}
function T(e, t) {
    return y(e, r.J.RADIO, t);
}
function S(e, t) {
    return y(e, r.J.CUSTOM, t);
}
