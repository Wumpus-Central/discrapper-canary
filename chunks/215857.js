function i(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function a(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function o(e, n, r) {
    return n && a(e.prototype, n), r && a(e, r), e;
}
function s(e, n, r) {
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
r.d(n, {
    r: function () {
        return l;
    }
});
var l = (function () {
    function e(n, r) {
        i(this, e), s(this, 'ownerDocument', null), s(this, 'globalContext', void 0), s(this, 'optionsArgs', void 0), (this.globalContext = n), (this.optionsArgs = r);
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
