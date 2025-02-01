n.d(t, { Z: () => r });
var i = n(146150);
let r = (function (e) {
    function t(t, n, i) {
        var r = e.call(this, t, n) || this;
        return (r.iterator = i), r;
    }
    return (
        (0, i.ZT)(t, e),
        (t.prototype.add = function (e) {
            return !!this.iterator(e, this._result.length) && (this._result.push(e), !0);
        }),
        t
    );
})(n(135891).Z);
