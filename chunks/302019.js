Object.defineProperty(t, '__esModule', { value: !0 }), (t.Hue = void 0);
var r = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    i = n(192379),
    o = c(i),
    a = c(n(723184)),
    s = l(n(14666));
function l(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
function u(e, t) {
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
var p = (t.Hue = (function (e) {
    function t() {
        u(this, t);
        for (var e, n, r, i = arguments.length, o = Array(i), a = 0; a < i; a++) o[a] = arguments[a];
        return (
            (n = r = d(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(o)))),
            (r.handleChange = function (e) {
                var t = s.calculateChange(e, r.props.direction, r.props.hsl, r.container);
                t && 'function' == typeof r.props.onChange && r.props.onChange(t, e);
            }),
            (r.handleMouseDown = function (e) {
                r.handleChange(e), window.addEventListener('mousemove', r.handleChange), window.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
                r.unbindEventListeners();
            }),
            d(r, n)
        );
    }
    return (
        f(t, e),
        r(t, [
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
                        r = (0, a.default)(
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
                    return o.default.createElement(
                        'div',
                        { style: r.hue },
                        o.default.createElement(
                            'div',
                            {
                                className: 'hue-' + n,
                                style: r.container,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            o.default.createElement('style', null, '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '),
                            o.default.createElement('div', { style: r.pointer }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement('div', { style: r.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(i.PureComponent || i.Component));
t.default = p;
