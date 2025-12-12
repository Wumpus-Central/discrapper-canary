n.d(t, {
    $l: () => O,
    CB: () => y,
    Em: () => N,
    IC: () => E,
    J9: () => P,
    ON: () => w,
    Ql: () => f,
    UO: () => A,
    US: () => v,
    Uc: () => S,
    ax: () => T,
    eD: () => R,
    k4: () => b,
    m7: () => h,
    qs: () => C,
    so: () => _,
    vB: () => m,
    wf: () => g,
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
    return "buildLayout" in e && "function" == typeof e.buildLayout;
}
function d(e) {
    if (u(e)) {
        let t = e.buildLayout().map(d),
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
    return p(e, r.Jq.SPLIT, t);
}
function b(e, t) {
    return p(e, r.Jq.CATEGORY, t);
}
function y(e, t) {
    return p(e, r.Jq.ACCORDION, t);
}
function O(e, t) {
    return p(e, r.Jq.LIST, t);
}
function v(e, t) {
    return p(e, r.Jq.RELATED, t);
}
function S(e, t) {
    return p(e, r.Jq.FIELD_SET, t);
}
function I(e, t, n) {
    return s(a({}, n), {
        key: e,
        type: t,
    });
}
function T(e, t) {
    return I(e, r.Jq.BUTTON, t);
}
function C(e, t) {
    return I(e, r.Jq.TOGGLE, t);
}
function A(e, t) {
    return I(e, r.Jq.SLIDER, t);
}
function N(e, t) {
    return I(e, r.Jq.SELECT, t);
}
function P(e, t) {
    return I(e, r.Jq.RADIO, t);
}
function R(e, t) {
    return I(e, r.Jq.NAVIGATOR, t);
}
function w(e, t) {
    return I(e, r.Jq.CUSTOM, t);
}
