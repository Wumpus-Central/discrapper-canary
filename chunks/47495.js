r.d(t, { Z: () => s });
var n = r(192379),
    o = r(723184),
    a = r(786547),
    i = r(64412),
    l = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })();
let s = (function (e) {
    if ('function' != typeof e && null !== e) throw TypeError('Super expression must either be null or a function, not ' + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
        return (
            (r.handleChange = function (e) {
                'function' == typeof r.props.onChange && r.throttle(r.props.onChange, i.T(e, r.props.hsl, r.container), e);
            }),
            (r.handleMouseDown = function (e) {
                r.handleChange(e);
                var t = r.getContainerRenderWindow();
                t.addEventListener('mousemove', r.handleChange), t.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
                r.unbindEventListeners();
            }),
            (r.throttle = (0, a.Z)(function (e, t, r) {
                e(t, r);
            }, 50)),
            r
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
        l(t, [
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
                        r = t.color,
                        a = t.white,
                        i = t.black,
                        l = t.pointer,
                        s = t.circle,
                        u = (0, o.default)(
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
                                    color: r,
                                    white: a,
                                    black: i,
                                    pointer: l,
                                    circle: s
                                }
                            },
                            { custom: !!this.props.style }
                        );
                    return n.createElement(
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
                        n.createElement('style', null, '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '),
                        n.createElement(
                            'div',
                            {
                                style: u.white,
                                className: 'saturation-white'
                            },
                            n.createElement('div', {
                                style: u.black,
                                className: 'saturation-black'
                            }),
                            n.createElement('div', { style: u.pointer }, this.props.pointer ? n.createElement(this.props.pointer, this.props) : n.createElement('div', { style: u.circle }))
                        )
                    );
                }
            }
        ]),
        t
    );
})(n.PureComponent || n.Component);
