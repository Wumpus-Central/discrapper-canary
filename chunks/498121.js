var n = (function () {
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
    i = r(652925),
    o = r(667794),
    a = r(439834),
    s = r(540017);
r(150433);
var l = r(140526),
    u = r.g.Set || r(155392);
e.exports = (function (e) {
    if ("function" != typeof e && null !== e)
        throw TypeError("Super expression must either be null or a function, not " + typeof e);
    function t(e) {
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        var r = (function (e, t) {
            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (r._value = e), (r._offset = 0), (r._animation = null), (r._listeners = {}), r;
    }
    return (
        (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
        })),
        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e)),
        n(t, [
            {
                key: "__detach",
                value: function () {
                    this.stopAnimation();
                },
            },
            {
                key: "__getValue",
                value: function () {
                    return this._value + this._offset;
                },
            },
            {
                key: "setValue",
                value: function (e) {
                    this._animation && (this._animation.stop(), (this._animation = null)), this._updateValue(e);
                },
            },
            {
                key: "setOffset",
                value: function (e) {
                    this._offset = e;
                },
            },
            {
                key: "flattenOffset",
                value: function () {
                    (this._value += this._offset), (this._offset = 0);
                },
            },
            {
                key: "addListener",
                value: function (e) {
                    var t = l();
                    return (this._listeners[t] = e), t;
                },
            },
            {
                key: "removeListener",
                value: function (e) {
                    delete this._listeners[e];
                },
            },
            {
                key: "removeAllListeners",
                value: function () {
                    this._listeners = {};
                },
            },
            {
                key: "stopAnimation",
                value: function (e) {
                    this.stopTracking(),
                        this._animation && this._animation.stop(),
                        (this._animation = null),
                        e && e(this.__getValue());
                },
            },
            {
                key: "interpolate",
                value: function (e) {
                    return new a(this, s.create(e));
                },
            },
            {
                key: "animate",
                value: function (e, t) {
                    var r = this,
                        n = null;
                    e.__isInteraction && (n = o.current.createInteractionHandle());
                    var i = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = e),
                        e.start(
                            this._value,
                            function (e) {
                                r._updateValue(e);
                            },
                            function (e) {
                                (r._animation = null), null !== n && o.current.clearInteractionHandle(n), t && t(e);
                            },
                            i,
                        );
                },
            },
            {
                key: "stopTracking",
                value: function () {
                    this._tracking && this._tracking.__detach(), (this._tracking = null);
                },
            },
            {
                key: "track",
                value: function (e) {
                    this.stopTracking(), (this._tracking = e);
                },
            },
            {
                key: "_updateValue",
                value: function (e) {
                    var t, r;
                    for (var n in ((this._value = e),
                    (t = this),
                    (r = new u()),
                    !(function e(t) {
                        "function" == typeof t.update ? r.add(t) : t.__getChildren().forEach(e);
                    })(t),
                    r.forEach(function (e) {
                        return e.update();
                    }),
                    this._listeners))
                        this._listeners[n]({ value: this.__getValue() });
                },
            },
        ]),
        t
    );
})(i);
