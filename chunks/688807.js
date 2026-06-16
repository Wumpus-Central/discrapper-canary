"use strict";
n.d(t, { V: () => o });
var i = n(64700),
    r = n(190334),
    s = n(87515);
function a(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
function o(e) {
    var t,
        n = (0, r.u)().getMonitor(),
        o =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((t = (0, s.F)(n, e))) ||
            (function (e) {
                var t,
                    n,
                    i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != i) {
                    var r = [],
                        s = !0,
                        a = !1;
                    try {
                        for (i = i.call(e); !(s = (t = i.next()).done) && (r.push(t.value), 2 !== r.length); s = !0);
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
        l = o[0],
        u = o[1];
    return (
        (0, i.useEffect)(function () {
            return n.subscribeToOffsetChange(u);
        }),
        (0, i.useEffect)(function () {
            return n.subscribeToStateChange(u);
        }),
        l
    );
}
