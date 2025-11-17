e.d(n, { e: () => o });
function r(t, n, e) {
    return (
        n in t
            ? Object.defineProperty(t, n, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[n] = e),
        t
    );
}
var o = (function () {
    var t;
    function n(t, e) {
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        r(this, "spec", void 0), r(this, "monitor", void 0), (this.spec = t), (this.monitor = e);
    }
    return (
        (t = [
            {
                key: "canDrop",
                value: function () {
                    var t = this.spec,
                        n = this.monitor;
                    return !t.canDrop || t.canDrop(n.getItem(), n);
                },
            },
            {
                key: "hover",
                value: function () {
                    var t = this.spec,
                        n = this.monitor;
                    t.hover && t.hover(n.getItem(), n);
                },
            },
            {
                key: "drop",
                value: function () {
                    var t = this.spec,
                        n = this.monitor;
                    if (t.drop) return t.drop(n.getItem(), n);
                },
            },
        ]),
        (function (t, n) {
            for (var e = 0; e < n.length; e++) {
                var r = n[e];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        })(n.prototype, t),
        n
    );
})();
