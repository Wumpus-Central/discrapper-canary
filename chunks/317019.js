n.d(t, { I: () => u });
var i = n(192379),
    r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    a = (function () {
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
var u = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function u() {
            s(this, u);
            for (var e, t, n, i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
            return (
                (t = n = o(this, (e = u.__proto__ || Object.getPrototypeOf(u)).call.apply(e, [this].concat(r)))),
                (n.state = { focus: !1 }),
                (n.handleFocus = function () {
                    return n.setState({ focus: !0 });
                }),
                (n.handleBlur = function () {
                    return n.setState({ focus: !1 });
                }),
                o(n, t)
            );
        }
        return (
            l(u, n),
            a(u, [
                {
                    key: 'render',
                    value: function () {
                        return i.createElement(
                            t,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            },
                            i.createElement(e, r({}, this.props, this.state))
                        );
                    }
                }
            ]),
            u
        );
    })(i.Component);
};
