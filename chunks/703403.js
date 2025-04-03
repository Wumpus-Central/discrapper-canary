Object.defineProperty(t, '__esModule', { value: !0 }), (t.Alpha = void 0);
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = (function () {
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
    a = r(192379),
    i = c(a),
    l = c(r(723184)),
    s = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return (t.default = e), t;
    })(r(121494)),
    u = c(r(122024));
function c(e) {
    return e && e.__esModule ? e : { default: e };
}
function p(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
var f = (t.Alpha = (function (e) {
    if ('function' != typeof e && null !== e) throw TypeError('Super expression must either be null or a function, not ' + typeof e);
    function t() {
        if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
        for (var e, r, n, o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return (
            (r = n = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
            (n.handleChange = function (e) {
                var t = s.calculateChange(e, n.props.hsl, n.props.direction, n.props.a, n.container);
                t && 'function' == typeof n.props.onChange && n.props.onChange(t, e);
            }),
            (n.handleMouseDown = function (e) {
                n.handleChange(e), window.addEventListener('mousemove', n.handleChange), window.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
                n.unbindEventListeners();
            }),
            (n.unbindEventListeners = function () {
                window.removeEventListener('mousemove', n.handleChange), window.removeEventListener('mouseup', n.handleMouseUp);
            }),
            p(n, r)
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
        o(t, [
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
                        r = (0, l.default)(
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
                                overwrite: n({}, this.props.style)
                            },
                            {
                                vertical: 'vertical' === this.props.direction,
                                overwrite: !0
                            }
                        );
                    return i.default.createElement(
                        'div',
                        { style: r.alpha },
                        i.default.createElement('div', { style: r.checkboard }, i.default.createElement(u.default, { renderers: this.props.renderers })),
                        i.default.createElement('div', { style: r.gradient }),
                        i.default.createElement(
                            'div',
                            {
                                style: r.container,
                                ref: function (t) {
                                    return (e.container = t);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            i.default.createElement('div', { style: r.pointer }, this.props.pointer ? i.default.createElement(this.props.pointer, this.props) : i.default.createElement('div', { style: r.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(a.PureComponent || a.Component));
t.default = f;
