"use strict";
r.d(t, { d: () => ek });
var a = r(1139),
    n = r(299146);
function o(e, t) {
    if (null == e) return {};
    var r,
        a,
        o = (0, n.A)(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (a = 0; a < s.length; a++)
            (r = s[a]), -1 === t.indexOf(r) && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
    }
    return o;
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
var i = r(682465);
function l(e, t) {
    for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, (0, i.A)(a.key), a);
    }
}
function c(e, t, r) {
    return t && l(e.prototype, t), r && l(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var u = r(149859);
function f(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && (0, u.A)(e, t);
}
var b = r(491301),
    h = r(527758);
function d(e, t) {
    if (t && ("object" == (0, b.A)(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
    return (0, h.A)(e);
}
function p(e) {
    return (p = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
var m = r(416886);
function g(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function y(e, t) {
    if (e) {
        if ("string" == typeof e) return g(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? g(e, t)
                  : void 0
        );
    }
}
var v = r(64700),
    w = r(223108),
    M = r.n(w);
function k(e) {
    return (
        (function (e) {
            if (Array.isArray(e)) return g(e);
        })(e) ||
        (function (e) {
            if (("u" > typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
        })(e) ||
        y(e) ||
        (function () {
            throw TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var O = function (e) {
    var t = e.styling,
        r = e.arrowStyle,
        n = e.expanded,
        o = e.nodeType,
        s = e.onClick;
    return v.createElement(
        "div",
        (0, a.A)({}, t("arrowContainer", r), { onClick: s }),
        v.createElement(
            "div",
            t(["arrow", "arrowSign"], o, n, r),
            "\u25B6",
            "double" === r && v.createElement("div", t(["arrowSign", "arrowSignInner"]), "\u25B6"),
        ),
    );
};
function C(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function x(e, t, r) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
    if ("Object" === e) {
        var o = Object.getOwnPropertyNames(t);
        r && o.sort(!0 === r ? void 0 : r),
            (s = {
                entries: (o = o.slice(a, n + 1)).map(function (e) {
                    return { key: e, value: t[e] };
                }),
            });
    } else if ("Array" === e)
        s = {
            entries: t.slice(a, n + 1).map(function (e, t) {
                return { key: t + a, value: e };
            }),
        };
    else {
        var s,
            i,
            l = 0,
            c = [],
            u = !0,
            f = "function" == typeof t.set,
            b = (function (e) {
                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e) {
                            if (e) {
                                if ("string" == typeof e) return C(e, void 0);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return C(e, void 0);
                            }
                        })(e))
                    ) {
                        t && (e = t);
                        var r = 0,
                            a = function () {};
                        return {
                            s: a,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: a,
                        };
                    }
                    throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var n,
                    o = !0,
                    s = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (o = e.done), e;
                    },
                    e: function (e) {
                        (s = !0), (n = e);
                    },
                    f: function () {
                        try {
                            o || null == t.return || t.return();
                        } finally {
                            if (s) throw n;
                        }
                    },
                };
            })(t);
        try {
            for (b.s(); !(i = b.n()).done; ) {
                var h = i.value;
                if (l > n) {
                    u = !1;
                    break;
                }
                a <= l &&
                    (f && Array.isArray(h)
                        ? "string" == typeof h[0] || "number" == typeof h[0]
                            ? c.push({ key: h[0], value: h[1] })
                            : c.push({ key: "[entry ".concat(l, "]"), value: { "[key]": h[0], "[value]": h[1] } })
                        : c.push({ key: l, value: h })),
                    l++;
            }
        } catch (e) {
            b.e(e);
        } finally {
            b.f();
        }
        s = { hasMore: !u, entries: c };
    }
    return s;
}
function A(e, t, r) {
    for (var a = []; t - e > r * r; ) r *= r;
    for (var n = e; n <= t; n += r) a.push({ from: n, to: Math.min(t, n + r - 1) });
    return a;
}
(O.propTypes = {
    styling: M().func.isRequired,
    arrowStyle: M().oneOf(["single", "double"]),
    expanded: M().bool.isRequired,
    nodeType: M().string.isRequired,
    onClick: M().func.isRequired,
}),
    (O.defaultProps = { arrowStyle: "single" });
var E = (function (e) {
    f(n, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = p(n);
                return (
                    (e = t ? Reflect.construct(r, arguments, p(this).constructor) : r.apply(this, arguments)),
                    d(this, e)
                );
            });
    function n(e) {
        var t;
        return (
            s(this, n),
            (t = r.call(this, e)),
            (0, m.A)((0, h.A)(t), "handleClick", function () {
                t.setState({ expanded: !t.state.expanded });
            }),
            (t.state = { expanded: !1 }),
            t
        );
    }
    return (
        c(n, [
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.styling,
                        r = e.from,
                        n = e.to,
                        o = e.renderChildNodes,
                        s = e.nodeType;
                    return this.state.expanded
                        ? v.createElement("div", t("itemRange", this.state.expanded), o(this.props, r, n))
                        : v.createElement(
                              "div",
                              (0, a.A)({}, t("itemRange", this.state.expanded), { onClick: this.handleClick }),
                              v.createElement(O, {
                                  nodeType: s,
                                  styling: t,
                                  expanded: !1,
                                  onClick: this.handleClick,
                                  arrowStyle: "double",
                              }),
                              "".concat(r, " ... ").concat(n),
                          );
                },
            },
        ]),
        n
    );
})(v.Component);
function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? j(Object(r), !0).forEach(function (t) {
                  (0, m.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : j(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
function R(e) {
    return { expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level) };
}
(0, m.A)(E, "propTypes", {
    styling: M().func.isRequired,
    from: M().number.isRequired,
    to: M().number.isRequired,
    renderChildNodes: M().func.isRequired,
    nodeType: M().string.isRequired,
});
var S = (function (e) {
    f(n, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = p(n);
                return (
                    (e = t ? Reflect.construct(r, arguments, p(this).constructor) : r.apply(this, arguments)),
                    d(this, e)
                );
            });
    function n(e) {
        var t;
        return (
            s(this, n),
            (t = r.call(this, e)),
            (0, m.A)((0, h.A)(t), "handleClick", function () {
                t.props.expandable && t.setState({ expanded: !t.state.expanded });
            }),
            (t.state = R(e)),
            t
        );
    }
    return (
        c(n, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = R(e);
                    R(this.props).expanded !== t.expanded && this.setState(t);
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                    var r = this;
                    return (
                        !!Object.keys(e).find(function (t) {
                            return (
                                "circularCache" !== t &&
                                ("keyPath" === t ? e[t].join("/") !== r.props[t].join("/") : e[t] !== r.props[t])
                            );
                        }) || t.expanded !== this.state.expanded
                    );
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.getItemString,
                        r = e.nodeTypeIndicator,
                        n = e.nodeType,
                        o = e.data,
                        s = e.hideRoot,
                        i = e.createItemString,
                        l = e.styling,
                        c = e.collectionLimit,
                        u = e.keyPath,
                        f = e.labelRenderer,
                        b = e.expandable,
                        h = this.state.expanded,
                        d =
                            h || (s && 0 === this.props.level)
                                ? (function e(t, r, n) {
                                      var o = t.nodeType,
                                          s = t.data,
                                          i = t.collectionLimit,
                                          l = t.circularCache,
                                          c = t.keyPath,
                                          u = t.postprocessValue,
                                          f = t.sortObjectKeys,
                                          b = [];
                                      return (
                                          (function (e, t, r, a) {
                                              var n,
                                                  o =
                                                      arguments.length > 4 && void 0 !== arguments[4]
                                                          ? arguments[4]
                                                          : 0,
                                                  s =
                                                      arguments.length > 5 && void 0 !== arguments[5]
                                                          ? arguments[5]
                                                          : 1 / 0,
                                                  i = x.bind(null, e, t, r);
                                              if (!a) return i().entries;
                                              var l = s < 1 / 0,
                                                  c = Math.min(
                                                      s - o,
                                                      "Object" === e
                                                          ? Object.keys(t).length
                                                          : "Array" === e
                                                            ? t.length
                                                            : 1 / 0,
                                                  );
                                              if ("Iterable" !== e) {
                                                  if (c <= a || a < 7) return i(o, s).entries;
                                              } else if (c <= a && !l) return i(o, s).entries;
                                              if ("Iterable" === e) {
                                                  var u = i(o, o + a - 1),
                                                      f = u.hasMore,
                                                      b = u.entries;
                                                  n = f ? [].concat(k(b), k(A(o + a, o + 2 * a - 1, a))) : b;
                                              } else
                                                  n = l
                                                      ? A(o, s, a)
                                                      : [].concat(
                                                            k(i(0, a - 5).entries),
                                                            k(A(a - 4, c - 5, a)),
                                                            k(i(c - 4, c - 1).entries),
                                                        );
                                              return n;
                                          })(o, s, f, i, r, n).forEach(function (r) {
                                              if (void 0 !== r.to)
                                                  b.push(
                                                      v.createElement(
                                                          E,
                                                          (0, a.A)({}, t, {
                                                              key: "ItemRange--".concat(r.from, "-").concat(r.to),
                                                              from: r.from,
                                                              to: r.to,
                                                              renderChildNodes: e,
                                                          }),
                                                      ),
                                                  );
                                              else {
                                                  var n = r.key,
                                                      o = r.value,
                                                      s = -1 !== l.indexOf(o);
                                                  b.push(
                                                      v.createElement(
                                                          H,
                                                          (0, a.A)({}, t, {
                                                              postprocessValue: u,
                                                              collectionLimit: i,
                                                              key: "Node--".concat(n),
                                                              keyPath: [n].concat(k(c)),
                                                              value: u(o),
                                                              circularCache: [].concat(k(l), [o]),
                                                              isCircular: s,
                                                              hideRoot: !1,
                                                          }),
                                                      ),
                                                  );
                                              }
                                          }),
                                          b
                                      );
                                  })(_(_({}, this.props), {}, { level: this.props.level + 1 }))
                                : null,
                        p = t(n, o, v.createElement("span", l("nestedNodeItemType", h), r), i(o, c), u),
                        m = [u, n, h, b];
                    return s
                        ? v.createElement(
                              "li",
                              l.apply(void 0, ["rootNode"].concat(m)),
                              v.createElement("ul", l.apply(void 0, ["rootNodeChildren"].concat(m)), d),
                          )
                        : v.createElement(
                              "li",
                              l.apply(void 0, ["nestedNode"].concat(m)),
                              b &&
                                  v.createElement(O, {
                                      styling: l,
                                      nodeType: n,
                                      expanded: h,
                                      onClick: this.handleClick,
                                  }),
                              v.createElement(
                                  "label",
                                  (0, a.A)({}, l.apply(void 0, [["label", "nestedNodeLabel"]].concat(m)), {
                                      onClick: this.handleClick,
                                  }),
                                  f.apply(void 0, m),
                              ),
                              v.createElement(
                                  "span",
                                  (0, a.A)({}, l.apply(void 0, ["nestedNodeItemString"].concat(m)), {
                                      onClick: this.handleClick,
                                  }),
                                  p,
                              ),
                              v.createElement("ul", l.apply(void 0, ["nestedNodeChildren"].concat(m)), d),
                          );
                },
            },
        ]),
        n
    );
})(v.Component);
(0, m.A)(S, "propTypes", {
    getItemString: M().func.isRequired,
    nodeTypeIndicator: M().any,
    nodeType: M().string.isRequired,
    data: M().any,
    hideRoot: M().bool.isRequired,
    createItemString: M().func.isRequired,
    styling: M().func.isRequired,
    collectionLimit: M().number,
    keyPath: M().arrayOf(M().oneOfType([M().string, M().number])).isRequired,
    labelRenderer: M().func.isRequired,
    shouldExpandNode: M().func,
    level: M().number.isRequired,
    sortObjectKeys: M().oneOfType([M().func, M().bool]),
    isCircular: M().bool,
    expandable: M().bool,
}),
    (0, m.A)(S, "defaultProps", { data: [], circularCache: [], level: 0, expandable: !0 });
var B = ["data"];
function N(e) {
    var t = Object.getOwnPropertyNames(e).length;
    return "".concat(t, " ").concat(1 !== t ? "keys" : "key");
}
var P = function (e) {
    var t = e.data,
        r = o(e, B);
    return v.createElement(
        S,
        (0, a.A)({}, r, {
            data: t,
            nodeType: "Object",
            nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
            createItemString: N,
            expandable: Object.getOwnPropertyNames(t).length > 0,
        }),
    );
};
P.propTypes = { data: M().object, nodeType: M().string.isRequired };
var D = ["data"];
function I(e) {
    return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item");
}
var L = function (e) {
    var t = e.data,
        r = o(e, D);
    return v.createElement(
        S,
        (0, a.A)({}, r, {
            data: t,
            nodeType: "Array",
            nodeTypeIndicator: "[]",
            createItemString: I,
            expandable: t.length > 0,
        }),
    );
};
function T(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function F(e, t) {
    var r = 0,
        a = !1;
    if (Number.isSafeInteger(e.size)) r = e.size;
    else {
        var n,
            o = (function (e) {
                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e) {
                            if (e) {
                                if ("string" == typeof e) return T(e, void 0);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return T(e, void 0);
                            }
                        })(e))
                    ) {
                        t && (e = t);
                        var r = 0,
                            a = function () {};
                        return {
                            s: a,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: a,
                        };
                    }
                    throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var n,
                    o = !0,
                    s = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (o = e.done), e;
                    },
                    e: function (e) {
                        (s = !0), (n = e);
                    },
                    f: function () {
                        try {
                            o || null == t.return || t.return();
                        } finally {
                            if (s) throw n;
                        }
                    },
                };
            })(e);
        try {
            for (o.s(); !(n = o.n()).done; ) {
                if ((n.value, t && r + 1 > t)) {
                    a = !0;
                    break;
                }
                r += 1;
            }
        } catch (e) {
            o.e(e);
        } finally {
            o.f();
        }
    }
    return ""
        .concat(a ? ">" : "")
        .concat(r, " ")
        .concat(1 !== r ? "entries" : "entry");
}
L.propTypes = { data: M().array };
let z = function (e) {
    var t = (0, a.A)({}, e);
    return v.createElement(S, (0, a.A)({}, t, { nodeType: "Iterable", nodeTypeIndicator: "()", createItemString: F }));
};
var q = function (e) {
    var t = e.nodeType,
        r = e.styling,
        a = e.labelRenderer,
        n = e.keyPath,
        o = e.valueRenderer,
        s = e.value,
        i = e.valueGetter;
    return v.createElement(
        "li",
        r("value", t, n),
        v.createElement("label", r(["label", "valueLabel"], t, n), a(n, t, !1, !1)),
        v.createElement(
            "span",
            r("valueText", t, n),
            o.apply(
                void 0,
                [
                    (void 0 === i
                        ? function (e) {
                              return e;
                          }
                        : i)(s),
                    s,
                ].concat(k(n)),
            ),
        ),
    );
};
q.propTypes = {
    nodeType: M().string.isRequired,
    styling: M().func.isRequired,
    labelRenderer: M().func.isRequired,
    keyPath: M().arrayOf(M().oneOfType([M().string, M().number]).isRequired).isRequired,
    valueRenderer: M().func.isRequired,
    value: M().any,
    valueGetter: M().func,
};
var $ = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];
function U(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function G(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? U(Object(r), !0).forEach(function (t) {
                  (0, m.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : U(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var W = function (e) {
    var t,
        r = e.getItemString,
        n = e.keyPath,
        s = e.labelRenderer,
        i = e.styling,
        l = e.value,
        c = e.valueRenderer,
        u = e.isCustomNode,
        f = o(e, $),
        b = u(l)
            ? "Custom"
            : "Object" === (t = Object.prototype.toString.call(l).slice(8, -1)) &&
                "function" == typeof l[Symbol.iterator]
              ? "Iterable"
              : "Custom" === t && l.constructor !== Object && l instanceof Object
                ? "Object"
                : t,
        h = {
            getItemString: r,
            key: n[0],
            keyPath: n,
            labelRenderer: s,
            nodeType: b,
            styling: i,
            value: l,
            valueRenderer: c,
        },
        d = G(G(G({}, f), h), {}, { data: l, isCustomNode: u });
    switch (b) {
        case "Object":
        case "Error":
        case "WeakMap":
        case "WeakSet":
            return v.createElement(P, d);
        case "Array":
            return v.createElement(L, d);
        case "Iterable":
        case "Map":
        case "Set":
            return v.createElement(z, d);
        case "String":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function (e) {
                        return '"'.concat(e, '"');
                    },
                }),
            );
        case "Number":
        case "Custom":
            return v.createElement(q, h);
        case "Boolean":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function (e) {
                        return e ? "true" : "false";
                    },
                }),
            );
        case "Date":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function (e) {
                        return e.toISOString();
                    },
                }),
            );
        case "Null":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function () {
                        return "null";
                    },
                }),
            );
        case "Undefined":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function () {
                        return "undefined";
                    },
                }),
            );
        case "Function":
        case "Symbol":
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function (e) {
                        return e.toString();
                    },
                }),
            );
        default:
            return v.createElement(
                q,
                (0, a.A)({}, h, {
                    valueGetter: function () {
                        return "<".concat(b, ">");
                    },
                }),
            );
    }
};
W.propTypes = {
    getItemString: M().func.isRequired,
    keyPath: M().arrayOf(M().oneOfType([M().string, M().number]).isRequired).isRequired,
    labelRenderer: M().func.isRequired,
    styling: M().func.isRequired,
    value: M().any,
    valueRenderer: M().func.isRequired,
    isCustomNode: M().func.isRequired,
};
let H = W;
function Z(e) {
    return (Z =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function X(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function Y(e, t) {
    return (
        (function (e) {
            if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
            var r = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != r) {
                var a,
                    n,
                    o,
                    s,
                    i = [],
                    l = !0,
                    c = !1;
                try {
                    if (((o = (r = r.call(e)).next), 0 === t)) {
                        if (Object(r) !== r) return;
                        l = !1;
                    } else for (; !(l = (a = o.call(r)).done) && (i.push(a.value), i.length !== t); l = !0);
                } catch (e) {
                    (c = !0), (n = e);
                } finally {
                    try {
                        if (!l && null != r.return && ((s = r.return()), Object(s) !== s)) return;
                    } finally {
                        if (c) throw n;
                    }
                }
                return i;
            }
        })(e, t) ||
        (function (e, t) {
            if (e) {
                if ("string" == typeof e) return X(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? X(e, t)
                          : void 0
                );
            }
        })(e, t) ||
        (function () {
            throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
        })()
    );
}
var J = r(988042),
    V = r(274331),
    K = r.n(V),
    Q = r(213841),
    ee = r.n(Q);
function et(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? et(Object(r), !0).forEach(function (t) {
                  !(function (e, t, r) {
                      var a;
                      ((a = (function (e, t) {
                          if ("object" != Z(e) || !e) return e;
                          var r = e[Symbol.toPrimitive];
                          if (void 0 !== r) {
                              var a = r.call(e, t || "default");
                              if ("object" != Z(a)) return a;
                              throw TypeError("@@toPrimitive must return a primitive value.");
                          }
                          return ("string" === t ? String : Number)(e);
                      })(t, "string")),
                      (t = "symbol" == Z(a) ? a : a + "") in e)
                          ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                          : (e[t] = r);
                  })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : et(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ea = J.default,
    en = Object.keys(ea),
    eo = function (e) {
        var t,
            r,
            a,
            n,
            o,
            s,
            i,
            l,
            c,
            u,
            f,
            b = Y(
                ((r = (t = K()(e).array())[0] / 255),
                [
                    0.299 * r + 0.587 * (a = t[1] / 255) + 0.114 * (n = t[2] / 255),
                    -0.14713 * r + -0.28886 * a + 0.436 * n,
                    0.615 * r + -0.51499 * a + -0.10001 * n,
                ]),
                3,
            ),
            h = b[0],
            d =
                ((c = (o = [h < 0.25 ? 1 : h < 0.5 ? 0.9 - h : 1.1 - h, b[1], b[2]])[0]),
                (s = +c + 0 * (u = o[1]) + 1.13983 * (f = o[2])),
                (i = +c + -0.39465 * u + -0.5806 * f),
                (l = +c + 2.02311 * u + 0 * f),
                [
                    255 * (s = Math.min(Math.max(0, s), 1)),
                    255 * (i = Math.min(Math.max(0, i), 1)),
                    255 * (l = Math.min(Math.max(0, l), 1)),
                ]);
        return K().rgb(d).hex();
    },
    es = function (e) {
        return function (t) {
            return {
                className: [t.className, e.className].filter(Boolean).join(" "),
                style: er(er({}, t.style || {}), e.style || {}),
            };
        };
    },
    ei = function (e, t) {
        if (void 0 === e) return t;
        if (void 0 === t) return e;
        var r = Z(e),
            a = Z(t);
        switch (r) {
            case "string":
                switch (a) {
                    case "string":
                        return [t, e].filter(Boolean).join(" ");
                    case "object":
                        return es({ className: e, style: t });
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return es({ className: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "object":
                switch (a) {
                    case "string":
                        return es({ className: t, style: e });
                    case "object":
                        return er(er({}, t), e);
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return es({ style: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "function":
                switch (a) {
                    case "string":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [es(r)({ className: t })].concat(n));
                        };
                    case "object":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [es(r)({ style: t })].concat(n));
                        };
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [t.apply(void 0, [r].concat(n))].concat(n));
                        };
                }
        }
    },
    el = function (e, t) {
        var r = Object.keys(t);
        for (var a in e) -1 === r.indexOf(a) && r.push(a);
        return r.reduce(function (r, a) {
            return (r[a] = ei(e[a], t[a])), r;
        }, {});
    },
    ec = function (e, t) {
        for (var r = arguments.length, a = Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++) a[n - 2] = arguments[n];
        if (null === t) return e;
        Array.isArray(t) || (t = [t]);
        var o = t
            .map(function (t) {
                return e[t];
            })
            .filter(Boolean)
            .reduce(
                function (e, t) {
                    return (
                        "string" == typeof t
                            ? (e.className = [e.className, t].filter(Boolean).join(" "))
                            : "object" === Z(t)
                              ? (e.style = er(er({}, e.style), t))
                              : "function" == typeof t && (e = er(er({}, e), t.apply(void 0, [e].concat(a)))),
                        e
                    );
                },
                { className: "", style: {} },
            );
        return o.className || delete o.className, 0 === Object.keys(o.style).length && delete o.style, o;
    },
    eu = function (e) {
        return Object.keys(e).reduce(function (t, r) {
            return (t[r] = /^base/.test(r) ? eo(e[r]) : "scheme" === r ? e[r] + ":inverted" : e[r]), t;
        }, {});
    },
    ef = ee()(function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = t.defaultBase16,
            n = void 0 === a ? ea : a,
            o = t.base16Themes,
            s = eh(r, void 0 === o ? null : o);
        s && (r = er(er({}, s), r));
        for (
            var i = en.reduce(function (e, t) {
                    return (e[t] = r[t] || n[t]), e;
                }, {}),
                l = el(
                    Object.keys(r).reduce(function (e, t) {
                        return -1 === en.indexOf(t) && (e[t] = r[t]), e;
                    }, {}),
                    e(i),
                ),
                c = arguments.length,
                u = Array(c > 3 ? c - 3 : 0),
                f = 3;
            f < c;
            f++
        )
            u[f - 3] = arguments[f];
        return ee()(ec, 2).apply(void 0, [l].concat(u));
    }, 3),
    eb = function (e) {
        return !!e.extend;
    },
    eh = function (e, t) {
        if ((e && eb(e) && e.extend && (e = e.extend), "string" == typeof e)) {
            var r = Y(e.split(":"), 2),
                a = r[0],
                n = r[1];
            (e = t ? t[a] : J[a]), "inverted" === n && (e = eu(e));
        }
        return e && Object.prototype.hasOwnProperty.call(e, "base00") ? e : void 0;
    };
function ed(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ed(Object(r), !0).forEach(function (t) {
                  (0, m.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ed(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var em = ef(
        function (e) {
            var t = {
                BACKGROUND_COLOR: e.base00,
                TEXT_COLOR: e.base07,
                STRING_COLOR: e.base0B,
                DATE_COLOR: e.base0B,
                NUMBER_COLOR: e.base09,
                BOOLEAN_COLOR: e.base09,
                NULL_COLOR: e.base08,
                UNDEFINED_COLOR: e.base08,
                FUNCTION_COLOR: e.base08,
                SYMBOL_COLOR: e.base08,
                LABEL_COLOR: e.base0D,
                ARROW_COLOR: e.base0D,
                ITEM_STRING_COLOR: e.base0B,
                ITEM_STRING_EXPANDED_COLOR: e.base03,
            };
            return {
                tree: {
                    border: 0,
                    padding: 0,
                    marginTop: "0.5em",
                    marginBottom: "0.5em",
                    marginLeft: "0.125em",
                    marginRight: 0,
                    listStyle: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    backgroundColor: t.BACKGROUND_COLOR,
                },
                value: function (e, t, r) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                paddingTop: "0.25em",
                                paddingRight: 0,
                                marginLeft: "0.875em",
                                WebkitUserSelect: "text",
                                MozUserSelect: "text",
                                wordWrap: "break-word",
                                paddingLeft: r.length > 1 ? "2.125em" : "1.25em",
                                textIndent: "-0.5em",
                                wordBreak: "break-all",
                            },
                        ),
                    };
                },
                label: { display: "inline-block", color: t.LABEL_COLOR },
                valueLabel: { margin: "0 0.5em 0 0" },
                valueText: function (e, r) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                color: {
                                    String: t.STRING_COLOR,
                                    Date: t.DATE_COLOR,
                                    Number: t.NUMBER_COLOR,
                                    Boolean: t.BOOLEAN_COLOR,
                                    Null: t.NULL_COLOR,
                                    Undefined: t.UNDEFINED_COLOR,
                                    Function: t.FUNCTION_COLOR,
                                    Symbol: t.SYMBOL_COLOR,
                                }[r],
                            },
                        ),
                    };
                },
                itemRange: function (e, r) {
                    return { style: { paddingTop: r ? 0 : "0.25em", cursor: "pointer", color: t.LABEL_COLOR } };
                },
                arrow: function (e, t, r) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                marginLeft: 0,
                                transition: "150ms",
                                WebkitTransition: "150ms",
                                MozTransition: "150ms",
                                WebkitTransform: r ? "rotateZ(90deg)" : "rotateZ(0deg)",
                                MozTransform: r ? "rotateZ(90deg)" : "rotateZ(0deg)",
                                transform: r ? "rotateZ(90deg)" : "rotateZ(0deg)",
                                transformOrigin: "45% 50%",
                                WebkitTransformOrigin: "45% 50%",
                                MozTransformOrigin: "45% 50%",
                                position: "relative",
                                lineHeight: "1.1em",
                                fontSize: "0.75em",
                            },
                        ),
                    };
                },
                arrowContainer: function (e, t) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                display: "inline-block",
                                paddingRight: "0.5em",
                                paddingLeft: "double" === t ? "1em" : 0,
                                cursor: "pointer",
                            },
                        ),
                    };
                },
                arrowSign: { color: t.ARROW_COLOR },
                arrowSignInner: { position: "absolute", top: 0, left: "-0.4em" },
                nestedNode: function (e, t, r, a, n) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                position: "relative",
                                paddingTop: "0.25em",
                                marginLeft: t.length > 1 ? "0.875em" : 0,
                                paddingLeft: n ? 0 : "1.125em",
                            },
                        ),
                    };
                },
                rootNode: { padding: 0, margin: 0 },
                nestedNodeLabel: function (e, t, r, a, n) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                margin: 0,
                                padding: 0,
                                WebkitUserSelect: n ? "inherit" : "text",
                                MozUserSelect: n ? "inherit" : "text",
                                cursor: n ? "pointer" : "default",
                            },
                        ),
                    };
                },
                nestedNodeItemString: function (e, r, a, n) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            {
                                paddingLeft: "0.5em",
                                cursor: "default",
                                color: n ? t.ITEM_STRING_EXPANDED_COLOR : t.ITEM_STRING_COLOR,
                            },
                        ),
                    };
                },
                nestedNodeItemType: { marginLeft: "0.3em", marginRight: "0.3em" },
                nestedNodeChildren: function (e, t, r) {
                    return {
                        style: ep(
                            ep({}, e.style),
                            {},
                            { padding: 0, margin: 0, listStyle: "none", display: r ? "block" : "none" },
                        ),
                    };
                },
                rootNodeChildren: { padding: 0, margin: 0, listStyle: "none" },
            };
        },
        {
            defaultBase16: {
                scheme: "solarized",
                author: "ethan schoonover (http://ethanschoonover.com/solarized)",
                base00: "#002b36",
                base01: "#073642",
                base02: "#586e75",
                base03: "#657b83",
                base04: "#839496",
                base05: "#93a1a1",
                base06: "#eee8d5",
                base07: "#fdf6e3",
                base08: "#dc322f",
                base09: "#cb4b16",
                base0A: "#b58900",
                base0B: "#859900",
                base0C: "#2aa198",
                base0D: "#268bd2",
                base0E: "#6c71c4",
                base0F: "#d33682",
            },
        },
    ),
    eg = ["data", "keyPath", "postprocessValue", "hideRoot", "theme", "invertTheme"];
function ey(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function ev(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? ey(Object(r), !0).forEach(function (t) {
                  (0, m.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ey(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var ew = function (e) {
    return e;
};
function eM(e) {
    var t,
        r,
        a,
        n,
        o =
            ((r = e.theme),
            (n = Object.keys(
                (a = {
                    getArrowStyle: "arrow",
                    getListStyle: "nestedNodeChildren",
                    getItemStringStyle: "nestedNodeItemString",
                    getLabelStyle: "label",
                    getValueStyle: "valueText",
                }),
            ).filter(function (t) {
                return e[t];
            })).length > 0 &&
                ((r = "string" == typeof r ? { extend: r } : ev({}, r)),
                n.forEach(function (t) {
                    console.error('Styling method "'.concat(t, '" is deprecated, use "theme" property instead')),
                        (r[a[t]] = function (r) {
                            for (var a = r.style, n = arguments.length, o = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                                o[s - 1] = arguments[s];
                            return { style: ev(ev({}, a), e[t].apply(e, o)) };
                        });
                })),
            r);
    return (
        e.invertTheme &&
            (o =
                "string" == typeof (t = o)
                    ? "".concat(t, ":inverted")
                    : t && eb(t) && t.extend
                      ? "string" == typeof t.extend
                          ? er(er({}, t), {}, { extend: "".concat(t.extend, ":inverted") })
                          : er(er({}, t), {}, { extend: eu(t.extend) })
                      : t
                        ? eu(t)
                        : t),
        { styling: em(o) }
    );
}
var ek = (function (e) {
    f(n, e);
    var t,
        r =
            ((t = (function () {
                if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                } catch (e) {
                    return !1;
                }
            })()),
            function () {
                var e,
                    r = p(n);
                return (
                    (e = t ? Reflect.construct(r, arguments, p(this).constructor) : r.apply(this, arguments)),
                    d(this, e)
                );
            });
    function n(e) {
        var t;
        return s(this, n), ((t = r.call(this, e)).state = eM(e)), t;
    }
    return (
        c(n, [
            {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                    var t = this;
                    ["theme", "invertTheme"].find(function (r) {
                        return e[r] !== t.props[r];
                    }) && this.setState(eM(e));
                },
            },
            {
                key: "shouldComponentUpdate",
                value: function (e) {
                    var t = this;
                    return !!Object.keys(e).find(function (r) {
                        return "keyPath" === r ? e[r].join("/") !== t.props[r].join("/") : e[r] !== t.props[r];
                    });
                },
            },
            {
                key: "render",
                value: function () {
                    var e = this.props,
                        t = e.data,
                        r = e.keyPath,
                        n = e.postprocessValue,
                        s = e.hideRoot,
                        i = (e.theme, e.invertTheme, o(e, eg)),
                        l = this.state.styling;
                    return v.createElement(
                        "ul",
                        l("tree"),
                        v.createElement(
                            H,
                            (0, a.A)({}, ev({ postprocessValue: n, hideRoot: s, styling: l }, i), {
                                keyPath: s ? [] : r,
                                value: n(t),
                            }),
                        ),
                    );
                },
            },
        ]),
        n
    );
})(v.Component);
(0, m.A)(ek, "propTypes", {
    data: M().any,
    hideRoot: M().bool,
    theme: M().oneOfType([M().object, M().string]),
    invertTheme: M().bool,
    keyPath: M().arrayOf(M().oneOfType([M().string, M().number])),
    postprocessValue: M().func,
    sortObjectKeys: M().oneOfType([M().func, M().bool]),
}),
    (0, m.A)(ek, "defaultProps", {
        shouldExpandNode: function (e, t, r) {
            return 0 === r;
        },
        hideRoot: !1,
        keyPath: ["root"],
        getItemString: function (e, t, r, a) {
            return v.createElement("span", null, r, " ", a);
        },
        labelRenderer: function (e) {
            var t = ((function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
                (function (e) {
                    var t = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != t) {
                        var r,
                            a,
                            n,
                            o,
                            s = [],
                            i = !0,
                            l = !1;
                        try {
                            (n = (t = t.call(e)).next), !1;
                            for (; !(i = (r = n.call(t)).done) && (s.push(r.value), 1 !== s.length); i = !0);
                        } catch (e) {
                            (l = !0), (a = e);
                        } finally {
                            try {
                                if (!i && null != t.return && ((o = t.return()), Object(o) !== o)) return;
                            } finally {
                                if (l) throw a;
                            }
                        }
                        return s;
                    }
                })(e) ||
                y(e, 1) ||
                (function () {
                    throw TypeError(
                        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                })())[0];
            return v.createElement("span", null, t, ":");
        },
        valueRenderer: ew,
        postprocessValue: ew,
        isCustomNode: function () {
            return !1;
        },
        collectionLimit: 50,
        invertTheme: !0,
    });
