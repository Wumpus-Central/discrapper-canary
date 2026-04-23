"use strict";
n.d(t, { C: () => s });
var r = n(313027);
function i(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
var s = (function () {
    var e;
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        i(this, "entered", []), i(this, "isNodeInDocument", void 0), (this.isNodeInDocument = e);
    }
    return (
        (e = [
            {
                key: "enter",
                value: function (e) {
                    var t = this,
                        n = this.entered.length;
                    return (
                        (this.entered = (0, r.KC)(
                            this.entered.filter(function (n) {
                                return t.isNodeInDocument(n) && (!n.contains || n.contains(e));
                            }),
                            [e],
                        )),
                        0 === n && this.entered.length > 0
                    );
                },
            },
            {
                key: "leave",
                value: function (e) {
                    var t = this.entered.length;
                    return (
                        (this.entered = (0, r.FF)(this.entered.filter(this.isNodeInDocument), e)),
                        t > 0 && 0 === this.entered.length
                    );
                },
            },
            {
                key: "reset",
                value: function () {
                    this.entered = [];
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
