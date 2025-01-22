r.d(n, {
    f: function () {
        return l;
    }
});
var i = r(263016);
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
}
function s(e, n, r) {
    return n && o(e.prototype, n), r && o(e, r), e;
}
var l = (function () {
    function e(n, r) {
        var i = this;
        a(this, e),
            (this.isSetUp = !1),
            (this.handleRefCountChange = function () {
                var e = i.store.getState().refCount > 0;
                i.backend && (e && !i.isSetUp ? (i.backend.setup(), (i.isSetUp = !0)) : !e && i.isSetUp && (i.backend.teardown(), (i.isSetUp = !1)));
            }),
            (this.store = n),
            (this.monitor = r),
            n.subscribe(this.handleRefCountChange);
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
                        n = this.store.dispatch;
                    function r(r) {
                        return function () {
                            for (var i = arguments.length, a = Array(i), o = 0; o < i; o++) a[o] = arguments[o];
                            var s = r.apply(e, a);
                            void 0 !== s && n(s);
                        };
                    }
                    var a = (0, i.W1)(this);
                    return Object.keys(a).reduce(function (e, n) {
                        var i = a[n];
                        return (e[n] = r(i)), e;
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
