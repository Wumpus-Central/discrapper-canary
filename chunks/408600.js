var i = r(192379),
    a = r(723184),
    o = r(88758),
    s = r(716708),
    l =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    u = (function () {
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
function c(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function d(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function f(e, n) {
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
var p = (function (e) {
    function n() {
        c(this, n);
        for (var e, r, i, a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
        return (
            (r = i = d(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(s)))),
            (i.handleChange = function (e) {
                var n = o.T(e, i.props.hsl, i.props.direction, i.props.a, i.container);
                n && 'function' == typeof i.props.onChange && i.props.onChange(n, e);
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
            d(i, r)
        );
    }
    return (
        f(n, e),
        u(n, [
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
                        n = this.props.rgb,
                        r = (0, a.default)(
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
                                        background: 'linear-gradient(to right, rgba(' + n.r + ',' + n.g + ',' + n.b + ', 0) 0%,\n           rgba(' + n.r + ',' + n.g + ',' + n.b + ', 1) 100%)',
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
                                        left: 100 * n.a + '%'
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
                                    gradient: { background: 'linear-gradient(to bottom, rgba(' + n.r + ',' + n.g + ',' + n.b + ', 0) 0%,\n           rgba(' + n.r + ',' + n.g + ',' + n.b + ', 1) 100%)' },
                                    pointer: {
                                        left: 0,
                                        top: 100 * n.a + '%'
                                    }
                                },
                                overwrite: l({}, this.props.style)
                            },
                            {
                                vertical: 'vertical' === this.props.direction,
                                overwrite: !0
                            }
                        );
                    return i.createElement(
                        'div',
                        { style: r.alpha },
                        i.createElement('div', { style: r.checkboard }, i.createElement(s.Z, { renderers: this.props.renderers })),
                        i.createElement('div', { style: r.gradient }),
                        i.createElement(
                            'div',
                            {
                                style: r.container,
                                ref: function (n) {
                                    return (e.container = n);
                                },
                                onMouseDown: this.handleMouseDown,
                                onTouchMove: this.handleChange,
                                onTouchStart: this.handleChange
                            },
                            i.createElement('div', { style: r.pointer }, this.props.pointer ? i.createElement(this.props.pointer, this.props) : i.createElement('div', { style: r.slider }))
                        )
                    );
                }
            }
        ]),
        n
    );
})(i.PureComponent || i.Component);
n.Z = p;
