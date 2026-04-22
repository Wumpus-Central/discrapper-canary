"use strict";
n.d(t, { H: () => a });
var r = n(64700),
    i = n(75375);
function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
var a = function () {
    var e,
        t =
            (function (e) {
                if (Array.isArray(e)) return e;
            })((e = (0, r.useState)(!1))) ||
            (function (e) {
                if ("u" > typeof Symbol && Symbol.iterator in Object(e)) {
                    var t = [],
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (
                            var s, a = e[Symbol.iterator]();
                            !(n = (s = a.next()).done) && (t.push(s.value), 2 !== t.length);
                            n = !0
                        );
                    } catch (e) {
                        (r = !0), (i = e);
                    } finally {
                        try {
                            n || null == a.return || a.return();
                        } finally {
                            if (r) throw i;
                        }
                    }
                    return t;
                }
            })(e) ||
            (function (e) {
                if (e) {
                    if ("string" == typeof e) return s(e, 2);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t))
                        return Array.from(e);
                    if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return s(e, 2);
                }
            })(e) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })(),
        n = t[0],
        a = t[1],
        o = (0, r.useContext)(i.M);
    return (
        (0, r.useEffect)(
            function () {
                var e,
                    t = null == o || null == (e = o.dragDropManager) ? void 0 : e.getBackend(),
                    n = {
                        backendChanged: function (e) {
                            a(e.previewEnabled());
                        },
                    };
                return (
                    a(t.previewEnabled()),
                    t.previewsList().register(n),
                    function () {
                        t.previewsList().unregister(n);
                    }
                );
            },
            [o, o.dragDropManager],
        ),
        n
    );
};
