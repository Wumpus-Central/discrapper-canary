var r = n(706165),
    i = n(260674)(),
    o = n(815329),
    a = {
        assert: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof t) throw new o('`slot` must be a string');
            if ((i.assert(e), !a.has(e, t))) throw new o('`' + t + '` is not present on `O`');
        },
        get: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof t) throw new o('`slot` must be a string');
            var n = i.get(e);
            return n && n['$' + t];
        },
        has: function (e, t) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof t) throw new o('`slot` must be a string');
            var n = i.get(e);
            return !!n && r(n, '$' + t);
        },
        set: function (e, t, n) {
            if (!e || ('object' != typeof e && 'function' != typeof e)) throw new o('`O` is not an object');
            if ('string' != typeof t) throw new o('`slot` must be a string');
            var r = i.get(e);
            r || ((r = {}), i.set(e, r)), (r['$' + t] = n);
        }
    };
Object.freeze && Object.freeze(a), (e.exports = a);
