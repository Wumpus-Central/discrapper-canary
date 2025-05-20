function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function i(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function o(e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
}
function a(e, t, n) {
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
n.d(t, { r: () => s });
var s = (function () {
    function e(t, n) {
        r(this, e), a(this, 'ownerDocument', null), a(this, 'globalContext', void 0), a(this, 'optionsArgs', void 0), (this.globalContext = t), (this.optionsArgs = n);
    }
    return (
        o(e, [
            {
                key: 'window',
                get: function () {
                    return this.globalContext ? this.globalContext : 'undefined' != typeof window ? window : void 0;
                }
            },
            {
                key: 'document',
                get: function () {
                    var e;
                    return null != (e = this.globalContext) && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
                }
            },
            {
                key: 'rootElement',
                get: function () {
                    var e;
                    return (null == (e = this.optionsArgs) ? void 0 : e.rootElement) || this.window;
                }
            }
        ]),
        e
    );
})();
