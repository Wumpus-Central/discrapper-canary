n.d(t, { e: () => l });
var r = n(708644);
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function a(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), e;
}
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var l = (function () {
    function e(t) {
        i(this, e), s(this, 'entered', []), s(this, 'isNodeInDocument', void 0), (this.isNodeInDocument = t);
    }
    return (
        a(e, [
            {
                key: 'enter',
                value: function (e) {
                    var t = this,
                        n = this.entered.length,
                        i = function (n) {
                            return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
                        };
                    return (this.entered = (0, r.G0)(this.entered.filter(i), [e])), 0 === n && this.entered.length > 0;
                }
            },
            {
                key: 'leave',
                value: function (e) {
                    var t = this.entered.length;
                    return (this.entered = (0, r.zu)(this.entered.filter(this.isNodeInDocument), e)), t > 0 && 0 === this.entered.length;
                }
            },
            {
                key: 'reset',
                value: function () {
                    this.entered = [];
                }
            }
        ]),
        e
    );
})();
