n.d(e, {
    $l: () => O,
    CB: () => T,
    Em: () => f,
    IC: () => d,
    J9: () => b,
    ON: () => L,
    Ql: () =>
        function t(e, n) {
            if ("function" == typeof (null == e ? void 0 : e.buildLayout)) {
                let n = e.buildLayout().map((e) => t(e)),
                    { buildLayout: i } = e,
                    u = r(
                        l(
                            {},
                            (function (t, e) {
                                if (null == t) return {};
                                var n,
                                    i,
                                    l = (function (t, e) {
                                        if (null == t) return {};
                                        var n,
                                            i,
                                            l = {},
                                            r = Object.keys(t);
                                        for (i = 0; i < r.length; i++) (n = r[i]), e.indexOf(n) >= 0 || (l[n] = t[n]);
                                        return l;
                                    })(t, e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(t);
                                    for (i = 0; i < r.length; i++)
                                        (n = r[i]),
                                            !(e.indexOf(n) >= 0) &&
                                                Object.prototype.propertyIsEnumerable.call(t, n) &&
                                                (l[n] = t[n]);
                                }
                                return l;
                            })(e, ["buildLayout"]),
                        ),
                        { layout: n },
                    );
                return n.forEach((t) => (t.parent = u)), u;
            }
            return e;
        },
    UO: () => N,
    Uc: () => g,
    ax: () => _,
    k4: () => S,
    m7: () => o,
    qs: () => A,
    so: () => s,
    vB: () => a,
    wf: () => c,
    x1: () => E,
}),
    n(388685),
    n(415506);
var i = n(28682);
function l(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }),
            )),
            i.forEach(function (e) {
                var i;
                (i = n[e]),
                    e in t
                        ? Object.defineProperty(t, e, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (t[e] = i);
            });
    }
    return t;
}
function r(t, e) {
    return (
        (e = null != e ? e : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                  var n = Object.keys(t);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(e)).forEach(function (n) {
                  Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
              }),
        t
    );
}
function u(t, e, n) {
    return r(l({}, n), {
        key: t,
        type: e,
    });
}
function s(t) {
    return u("$Root", i.Jq.ROOT, t);
}
function a(t, e) {
    return u(t, i.Jq.SECTION, e);
}
function o(t, e) {
    return u(t, i.Jq.SIDEBAR_ITEM, e);
}
function c(t, e) {
    return u(t, i.Jq.PANEL, e);
}
function E(t, e) {
    return u(t, i.Jq.PANE, e);
}
function d(t, e) {
    return u(t, i.Jq.SPLIT, e);
}
function S(t, e) {
    return u(t, i.Jq.CATEGORY, e);
}
function T(t, e) {
    return u(t, i.Jq.ACCORDION, e);
}
function O(t, e) {
    return u(t, i.Jq.LIST, e);
}
function g(t, e) {
    return u(t, i.Jq.FIELD_SET, e);
}
function I(t, e, n) {
    return r(l({}, n), {
        key: t,
        type: e,
    });
}
function _(t, e) {
    return I(t, i.Jq.BUTTON, e);
}
function A(t, e) {
    return I(t, i.Jq.TOGGLE, e);
}
function N(t, e) {
    return I(t, i.Jq.SLIDER, e);
}
function f(t, e) {
    return I(t, i.Jq.SELECT, e);
}
function b(t, e) {
    return I(t, i.Jq.RADIO, e);
}
function L(t, e) {
    return I(t, i.Jq.CUSTOM, e);
}
