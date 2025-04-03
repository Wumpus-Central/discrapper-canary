var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = 'src/createAnimatedComponent.js',
    o = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })();
function a(e, t) {
    var n = {};
    for (var r in e) !(t.indexOf(r) >= 0) && Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return n;
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function c(e, t) {
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
var u = n(192379),
    d = n(758772),
    f = n(879643);
e.exports = function (e) {
    var t = (function (t) {
        function n() {
            return s(this, n), l(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
        }
        return (
            c(n, t),
            o(n, [
                {
                    key: 'componentWillUnmount',
                    value: function () {
                        this._propsAnimated && this._propsAnimated.__detach();
                    }
                },
                {
                    key: 'setNativeProps',
                    value: function (e) {
                        !1 === f.current(this.componentRef, e, this) && this.forceUpdate();
                    }
                },
                {
                    key: 'componentWillMount',
                    value: function () {
                        this.attachProps(this.props);
                    }
                },
                {
                    key: 'attachProps',
                    value: function (e) {
                        var t = this,
                            n = this._propsAnimated,
                            r = function () {
                                !1 === f.current(t.componentRef, t._propsAnimated.__getAnimatedValue(), t) && t.forceUpdate();
                            };
                        (this._propsAnimated = new d(e, r)), n && n.__detach();
                    }
                },
                {
                    key: 'componentWillReceiveProps',
                    value: function (e) {
                        this.attachProps(e);
                    }
                },
                {
                    key: 'render',
                    value: function () {
                        var t = this,
                            n = this._propsAnimated.__getValue(),
                            o = n.style,
                            s = a(n, ['style']);
                        return u.createElement(
                            e,
                            r({}, s, {
                                style: f.transformStyles(o),
                                ref: function (e) {
                                    t.componentRef = e;
                                },
                                __source: {
                                    fileName: i,
                                    lineNumber: 75
                                }
                            })
                        );
                    }
                },
                {
                    key: 'getNode',
                    value: function () {
                        return this.componentRef;
                    }
                }
            ]),
            n
        );
    })(u.Component);
    return (
        (t.propTypes = {
            style: function (t, n, r) {
                if (!e.propTypes) return;
            }
        }),
        t
    );
};
