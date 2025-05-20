var r = n(745872),
    i = n(166691),
    o = n(48511),
    a = n(815329),
    s = r('%Map%', !0),
    l = i('Map.prototype.get', !0),
    c = i('Map.prototype.set', !0),
    u = i('Map.prototype.has', !0),
    d = i('Map.prototype.delete', !0),
    f = i('Map.prototype.size', !0);
e.exports =
    !!s &&
    function () {
        var e,
            t = {
                assert: function (e) {
                    if (!t.has(e)) throw new a('Side channel does not contain ' + o(e));
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
                    e || (e = new s()), c(e, t, n);
                }
            };
        return t;
    };
