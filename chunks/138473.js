Object.defineProperty(t, '__esModule', { value: !0 }), (t.Saturation = void 0);
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
    o = u(i),
    a = u(n(723184)),
    s = u(n(123763)),
    l = c(n(733244));
function c(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return (t.default = e), t;
}
function u(e) {
    return e && e.__esModule ? e : { default: e };
}
function d(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function f(e, t) {
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
var _ = (t.Saturation = (function (e) {
    function t(e) {
        d(this, t);
        var n = f(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
            (n.handleChange = function (e) {
                'function' == typeof n.props.onChange && n.throttle(n.props.onChange, l.calculateChange(e, n.props.hsl, n.container), e);
            }),
            (n.handleMouseDown = function (e) {
                n.handleChange(e);
                var t = n.getContainerRenderWindow();
                t.addEventListener('mousemove', n.handleChange), t.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
                n.unbindEventListeners();
            }),
            (n.throttle = (0, s.default)(function (e, t, n) {
                e(t, n);
            }, 50)),
            n
        );
    }
    return (
        p(t, e),
        r(t, [
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.throttle.cancel(), this.unbindEventListeners();
                }
            },
            {
                key: 'getContainerRenderWindow',
                value: function () {
                    for (var e = this.container, t = window; !t.document.contains(e) && t.parent !== t; ) t = t.parent;
                    return t;
                }
            },
            {
                key: 'unbindEventListeners',
                value: function () {
                    var e = this.getContainerRenderWindow();
                    e.removeEventListener('mousemove', this.handleChange), e.removeEventListener('mouseup', this.handleMouseUp);
                }
            },
            {
                key: 'render',
                value: function () {
                    var e = this,
                        t = this.props.style || {},
                        n = t.color,
                        r = t.white,
                        i = t.black,
                        s = t.pointer,
                        l = t.circle,
                        c = (0, a.default)(
                            {
                                default: {
                                    color: {
                                        absolute: '0px 0px 0px 0px',
                                        background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
                                        borderRadius: this.props.radius
                                    },
                                    white: {
                                        absolute: '0px 0px 0px 0px',
                                        borderRadius: this.props.radius
                                    },
                                    black: {
                                        absolute: '0px 0px 0px 0px',
                                        boxShadow: this.props.shadow,
                                        borderRadius: this.props.radius
                                    },
                                    pointer: {
                                        position: 'absolute',
                                        top: -(100 * this.props.hsv.v) + 100 + '%',
                                        left: 100 * this.props.hsv.s + '%',
                                        cursor: 'default'
                                    },
                                    circle: {
                                        width: '4px',
                                        height: '4px',
                                        boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
                                        borderRadius: '50%',
                                        cursor: 'hand',
                                        transform: 'translate(-2px, -2px)'
                                    }
                                },
                                custom: {
                                    color: n,
                                    white: r,
                                    black: i,
                                    pointer: s,
                                    circle: l
                                }
                            },
                            { custom: !!this.props.style }
                        );
                    return o.default.createElement(
                        'div',
                        {
                            style: c.color,
                            ref: function (t) {
                                return (e.container = t);
                            },
                            onMouseDown: this.handleMouseDown,
                            onTouchMove: this.handleChange,
                            onTouchStart: this.handleChange
                        },
                        o.default.createElement('style', null, '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '),
                        o.default.createElement(
                            'div',
                            {
                                style: c.white,
                                className: 'saturation-white'
                            },
                            o.default.createElement('div', {
                                style: c.black,
                                className: 'saturation-black'
                            }),
                            o.default.createElement('div', { style: c.pointer }, this.props.pointer ? o.default.createElement(this.props.pointer, this.props) : o.default.createElement('div', { style: c.circle }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(i.PureComponent || i.Component));
t.default = _;
