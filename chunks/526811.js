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
n(129629);
var o = n(22672),
    l = n(512722),
    u = n(912037),
    c = n(16686),
    d = (function (e) {
        function t(e, n) {
            r(this, t);
            var i = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (i._parent = e), (i._interpolation = n), (i._listeners = {}), i;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: '__getValue',
                    value: function () {
                        var e = this._parent.__getValue();
                        return l('number' == typeof e, 'Cannot interpolate an input which is not a number.'), this._interpolation(e);
                    }
                },
                {
                    key: 'addListener',
                    value: function (e) {
                        var t = this;
                        this._parentListener ||
                            (this._parentListener = this._parent.addListener(function () {
                                for (var e in t._listeners) t._listeners[e]({ value: t.__getValue() });
                            }));
                        var n = c();
                        return (this._listeners[n] = e), n;
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
                        return new t(this, u.create(e));
                    }
                },
                {
                    key: '__attach',
                    value: function () {
                        this._parent.__addChild(this);
                    }
                },
                {
                    key: '__detach',
                    value: function () {
                        this._parent.__removeChild(this), (this._parentListener = this._parent.removeListener(this._parentListener));
                    }
                }
            ]),
            t
        );
    })(o);
e.exports = d;
