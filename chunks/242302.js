var i = r(192379),
    a = r(924102),
    o = r(820611),
    s =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    l = (function () {
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
function u(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function c(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function d(e, n) {
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
var f = function (e) {
    var n = (function (n) {
        function r(e) {
            u(this, r);
            var n = c(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            return (
                (n.handleChange = function (e, r) {
                    if (o.LX(e)) {
                        var i = o.jH(e, e.h || n.state.oldHue);
                        n.setState(i), n.props.onChangeComplete && n.debounce(n.props.onChangeComplete, i, r), n.props.onChange && n.props.onChange(i, r);
                    }
                }),
                (n.handleSwatchHover = function (e, r) {
                    if (o.LX(e)) {
                        var i = o.jH(e, e.h || n.state.oldHue);
                        n.props.onSwatchHover && n.props.onSwatchHover(i, r);
                    }
                }),
                (n.state = s({}, o.jH(e.color, 0))),
                (n.debounce = (0, a.Z)(function (e, n, r) {
                    e(n, r);
                }, 100)),
                n
            );
        }
        return (
            d(r, n),
            l(
                r,
                [
                    {
                        key: 'render',
                        value: function () {
                            var n = {};
                            return this.props.onSwatchHover && (n.onSwatchHover = this.handleSwatchHover), i.createElement(e, s({}, this.props, this.state, { onChange: this.handleChange }, n));
                        }
                    }
                ],
                [
                    {
                        key: 'getDerivedStateFromProps',
                        value: function (e, n) {
                            return s({}, o.jH(e.color, n.oldHue));
                        }
                    }
                ]
            ),
            r
        );
    })(i.PureComponent || i.Component);
    return (
        (n.propTypes = s({}, e.propTypes)),
        (n.defaultProps = s({}, e.defaultProps, {
            color: {
                h: 250,
                s: 0.5,
                l: 0.2,
                a: 1
            }
        })),
        n
    );
};
n.Z = f;
