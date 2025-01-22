r.d(n, {
    C: function () {
        return l;
    }
});
var i = r(135891),
    a = r(695170),
    o = r(686942);
function s(e, n) {
    if (Array.isArray(e))
        return (
            !!Array.isArray(n) &&
            e.length === n.length &&
            e.every(function (e, r) {
                return e.getTime() === n[r].getTime();
            })
        );
    return e instanceof Date ? n instanceof Date && e.getTime() === n.getTime() : e === n;
}
var l = (function () {
    function e() {
        (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
    }
    return (
        (e.prototype._cacheAdd = function (e, n, r) {
            n && (n = n instanceof Date ? (0, a.d9)(n) : (0, a.L1)(n)), 'all' === e ? (this.all = n) : ((r._value = n), this[e].push(r));
        }),
        (e.prototype._cacheGet = function (e, n) {
            var r = !1,
                l = n ? Object.keys(n) : [],
                u = function (e) {
                    for (var r = 0; r < l.length; r++) {
                        var i = l[r];
                        if (!s(n[i], e[i])) return !0;
                    }
                    return !1;
                },
                c = this[e];
            if ('all' === e) r = this.all;
            else if ((0, o.kJ)(c))
                for (var d = 0; d < c.length; d++) {
                    var f = c[d];
                    if (!(l.length && u(f))) {
                        r = f._value;
                        break;
                    }
                }
            if (!r && this.all) {
                for (var p = new i.Z(e, n), d = 0; d < this.all.length && p.accept(this.all[d]); d++);
                (r = p.getValue()), this._cacheAdd(e, r, n);
            }
            return (0, o.kJ)(r) ? (0, a.L1)(r) : r instanceof Date ? (0, a.d9)(r) : r;
        }),
        e
    );
})();
