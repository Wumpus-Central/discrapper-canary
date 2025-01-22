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
var l = r(22672),
    u = r(431732),
    c = r(526811),
    d = r(912037);
r(328794);
var f = r(16686),
    p = r.g.Set || r(344460);
function h(e) {
    var n = new p();
    function r(e) {
        'function' == typeof e.update ? n.add(e) : e.__getChildren().forEach(r);
    }
    r(e),
        n.forEach(function (e) {
            return e.update();
        });
}
var _ = (function (e) {
    function n(e) {
        a(this, n);
        var r = o(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        return (r._value = e), (r._offset = 0), (r._animation = null), (r._listeners = {}), r;
    }
    return (
        s(n, e),
        i(n, [
            {
                key: '__detach',
                value: function () {
                    this.stopAnimation();
                }
            },
            {
                key: '__getValue',
                value: function () {
                    return this._value + this._offset;
                }
            },
            {
                key: 'setValue',
                value: function (e) {
                    this._animation && (this._animation.stop(), (this._animation = null)), this._updateValue(e);
                }
            },
            {
                key: 'setOffset',
                value: function (e) {
                    this._offset = e;
                }
            },
            {
                key: 'flattenOffset',
                value: function () {
                    (this._value += this._offset), (this._offset = 0);
                }
            },
            {
                key: 'addListener',
                value: function (e) {
                    var n = f();
                    return (this._listeners[n] = e), n;
                }
            },
            {
                key: 'removeListener',
                value: function (e) {
                    delete this._listeners[e];
                }
            },
            {
                key: 'removeAllListeners',
                value: function () {
                    this._listeners = {};
                }
            },
            {
                key: 'stopAnimation',
                value: function (e) {
                    this.stopTracking(), this._animation && this._animation.stop(), (this._animation = null), e && e(this.__getValue());
                }
            },
            {
                key: 'interpolate',
                value: function (e) {
                    return new c(this, d.create(e));
                }
            },
            {
                key: 'animate',
                value: function (e, n) {
                    var r = this,
                        i = null;
                    e.__isInteraction && (i = u.current.createInteractionHandle());
                    var a = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = e),
                        e.start(
                            this._value,
                            function (e) {
                                r._updateValue(e);
                            },
                            function (e) {
                                (r._animation = null), null !== i && u.current.clearInteractionHandle(i), n && n(e);
                            },
                            a
                        );
                }
            },
            {
                key: 'stopTracking',
                value: function () {
                    this._tracking && this._tracking.__detach(), (this._tracking = null);
                }
            },
            {
                key: 'track',
                value: function (e) {
                    this.stopTracking(), (this._tracking = e);
                }
            },
            {
                key: '_updateValue',
                value: function (e) {
                    for (var n in ((this._value = e), h(this), this._listeners)) this._listeners[n]({ value: this.__getValue() });
                }
            }
        ]),
        n
    );
})(l);
e.exports = _;
