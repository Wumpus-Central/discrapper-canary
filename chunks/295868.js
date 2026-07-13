t.d(n, { H: () => h });
var a = t(212246),
    r = t(190334),
    i = t(218436),
    u = t(321733),
    s = t(64700);
function o(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var l = (function () {
    var e;
    function n(e, t) {
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        o(this, "spec", void 0), o(this, "monitor", void 0), (this.spec = e), (this.monitor = t);
    }
    return (
        (e = [
            {
                key: "canDrop",
                value: function () {
                    var e = this.spec,
                        n = this.monitor;
                    return !e.canDrop || e.canDrop(n.getItem(), n);
                },
            },
            {
                key: "hover",
                value: function () {
                    var e = this.spec,
                        n = this.monitor;
                    e.hover && e.hover(n.getItem(), n);
                },
            },
            {
                key: "drop",
                value: function () {
                    var e = this.spec,
                        n = this.monitor;
                    if (e.drop) return e.drop(n.getItem(), n);
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
})();
function d(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var t = 0, a = Array(n); t < n; t++) a[t] = e[t];
    return a;
}
var c = t(55166),
    _ = t(162551),
    f = t(848575),
    y = t(806424);
function h(e, n) {
    var t,
        o,
        h,
        g,
        m,
        w,
        p,
        b,
        v,
        S = (0, c.I)(e, n),
        C =
            ((t = (0, r.u)()),
            (0, s.useMemo)(
                function () {
                    return new _.b(t);
                },
                [t],
            )),
        M =
            ((o = S.options),
            (h = (0, r.u)()),
            (g = (0, s.useMemo)(
                function () {
                    return new f.P(h.getBackend());
                },
                [h],
            )),
            (0, i.E)(
                function () {
                    return (
                        (g.dropTargetOptions = o || null),
                        g.reconnect(),
                        function () {
                            return g.disconnectDropTarget();
                        }
                    );
                },
                [o],
            ),
            g);
    return (
        (m = (0, r.u)()),
        (w = (0, s.useMemo)(
            function () {
                return new l(S, C);
            },
            [C],
        )),
        (0, s.useEffect)(
            function () {
                w.spec = S;
            },
            [S],
        ),
        (p = w),
        (b = S.accept),
        (v = (0, s.useMemo)(
            function () {
                return (0, u.V)(null != S.accept, "accept must be defined"), Array.isArray(b) ? b : [b];
            },
            [b],
        )),
        (0, i.E)(
            function () {
                var e,
                    n =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, a.l)(v, p, m))) ||
                        (function (e) {
                            var n,
                                t,
                                a = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
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
                                if ("string" == typeof e) return d(e, 2);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === n && e.constructor && (n = e.constructor.name),
                                    "Map" === n || "Set" === n)
                                )
                                    return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return d(e, 2);
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
            },
            [
                m,
                C,
                p,
                M,
                v
                    .map(function (e) {
                        return e.toString();
                    })
                    .join("|"),
            ],
        ),
        [
            (0, y.j)(S.collect, C, M),
            (0, s.useMemo)(
                function () {
                    return M.hooks.dropTarget();
                },
                [M],
            ),
        ]
    );
}
