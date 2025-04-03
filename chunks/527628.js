r.d(t, { Z: () => a });
let a = new (class {
    add(e, t, r) {
        if ('string' != typeof arguments[0]) {
            for (var e in arguments[0]) this.add(e, arguments[0][e], arguments[1]);
            return;
        }
        (Array.isArray(e) ? e : [e]).forEach(function (e) {
            (this[e] = this[e] || []), t && this[e][r ? 'unshift' : 'push'](t);
        }, this);
    }
    run(e, t) {
        (this[e] = this[e] || []),
            this[e].forEach(function (e) {
                e.call(t && t.context ? t.context : t, t);
            });
    }
})();
