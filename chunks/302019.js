Object.defineProperty(n, '__esModule', { value: !0 }), (n.Hue = void 0);
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
    })(),
    a = r(192379),
    o = c(a),
    s = c(r(723184)),
    l = u(r(14666));
function u(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return (n.default = e), n;
}
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
function d(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function f(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function p(e, n) {
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
var h = (n.Hue = (function (e) {
    function n() {
        d(this, n);
        for (var e, r, i, a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return (
            (r = i = f(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(o)))),
            (i.handleChange = function (e) {
                var n = l.calculateChange(e, i.props.direction, i.props.hsl, i.container);
                n && 'function' == typeof i.props.onChange && i.props.onChange(n, e);
            }),
            (i.handleMouseDown = function (e) {
                i.handleChange(e), window.addEventListener('mousemove', i.handleChange), window.addEventListener('mouseup', i.handleMouseUp);
            }),
            (i.handleMouseUp = function () {
                i.unbindEventListeners();
            }),
            f(i, r)
        );
    }
    return (
        p(n, e),
        i(n, [
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
                        n = this.props.direction,
                        r = void 0 === n ? 'horizontal' : n,
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
                            { vertical: 'vertical' === r }
                        );
                    return o.default.createElement(
                        'div',
                        { style: i.hue },
                        o.default.createElement(
                            'div',
                            {
                                className: 'hue-' + r,
                                style: i.container,
                                ref: function (n) {
                                    return (e.container = n);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            o.default.createElement('style', null, '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '),
                            o.default.createElement('div', { style: i.pointer }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement('div', { style: i.slider }))
                        )
                    );
                }
            }
        ]),
        n
    );
})(a.PureComponent || a.Component));
n.default = h;
