"use strict";
n.d(t, { s: () => i });
function r(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var i = (function () {
    var e;
    function t(e, n) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        r(this, "ownerDocument", null),
            r(this, "globalContext", void 0),
            r(this, "optionsArgs", void 0),
            (this.globalContext = e),
            (this.optionsArgs = n);
    }
    return (
        (e = [
            {
                key: "window",
                get: function () {
                    return this.globalContext ? this.globalContext : "u" > typeof window ? window : void 0;
                },
            },
            {
                key: "document",
                get: function () {
                    var e;
                    return null != (e = this.globalContext) && e.document
                        ? this.globalContext.document
                        : this.window
                          ? this.window.document
                          : void 0;
                },
            },
            {
                key: "rootElement",
                get: function () {
                    var e;
                    return (null == (e = this.optionsArgs) ? void 0 : e.rootElement) || this.window;
                },
            },
        ]),
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(t.prototype, e),
        t
    );
})();
