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
var l = r(129629),
    u = (function (e) {
        function n(e, r) {
            a(this, n);
            var i = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (i._strings = e), (i._values = r), i;
        }
        return (
            s(n, e),
            i(n, [
                {
                    key: '__transformValue',
                    value: function (e) {
                        return e instanceof l ? e.__getValue() : e;
                    }
                },
                {
                    key: '__getValue',
                    value: function () {
                        for (var e = this._strings[0], n = 0; n < this._values.length; ++n) e += this.__transformValue(this._values[n]) + this._strings[1 + n];
                        return e;
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof l && this._values[e].__addChild(this);
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof l && this._values[e].__removeChild(this);
                    }
                }
            ]),
            n
        );
    })(r(22672));
e.exports = u;
