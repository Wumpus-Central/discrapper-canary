e.d(t, { V: () => i });
var n = e(64700),
    o = e(190334),
    u = e(87515);
function a(r, t) {
    (null == t || t > r.length) && (t = r.length);
    for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
    return n;
}
function i(r) {
    var t,
        e = (0, o.u)().getMonitor(),
        i =
            (function (r) {
                if (Array.isArray(r)) return r;
            })((t = (0, u.F)(e, r))) ||
            (function (r) {
                var t,
                    e,
                    n = null == r ? null : ("u" > typeof Symbol && r[Symbol.iterator]) || r["@@iterator"];
                if (null != n) {
                    var o = [],
                        u = !0,
                        a = !1;
                    try {
                        for (n = n.call(r); !(u = (t = n.next()).done) && (o.push(t.value), 2 !== o.length); u = !0);
                    } catch (r) {
                        (a = !0), (e = r);
                    } finally {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (a) throw e;
                        }
                    }
                    return o;
                }
            })(t) ||
            (function (r) {
                if (r) {
                    if ("string" == typeof r) return a(r, 2);
                    var t = Object.prototype.toString.call(r).slice(8, -1);
                    if (("Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(r);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(r, 2);
                }
            })(t) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        f = i[0],
        l = i[1];
    return (
        (0, n.useEffect)(function () {
            return e.subscribeToOffsetChange(l);
        }),
        (0, n.useEffect)(function () {
            return e.subscribeToStateChange(l);
        }),
        f
    );
}
