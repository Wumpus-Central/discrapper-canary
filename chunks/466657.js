var i = (function () {
    function e(e, n) {
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    return function (n, r, i) {
        return r && e(n.prototype, r), i && e(n, i), n;
    };
})();
function a(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function o(e, n) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && ('object' == typeof n || 'function' == typeof n) ? n : e;
}
function s(e, n) {
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
var l = r(328794),
    u = r(601102),
    c = r(887442),
    d = (function (e) {
        function n(e) {
            a(this, n);
            var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (r._deceleration = void 0 !== e.deceleration ? e.deceleration : 0.998), (r._velocity = e.velocity), (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction), r;
        }
        return (
            s(n, e),
            i(n, [
                {
                    key: 'start',
                    value: function (e, n, r) {
                        (this.__active = !0), (this._lastValue = e), (this._fromValue = e), (this._onUpdate = n), (this.__onEnd = r), (this._startTime = Date.now()), (this._animationFrame = u.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'onUpdate',
                    value: function () {
                        var e = Date.now(),
                            n = this._fromValue + (this._velocity / (1 - this._deceleration)) * (1 - Math.exp(-(1 - this._deceleration) * (e - this._startTime)));
                        if ((this._onUpdate(n), 0.1 > Math.abs(this._lastValue - n))) {
                            this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        (this._lastValue = n), this.__active && (this._animationFrame = u.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'stop',
                    value: function () {
                        (this.__active = !1), c.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                    }
                }
            ]),
            n
        );
    })(l);
e.exports = d;
