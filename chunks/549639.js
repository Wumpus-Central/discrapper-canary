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
var l = r(328794);
r(420633);
var u = r(501501),
    c = r(601102),
    d = r(887442),
    f = u.inOut(u.ease),
    p = (function (e) {
        function n(e) {
            a(this, n);
            var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
            return (r._toValue = e.toValue), (r._easing = void 0 !== e.easing ? e.easing : f), (r._duration = void 0 !== e.duration ? e.duration : 500), (r._delay = void 0 !== e.delay ? e.delay : 0), (r.__isInteraction = void 0 === e.isInteraction || e.isInteraction), r;
        }
        return (
            s(n, e),
            i(n, [
                {
                    key: 'start',
                    value: function (e, n, r) {
                        var i = this;
                        (this.__active = !0), (this._fromValue = e), (this._onUpdate = n), (this.__onEnd = r);
                        var a = function () {
                            0 === i._duration ? (i._onUpdate(i._toValue), i.__debouncedOnEnd({ finished: !0 })) : ((i._startTime = Date.now()), (i._animationFrame = c.current(i.onUpdate.bind(i))));
                        };
                        this._delay ? (this._timeout = setTimeout(a, this._delay)) : a();
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
                        this._onUpdate(this._fromValue + this._easing((e - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = c.current(this.onUpdate.bind(this)));
                    }
                },
                {
                    key: 'stop',
                    value: function () {
                        (this.__active = !1), clearTimeout(this._timeout), d.current(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                    }
                }
            ]),
            n
        );
    })(l);
e.exports = p;
