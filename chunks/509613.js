n.d(t, {
    $l: () => O,
    CB: () => y,
    Em: () => N,
    IC: () => E,
    J9: () => P,
    ON: () => D,
    Ql: () => d,
    UO: () => C,
    US: () => v,
    Uc: () => S,
    ax: () => T,
    eD: () => R,
    k4: () => b,
    m7: () => m,
    qs: () => A,
    so: () => p,
    vB: () => _,
    wf: () => h,
    x1: () => g,
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
    return "function" == typeof (null == e ? void 0 : e.buildLayout);
}
function d(e, t) {
    if (u(e)) {
        let t = e.buildLayout().map((e) => d(e)),
            { buildLayout: n } = e,
            r = s(a({}, l(e, ["buildLayout"])), { layout: t });
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
function p(e) {
    return f("$Root", r.J.ROOT, e);
}
function _(e, t) {
    return f(e, r.J.SECTION, t);
}
function m(e, t) {
    return f(e, r.J.SIDEBAR_ITEM, t);
}
function h(e, t) {
    return f(e, r.J.PANEL, t);
}
function g(e, t) {
    return f(e, r.J.PANE, t);
}
function E(e, t) {
    return f(e, r.J.SPLIT, t);
}
function b(e, t) {
    return f(e, r.J.CATEGORY, t);
}
function y(e, t) {
    return f(e, r.J.ACCORDION, t);
}
function O(e, t) {
    return f(e, r.J.LIST, t);
}
function v(e, t) {
    return f(e, r.J.RELATED, t);
}
function S(e, t) {
    return f(e, r.J.FIELD_SET, t);
}
function I(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function T(e, t) {
    return I(e, r.J.BUTTON, t);
}
function A(e, t) {
    return I(e, r.J.TOGGLE, t);
}
function C(e, t) {
    return I(e, r.J.SLIDER, t);
}
function N(e, t) {
    return I(e, r.J.SELECT, t);
}
function P(e, t) {
    return I(e, r.J.RADIO, t);
}
function R(e, t) {
    return I(e, r.J.NAVIGATOR, t);
}
function D(e, t) {
    return I(e, r.J.CUSTOM, t);
}
