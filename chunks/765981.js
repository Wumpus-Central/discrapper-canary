n.d(t, { f: () => s });
var r = n(263016);
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
var s = (function () {
    function e(t, n) {
        var r = this;
        i(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = r.store.getState().refCount > 0;
                r.backend && (e && !r.isSetUp ? (r.backend.setup(), (r.isSetUp = !0)) : !e && r.isSetUp && (r.backend.teardown(), (r.isSetUp = !1)));
            }),
            (this.store = t),
            (this.monitor = n),
            t.subscribe(this.handleRefCountChange);
    }
    return (
        a(e, [
            {
                key: 'receiveBackend',
                value: function (e) {
                    this.backend = e;
                }
            },
            {
                key: 'getMonitor',
                value: function () {
                    return this.monitor;
                }
            },
            {
                key: 'getBackend',
                value: function () {
                    return this.backend;
                }
            },
            {
                key: 'getRegistry',
                value: function () {
                    return this.monitor.registry;
                }
            },
            {
                key: 'getActions',
                value: function () {
                    var e = this,
                        t = this.store.dispatch;
                    function n(n) {
                        return function () {
                            for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                            var a = n.apply(e, i);
                            void 0 !== a && t(a);
                        };
                    }
                    var i = (0, r.W1)(this);
                    return Object.keys(i).reduce(function (e, t) {
                        var r = i[t];
                        return (e[t] = n(r)), e;
                    }, {});
                }
            },
            {
                key: 'dispatch',
                value: function (e) {
                    this.store.dispatch(e);
                }
            }
        ]),
        e
    );
})();
