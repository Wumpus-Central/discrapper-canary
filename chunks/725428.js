"use strict";
n.d(t, { p: () => i });
var r = n(662087),
    i = (function () {
        var e;
        function t(e, n) {
            var r = this;
            if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
            (this.isSetUp = !1),
                (this.handleRefCountChange = function () {
                    var e = r.store.getState().refCount > 0;
                    r.backend &&
                        (e && !r.isSetUp
                            ? (r.backend.setup(), (r.isSetUp = !0))
                            : !e && r.isSetUp && (r.backend.teardown(), (r.isSetUp = !1)));
                }),
                (this.store = e),
                (this.monitor = n),
                e.subscribe(this.handleRefCountChange);
        }
        return (
            (e = [
                {
                    key: "receiveBackend",
                    value: function (e) {
                        this.backend = e;
                    },
                },
                {
                    key: "getMonitor",
                    value: function () {
                        return this.monitor;
                    },
                },
                {
                    key: "getBackend",
                    value: function () {
                        return this.backend;
                    },
                },
                {
                    key: "getRegistry",
                    value: function () {
                        return this.monitor.registry;
                    },
                },
                {
                    key: "getActions",
                    value: function () {
                        var e = this,
                            t = this.store.dispatch,
                            n = (0, r.Lj)(this);
                        return Object.keys(n).reduce(function (r, i) {
                            var s = n[i];
                            return (
                                (r[i] = function () {
                                    for (var n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                                    var a = s.apply(e, r);
                                    void 0 !== a && t(a);
                                }),
                                r
                            );
                        }, {});
                    },
                },
                {
                    key: "dispatch",
                    value: function (e) {
                        this.store.dispatch(e);
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
