"use strict";
n.d(t, { i: () => i });
var r = n(330935),
    i = (function () {
        var e;
        function t() {
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        }
        return (
            (e = [
                {
                    key: "run",
                    value: function (e, t, n, i) {
                        var s = this.parse(e, t, n, i);
                        return s
                            ? {
                                  setter: new r.Bc(s.value, this.validate, this.set, this.priority, this.subPriority),
                                  rest: s.rest,
                              }
                            : null;
                    },
                },
                {
                    key: "validate",
                    value: function (e, t, n) {
                        return !0;
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
