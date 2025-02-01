var i = (function () {
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
function r(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function s(e, t) {
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
var o = n(328794),
    l = n(601102),
    u = n(887442),
    c = (function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (n._deceleration = void 0 !== e.deceleration ? e.deceleration : 0.998), (n._velocity = e.velocity), (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction), n;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: 'start',
                    value: function (e, t, n) {
                        (this.__active = !0), (this._lastValue = e), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n), (this._startTime = Date.now()), (this._animationFrame = l.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'onUpdate',
                    value: function () {
                        var e = Date.now(),
                            t = this._fromValue + (this._velocity / (1 - this._deceleration)) * (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)));
                        if ((this._onUpdate(t), 0.1 > Math.abs(this._lastValue - t))) {
                            this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        (this._lastValue = t), this.__active && (this._animationFrame = l.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'stop',
                    value: function () {
                        (this.__active = !1), u.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                    }
                }
            ]),
            t
        );
    })(o);
e.exports = c;
