r.d(t, { y: () => s });
var n = r(212246),
    i = r(190334),
    o = r(218436),
    a = r(98235),
    u = r(44720);
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function s(e, t, r) {
    var s = (0, i.u)(),
        l = (0, u.A)(e, t),
        d = (0, a.e)(e);
    (0, o.E)(
        function () {
            var e,
                i =
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })((e = (0, n.l)(d, l, s))) ||
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
                            if ("string" == typeof e) return c(e, 2);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            if (
                                ("Object" === t && e.constructor && (t = e.constructor.name),
                                "Map" === t || "Set" === t)
                            )
                                return Array.from(e);
                            if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return c(e, 2);
                        }
                    })(e) ||
                    (function () {
                        throw TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                    })(),
                o = i[0],
                a = i[1];
            return t.receiveHandlerId(o), r.receiveHandlerId(o), a;
        },
        [
            s,
            t,
            l,
            r,
            d
                .map(function (e) {
                    return e.toString();
                })
                .join("|"),
        ],
    );
}
