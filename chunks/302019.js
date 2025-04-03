Object.defineProperty(t, '__esModule', { value: !0 }), (t.Hue = void 0);
var n = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    o = r(192379),
    a = s(o),
    i = s(r(723184)),
    l = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
    })(r(14666));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function u(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
var c = (t.Hue = (function (e) {
    if ('function' != typeof e && null !== e) throw TypeError('Super expression must either be null or a function, not ' + typeof e);
    function t() {
        if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
        for (var e, r, n, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return (
            (r = n = u(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (n.handleChange = function (e) {
                var t = l.calculateChange(e, n.props.direction, n.props.hsl, n.container);
                t && 'function' == typeof n.props.onChange && n.props.onChange(t, e);
            }),
            (n.handleMouseDown = function (e) {
                n.handleChange(e), window.addEventListener('mousemove', n.handleChange), window.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
                n.unbindEventListeners();
            }),
            u(n, r)
        );
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
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
                        r = void 0 === t ? 'horizontal' : t,
                        n = (0, i.default)(
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
                    return a.default.createElement(
                        'div',
                        { style: n.hue },
                        a.default.createElement(
                            'div',
                            {
                                className: 'hue-' + r,
                                style: n.container,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            a.default.createElement('style', null, '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '),
                            a.default.createElement('div', { style: n.pointer }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement('div', { style: n.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(o.PureComponent || o.Component));
t.default = c;
