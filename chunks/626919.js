var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    o = r(582128),
    a = r(518118),
    s = r(848822);
e.exports = function (e) {
    var t = (function (t) {
        if ("function" != typeof t && null !== t)
            throw TypeError("Super expression must either be null or a function, not " + typeof t);
        function r() {
            if (!(this instanceof r)) throw TypeError("Cannot call a class as a function");
            var e = (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments);
            if (!this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && ("object" == typeof e || "function" == typeof e) ? e : this;
        }
        return (
            (r.prototype = Object.create(t && t.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
            })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(r, t) : (r.__proto__ = t)),
            i(r, [
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this._propsAnimated && this._propsAnimated.__detach();
                    },
                },
                {
                    key: "setNativeProps",
                    value: function (e) {
                        !1 === s.current(this.componentRef, e, this) && this.forceUpdate();
                    },
                },
                {
                    key: "componentWillMount",
                    value: function () {
                        this.attachProps(this.props);
                    },
                },
                {
                    key: "attachProps",
                    value: function (e) {
                        var t = this,
                            r = this._propsAnimated;
                        (this._propsAnimated = new a(e, function () {
                            !1 === s.current(t.componentRef, t._propsAnimated.__getAnimatedValue(), t) &&
                                t.forceUpdate();
                        })),
                            r && r.__detach();
                    },
                },
                {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.attachProps(e);
                    },
                },
                {
                    key: "render",
                    value: function () {
                        var t = this,
                            r = this._propsAnimated.__getValue(),
                            i = r.style,
                            a = (function (e, t) {
                                var r = {};
                                for (var n in e)
                                    !(t.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
                                return r;
                            })(r, ["style"]);
                        return o.createElement(
                            e,
                            n({}, a, {
                                style: s.transformStyles(i),
                                ref: function (e) {
                                    t.componentRef = e;
                                },
                                __source: { fileName: "src/createAnimatedComponent.js", lineNumber: 75 },
                            }),
                        );
                    },
                },
                {
                    key: "getNode",
                    value: function () {
                        return this.componentRef;
                    },
                },
            ]),
            r
        );
    })(o.Component);
    return (
        (t.propTypes = {
            style: function (t, r, n) {
                if (!e.propTypes) return;
            },
        }),
        t
    );
};
