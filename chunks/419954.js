n.d(t, {
    AK: () => S,
    D1: () => A,
    E2: () => j,
    FW: () => h,
    Hn: () => I,
    Hr: () => o,
    Qx: () => T,
    Tf: () => x,
    WI: () => c,
    bd: () => g,
    dT: () => _,
    gN: () => f,
    hl: () => s,
    i4: () => d,
    sN: () => C,
    t_: () => u,
    v_: () => E,
    zC: () => p,
    zD: () => O,
    zZ: () => m,
}),
    n(896048),
    n(65821);
var r = n(963935);

function i(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function s(e) {
    return (function e(t) {
        if ("buildLayout" in t && "function" == typeof t.buildLayout) {
            let n = t.buildLayout().map(e),
                { buildLayout: r } = t,
                s = l(
                    i(
                        {},
                        (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i,
                                l = {};
                            if ("u" > typeof Reflect && Reflect.ownKeys) {
                                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                                    (r = n[i]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (l[r] = e[r]);
                                return l;
                            }
                            if (
                                ((l = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        r,
                                        i = {},
                                        l = Object.getOwnPropertyNames(e);
                                    for (r = 0; r < l.length; r++)
                                        (n = l[r]),
                                            !(t.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                (i[n] = e[n]);
                                    return i;
                                })(e, t)),
                                Object.getOwnPropertySymbols)
                            )
                                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                                    (r = n[i]),
                                        !(t.indexOf(r) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                                            (l[r] = e[r]);
                            return l;
                        })(t, ["buildLayout"]),
                    ),
                    {
                        layout: n,
                    },
                );
            return n.forEach((e) => (e.parent = s)), s;
        }
        return t;
    })(e);
}

function a(e, t, n) {
    return l(i({}, n), {
        key: e,
        type: t,
    });
}

function o(e) {
    return a("$Root", r.Z6.ROOT, e);
}

function c(e, t) {
    return a(e, r.Z6.SECTION, t);
}

function d(e, t) {
    return a(e, r.Z6.SIDEBAR_ITEM, t);
}

function u(e, t) {
    return a(e, r.Z6.PANEL, t);
}

function _(e, t) {
    return a(e, r.Z6.TAB_ITEM, t);
}

function p(e, t) {
    return a(e, r.Z6.SPLIT, t);
}

function m(e, t) {
    return a(e, r.Z6.CATEGORY, t);
}

function g(e, t) {
    return a(e, r.Z6.ACCORDION, t);
}

function A(e, t) {
    return a(e, r.Z6.LIST, t);
}

function f(e, t) {
    return a(e, r.Z6.RELATED, t);
}

function h(e, t) {
    return a(e, r.Z6.FIELD_SET, t);
}

function b(e, t, n) {
    return l(i({}, n), {
        key: e,
        type: t,
    });
}

function E(e, t) {
    return b(e, r.Z6.STATIC, t);
}

function x(e, t) {
    return b(e, r.Z6.BUTTON, t);
}

function O(e, t) {
    return b(e, r.Z6.TOGGLE, t);
}

function C(e, t) {
    return b(e, r.Z6.SLIDER, t);
}

function I(e, t) {
    return b(e, r.Z6.SELECT, t);
}

function T(e, t) {
    return b(e, r.Z6.RADIO, t);
}

function S(e, t) {
    return b(e, r.Z6.NAVIGATOR, t);
}

function j(e, t) {
    return b(e, r.Z6.CUSTOM, t);
}
