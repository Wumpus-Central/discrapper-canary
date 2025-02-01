Object.defineProperty(t, '__esModule', { value: !0 }), (t.Hue = void 0);
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
    })(),
    r = n(192379),
    a = u(r),
    s = u(n(723184)),
    o = l(n(14666));
function l(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
function c(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function d(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function f(e, t) {
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
var _ = (t.Hue = (function (e) {
    function t() {
        c(this, t);
        for (var e, n, i, r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return (
            (n = i = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (i.handleChange = function (e) {
                var t = o.calculateChange(e, i.props.direction, i.props.hsl, i.container);
                t && 'function' == typeof i.props.onChange && i.props.onChange(t, e);
            }),
            (i.handleMouseDown = function (e) {
                i.handleChange(e), window.addEventListener('mousemove', i.handleChange), window.addEventListener('mouseup', i.handleMouseUp);
            }),
            (i.handleMouseUp = function () {
                i.unbindEventListeners();
            }),
            d(i, n)
        );
    }
    return (
        f(t, e),
        i(t, [
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.unbindEventListeners();
                }
            },
            {
                key: 'unbindEventListeners',
                value: function () {
                    window.removeEventListener('mousemove', this.handleChange), window.removeEventListener('mouseup', this.handleMouseUp);
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this,
                        t = this.props.direction,
                        n = void 0 === t ? 'horizontal' : t,
                        i = (0, s.default)(
                            {
                                default: {
                                    hue: {
                                        absolute: '0px 0px 0px 0px',
                                        borderRadius: this.props.radius,
                                        boxShadow: this.props.shadow
                                    },
                                    container: {
                                        padding: '0 2px',
                                        position: 'relative',
                                        height: '100%',
                                        borderRadius: this.props.radius
                                    },
                                    pointer: {
                                        position: 'absolute',
                                        left: (100 * this.props.hsl.h) / 360 + '%'
                                    },
                                    slider: {
                                        marginTop: '1px',
                                        width: '4px',
                                        borderRadius: '1px',
                                        height: '8px',
                                        boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                                        background: '#fff',
                                        transform: 'translateX(-2px)'
                                    }
                                },
                                vertical: {
                                    pointer: {
                                        left: '0px',
                                        top: -((100 * this.props.hsl.h) / 360) + 100 + '%'
                                    }
                                }
                            },
                            { vertical: 'vertical' === n }
                        );
                    return a.default.createElement(
                        'div',
                        { style: i.hue },
                        a.default.createElement(
                            'div',
                            {
                                className: 'hue-' + n,
                                style: i.container,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            a.default.createElement('style', null, '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '),
                            a.default.createElement('div', { style: i.pointer }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement('div', { style: i.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(r.PureComponent || r.Component));
t.default = _;
