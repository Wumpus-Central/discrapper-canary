function r(e, n) {
    var r = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
    if (!r) {
        if (Array.isArray(e) || (r = i(e)) || (n && e && 'number' == typeof e.length)) {
            r && (e = r);
            var a = 0,
                o = function () {};
            return {
                s: o,
                n: function () {
                    return a >= e.length
                        ? { done: !0 }
                        : {
                              done: !1,
                              value: e[a++]
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
    var s,
        l = !0,
        u = !1;
    return {
        s: function () {
            r = r.call(e);
        },
        n: function () {
            var e = r.next();
            return (l = e.done), e;
        },
        e: function (e) {
            (u = !0), (s = e);
        },
        f: function () {
            try {
                !l && null != r.return && r.return();
            } finally {
                if (u) throw s;
            }
        }
    };
}
function i(e, n) {
    if (e) {
        if ('string' == typeof e) return a(e, n);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, n);
    }
}
function a(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
    return i;
}
(n.type = (e) => e.split(/ *; */).shift()),
    (n.params = (e) => {
        let n = {};
        var i,
            a = r(e.split(/ *; */));
        try {
            for (a.s(); !(i = a.n()).done; ) {
                let e = i.value.split(/ *= */),
                    r = e.shift(),
                    a = e.shift();
                r && a && (n[r] = a);
            }
        } catch (e) {
            a.e(e);
        } finally {
            a.f();
        }
        return n;
    }),
    (n.parseLinks = (e) => {
        let n = {};
        var i,
            a = r(e.split(/ *, */));
        try {
            for (a.s(); !(i = a.n()).done; ) {
                let e = i.value.split(/ *; */),
                    r = e[0].slice(1, -1);
                n[e[1].split(/ *= */)[1].slice(1, -1)] = r;
            }
        } catch (e) {
            a.e(e);
        } finally {
            a.f();
        }
        return n;
    }),
    (n.cleanHeader = (e, n) => (delete e['content-type'], delete e['content-length'], delete e['transfer-encoding'], delete e.host, n && (delete e.authorization, delete e.cookie), e)),
    (n.isObject = (e) => null !== e && 'object' == typeof e),
    (n.hasOwn =
        Object.hasOwn ||
        function (e, n) {
            if (null == e) throw TypeError('Cannot convert undefined or null to object');
            return Object.prototype.hasOwnProperty.call(Object(e), n);
        }),
    (n.mixin = (e, r) => {
        for (let i in r) n.hasOwn(r, i) && (e[i] = r[i]);
    });
