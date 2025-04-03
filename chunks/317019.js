r.d(t, { I: () => l });
var n = r(192379),
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    a = (function () {
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
function i(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
var l = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span',
        r = n.Component;
    if ('function' != typeof r && null !== r) throw TypeError('Super expression must either be null or a function, not ' + typeof r);
    function l() {
        if (!(this instanceof l)) throw TypeError('Cannot call a class as a function');
        for (var e, t, r, n = arguments.length, o = Array(n), a = 0; a < n; a++) o[a] = arguments[a];
        return (
            (t = r = i(this, (e = l.__proto__ || Object.getPrototypeOf(l)).call.apply(e, [this].concat(o)))),
            (r.state = { focus: !1 }),
            (r.handleFocus = function () {
                return r.setState({ focus: !0 });
            }),
            (r.handleBlur = function () {
                return r.setState({ focus: !1 });
            }),
            i(r, t)
        );
    }
    return (
        (l.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: l,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        })),
        r && (Object.setPrototypeOf ? Object.setPrototypeOf(l, r) : (l.__proto__ = r)),
        a(l, [
            {
                key: 'render',
                value: function () {
                    return n.createElement(
                        t,
                        {
                            onFocus: this.handleFocus,
                            onBlur: this.handleBlur
                        },
                        n.createElement(e, o({}, this.props, this.state))
                    );
                }
            }
        ]),
        l
    );
};
