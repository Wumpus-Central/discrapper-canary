t.d(n, { i: () => g });
var a = t(212246),
    r = t(218436),
    i = t(64700);
function u(e) {
    return (u =
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
function s(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var o = (function () {
        var e;
        function n(e, t, a) {
            if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
            s(this, "spec", void 0),
                s(this, "monitor", void 0),
                s(this, "connector", void 0),
                (this.spec = e),
                (this.monitor = t),
                (this.connector = a);
        }
        return (
            (e = [
                {
                    key: "beginDrag",
                    value: function () {
                        var e,
                            n = this.spec,
                            t = this.monitor;
                        return null !=
                            (e = "object" === u(n.item) ? n.item : "function" == typeof n.item ? n.item(t) : {})
                            ? e
                            : null;
                    },
                },
                {
                    key: "canDrag",
                    value: function () {
                        var e = this.spec,
                            n = this.monitor;
                        return "boolean" == typeof e.canDrag
                            ? e.canDrag
                            : "function" != typeof e.canDrag || e.canDrag(n);
                    },
                },
                {
                    key: "isDragging",
                    value: function (e, n) {
                        var t = this.spec,
                            a = this.monitor,
                            r = t.isDragging;
                        return r ? r(a) : n === e.getSourceId();
                    },
                },
                {
                    key: "endDrag",
                    value: function () {
                        var e = this.spec,
                            n = this.monitor,
                            t = this.connector,
                            a = e.end;
                        a && a(n.getItem(), n), t.reconnect();
                    },
                },
            ]),
            (function (e, n) {
                for (var t = 0; t < n.length; t++) {
                    var a = n[t];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            })(n.prototype, e),
            n
        );
    })(),
    l = t(190334),
    d = t(321733);
function c(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
    return a;
}
var _ = t(55166),
    f = t(394886),
    y = t(541163),
    h = t(806424);
function g(e, n) {
    var t,
        u,
        s,
        g,
        m,
        p,
        w,
        b,
        v,
        S = (0, _.I)(e, n);
    (0, d.V)(
        !S.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var C =
            ((t = (0, l.u)()),
            (0, i.useMemo)(
                function () {
                    return new f.G(t);
                },
                [t],
            )),
        M =
            ((u = S.options),
            (s = S.previewOptions),
            (g = (0, l.u)()),
            (m = (0, i.useMemo)(
                function () {
                    return new y.b(g.getBackend());
                },
                [g],
            )),
            (0, r.E)(
                function () {
                    return (
                        (m.dragSourceOptions = u || null),
                        m.reconnect(),
                        function () {
                            return m.disconnectDragSource();
                        }
                    );
                },
                [m, u],
            ),
            (0, r.E)(
                function () {
                    return (
                        (m.dragPreviewOptions = s || null),
                        m.reconnect(),
                        function () {
                            return m.disconnectDragPreview();
                        }
                    );
                },
                [m, s],
            ),
            m);
    return (
        (p = (0, l.u)()),
        (w = (0, i.useMemo)(
            function () {
                return new o(S, C, M);
            },
            [C, M],
        )),
        (0, i.useEffect)(
            function () {
                w.spec = S;
            },
            [S],
        ),
        (b = w),
        (v = (0, i.useMemo)(
            function () {
                var e = S.type;
                return (0, d.V)(null != e, "spec.type must be defined"), e;
            },
            [S],
        )),
        (0, r.E)(
            function () {
                if (null != v) {
                    var e,
                        n =
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })((e = (0, a.V)(v, b, p))) ||
                            (function (e) {
                                var n,
                                    t,
                                    a =
                                        null == e
                                            ? null
                                            : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (null != a) {
                                    var r = [],
                                        i = !0,
                                        u = !1;
                                    try {
                                        for (
                                            a = a.call(e);
                                            !(i = (n = a.next()).done) && (r.push(n.value), 2 !== r.length);
                                            i = !0
                                        );
                                    } catch (e) {
                                        (u = !0), (t = e);
                                    } finally {
                                        try {
                                            i || null == a.return || a.return();
                                        } finally {
                                            if (u) throw t;
                                        }
                                    }
                                    return r;
                                }
                            })(e) ||
                            (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return c(e, 2);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === n && e.constructor && (n = e.constructor.name),
                                        "Map" === n || "Set" === n)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                        return c(e, 2);
                                }
                            })(e) ||
                            (function () {
                                throw TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                            })(),
                        t = n[0],
                        r = n[1];
                    return C.receiveHandlerId(t), M.receiveHandlerId(t), r;
                }
            },
            [p, C, M, b, v],
        ),
        [
            (0, h.j)(S.collect, C, M),
            (0, i.useMemo)(
                function () {
                    return M.hooks.dragSource();
                },
                [M],
            ),
            (0, i.useMemo)(
                function () {
                    return M.hooks.dragPreview();
                },
                [M],
            ),
        ]
    );
}
