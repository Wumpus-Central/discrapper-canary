var i = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function s(e, n) {
    if ('function' != typeof n && null !== n) throw TypeError('Super expression must either be null or a function, not ' + typeof n);
    (e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : (e.__proto__ = n));
}
var l = r(22672);
r(129629);
var u = r(420633),
    c = r(912037),
    d = r(526811),
    f = (function (e) {
        function n(e, r) {
            a(this, n);
            var i = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (i._a = 'number' == typeof e ? new u(e) : e), (i._b = 'number' == typeof r ? new u(r) : r), (i._listeners = {}), i;
        }
        return (
            s(n, e),
            i(n, [
                {
                    key: '__getValue',
                    value: function () {
                        return this._a.__getValue() + this._b.__getValue();
                    }
                },
                {
                    key: 'addListener',
                    value: function (e) {
                        var n = this;
                        !this._aListener &&
                            this._a.addListener &&
                            (this._aListener = this._a.addListener(function () {
                                for (var e in n._listeners) n._listeners[e]({ value: n.__getValue() });
                            })),
                            !this._bListener &&
                                this._b.addListener &&
                                (this._bListener = this._b.addListener(function () {
                                    for (var e in n._listeners) n._listeners[e]({ value: n.__getValue() });
                                }));
                        var r = guid();
                        return (this._listeners[r] = e), r;
                    }
                },
                {
                    key: 'removeListener',
                    value: function (e) {
                        delete this._listeners[e];
                    }
                },
                {
                    key: 'interpolate',
                    value: function (e) {
                        return new d(this, c.create(e));
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        this._a.__addChild(this), this._b.__addChild(this);
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        this._a.__removeChild(this), this._b.__removeChild(this);
                    }
                }
            ]),
            n
        );
    })(l);
e.exports = f;
