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
var o = n(328794);
n(420633);
var l = n(501501),
    u = n(601102),
    c = n(887442),
    d = l.inOut(l.ease),
    f = (function (e) {
        function t(e) {
            r(this, t);
            var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (n._toValue = e.toValue), (n._easing = void 0 !== e.easing ? e.easing : d), (n._duration = void 0 !== e.duration ? e.duration : 500), (n._delay = void 0 !== e.delay ? e.delay : 0), (n.__isInteraction = void 0 === e.isInteraction || e.isInteraction), n;
        }
        return (
            s(t, e),
            i(t, [
                {
                    key: 'start',
                    value: function (e, t, n) {
                        var i = this;
                        (this.__active = !0), (this._fromValue = e), (this._onUpdate = t), (this.__onEnd = n);
                        var r = function () {
                            0 === i._duration ? (i._onUpdate(i._toValue), i.__debouncedOnEnd({ finished: !0 })) : ((i._startTime = Date.now()), (i._animationFrame = u.current(i.onUpdate.bind(i))));
                        };
                        this._delay ? (this._timeout = setTimeout(r, this._delay)) : r();
                    }
                },
                {
                    key: 'onUpdate',
                    value: function () {
                        var e = Date.now();
                        if (e >= this._startTime + this._duration) {
                            0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), this.__debouncedOnEnd({ finished: !0 });
                            return;
                        }
                        this._onUpdate(this._fromValue + this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = u.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'stop',
                    value: function () {
                        (this.__active = !1), clearTimeout(this._timeout), c.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                    }
                }
            ]),
            t
        );
    })(o);
e.exports = f;
