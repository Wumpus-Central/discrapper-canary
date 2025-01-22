Object.defineProperty(n, '__esModule', { value: !0 }), (n.Alpha = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = (function () {
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
    o = r(192379),
    s = f(o),
    l = f(r(723184)),
    u = d(r(121494)),
    c = f(r(122024));
function d(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return (n.default = e), n;
}
function f(e) {
    return e && e.__esModule ? e : { default: e };
}
function p(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function h(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function _(e, n) {
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
var m = (n.Alpha = (function (e) {
    function n() {
        p(this, n);
        for (var e, r, i, a = arguments.length, o = Array(a), s = 0; s < a; s++) o[s] = arguments[s];
        return (
            (r = i = h(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(o)))),
            (i.handleChange = function (e) {
                var n = u.calculateChange(e, i.props.hsl, i.props.direction, i.props.a, i.container);
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
            h(i, r)
        );
    }
    return (
        _(n, e),
        a(n, [
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
                                overwrite: i({}, this.props.style)
                            },
                            {
                                vertical: 'vertical' === this.props.direction,
                                overwrite: !0
                            }
                        );
                    return s.default.createElement(
                        'div',
                        { style: r.alpha },
                        s.default.createElement('div', { style: r.checkboard }, s.default.createElement(c.default, { renderers: this.props.renderers })),
                        s.default.createElement('div', { style: r.gradient }),
                        s.default.createElement(
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
                            s.default.createElement('div', { style: r.pointer }, this.props.pointer ? s.default.createElement(this.props.pointer, this.props) : s.default.createElement('div', { style: r.slider }))
                        )
                    );
                }
            }
        ]),
        n
    );
})(o.PureComponent || o.Component));
n.default = m;
