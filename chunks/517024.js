function n(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!n) {
        if (Array.isArray(e) || (n = i(e)) || (t && e && 'number' == typeof e.length)) {
            n && (e = n);
            var r = 0,
                a = function () {};
            return {
                s: a,
                n: function () {
                    return r >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[r++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: a
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var s,
        o = !0,
        l = !1;
    return {
        s: function () {
            n = n.call(e);
        },
        n: function () {
            var e = n.next();
            return (o = e.done), e;
        },
        e: function (e) {
            (l = !0), (s = e);
        },
        f: function () {
            try {
                o || null == n.return || n.return();
            } finally {
                if (l) throw s;
            }
        }
    };
}
function i(e, t) {
    if (e) {
        if ('string' == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
    }
}
function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
    return i;
}
(t.type = (e) => e.split(/ *; */).shift()),
    (t.params = (e) => {
        let t = {};
        var i,
            r = n(e.split(/ *; */));
        try {
            for (r.s(); !(i = r.n()).done; ) {
                let e = i.value.split(/ *= */),
                    n = e.shift(),
                    r = e.shift();
                n && r && (t[n] = r);
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
        return t;
    }),
    (t.parseLinks = (e) => {
        let t = {};
        var i,
            r = n(e.split(/ *, */));
        try {
            for (r.s(); !(i = r.n()).done; ) {
                let e = i.value.split(/ *; */),
                    n = e[0].slice(1, -1);
                t[e[1].split(/ *= */)[1].slice(1, -1)] = n;
            }
        } catch (e) {
            r.e(e);
        } finally {
            r.f();
        }
        return t;
    }),
    (t.cleanHeader = (e, t) => (delete e['content-type'], delete e['content-length'], delete e['transfer-encoding'], delete e.host, t && (delete e.authorization, delete e.cookie), e)),
    (t.isObject = (e) => null !== e && 'object' == typeof e),
    (t.hasOwn =
        Object.hasOwn ||
        function (e, t) {
            if (null == e) throw TypeError('Cannot convert undefined or null to object');
            return Object.prototype.hasOwnProperty.call(Object(e), t);
        }),
    (t.mixin = (e, n) => {
        for (let i in n) t.hasOwn(n, i) && (e[i] = n[i]);
    });
