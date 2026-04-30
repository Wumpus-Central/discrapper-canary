"use strict";
n.d(t, { H: () => p });
var i = n(212246),
    r = n(190334),
    s = n(218436),
    a = n(321733),
    o = n(64700);
function l(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var u = (function () {
    var e;
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        l(this, "spec", void 0), l(this, "monitor", void 0), (this.spec = e), (this.monitor = n);
    }
    return (
        (e = [
            {
                key: "canDrop",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    return !e.canDrop || e.canDrop(t.getItem(), t);
                },
            },
            {
                key: "hover",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    e.hover && e.hover(t.getItem(), t);
                },
            },
            {
                key: "drop",
                value: function () {
                    var e = this.spec,
                        t = this.monitor;
                    if (e.drop) return e.drop(t.getItem(), t);
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
})();
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
var d = n(55166),
    _ = n(162551),
    f = n(848575),
    h = n(806424);
function p(e, t) {
    var n,
        l,
        p,
        E,
        m,
        g,
        A,
        I,
        T,
        S = (0, d.I)(e, t),
        N =
            ((n = (0, r.u)()),
            (0, o.useMemo)(
                function () {
                    return new _.b(n);
                },
                [n],
            )),
        y =
            ((l = S.options),
            (p = (0, r.u)()),
            (E = (0, o.useMemo)(
                function () {
                    return new f.P(p.getBackend());
                },
                [p],
            )),
            (0, s.E)(
                function () {
                    return (
                        (E.dropTargetOptions = l || null),
                        E.reconnect(),
                        function () {
                            return E.disconnectDropTarget();
                        }
                    );
                },
                [l],
            ),
            E);
    return (
        (m = (0, r.u)()),
        (g = (0, o.useMemo)(
            function () {
                return new u(S, N);
            },
            [N],
        )),
        (0, o.useEffect)(
            function () {
                g.spec = S;
            },
            [S],
        ),
        (A = g),
        (I = S.accept),
        (T = (0, o.useMemo)(
            function () {
                return (0, a.V)(null != S.accept, "accept must be defined"), Array.isArray(I) ? I : [I];
            },
            [I],
        )),
        (0, s.E)(
            function () {
                var e,
                    t =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, i.l)(T, A, m))) ||
                        (function (e) {
                            var t,
                                n,
                                i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
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
                                if ("string" == typeof e) return c(e, 2);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return c(e, 2);
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
            },
            [
                m,
                N,
                A,
                y,
                T.map(function (e) {
                    return e.toString();
                }).join("|"),
            ],
        ),
        [
            (0, h.j)(S.collect, N, y),
            (0, o.useMemo)(
                function () {
                    return y.hooks.dropTarget();
                },
                [y],
            ),
        ]
    );
}
