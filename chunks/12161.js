"use strict";
var n = r(439619),
    o = r(906046),
    i = r(315646),
    a = r(741623),
    s = n("%Map%", !0),
    l = o("Map.prototype.get", !0),
    u = o("Map.prototype.set", !0),
    c = o("Map.prototype.has", !0),
    f = o("Map.prototype.delete", !0),
    p = o("Map.prototype.size", !0);
e.exports =
    !!s &&
    function () {
        var e,
            t = {
                assert: function (e) {
                    if (!t.has(e)) throw new a("Side channel does not contain " + i(e));
                },
                delete: function (t) {
                    if (e) {
                        var r = f(e, t);
                        return 0 === p(e) && (e = void 0), r;
                    }
                    return !1;
                },
                get: function (t) {
                    if (e) return l(e, t);
                },
                has: function (t) {
                    return !!e && c(e, t);
                },
                set: function (t, r) {
                    e || (e = new s()), u(e, t, r);
                },
            };
        return t;
    };
