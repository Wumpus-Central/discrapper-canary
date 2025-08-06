t.d(r, { e: () => o });
function e(n, r, t) {
    return (
        r in n
            ? Object.defineProperty(n, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (n[r] = t),
        n
    );
}
var o = (function () {
    var n;
    function r(n, t) {
        if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
        e(this, "spec", void 0), e(this, "monitor", void 0), (this.spec = n), (this.monitor = t);
    }
    return (
        (n = [
            {
                key: "canDrop",
                value: function () {
                    var n = this.spec,
                        r = this.monitor;
                    return !n.canDrop || n.canDrop(r.getItem(), r);
                },
            },
            {
                key: "hover",
                value: function () {
                    var n = this.spec,
                        r = this.monitor;
                    n.hover && n.hover(r.getItem(), r);
                },
            },
            {
                key: "drop",
                value: function () {
                    var n = this.spec,
                        r = this.monitor;
                    if (n.drop) return n.drop(r.getItem(), r);
                },
            },
        ]),
        (function (n, r) {
            for (var t = 0; t < r.length; t++) {
                var e = r[t];
                (e.enumerable = e.enumerable || !1),
                    (e.configurable = !0),
                    "value" in e && (e.writable = !0),
                    Object.defineProperty(n, e.key, e);
            }
        })(r.prototype, n),
        r
    );
})();
