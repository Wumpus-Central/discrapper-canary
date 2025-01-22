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
r(129629);
var l = r(420633),
    u = r(22672),
    c = r(512722),
    d = r(16686),
    f = (function (e) {
        function n(e) {
            a(this, n);
            var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
                i = e || {
                    x: 0,
                    y: 0
                };
            return 'number' == typeof i.x && 'number' == typeof i.y ? ((r.x = new l(i.x)), (r.y = new l(i.y))) : (c(i.x instanceof l && i.y instanceof l, 'AnimatedValueXY must be initalized with an object of numbers or AnimatedValues.'), (r.x = i.x), (r.y = i.y)), (r._listeners = {}), r;
        }
        return (
            s(n, e),
            i(n, [
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
                        var n = this,
                            r = d(),
                            i = function (r) {
                                r.value, e(n.__getValue());
                            };
                        return (
                            (this._listeners[r] = {
                                x: this.x.addListener(i),
                                y: this.y.addListener(i)
                            }),
                            r
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
            n
        );
    })(u);
e.exports = f;
