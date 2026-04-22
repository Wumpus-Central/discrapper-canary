"use strict";
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    s = n(64700),
    a = n(267017),
    o = n(207147);
e.exports = function (e) {
    var t = (function (t) {
        if ("function" != typeof t && null !== t)
            throw TypeError("Super expression must either be null or a function, not " + typeof t);
        function n() {
            if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
            var e = (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments);
            if (!this) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && ("object" == typeof e || "function" == typeof e) ? e : this;
        }
        return (
            (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
            })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(n, t) : (n.__proto__ = t)),
            i(n, [
                {
                    key: "componentWillUnmount",
                    value: function () {
                        this._propsAnimated && this._propsAnimated.__detach();
                    },
                },
                {
                    key: "setNativeProps",
                    value: function (e) {
                        !1 === o.current(this.componentRef, e, this) && this.forceUpdate();
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
                            n = this._propsAnimated;
                        (this._propsAnimated = new a(e, function () {
                            !1 === o.current(t.componentRef, t._propsAnimated.__getAnimatedValue(), t) &&
                                t.forceUpdate();
                        })),
                            n && n.__detach();
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
                            n = this._propsAnimated.__getValue(),
                            i = n.style,
                            a = (function (e, t) {
                                var n = {};
                                for (var r in e)
                                    !(t.indexOf(r) >= 0) && Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                return n;
                            })(n, ["style"]);
                        return s.createElement(
                            e,
                            r({}, a, {
                                style: o.transformStyles(i),
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
            n
        );
    })(s.Component);
    return (
        (t.propTypes = {
            style: function (t, n, r) {
                if (!e.propTypes) return;
            },
        }),
        t
    );
};
