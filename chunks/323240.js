var r = n(48511),
    i = n(815329),
    o = function (e, t, n) {
        for (var r, i = e; null != (r = i.next); i = r) if (r.key === t) return (i.next = r.next), n || ((r.next = e.next), (e.next = r)), r;
    },
    a = function (e, t) {
        if (e) {
            var n = o(e, t);
            return n && n.value;
        }
    },
    s = function (e, t, n) {
        var r = o(e, t);
        r
            ? (r.value = n)
            : (e.next = {
                  key: t,
                  next: e.next,
                  value: n
              });
    },
    l = function (e, t) {
        return !!e && !!o(e, t);
    },
    c = function (e, t) {
        if (e) return o(e, t, !0);
    };
e.exports = function () {
    var e,
        t = {
            assert: function (e) {
                if (!t.has(e)) throw new i('Side channel does not contain ' + r(e));
            },
            delete: function (t) {
                var n = e && e.next,
                    r = c(e, t);
                return r && n && n === r && (e = void 0), !!r;
            },
            get: function (t) {
                return a(e, t);
            },
            has: function (t) {
                return l(e, t);
            },
            set: function (t, n) {
                e || (e = { next: void 0 }), s(e, t, n);
            }
        };
    return t;
};
