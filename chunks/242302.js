n.d(t, { Z: () => d });
var r = n(192379),
    i = n(924102),
    o = n(820611),
    a =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    s = (function () {
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
function l(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function c(e, t) {
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
let d = function (e) {
    var t = (function (t) {
        function n(e) {
            l(this, n);
            var t = c(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (
                (t.handleChange = function (e, n) {
                    if (o.LX(e)) {
                        var r = o.jH(e, e.h || t.state.oldHue);
                        t.setState(r), t.props.onChangeComplete && t.debounce(t.props.onChangeComplete, r, n), t.props.onChange && t.props.onChange(r, n);
                    }
                }),
                (t.handleSwatchHover = function (e, n) {
                    if (o.LX(e)) {
                        var r = o.jH(e, e.h || t.state.oldHue);
                        t.props.onSwatchHover && t.props.onSwatchHover(r, n);
                    }
                }),
                (t.state = a({}, o.jH(e.color, 0))),
                (t.debounce = (0, i.Z)(function (e, t, n) {
                    e(t, n);
                }, 100)),
                t
            );
        }
        return (
            u(n, t),
            s(
                n,
                [
                    {
                        key: 'render',
                        value: function () {
                            var t = {};
                            return this.props.onSwatchHover && (t.onSwatchHover = this.handleSwatchHover), r.createElement(e, a({}, this.props, this.state, { onChange: this.handleChange }, t));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, t) {
                            return a({}, o.jH(e.color, t.oldHue));
                        }
                    }
                ]
            ),
            n
        );
    })(r.PureComponent || r.Component);
    return (
        (t.propTypes = a({}, e.propTypes)),
        (t.defaultProps = a({}, e.defaultProps, {
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
