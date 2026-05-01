r.d(t, { A: () => j });
var n = r(627968),
    o = r(64700),
    i = r(816885),
    a = r(321733),
    s = r(75375),
    c = r(201672);
function u(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function d(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
function p(e, t, r) {
    return t && d(e.prototype, t), r && d(e, r), e;
}
function l(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var f = (function () {
    function e(t) {
        u(this, e), l(this, "isDisposed", !1), l(this, "action", void 0), (this.action = (0, c.Tn)(t) ? t : c.lQ);
    }
    return (
        p(
            e,
            [
                {
                    key: "dispose",
                    value: function () {
                        this.isDisposed || (this.action(), (this.isDisposed = !0));
                    },
                },
            ],
            [
                {
                    key: "isDisposable",
                    value: function (e) {
                        return !!(e && (0, c.Tn)(e.dispose));
                    },
                },
                {
                    key: "_fixup",
                    value: function (t) {
                        return e.isDisposable(t) ? t : e.empty;
                    },
                },
                {
                    key: "create",
                    value: function (t) {
                        return new e(t);
                    },
                },
            ],
        ),
        e
    );
})();
l(f, "empty", { dispose: c.lQ });
var h = (function () {
        function e() {
            u(this, e), l(this, "isDisposed", !1), l(this, "disposables", void 0);
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            this.disposables = r;
        }
        return (
            p(e, [
                {
                    key: "add",
                    value: function (e) {
                        this.isDisposed ? e.dispose() : this.disposables.push(e);
                    },
                },
                {
                    key: "remove",
                    value: function (e) {
                        var t = !1;
                        if (!this.isDisposed) {
                            var r = this.disposables.indexOf(e);
                            -1 !== r && ((t = !0), this.disposables.splice(r, 1), e.dispose());
                        }
                        return t;
                    },
                },
                {
                    key: "clear",
                    value: function () {
                        if (!this.isDisposed) {
                            for (var e = this.disposables.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = this.disposables[r];
                            this.disposables = [];
                            for (var n = 0; n < e; n++) t[n].dispose();
                        }
                    },
                },
                {
                    key: "dispose",
                    value: function () {
                        if (!this.isDisposed) {
                            this.isDisposed = !0;
                            for (var e = this.disposables.length, t = Array(e), r = 0; r < e; r++)
                                t[r] = this.disposables[r];
                            this.disposables = [];
                            for (var n = 0; n < e; n++) t[n].dispose();
                        }
                    },
                },
            ]),
            e
        );
    })(),
    y = (function () {
        function e() {
            u(this, e), l(this, "isDisposed", !1), l(this, "current", void 0);
        }
        return (
            p(e, [
                {
                    key: "getDisposable",
                    value: function () {
                        return this.current;
                    },
                },
                {
                    key: "setDisposable",
                    value: function (e) {
                        var t = this.isDisposed;
                        if (!t) {
                            var r = this.current;
                            (this.current = e), r && r.dispose();
                        }
                        t && e && e.dispose();
                    },
                },
                {
                    key: "dispose",
                    value: function () {
                        if (!this.isDisposed) {
                            this.isDisposed = !0;
                            var e = this.current;
                            (this.current = void 0), e && e.dispose();
                        }
                    },
                },
            ]),
            e
        );
    })(),
    v = r(833871),
    g = r.n(v);
function b(e) {
    return (b =
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
function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function D(e, t) {
    return (D =
        Object.setPrototypeOf ||
        function (e, t) {
            return (e.__proto__ = t), e;
        })(e, t);
}
function k(e) {
    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function C(e) {
    return (C = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function w(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function j(e) {
    var t = e.DecoratedComponent,
        r = e.createHandler,
        u = e.createMonitor,
        d = e.createConnector,
        p = e.registerHandler,
        l = e.containerDisplayName,
        v = e.getType,
        j = e.collect,
        I = e.options.arePropsEqual,
        O = void 0 === I ? i.b : I,
        S = t.displayName || t.name || "Component",
        P = (function (e) {
            if ("function" != typeof e && null !== e)
                throw TypeError("Super expression must either be null or a function");
            (P.prototype = Object.create(e && e.prototype, {
                constructor: { value: P, writable: !0, configurable: !0 },
            })),
                e && D(P, e);
            var l,
                g,
                I =
                    ((l = (function () {
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
                            t = C(P);
                        return (
                            (e = l ? Reflect.construct(t, arguments, C(this).constructor) : t.apply(this, arguments)),
                            (function (e, t) {
                                if (t && ("object" === b(t) || "function" == typeof t)) return t;
                                if (void 0 !== t)
                                    throw TypeError("Derived constructors may only return object or undefined");
                                return k(e);
                            })(this, e)
                        );
                    });
            function P(e) {
                var t;
                if (!(this instanceof P)) throw TypeError("Cannot call a class as a function");
                return (
                    w(k((t = I.call(this, e))), "decoratedRef", (0, o.createRef)()),
                    w(k(t), "handlerId", void 0),
                    w(k(t), "manager", void 0),
                    w(k(t), "handlerMonitor", void 0),
                    w(k(t), "handlerConnector", void 0),
                    w(k(t), "handler", void 0),
                    w(k(t), "disposable", void 0),
                    w(k(t), "rafId", void 0),
                    w(k(t), "currentType", void 0),
                    w(k(t), "handleChange", function () {
                        var e = t.getCurrentState();
                        (0, i.b)(e, t.state) || t.setState(e);
                    }),
                    (t.disposable = new y()),
                    t.receiveProps(e),
                    t.dispose(),
                    t
                );
            }
            return (
                (g = [
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
                                (0, a.V)(
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
                            return !O(e, this.props) || !(0, i.b)(t, this.state);
                        },
                    },
                    {
                        key: "componentDidMount",
                        value: function () {
                            (this.disposable = new y()),
                                (this.currentType = void 0),
                                this.receiveProps(this.props),
                                this.handleChange();
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function (e) {
                            O(this.props, e) || (this.receiveProps(this.props), this.handleChange());
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            void 0 !== this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = void 0)),
                                this.dispose();
                        },
                    },
                    {
                        key: "receiveProps",
                        value: function (e) {
                            this.handler && (this.handler.receiveProps(e), this.receiveType(v(e)));
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
                                var t,
                                    r =
                                        (function (e) {
                                            if (Array.isArray(e)) return e;
                                        })((t = p(e, this.handler, this.manager))) ||
                                        (function (e) {
                                            var t,
                                                r,
                                                n =
                                                    null == e
                                                        ? null
                                                        : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                                                          e["@@iterator"];
                                            if (null != n) {
                                                var o = [],
                                                    i = !0,
                                                    a = !1;
                                                try {
                                                    for (
                                                        n = n.call(e);
                                                        !(i = (t = n.next()).done) && (o.push(t.value), 2 !== o.length);
                                                        i = !0
                                                    );
                                                } catch (e) {
                                                    (a = !0), (r = e);
                                                } finally {
                                                    try {
                                                        i || null == n.return || n.return();
                                                    } finally {
                                                        if (a) throw r;
                                                    }
                                                }
                                                return o;
                                            }
                                        })(t) ||
                                        (function (e) {
                                            if (e) {
                                                if ("string" == typeof e) return m(e, 2);
                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                if (
                                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                                    "Map" === t || "Set" === t)
                                                )
                                                    return Array.from(e);
                                                if (
                                                    "Arguments" === t ||
                                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                                                )
                                                    return m(e, 2);
                                            }
                                        })(t) ||
                                        (function () {
                                            throw TypeError(
                                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                            );
                                        })(),
                                    n = r[0],
                                    o = r[1];
                                (this.handlerId = n),
                                    this.handlerMonitor.receiveHandlerId(n),
                                    this.handlerConnector.receiveHandlerId(n);
                                var i = this.manager
                                    .getMonitor()
                                    .subscribeToStateChange(this.handleChange, { handlerIds: [n] });
                                this.disposable.setDisposable(new h(new f(i), new f(o)));
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
                                ? j(this.handlerConnector.hooks, this.handlerMonitor, this.props)
                                : {};
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            var e = this;
                            return (0, n.jsx)(
                                s.M.Consumer,
                                {
                                    children: function (r) {
                                        var o = r.dragDropManager;
                                        return (
                                            e.receiveDragDropManager(o),
                                            void 0 !== e.rafId && cancelAnimationFrame(e.rafId),
                                            "u" > typeof requestAnimationFrame &&
                                                (e.rafId = requestAnimationFrame(function () {
                                                    var t;
                                                    return (
                                                        (e.rafId = void 0),
                                                        null == (t = e.handlerConnector) ? void 0 : t.reconnect()
                                                    );
                                                })),
                                            (0, n.jsx)(
                                                t,
                                                Object.assign({}, e.props, e.getCurrentState(), {
                                                    ref: (0, c.Yy)(t) ? e.decoratedRef : null,
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
                            void 0 !== this.manager ||
                                ((0, a.V)(
                                    void 0 !== e,
                                    "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                                    S,
                                    S,
                                ),
                                void 0 !== e &&
                                    ((this.manager = e),
                                    (this.handlerMonitor = u(e)),
                                    (this.handlerConnector = d(e.getBackend())),
                                    (this.handler = r(this.handlerMonitor, this.decoratedRef))));
                        },
                    },
                ]),
                (function (e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        (n.enumerable = n.enumerable || !1),
                            (n.configurable = !0),
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n);
                    }
                })(P.prototype, g),
                P
            );
        })(o.Component);
    return w(P, "DecoratedComponent", t), w(P, "displayName", "".concat(l, "(").concat(S, ")")), g()(P, t);
}
