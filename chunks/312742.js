r.d(t, { i: () => p });
var n = r(212246),
    i = r(218436),
    o = r(64700);
function a(e) {
    return (a =
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
function u(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var c = (function () {
        var e;
        function t(e, r, n) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            u(this, "spec", void 0),
                u(this, "monitor", void 0),
                u(this, "connector", void 0),
                (this.spec = e),
                (this.monitor = r),
                (this.connector = n);
        }
        return (
            (e = [
                {
                    key: "beginDrag",
                    value: function () {
                        var e,
                            t = this.spec,
                            r = this.monitor;
                        return null !=
                            (e = "object" === a(t.item) ? t.item : "function" == typeof t.item ? t.item(r) : {})
                            ? e
                            : null;
                    },
                },
                {
                    key: "canDrag",
                    value: function () {
                        var e = this.spec,
                            t = this.monitor;
                        return "boolean" == typeof e.canDrag
                            ? e.canDrag
                            : "function" != typeof e.canDrag || e.canDrag(t);
                    },
                },
                {
                    key: "isDragging",
                    value: function (e, t) {
                        var r = this.spec,
                            n = this.monitor,
                            i = r.isDragging;
                        return i ? i(n) : t === e.getSourceId();
                    },
                },
                {
                    key: "endDrag",
                    value: function () {
                        var e = this.spec,
                            t = this.monitor,
                            r = this.connector,
                            n = e.end;
                        n && n(t.getItem(), t), r.reconnect();
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
            })(t.prototype, e),
            t
        );
    })(),
    s = r(190334),
    l = r(321733);
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var f = r(55166),
    g = r(394886),
    h = r(541163),
    v = r(806424);
function p(e, t) {
    var r,
        a,
        u,
        p,
        y,
        b,
        m,
        D,
        I,
        S = (0, f.I)(e, t);
    (0, l.V)(
        !S.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var k =
            ((r = (0, s.u)()),
            (0, o.useMemo)(
                function () {
                    return new g.G(r);
                },
                [r],
            )),
        O =
            ((a = S.options),
            (u = S.previewOptions),
            (p = (0, s.u)()),
            (y = (0, o.useMemo)(
                function () {
                    return new h.b(p.getBackend());
                },
                [p],
            )),
            (0, i.E)(
                function () {
                    return (
                        (y.dragSourceOptions = a || null),
                        y.reconnect(),
                        function () {
                            return y.disconnectDragSource();
                        }
                    );
                },
                [y, a],
            ),
            (0, i.E)(
                function () {
                    return (
                        (y.dragPreviewOptions = u || null),
                        y.reconnect(),
                        function () {
                            return y.disconnectDragPreview();
                        }
                    );
                },
                [y, u],
            ),
            y);
    return (
        (b = (0, s.u)()),
        (m = (0, o.useMemo)(
            function () {
                return new c(S, k, O);
            },
            [k, O],
        )),
        (0, o.useEffect)(
            function () {
                m.spec = S;
            },
            [S],
        ),
        (D = m),
        (I = (0, o.useMemo)(
            function () {
                var e = S.type;
                return (0, l.V)(null != e, "spec.type must be defined"), e;
            },
            [S],
        )),
        (0, i.E)(
            function () {
                if (null != I) {
                    var e,
                        t =
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })((e = (0, n.V)(I, D, b))) ||
                            (function (e) {
                                var t,
                                    r,
                                    n =
                                        null == e
                                            ? null
                                            : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (null != n) {
                                    var i = [],
                                        o = !0,
                                        a = !1;
                                    try {
                                        for (
                                            n = n.call(e);
                                            !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length);
                                            o = !0
                                        );
                                    } catch (e) {
                                        (a = !0), (r = e);
                                    } finally {
                                        try {
                                            o || null == n.return || n.return();
                                        } finally {
                                            if (a) throw r;
                                        }
                                    }
                                    return i;
                                }
                            })(e) ||
                            (function (e) {
                                if (e) {
                                    if ("string" == typeof e) return d(e, 2);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    if (
                                        ("Object" === t && e.constructor && (t = e.constructor.name),
                                        "Map" === t || "Set" === t)
                                    )
                                        return Array.from(e);
                                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                        return d(e, 2);
                                }
                            })(e) ||
                            (function () {
                                throw TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                );
                            })(),
                        r = t[0],
                        i = t[1];
                    return k.receiveHandlerId(r), O.receiveHandlerId(r), i;
                }
            },
            [b, k, O, D, I],
        ),
        [
            (0, v.j)(S.collect, k, O),
            (0, o.useMemo)(
                function () {
                    return O.hooks.dragSource();
                },
                [O],
            ),
            (0, o.useMemo)(
                function () {
                    return O.hooks.dragPreview();
                },
                [O],
            ),
        ]
    );
}
