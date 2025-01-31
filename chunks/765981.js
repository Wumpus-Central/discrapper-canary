n.d(t, { f: () => o });
var i = n(263016);
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
var o = (function () {
    function e(t, n) {
        var i = this;
        r(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = i.store.getState().refCount > 0;
                i.backend && (e && !i.isSetUp ? (i.backend.setup(), (i.isSetUp = !0)) : !e && i.isSetUp && (i.backend.teardown(), (i.isSetUp = !1)));
            }),
            (this.store = t),
            (this.monitor = n),
            t.subscribe(this.handleRefCountChange);
    }
    return (
        s(e, [
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
                            for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                            var s = n.apply(e, r);
                            void 0 !== s && t(s);
                        };
                    }
                    var r = (0, i.W1)(this);
                    return Object.keys(r).reduce(function (e, t) {
                        var i = r[t];
                        return (e[t] = n(i)), e;
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
