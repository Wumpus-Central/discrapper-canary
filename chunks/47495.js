n.d(t, { Z: () => d });
var i = n(192379),
    r = n(723184),
    a = n(786547),
    s = n(64412),
    o = (function () {
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
function l(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function u(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function c(e, t) {
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
let d = (function (e) {
    function t(e) {
        l(this, t);
        var n = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
            (n.handleChange = function (e) {
                'function' == typeof n.props.onChange && n.throttle(n.props.onChange, s.T(e, n.props.hsl, n.container), e);
            }),
            (n.handleMouseDown = function (e) {
                n.handleChange(e);
                var t = n.getContainerRenderWindow();
                t.addEventListener('mousemove', n.handleChange), t.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
                n.unbindEventListeners();
            }),
            (n.throttle = (0, a.Z)(function (e, t, n) {
                e(t, n);
            }, 50)),
            n
        );
    }
    return (
        c(t, e),
        o(t, [
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
                        a = t.white,
                        s = t.black,
                        o = t.pointer,
                        l = t.circle,
                        u = (0, r.default)(
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
                                    white: a,
                                    black: s,
                                    pointer: o,
                                    circle: l
                                }
                            },
                            { custom: !!this.props.style }
                        );
                    return i.createElement(
                        'div',
                        {
                            style: u.color,
                            ref: function (t) {
                                return (e.container = t);
                            },
                            onMouseDown: this.handleMouseDown,
                            onTouchMove: this.handleChange,
                            onTouchStart: this.handleChange
                        },
                        i.createElement('style', null, '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '),
                        i.createElement(
                            'div',
                            {
                                style: u.white,
                                className: 'saturation-white'
                            },
                            i.createElement('div', {
                                style: u.black,
                                className: 'saturation-black'
                            }),
                            i.createElement('div', { style: u.pointer }, this.props.pointer ? i.createElement(this.props.pointer, this.props) : i.createElement('div', { style: u.circle }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(i.PureComponent || i.Component);
