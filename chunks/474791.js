"use strict";
r.d(t, { t: () => s });
var n = r(212246),
    i = r(218436),
    o = r(899507),
    a = r(190334),
    u = r(860461);
function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
    return n;
}
function s(e, t, r) {
    var s = (0, a.u)(),
        l = (0, o.B)(e, t, r),
        d = (0, u.g)(e);
    (0, i.E)(
        function () {
            if (null != d) {
                var e,
                    i =
                        (function (e) {
                            if (Array.isArray(e)) return e;
                        })((e = (0, n.V)(d, l, s))) ||
                        (function (e, t) {
                            var r,
                                n,
                                i = null == e ? null : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                            if (null != i) {
                                var o = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (
                                        i = i.call(e);
                                        !(a = (r = i.next()).done) && (o.push(r.value), 2 !== o.length);
                                        a = !0
                                    );
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
                        })(e, 2) ||
                        (function (e, t) {
                            if (e) {
                                if ("string" == typeof e) return c(e, 2);
                                var r = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === r && e.constructor && (r = e.constructor.name),
                                    "Map" === r || "Set" === r)
                                )
                                    return Array.from(e);
                                if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                                    return c(e, 2);
                            }
                        })(e, 2) ||
                        (function () {
                            throw TypeError(
                                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                            );
                        })(),
                    o = i[0],
                    a = i[1];
                return t.receiveHandlerId(o), r.receiveHandlerId(o), a;
            }
        },
        [s, t, r, l, d],
    );
}
