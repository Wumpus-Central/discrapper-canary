Object.defineProperty(n, '__esModule', { value: !0 }), (n.Saturation = void 0);
var i = (function () {
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
    a = r(192379),
    o = d(a),
    s = d(r(723184)),
    l = d(r(123763)),
    u = c(r(733244));
function c(e) {
    if (e && e.__esModule) return e;
    var n = {};
    if (null != e) for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    return (n.default = e), n;
}
function d(e) {
    return e && e.__esModule ? e : { default: e };
}
function f(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function p(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function h(e, n) {
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
var _ = (n.Saturation = (function (e) {
    function n(e) {
        f(this, n);
        var r = p(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, e));
        return (
            (r.handleChange = function (e) {
                'function' == typeof r.props.onChange && r.throttle(r.props.onChange, u.calculateChange(e, r.props.hsl, r.container), e);
            }),
            (r.handleMouseDown = function (e) {
                r.handleChange(e);
                var n = r.getContainerRenderWindow();
                n.addEventListener('mousemove', r.handleChange), n.addEventListener('mouseup', r.handleMouseUp);
            }),
            (r.handleMouseUp = function () {
                r.unbindEventListeners();
            }),
            (r.throttle = (0, l.default)(function (e, n, r) {
                e(n, r);
            }, 50)),
            r
        );
    }
    return (
        h(n, e),
        i(n, [
            {
                key: 'componentWillUnmount',
                value: function () {
                    this.throttle.cancel(), this.unbindEventListeners();
                }
            },
            {
                key: 'getContainerRenderWindow',
                value: function () {
                    for (var e = this.container, n = window; !n.document.contains(e) && n.parent !== n; ) n = n.parent;
                    return n;
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
                        n = this.props.style || {},
                        r = n.color,
                        i = n.white,
                        a = n.black,
                        l = n.pointer,
                        u = n.circle,
                        c = (0, s.default)(
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
                                    white: i,
                                    black: a,
                                    pointer: l,
                                    circle: u
                                }
                            },
                            { custom: !!this.props.style }
                        );
                    return o.default.createElement(
                        'div',
                        {
                            style: c.color,
                            ref: function (n) {
                                return (e.container = n);
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
        n
    );
})(a.PureComponent || a.Component));
n.default = _;
