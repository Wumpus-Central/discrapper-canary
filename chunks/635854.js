n.d(t, { Z: () => i });
var r = n(139232);
let i = (function (e) {
    function t(t, n, r) {
        var i = e.call(this, t, n) || this;
        return (i.iterator = r), i;
    }
    return (
        (0, r.ZT)(t, e),
        (t.prototype.add = function (e) {
            return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
        }),
        t
    );
})(n(135891).Z);
