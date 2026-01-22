n.d(t, {
    AK: () => D,
    D1: () => A,
    E2: () => x,
    FW: () => S,
    Hn: () => w,
    Hr: () => _,
    Qx: () => P,
    Tf: () => C,
    WI: () => h,
    bd: () => O,
    dT: () => E,
    gN: () => v,
    hl: () => f,
    i4: () => m,
    sN: () => R,
    t_: () => g,
    v_: () => T,
    zC: () => b,
    zD: () => N,
    zZ: () => y,
}),
    n(896048),
    n(65821);
var r = n(963935);
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
function s(e, t) {
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
function o(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
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
    return "buildLayout" in e && "function" == typeof e.buildLayout;
}
function d(e) {
    if (u(e)) {
        let t = e.buildLayout().map(d),
            { buildLayout: n } = e,
            r = o(a({}, l(e, ["buildLayout"])), { layout: t });
        return t.forEach((e) => (e.parent = r)), r;
    }
    return e;
}
function f(e) {
    return d(e);
}
function p(e, t, n) {
    return o(a({}, n), {
        key: e,
        type: t,
    });
}
function _(e) {
    return p("$Root", r.Z6.ROOT, e);
}
function h(e, t) {
    return p(e, r.Z6.SECTION, t);
}
function m(e, t) {
    return p(e, r.Z6.SIDEBAR_ITEM, t);
}
function g(e, t) {
    return p(e, r.Z6.PANEL, t);
}
function E(e, t) {
    return p(e, r.Z6.TAB_ITEM, t);
}
function b(e, t) {
    return p(e, r.Z6.SPLIT, t);
}
function y(e, t) {
    return p(e, r.Z6.CATEGORY, t);
}
function O(e, t) {
    return p(e, r.Z6.ACCORDION, t);
}
function A(e, t) {
    return p(e, r.Z6.LIST, t);
}
function v(e, t) {
    return p(e, r.Z6.RELATED, t);
}
function S(e, t) {
    return p(e, r.Z6.FIELD_SET, t);
}
function I(e, t, n) {
    return o(a({}, n), {
        key: e,
        type: t,
    });
}
function T(e, t) {
    return I(e, r.Z6.STATIC, t);
}
function C(e, t) {
    return I(e, r.Z6.BUTTON, t);
}
function N(e, t) {
    return I(e, r.Z6.TOGGLE, t);
}
function R(e, t) {
    return I(e, r.Z6.SLIDER, t);
}
function w(e, t) {
    return I(e, r.Z6.SELECT, t);
}
function P(e, t) {
    return I(e, r.Z6.RADIO, t);
}
function D(e, t) {
    return I(e, r.Z6.NAVIGATOR, t);
}
function x(e, t) {
    return I(e, r.Z6.CUSTOM, t);
}
