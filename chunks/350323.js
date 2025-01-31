var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = 'src/createAnimatedComponent.js',
    a = (function () {
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
function s(e, t) {
    var n = {};
    for (var i in e) !(t.indexOf(i) >= 0) && Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    return n;
}
function o(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function l(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function u(e, t) {
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
var c = n(192379),
    d = n(724027),
    f = n(457958);
function _(e) {
    var t = 'node',
        n = (function (n) {
            function _() {
                return o(this, _), l(this, (_.__proto__ || Object.getPrototypeOf(_)).apply(this, arguments));
            }
            return (
                u(_, n),
                a(_, [
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this._propsAnimated && this._propsAnimated.__detach();
                        }
                    },
                    {
                        key: 'setNativeProps',
                        value: function (e) {
                            !1 === f.current(this.refs[t], e, this) && this.forceUpdate();
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
                            var n = this,
                                i = this._propsAnimated,
                                r = function () {
                                    !1 === f.current(n.refs[t], n._propsAnimated.__getAnimatedValue(), n) && n.forceUpdate();
                                };
                            (this._propsAnimated = new d(e, r)), i && i.__detach();
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
                            var n = this._propsAnimated.__getValue(),
                                a = n.style,
                                o = s(n, ['style']);
                            return c.createElement(
                                e,
                                i({}, o, {
                                    style: f.transformStyles(a),
                                    ref: t,
                                    __source: {
                                        fileName: r,
                                        lineNumber: 78
                                    }
                                })
                            );
                        }
                    }
                ]),
                _
            );
        })(c.Component);
    return (
        (n.propTypes = {
            style: function (t, n, i) {
                if (!e.propTypes) return;
            }
        }),
        n
    );
}
e.exports = _;
