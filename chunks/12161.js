"use strict";
var n = r(439619),
    i = r(906046),
    o = r(315646),
    a = r(741623),
    s = n("%Map%", !0),
    l = i("Map.prototype.get", !0),
    u = i("Map.prototype.set", !0),
    c = i("Map.prototype.has", !0),
    f = i("Map.prototype.delete", !0),
    d = i("Map.prototype.size", !0);
e.exports =
    !!s &&
    function () {
        var e,
            t = {
                assert: function (e) {
                    if (!t.has(e)) throw new a("Side channel does not contain " + o(e));
                },
                delete: function (t) {
                    if (e) {
                        var r = f(e, t);
                        return 0 === d(e) && (e = void 0), r;
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
