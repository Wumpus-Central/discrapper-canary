n.d(e, {
    $l: () => T,
    CB: () => O,
    Em: () => y,
    J9: () => b,
    ON: () => A,
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
    ax: () => g,
    k4: () => E,
    m7: () => o,
    qs: () => I,
    so: () => s,
    vB: () => a,
    wf: () => c,
    x1: () => d,
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
function d(t, e) {
    return u(t, i.Jq.PANE, e);
}
function E(t, e) {
    return u(t, i.Jq.CATEGORY, e);
}
function O(t, e) {
    return u(t, i.Jq.ACCORDION, e);
}
function T(t, e) {
    return u(t, i.Jq.LIST, e);
}
function S(t, e, n) {
    return r(l({}, n), {
        key: t,
        type: e,
    });
}
function g(t, e) {
    return S(t, i.Jq.BUTTON, e);
}
function I(t, e) {
    return S(t, i.Jq.TOGGLE, e);
}
function y(t, e) {
    return S(t, i.Jq.SELECT, e);
}
function b(t, e) {
    return S(t, i.Jq.RADIO, e);
}
function A(t, e) {
    return S(t, i.Jq.CUSTOM, e);
}
