n.d(t, { e: () => l });
var i = n(708644);
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function s(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
}
function o(e, t, n) {
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
        r(this, e), o(this, 'entered', []), o(this, 'isNodeInDocument', void 0), (this.isNodeInDocument = t);
    }
    return (
        s(e, [
            {
                key: 'enter',
                value: function (e) {
                    var t = this,
                        n = this.entered.length,
                        r = function (n) {
                            return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
                        };
                    return (this.entered = (0, i.G0)(this.entered.filter(r), [e])), 0 === n && this.entered.length > 0;
                }
            },
            {
                key: 'leave',
                value: function (e) {
                    var t = this.entered.length;
                    return (this.entered = (0, i.zu)(this.entered.filter(this.isNodeInDocument), e)), t > 0 && 0 === this.entered.length;
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
