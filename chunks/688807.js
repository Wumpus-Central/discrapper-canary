"use strict";
r.d(t, { V: () => s });
var n = r(64700),
    i = r(190334),
    o = r(87515);
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function s(e) {
    var t,
        r = (0, i.u)().getMonitor(),
        s =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((t = (0, o.F)(r, e))) ||
            (function (e) {
                var t,
                    r,
                    n = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                    var i = [],
                        o = !0,
                        a = !1;
                    try {
                        for (n = n.call(e); !(o = (t = n.next()).done) && (i.push(t.value), 2 !== i.length); o = !0);
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
            })(t) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return a(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, 2);
                }
            })(t) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        u = s[0],
        c = s[1];
    return (
        (0, n.useEffect)(function () {
            return r.subscribeToOffsetChange(c);
        }),
        (0, n.useEffect)(function () {
            return r.subscribeToStateChange(c);
        }),
        u
    );
}
