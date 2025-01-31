function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function r(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function a(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
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
n.d(t, { r: () => o });
var o = (function () {
    function e(t, n) {
        i(this, e), s(this, 'ownerDocument', null), s(this, 'globalContext', void 0), s(this, 'optionsArgs', void 0), (this.globalContext = t), (this.optionsArgs = n);
    }
    return (
        a(e, [
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
                    return null !== (e = this.globalContext) && void 0 !== e && e.document ? this.globalContext.document : this.window ? this.window.document : void 0;
                }
            },
            {
                key: 'rootElement',
                get: function () {
                    var e;
                    return (null === (e = this.optionsArgs) || void 0 === e ? void 0 : e.rootElement) || this.window;
                }
            }
        ]),
        e
    );
})();
