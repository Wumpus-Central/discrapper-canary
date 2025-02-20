n.d(t, { Z: () => d });
var r = n(192379),
    i = n(723184),
    o = n(786547),
    a = n(64412),
    s = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })();
function l(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function c(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function u(e, t) {
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
        var n = c(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
            (n.handleChange = function (e) {
                'function' == typeof n.props.onChange && n.throttle(n.props.onChange, a.T(e, n.props.hsl, n.container), e);
            }),
            (n.handleMouseDown = function (e) {
                n.handleChange(e);
                var t = n.getContainerRenderWindow();
                t.addEventListener('mousemove', n.handleChange), t.addEventListener('mouseup', n.handleMouseUp);
            }),
            (n.handleMouseUp = function () {
                n.unbindEventListeners();
            }),
            (n.throttle = (0, o.Z)(function (e, t, n) {
                e(t, n);
            }, 50)),
            n
        );
    }
    return (
        u(t, e),
        s(t, [
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
                        o = t.white,
                        a = t.black,
                        s = t.pointer,
                        l = t.circle,
                        c = (0, i.default)(
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
                                    white: o,
                                    black: a,
                                    pointer: s,
                                    circle: l
                                }
                            },
                            { custom: !!this.props.style }
                        );
                    return r.createElement(
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
                        r.createElement('style', null, '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '),
                        r.createElement(
                            'div',
                            {
                                style: c.white,
                                className: 'saturation-white'
                            },
                            r.createElement('div', {
                                style: c.black,
                                className: 'saturation-black'
                            }),
                            r.createElement('div', { style: c.pointer }, this.props.pointer ? r.createElement(this.props.pointer, this.props) : r.createElement('div', { style: c.circle }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(r.PureComponent || r.Component);
