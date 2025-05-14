function n(e, t) {
    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!n) {
        if (Array.isArray(e) || (n = r(e)) || (t && e && 'number' == typeof e.length)) {
            n && (e = n);
            var i = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return i >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[i++]
                          };
                },
                e: function (e) {
                    throw e;
                },
                f: o
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var a,
        s = !0,
        l = !1;
    return {
        s: function () {
            n = n.call(e);
        },
        n: function () {
            var e = n.next();
            return (s = e.done), e;
        },
        e: function (e) {
            (l = !0), (a = e);
        },
        f: function () {
            try {
                s || null == n.return || n.return();
            } finally {
                if (l) throw a;
            }
        }
    };
}
function r(e, t) {
    if (e) {
        if ('string' == typeof e) return i(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return i(e, t);
    }
}
function i(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
    return r;
}
(t.type = (e) => e.split(/ *; */).shift()),
    (t.params = (e) => {
        let t = {};
        var r,
            i = n(e.split(/ *; */));
        try {
            for (i.s(); !(r = i.n()).done; ) {
                let e = r.value.split(/ *= */),
                    n = e.shift(),
                    i = e.shift();
                n && i && (t[n] = i);
            }
        } catch (e) {
            i.e(e);
        } finally {
            i.f();
        }
        return t;
    }),
    (t.parseLinks = (e) => {
        let t = {};
        var r,
            i = n(e.split(/ *, */));
        try {
            for (i.s(); !(r = i.n()).done; ) {
                let e = r.value.split(/ *; */),
                    n = e[0].slice(1, -1);
                t[e[1].split(/ *= */)[1].slice(1, -1)] = n;
            }
        } catch (e) {
            i.e(e);
        } finally {
            i.f();
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
        for (let r in n) t.hasOwn(n, r) && (e[r] = n[r]);
    });
