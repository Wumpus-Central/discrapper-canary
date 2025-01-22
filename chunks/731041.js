Object.defineProperty(n, '__esModule', { value: !0 }), (n.active = void 0);
var i =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    a = o(r(192379));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
function s(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function l(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function u(e, n) {
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
var c = (n.active = function (e) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (r) {
        function o() {
            s(this, o);
            for (var r, u, c, d = arguments.length, f = Array(d), p = 0; p < d; p++) f[p] = arguments[p];
            return (
                (u = c = l(this, (r = o.__proto__ || Object.getPrototypeOf(o)).call.apply(r, [this].concat(f)))),
                (c.state = { active: !1 }),
                (c.handleMouseDown = function () {
                    return c.setState({ active: !0 });
                }),
                (c.handleMouseUp = function () {
                    return c.setState({ active: !1 });
                }),
                (c.render = function () {
                    return a.default.createElement(
                        n,
                        {
                            onMouseDown: c.handleMouseDown,
                            onMouseUp: c.handleMouseUp
                        },
                        a.default.createElement(e, i({}, c.props, c.state))
                    );
                }),
                l(c, u)
            );
        }
        return u(o, r), o;
    })(a.default.Component);
});
n.default = c;
