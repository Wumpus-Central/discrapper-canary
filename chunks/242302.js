n.d(t, { Z: () => d });
var i = n(192379),
    r = n(924102),
    a = n(820611),
    s =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    o = (function () {
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
function l(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function u(e, t) {
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
let d = function (e) {
    var t = (function (t) {
        function n(e) {
            l(this, n);
            var t = u(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
                (t.handleChange = function (e, n) {
                    if (a.LX(e)) {
                        var i = a.jH(e, e.h || t.state.oldHue);
                        t.setState(i), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, i, n), t.props.onChange && t.props.onChange(i, n);
                    }
                }),
                (t.handleSwatchHover = function (e, n) {
                    if (a.LX(e)) {
                        var i = a.jH(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(i, n);
                    }
                }),
                (t.state = s({}, a.jH(e.color, 0))),
                (t.debounce = (0, r.Z)(function (e, t, n) {
                    e(t, n);
                }, 100)),
                t
            );
        }
        return (
            c(n, t),
            o(
                n,
                [
                    {
                        key: 'render',
                        value: function () {
                            var t = {};
                            return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), i.createElement(e, s({}, this.props, this.state, { onChange: this.handleChange }, t));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            return s({}, a.jH(e.color, t.oldHue));
                        }
                    }
                ]
            ),
            n
        );
    })(i.PureComponent || i.Component);
    return (
        (t.propTypes = s({}, e.propTypes)),
        (t.defaultProps = s({}, e.defaultProps, {
            color: {
                h: 250,
                s: 0.5,
                l: 0.2,
                a: 1
            }
        })),
        t
    );
};
