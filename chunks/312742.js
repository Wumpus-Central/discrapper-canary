"use strict";
n.d(t, { i: () => E });
var i = n(212246),
    r = n(218436),
    s = n(64700);
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
function o(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var l = (function () {
        var e;
        function t(e, n, i) {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            o(this, "spec", void 0),
                o(this, "monitor", void 0),
                o(this, "connector", void 0),
                (this.spec = e),
                (this.monitor = n),
                (this.connector = i);
        }
        return (
            (e = [
                {
                    key: "beginDrag",
                    value: function () {
                        var e,
                            t = this.spec,
                            n = this.monitor;
                        return null !=
                            (e = "object" === a(t.item) ? t.item : "function" == typeof t.item ? t.item(n) : {})
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
                        var n = this.spec,
                            i = this.monitor,
                            r = n.isDragging;
                        return r ? r(i) : t === e.getSourceId();
                    },
                },
                {
                    key: "endDrag",
                    value: function () {
                        var e = this.spec,
                            t = this.monitor,
                            n = this.connector,
                            i = e.end;
                        i && i(t.getItem(), t), n.reconnect();
                    },
                },
            ]),
            (function (e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i);
                }
            })(t.prototype, e),
            t
        );
    })(),
    u = n(190334),
    c = n(321733);
function d(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var _ = n(55166),
    f = n(394886),
    h = n(541163),
    p = n(806424);
function E(e, t) {
    var n,
        a,
        o,
        E,
        m,
        g,
        A,
        I,
        T,
        S = (0, _.I)(e, t);
    (0, c.V)(
        !S.begin,
        "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)",
    );
    var N =
            ((n = (0, u.u)()),
            (0, s.useMemo)(
                function () {
                    return new f.G(n);
                },
                [n],
            )),
        y =
            ((a = S.options),
            (o = S.previewOptions),
            (E = (0, u.u)()),
            (m = (0, s.useMemo)(
                function () {
                    return new h.b(E.getBackend());
                },
                [E],
            )),
            (0, r.E)(
                function () {
                    return (
                        (m.dragSourceOptions = a || null),
                        m.reconnect(),
                        function () {
                            return m.disconnectDragSource();
                        }
                    );
                },
                [m, a],
            ),
            (0, r.E)(
                function () {
                    return (
                        (m.dragPreviewOptions = o || null),
                        m.reconnect(),
                        function () {
                            return m.disconnectDragPreview();
                        }
                    );
                },
                [m, o],
            ),
            m);
    return (
        (g = (0, u.u)()),
        (A = (0, s.useMemo)(
            function () {
                return new l(S, N, y);
            },
            [N, y],
        )),
        (0, s.useEffect)(
            function () {
                A.spec = S;
            },
            [S],
        ),
        (I = A),
        (T = (0, s.useMemo)(
            function () {
                var e = S.type;
                return (0, c.V)(null != e, "spec.type must be defined"), e;
            },
            [S],
        )),
        (0, r.E)(
            function () {
                if (null != T) {
                    var e,
                        t =
                            (function (e) {
                                if (Array.isArray(e)) return e;
                            })((e = (0, i.V)(T, I, g))) ||
                            (function (e) {
                                var t,
                                    n,
                                    i =
                                        null == e
                                            ? null
                                            : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                                if (null != i) {
                                    var r = [],
                                        s = !0,
                                        a = !1;
                                    try {
                                        for (
                                            i = i.call(e);
                                            !(s = (t = i.next()).done) && (r.push(t.value), 2 !== r.length);
                                            s = !0
                                        );
                                    } catch (e) {
                                        (a = !0), (n = e);
                                    } finally {
                                        try {
                                            s || null == i.return || i.return();
                                        } finally {
                                            if (a) throw n;
                                        }
                                    }
                                    return r;
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
                        n = t[0],
                        r = t[1];
                    return N.receiveHandlerId(n), y.receiveHandlerId(n), r;
                }
            },
            [g, N, y, I, T],
        ),
        [
            (0, p.j)(S.collect, N, y),
            (0, s.useMemo)(
                function () {
                    return y.hooks.dragSource();
                },
                [y],
            ),
            (0, s.useMemo)(
                function () {
                    return y.hooks.dragPreview();
                },
                [y],
            ),
        ]
    );
}
