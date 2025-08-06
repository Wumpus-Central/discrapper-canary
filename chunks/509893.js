n.d(t, { K: () => P });
var r = n(255367),
    i = n(73800),
    o = n(521548),
    a = n(573654),
    s = n(136954),
    l = n(401251),
    c = n(528302),
    u = n(26095),
    d = n.n(u);
function f(e) {
    return (f =
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
function _(e, t) {
    return E(e) || g(e, t) || h(e, t) || p();
}
function p() {
    throw TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
}
function h(e, t) {
    if (e) {
        if ("string" == typeof e) return m(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
            return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t);
    }
}
function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
function g(e, t) {
    var n,
        r,
        i = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (null != i) {
        var o = [],
            a = !0,
            s = !1;
        try {
            for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
        } catch (e) {
            (s = !0), (r = e);
        } finally {
            try {
                a || null == i.return || i.return();
            } finally {
                if (s) throw r;
            }
        }
        return o;
    }
}
function E(e) {
    if (Array.isArray(e)) return e;
}
function b(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function y(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function O(e, t, n) {
    return t && y(e.prototype, t), n && y(e, n), e;
}
function v(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0,
        },
    })),
        t && I(e, t);
}
function I(e, t) {
    return (I =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function T(e) {
    var t = N();
    return function () {
        var n,
            r = C(e);
        return (n = t ? Reflect.construct(r, arguments, C(this).constructor) : r.apply(this, arguments)), S(this, n);
    };
}
function S(e, t) {
    if (t && ("object" === f(t) || "function" == typeof t)) return t;
    if (void 0 !== t) throw TypeError("Derived constructors may only return object or undefined");
    return A(e);
}
function A(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function N() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
    } catch (e) {
        return !1;
    }
}
function C(e) {
    return (C = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function R(e, t, n) {
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
function P(e) {
    var t = e.DecoratedComponent,
        n = e.createHandler,
        u = e.createMonitor,
        f = e.createConnector,
        p = e.registerHandler,
        h = e.containerDisplayName,
        m = e.getType,
        g = e.collect,
        E = e.options.arePropsEqual,
        y = void 0 === E ? o.w : E,
        I = t,
        S = t.displayName || t.name || "Component",
        N = (function (e) {
            v(d, e);
            var t = T(d);
            function d(e) {
                var n;
                return (
                    b(this, d),
                    R(A((n = t.call(this, e))), "decoratedRef", (0, i.createRef)()),
                    R(A(n), "handlerId", void 0),
                    R(A(n), "manager", void 0),
                    R(A(n), "handlerMonitor", void 0),
                    R(A(n), "handlerConnector", void 0),
                    R(A(n), "handler", void 0),
                    R(A(n), "disposable", void 0),
                    R(A(n), "currentType", void 0),
                    R(A(n), "handleChange", function () {
                        var e = n.getCurrentState();
                        (0, o.w)(e, n.state) || n.setState(e);
                    }),
                    (n.disposable = new l.M$()),
                    n.receiveProps(e),
                    n.dispose(),
                    n
                );
            }
            return (
                O(d, [
                    {
                        key: "getHandlerId",
                        value: function () {
                            return this.handlerId;
                        },
                    },
                    {
                        key: "getDecoratedComponentInstance",
                        value: function () {
                            return (
                                (0, a.k)(
                                    this.decoratedRef.current,
                                    "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()",
                                ),
                                this.decoratedRef.current
                            );
                        },
                    },
                    {
                        key: "shouldComponentUpdate",
                        value: function (e, t) {
                            return !y(e, this.props) || !(0, o.w)(t, this.state);
                        },
                    },
                    {
                        key: "componentDidMount",
                        value: function () {
                            (this.disposable = new l.M$()),
                                (this.currentType = void 0),
                                this.receiveProps(this.props),
                                this.handleChange();
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function (e) {
                            y(this.props, e) || (this.receiveProps(this.props), this.handleChange());
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            this.dispose();
                        },
                    },
                    {
                        key: "receiveProps",
                        value: function (e) {
                            this.handler && (this.handler.receiveProps(e), this.receiveType(m(e)));
                        },
                    },
                    {
                        key: "receiveType",
                        value: function (e) {
                            if (
                                this.handlerMonitor &&
                                this.manager &&
                                this.handlerConnector &&
                                e !== this.currentType
                            ) {
                                this.currentType = e;
                                var t = p(e, this.handler, this.manager),
                                    n = _(t, 2),
                                    r = n[0],
                                    i = n[1];
                                (this.handlerId = r),
                                    this.handlerMonitor.receiveHandlerId(r),
                                    this.handlerConnector.receiveHandlerId(r);
                                var o = this.manager.getMonitor(),
                                    a = o.subscribeToStateChange(this.handleChange, { handlerIds: [r] });
                                this.disposable.setDisposable(new l.Xz(new l.JT(a), new l.JT(i)));
                            }
                        },
                    },
                    {
                        key: "dispose",
                        value: function () {
                            this.disposable.dispose(),
                                this.handlerConnector && this.handlerConnector.receiveHandlerId(null);
                        },
                    },
                    {
                        key: "getCurrentState",
                        value: function () {
                            return this.handlerConnector
                                ? g(this.handlerConnector.hooks, this.handlerMonitor, this.props)
                                : {};
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this;
                            return (0, r.jsx)(
                                s.L.Consumer,
                                {
                                    children: function (t) {
                                        var n = t.dragDropManager;
                                        return (
                                            e.receiveDragDropManager(n),
                                            "undefined" != typeof requestAnimationFrame &&
                                                requestAnimationFrame(function () {
                                                    var t;
                                                    return null == (t = e.handlerConnector) ? void 0 : t.reconnect();
                                                }),
                                            (0, r.jsx)(
                                                I,
                                                Object.assign({}, e.props, e.getCurrentState(), {
                                                    ref: (0, c.J7)(I) ? e.decoratedRef : null,
                                                }),
                                                void 0,
                                            )
                                        );
                                    },
                                },
                                void 0,
                            );
                        },
                    },
                    {
                        key: "receiveDragDropManager",
                        value: function (e) {
                            void 0 === this.manager &&
                                ((0, a.k)(
                                    void 0 !== e,
                                    "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                    S,
                                    S,
                                ),
                                void 0 !== e &&
                                    ((this.manager = e),
                                    (this.handlerMonitor = u(e)),
                                    (this.handlerConnector = f(e.getBackend())),
                                    (this.handler = n(this.handlerMonitor, this.decoratedRef))));
                        },
                    },
                ]),
                d
            );
        })(i.Component);
    return R(N, "DecoratedComponent", t), R(N, "displayName", "".concat(h, "(").concat(S, ")")), d()(N, t);
}
