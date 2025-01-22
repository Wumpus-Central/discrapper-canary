r.d(n, {
    e: function () {
        return u;
    }
});
var i = r(708644);
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function s(e, n, r) {
    return n && o(e.prototype, n), r && o(e, r), e;
}
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
var u = (function () {
    function e(n) {
        a(this, e), l(this, 'entered', []), l(this, 'isNodeInDocument', void 0), (this.isNodeInDocument = n);
    }
    return (
        s(e, [
            {
                key: 'enter',
                value: function (e) {
                    var n = this,
                        r = this.entered.length,
                        a = function (r) {
                            return n.isNodeInDocument(r) && (!r.contains || r.contains(e));
                        };
                    return (this.entered = (0, i.G0)(this.entered.filter(a), [e])), 0 === r && this.entered.length > 0;
                }
            },
            {
                key: 'leave',
                value: function (e) {
                    var n = this.entered.length;
                    return (this.entered = (0, i.zu)(this.entered.filter(this.isNodeInDocument), e)), n > 0 && 0 === this.entered.length;
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
