n.d(t, { C: () => o });
var i = n(135891),
    r = n(695170),
    a = n(686942);
function s(e, t) {
    return Array.isArray(e)
        ? !!Array.isArray(t) &&
              e.length === t.length &&
              e.every(function (e, n) {
                  return e.getTime() === t[n].getTime();
              })
        : e instanceof Date
          ? t instanceof Date && e.getTime() === t.getTime()
          : e === t;
}
var o = (function () {
    function e() {
        (this.all = !1), (this.before = []), (this.after = []), (this.between = []);
    }
    return (
        (e.prototype._cacheAdd = function (e, t, n) {
            t && (t = t instanceof Date ? (0, r.d9)(t) : (0, r.L1)(t)), 'all' === e ? (this.all = t) : ((n._value = t), this[e].push(n));
        }),
        (e.prototype._cacheGet = function (e, t) {
            var n = !1,
                o = t ? Object.keys(t) : [],
                l = function (e) {
                    for (var n = 0; n < o.length; n++) {
                        var i = o[n];
                        if (!s(t[i], e[i])) return !0;
                    }
                    return !1;
                },
                u = this[e];
            if ('all' === e) n = this.all;
            else if ((0, a.kJ)(u))
                for (var c = 0; c < u.length; c++) {
                    var d = u[c];
                    if (!(o.length && l(d))) {
                        n = d._value;
                        break;
                    }
                }
            if (!n && this.all) {
                for (var f = new i.Z(e, t), c = 0; c < this.all.length && f.accept(this.all[c]); c++);
                (n = f.getValue()), this._cacheAdd(e, n, t);
            }
            return (0, a.kJ)(n) ? (0, r.L1)(n) : n instanceof Date ? (0, r.d9)(n) : n;
        }),
        e
    );
})();
