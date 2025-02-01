n.d(t, { Z: () => f });
var i = n(192379),
    r = n(723184),
    a = n(88758),
    s = n(716708),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    l = (function () {
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
function u(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function c(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function d(e, t) {
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
let f = (function (e) {
    function t() {
        u(this, t);
        for (var e, n, i, r = arguments.length, s = Array(r), o = 0; o < r; o++) s[o] = arguments[o];
        return (
            (n = i = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s)))),
            (i.handleChange = function (e) {
                var t = a.T(e, i.props.hsl, i.props.direction, i.props.a, i.container);
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
            c(i, n)
        );
    }
    return (
        d(t, e),
        l(t, [
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
                        n = (0, r.default)(
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
                                overwrite: o({}, this.props.style)
                            },
                            {
                                vertical: 'vertical' === this.props.direction,
                                overwrite: !0
                            }
                        );
                    return i.createElement(
                        'div',
                        { style: n.alpha },
                        i.createElement('div', { style: n.checkboard }, i.createElement(s.Z, { renderers: this.props.renderers })),
                        i.createElement('div', { style: n.gradient }),
                        i.createElement(
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
                            i.createElement('div', { style: n.pointer }, this.props.pointer ? i.createElement(this.props.pointer, this.props) : i.createElement('div', { style: n.slider }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(i.PureComponent || i.Component);
