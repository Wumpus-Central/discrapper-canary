r.d(t, { H: () => v });
var n = r(212246),
    i = r(190334),
    o = r(218436),
    a = r(321733),
    u = r(64700);
function c(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var s = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        c(this, "spec", void 0), c(this, "monitor", void 0), (this.spec = e), (this.monitor = r);
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
})();
function l(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
var d = r(55166),
    f = r(162551),
    g = r(848575),
    h = r(806424);
function v(e, t) {
    var r,
        c,
        v,
        p,
        y,
        b,
        m,
        D,
        I,
        S = (0, d.I)(e, t),
        k =
            ((r = (0, i.u)()),
            (0, u.useMemo)(
                function () {
                    return new f.b(r);
                },
                [r],
            )),
        O =
            ((c = S.options),
            (v = (0, i.u)()),
            (p = (0, u.useMemo)(
                function () {
                    return new g.P(v.getBackend());
                },
                [v],
            )),
            (0, o.E)(
                function () {
                    return (
                        (p.dropTargetOptions = c || null),
                        p.reconnect(),
                        function () {
                            return p.disconnectDropTarget();
                        }
                    );
                },
                [c],
            ),
            p);
    return (
        (y = (0, i.u)()),
        (b = (0, u.useMemo)(
            function () {
                return new s(S, k);
            },
            [k],
        )),
        (0, u.useEffect)(
            function () {
                b.spec = S;
            },
            [S],
        ),
        (m = b),
        (D = S.accept),
        (I = (0, u.useMemo)(
            function () {
                return (0, a.V)(null != S.accept, "accept must be defined"), Array.isArray(D) ? D : [D];
            },
            [D],
        )),
        (0, o.E)(
            function () {
                var e,
                    t =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, n.l)(I, m, y))) ||
                        (function (e) {
                            var t,
                                r,
                                n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
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
                                if ("string" == typeof e) return l(e, 2);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return l(e, 2);
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
            },
            [
                y,
                k,
                m,
                O,
                I.map(function (e) {
                    return e.toString();
                }).join("|"),
            ],
        ),
        [
            (0, h.j)(S.collect, k, O),
            (0, u.useMemo)(
                function () {
                    return O.hooks.dropTarget();
                },
                [O],
            ),
        ]
    );
}
