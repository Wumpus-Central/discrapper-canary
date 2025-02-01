var i = (function () {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
})();
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function s(e, t) {
    if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
    (e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    })),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var o = n(129629),
    l = (function (e) {
        function t(e, n) {
            r(this, t);
            var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (i._strings = e), (i._values = n), i;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: '__transformValue',
                    value: function (e) {
                        return e instanceof o ? e.__getValue() : e;
                    }
                },
                {
                    key: '__getValue',
                    value: function () {
                        for (var e = this._strings[0], t = 0; t < this._values.length; ++t) e += this.__transformValue(this._values[t]) + this._strings[1 + t];
                        return e;
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof o && this._values[e].__addChild(this);
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        for (var e = 0; e < this._values.length; ++e) this._values[e] instanceof o && this._values[e].__removeChild(this);
                    }
                }
            ]),
            t
        );
    })(n(22672));
e.exports = l;
