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
var o = n(420633),
    l = n(22672),
    u = n(512722),
    c = n(16686),
    d = (function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)),
                i = e || {
                    x: 0,
                    y: 0
                };
            return 'number' == typeof i.x && 'number' == typeof i.y ? ((n.x = new o(i.x)), (n.y = new o(i.y))) : (u(i.x instanceof o && i.y instanceof o, 'AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.'), (n.x = i.x), (n.y = i.y)), (n._listeners = {}), n;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: 'setValue',
                    value: function (e) {
                        this.x.setValue(e.x), this.y.setValue(e.y);
                    }
                },
                {
                    key: 'setOffset',
                    value: function (e) {
                        this.x.setOffset(e.x), this.y.setOffset(e.y);
                    }
                },
                {
                    key: 'flattenOffset',
                    value: function () {
                        this.x.flattenOffset(), this.y.flattenOffset();
                    }
                },
                {
                    key: '__getValue',
                    value: function () {
                        return {
                            x: this.x.__getValue(),
                            y: this.y.__getValue()
                        };
                    }
                },
                {
                    key: 'stopAnimation',
                    value: function (e) {
                        this.x.stopAnimation(), this.y.stopAnimation(), e && e(this.__getValue());
                    }
                },
                {
                    key: 'addListener',
                    value: function (e) {
                        var t = this,
                            n = c(),
                            i = function (n) {
                                n.value, e(t.__getValue());
                            };
                        return (
                            (this._listeners[n] = {
                                x: this.x.addListener(i),
                                y: this.y.addListener(i)
                            }),
                            n
                        );
                    }
                },
                {
                    key: 'removeListener',
                    value: function (e) {
                        this.x.removeListener(this._listeners[e].x), this.y.removeListener(this._listeners[e].y), delete this._listeners[e];
                    }
                },
                {
                    key: 'getLayout',
                    value: function () {
                        return {
                            left: this.x,
                            top: this.y
                        };
                    }
                },
                {
                    key: 'getTranslateTransform',
                    value: function () {
                        return [{ translateX: this.x }, { translateY: this.y }];
                    }
                }
            ]),
            t
        );
    })(l);
e.exports = d;
