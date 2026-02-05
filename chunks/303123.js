r.d(t, { F: () => a });
var n = r(218436),
    i = r(87515);
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function a(e, t, r) {
    var a,
        u =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((a = (0, i.F)(e, t, r))) ||
            (function (e, t) {
                var r,
                    n,
                    i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != i) {
                    var o = [],
                        a = !0,
                        u = !1;
                    try {
                        for (i = i.call(e); !(a = (r = i.next()).done) && (o.push(r.value), 2 !== o.length); a = !0);
                    } catch (e) {
                        (u = !0), (n = e);
                    } finally {
                        try {
                            a || null == i.return || i.return();
                        } finally {
                            if (u) throw n;
                        }
                    }
                    return o;
                }
            })(a, 2) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return o(e, 2);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r))
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, 2);
                }
            })(a, 2) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        c = u[0],
        s = u[1];
    return (
        (0, n.E)(
            function () {
                var t = e.getHandlerId();
                if (null != t) return e.subscribeToStateChange(s, { handlerIds: [t] });
            },
            [e, s],
        ),
        c
    );
}
