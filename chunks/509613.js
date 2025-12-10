n.d(t, {
    $l: () => v,
    CB: () => O,
    Em: () => P,
    IC: () => b,
    J9: () => R,
    ON: () => w,
    Ql: () => f,
    UO: () => N,
    US: () => S,
    Uc: () => I,
    ax: () => C,
    eD: () => D,
    k4: () => y,
    m7: () => h,
    qs: () => A,
    so: () => _,
    vB: () => m,
    wf: () => g,
    x1: () => E,
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
function d(e) {
    if (u(e)) {
        let t = e.buildLayout().map((e) => d(e)),
            { buildLayout: n } = e,
            r = s(a({}, l(e, ["buildLayout"])), { layout: t });
        return t.forEach((e) => (e.parent = r)), r;
    }
    return e;
}
function f(e) {
    return d(e);
}
function p(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function _(e) {
    return p("$Root", r.Jq.ROOT, e);
}
function m(e, t) {
    return p(e, r.Jq.SECTION, t);
}
function h(e, t) {
    return p(e, r.Jq.SIDEBAR_ITEM, t);
}
function g(e, t) {
    return p(e, r.Jq.PANEL, t);
}
function E(e, t) {
    return p(e, r.Jq.PANE, t);
}
function b(e, t) {
    return p(e, r.Jq.SPLIT, t);
}
function y(e, t) {
    return p(e, r.Jq.CATEGORY, t);
}
function O(e, t) {
    return p(e, r.Jq.ACCORDION, t);
}
function v(e, t) {
    return p(e, r.Jq.LIST, t);
}
function S(e, t) {
    return p(e, r.Jq.RELATED, t);
}
function I(e, t) {
    return p(e, r.Jq.FIELD_SET, t);
}
function T(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function C(e, t) {
    return T(e, r.Jq.BUTTON, t);
}
function A(e, t) {
    return T(e, r.Jq.TOGGLE, t);
}
function N(e, t) {
    return T(e, r.Jq.SLIDER, t);
}
function P(e, t) {
    return T(e, r.Jq.SELECT, t);
}
function R(e, t) {
    return T(e, r.Jq.RADIO, t);
}
function D(e, t) {
    return T(e, r.Jq.NAVIGATOR, t);
}
function w(e, t) {
    return T(e, r.Jq.CUSTOM, t);
}
