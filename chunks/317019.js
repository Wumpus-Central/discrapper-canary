n.d(t, { I: () => c });
var r = n(192379),
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    o = (function () {
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
var c = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function c() {
            a(this, c);
            for (var e, t, n, r = arguments.length, i = Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return (
                (t = n = s(this, (e = c.__proto__ || Object.getPrototypeOf(c)).call.apply(e, [this].concat(i)))),
                (n.state = { focus: !1 }),
                (n.handleFocus = function () {
                    return n.setState({ focus: !0 });
                }),
                (n.handleBlur = function () {
                    return n.setState({ focus: !1 });
                }),
                s(n, t)
            );
        }
        return (
            l(c, n),
            o(c, [
                {
                    key: 'render',
                    value: function () {
                        return r.createElement(
                            t,
                            {
                                onFocus: this.handleFocus,
                                onBlur: this.handleBlur
                            },
                            r.createElement(e, i({}, this.props, this.state))
                        );
                    }
                }
            ]),
            c
        );
    })(r.Component);
};
