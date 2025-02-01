Object.defineProperty(t, '__esModule', { value: !0 }), (t.active = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    r = a(n(192379));
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
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
var u = (t.active = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function a() {
            s(this, a);
            for (var n, l, u, c = arguments.length, d = Array(c), f = 0; f < c; f++) d[f] = arguments[f];
            return (
                (l = u = o(this, (n = a.__proto__ || Object.getPrototypeOf(a)).call.apply(n, [this].concat(d)))),
                (u.state = { active: !1 }),
                (u.handleMouseDown = function () {
                    return u.setState({ active: !0 });
                }),
                (u.handleMouseUp = function () {
                    return u.setState({ active: !1 });
                }),
                (u.render = function () {
                    return r.default.createElement(
                        t,
                        {
                            onMouseDown: u.handleMouseDown,
                            onMouseUp: u.handleMouseUp
                        },
                        r.default.createElement(e, i({}, u.props, u.state))
                    );
                }),
                o(u, l)
            );
        }
        return l(a, n), a;
    })(r.default.Component);
});
t.default = u;
