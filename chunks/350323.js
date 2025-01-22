var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = 'src/createAnimatedComponent.js',
    o = (function () {
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
function s(e, n) {
    var r = {};
    for (var i in e) {
        if (!(n.indexOf(i) >= 0)) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
}
function l(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function u(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function c(e, n) {
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
var d = r(192379),
    f = r(724027),
    p = r(457958);
function h(e) {
    var n = 'node',
        r = (function (r) {
            function h() {
                return l(this, h), u(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
            }
            return (
                c(h, r),
                o(h, [
                    {
                        key: 'componentWillUnmount',
                        value: function () {
                            this._propsAnimated && this._propsAnimated.__detach();
                        }
                    },
                    {
                        key: 'setNativeProps',
                        value: function (e) {
                            !1 === p.current(this.refs[n], e, this) && this.forceUpdate();
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
                            var r = this,
                                i = this._propsAnimated,
                                a = function () {
                                    !1 === p.current(r.refs[n], r._propsAnimated.__getAnimatedValue(), r) && r.forceUpdate();
                                };
                            (this._propsAnimated = new f(e, a)), i && i.__detach();
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
                            var r = this._propsAnimated.__getValue(),
                                o = r.style,
                                l = s(r, ['style']);
                            return d.createElement(
                                e,
                                i({}, l, {
                                    style: p.transformStyles(o),
                                    ref: n,
                                    __source: {
                                        fileName: a,
                                        lineNumber: 78
                                    }
                                })
                            );
                        }
                    }
                ]),
                h
            );
        })(d.Component);
    return (
        (r.propTypes = {
            style: function (n, r, i) {
                if (!e.propTypes) return;
            }
        }),
        r
    );
}
e.exports = h;
