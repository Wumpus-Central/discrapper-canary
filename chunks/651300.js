r.d(t, { H: () => p });
var n = r(72867),
    i = r(225995),
    o = r(914707),
    a = r(321733),
    s = r(582128);
function u(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
var c = (function () {
    var e;
    function t(e, r) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        u(this, "spec", void 0), u(this, "monitor", void 0), (this.spec = e), (this.monitor = r);
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
var f = r(25444),
    d = r(682012),
    h = r(207220),
    g = r(619740);
function p(e, t) {
    var r,
        u,
        p,
        y,
        v,
        b,
        m,
        w,
        I,
        O = (0, f.I)(e, t),
        k =
            ((r = (0, i.u)()),
            (0, s.useMemo)(
                function () {
                    return new d.b(r);
                },
                [r],
            )),
        D =
            ((u = O.options),
            (p = (0, i.u)()),
            (y = (0, s.useMemo)(
                function () {
                    return new h.P(p.getBackend());
                },
                [p],
            )),
            (0, o.E)(
                function () {
                    return (
                        (y.dropTargetOptions = u || null),
                        y.reconnect(),
                        function () {
                            return y.disconnectDropTarget();
                        }
                    );
                },
                [u],
            ),
            y);
    return (
        (v = (0, i.u)()),
        (b = (0, s.useMemo)(
            function () {
                return new c(O, k);
            },
            [k],
        )),
        (0, s.useEffect)(
            function () {
                b.spec = O;
            },
            [O],
        ),
        (m = b),
        (w = O.accept),
        (I = (0, s.useMemo)(
            function () {
                return (0, a.V)(null != O.accept, "accept must be defined"), Array.isArray(w) ? w : [w];
            },
            [w],
        )),
        (0, o.E)(
            function () {
                var e,
                    t =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, n.l)(I, m, v))) ||
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
                return k.receiveHandlerId(r), D.receiveHandlerId(r), i;
            },
            [
                v,
                k,
                m,
                D,
                I.map(function (e) {
                    return e.toString();
                }).join("|"),
            ],
        ),
        [
            (0, g.j)(O.collect, k, D),
            (0, s.useMemo)(
                function () {
                    return D.hooks.dropTarget();
                },
                [D],
            ),
        ]
    );
}
