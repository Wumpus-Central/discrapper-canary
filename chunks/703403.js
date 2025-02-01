Object.defineProperty(t, '__esModule', { value: !0 }), (t.Alpha = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = (function () {
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
    a = n(192379),
    s = d(a),
    o = d(n(723184)),
    l = c(n(121494)),
    u = d(n(122024));
function c(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function d(e) {
    return e && e.__esModule ? e : { default: e };
}
function f(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function _(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function p(e, t) {
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
var h = (t.Alpha = (function (e) {
    function t() {
        f(this, t);
        for (var e, n, i, r = arguments.length, a = Array(r), s = 0; s < r; s++) a[s] = arguments[s];
        return (
            (n = i = _(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (i.handleChange = function (e) {
                var t = l.calculateChange(e, i.props.hsl, i.props.direction, i.props.a, i.container);
                t && 'function' == typeof i.props.onChange && i.props.onChange(t, e);
            }),
            (i.handleMouseDown = function (e) {
                i.handleChange(e), window.addEventListener('mousemove', i.handleChange), window.addEventListener('mouseup', i.handleMouseUp);
            }),
            (i.handleMouseUp = function () {
                i.unbindEventListeners();
            }),
            (i.unbindEventListeners = function () {
                window.removeEventListener('mousemove', i.handleChange), window.removeEventListener('mouseup', i.handleMouseUp);
            }),
            _(i, n)
        );
    }
    return (
        p(t, e),
        r(t, [
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.unbindEventListeners();
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this,
                        t = this.props.rgb,
                        n = (0, o.default)(
                            {
                                default: {
                                    alpha: {
                                        absolute: '0px 0px 0px 0px',
                                        borderRadius: this.props.radius
                                    },
                                    checkboard: {
                                        absolute: '0px 0px 0px 0px',
                                        overflow: 'hidden',
                                        borderRadius: this.props.radius
                                    },
                                    gradient: {
                                        absolute: '0px 0px 0px 0px',
                                        background: 'linear-gradient(to right, rgba(' + t.r + ',' + t.g + ',' + t.b + ', 0) 0%,\n           rgba(' + t.r + ',' + t.g + ',' + t.b + ', 1) 100%)',
                                        boxShadow: this.props.shadow,
                                        borderRadius: this.props.radius
                                    },
                                    container: {
                                        position: 'relative',
                                        height: '100%',
                                        margin: '0 3px'
                                    },
                                    pointer: {
                                        position: 'absolute',
                                        left: 100 * t.a + '%'
                                    },
                                    slider: {
                                        width: '4px',
                                        borderRadius: '1px',
                                        height: '8px',
                                        boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
                                        background: '#fff',
                                        marginTop: '1px',
                                        transform: 'translateX(-2px)'
                                    }
                                },
                                vertical: {
                                    gradient: { background: 'linear-gradient(to bottom, rgba(' + t.r + ',' + t.g + ',' + t.b + ', 0) 0%,\n           rgba(' + t.r + ',' + t.g + ',' + t.b + ', 1) 100%)' },
                                    pointer: {
                                        left: 0,
                                        top: 100 * t.a + '%'
                                    }
                                },
                                overwrite: i({}, this.props.style)
                            },
                            {
                                vertical: 'vertical' === this.props.direction,
                                overwrite: !0
                            }
                        );
                    return s.default.createElement(
                        'div',
                        { style: n.alpha },
                        s.default.createElement('div', { style: n.checkboard }, s.default.createElement(u.default, { renderers: this.props.renderers })),
                        s.default.createElement('div', { style: n.gradient }),
                        s.default.createElement(
                            'div',
                            {
                                style: n.container,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            s.default.createElement('div', { style: n.pointer }, this.props.pointer ? s.default.createElement(this.props.pointer, this.props) : s.default.createElement('div', { style: n.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(a.PureComponent || a.Component));
t.default = h;
