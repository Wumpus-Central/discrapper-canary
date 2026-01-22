var r = n(439619),
    i = n(906046),
    a = n(315646),
    s = n(741623),
    o = r("%Map%", !0),
    l = i("Map.prototype.get", !0),
    c = i("Map.prototype.set", !0),
    u = i("Map.prototype.has", !0),
    d = i("Map.prototype.delete", !0),
    f = i("Map.prototype.size", !0);
e.exports =
    !!o &&
    function () {
        var e,
            t = {
                assert: function (e) {
                    if (!t.has(e)) throw new s("Side channel does not contain " + a(e));
                },
                delete: function (t) {
                    if (e) {
                        var n = d(e, t);
                        return 0 === f(e) && (e = void 0), n;
                    }
                    return !1;
                },
                get: function (t) {
                    if (e) return l(e, t);
                },
                has: function (t) {
                    return !!e && u(e, t);
                },
                set: function (t, n) {
                    e || (e = new o()), c(e, t, n);
                },
            };
        return t;
    };
