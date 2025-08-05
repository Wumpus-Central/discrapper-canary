function e(n) {
    return (e =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (n) {
                  return typeof n;
              }
            : function (n) {
                  return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
              })(n);
}
t.d(r, { O: () => i });
function o(n, r, t) {
    return (
        r in n
            ? Object.defineProperty(n, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (n[r] = t),
        n
    );
}
var i = (function () {
    var n;
    function r(n, t, e) {
        if (!(this instanceof r)) throw TypeError('Cannot call a class as a function');
        (o(this, 'spec', void 0), o(this, 'monitor', void 0), o(this, 'connector', void 0), (this.spec = n), (this.monitor = t), (this.connector = e));
    }
    return (
        (n = [
            {
                key: 'beginDrag',
                value: function () {
                    var n,
                        r = this.spec,
                        t = this.monitor,
                        o = null;
                    return null != (n = 'object' === e(r.item) ? r.item : 'function' == typeof r.item ? r.item(t) : {}) ? n : null;
                }
            },
            {
                key: 'canDrag',
                value: function () {
                    var n = this.spec,
                        r = this.monitor;
                    return 'boolean' == typeof n.canDrag ? n.canDrag : 'function' != typeof n.canDrag || n.canDrag(r);
                }
            },
            {
                key: 'isDragging',
                value: function (n, r) {
                    var t = this.spec,
                        e = this.monitor,
                        o = t.isDragging;
                    return o ? o(e) : r === n.getSourceId();
                }
            },
            {
                key: 'endDrag',
                value: function () {
                    var n = this.spec,
                        r = this.monitor,
                        t = this.connector,
                        e = n.end;
                    (e && e(r.getItem(), r), t.reconnect());
                }
            }
        ]),
        (function (n, r) {
            for (var t = 0; t < r.length; t++) {
                var e = r[t];
                ((e.enumerable = e.enumerable || !1), (e.configurable = !0), 'value' in e && (e.writable = !0), Object.defineProperty(n, e.key, e));
            }
        })(r.prototype, n),
        r
    );
})();
