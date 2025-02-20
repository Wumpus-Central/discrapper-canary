Object.defineProperty(t, '__esModule', { value: !0 }), (t.active = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = o(n(192379));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
function a(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function s(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function l(e, t) {
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
var c = (t.active = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function o() {
            a(this, o);
            for (var n, l, c, u = arguments.length, d = Array(u), f = 0; f < u; f++) d[f] = arguments[f];
            return (
                (l = c = s(this, (n = o.__proto__ || Object.getPrototypeOf(o)).call.apply(n, [this].concat(d)))),
                (c.state = { active: !1 }),
                (c.handleMouseDown = function () {
                    return c.setState({ active: !0 });
                }),
                (c.handleMouseUp = function () {
                    return c.setState({ active: !1 });
                }),
                (c.render = function () {
                    return i.default.createElement(
                        t,
                        {
                            onMouseDown: c.handleMouseDown,
                            onMouseUp: c.handleMouseUp
                        },
                        i.default.createElement(e, r({}, c.props, c.state))
                    );
                }),
                s(c, l)
            );
        }
        return l(o, n), o;
    })(i.default.Component);
});
t.default = c;
