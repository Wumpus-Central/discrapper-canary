function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var i = n(746117),
    o = n(856084),
    a = n(581079);
e.exports = (function () {
    function e(e) {
        r(this, "_defaultDir", void 0),
            r(this, "_lastDir", void 0),
            e ? o.isStrong(e) || a(!1) : (e = o.getGlobalDir()),
            (this._defaultDir = e),
            this.reset();
    }
    var t = e.prototype;
    return (
        (t.reset = function () {
            this._lastDir = this._defaultDir;
        }),
        (t.getDirection = function (e) {
            return (this._lastDir = i.getDirection(e, this._lastDir)), this._lastDir;
        }),
        e
    );
})();
