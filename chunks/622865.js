var r = (function () {
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
function i(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
function a(e, t) {
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
var s = n(438648),
    l = n(622690),
    c = n(998217),
    u = n(752701);
n(73041);
var d = n(13167),
    f = n.g.Set || n(39054);
function _(e) {
    var t = new f();
    function n(e) {
        'function' == typeof e.update ? t.add(e) : e.__getChildren().forEach(n);
    }
    n(e),
        t.forEach(function (e) {
            return e.update();
        });
}
e.exports = (function (e) {
    function t(e) {
        i(this, t);
        var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._value = e), (n._offset = 0), (n._animation = null), (n._listeners = {}), n;
    }
    return (
        a(t, e),
        r(t, [
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
                    var t = d();
                    return (this._listeners[t] = e), t;
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
                    return new c(this, u.create(e));
                }
            },
            {
                key: 'animate',
                value: function (e, t) {
                    var n = this,
                        r = null;
                    e.__isInteraction && (r = l.current.createInteractionHandle());
                    var i = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = e),
                        e.start(
                            this._value,
                            function (e) {
                                n._updateValue(e);
                            },
                            function (e) {
                                (n._animation = null), null !== r && l.current.clearInteractionHandle(r), t && t(e);
                            },
                            i
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
                    for (var t in ((this._value = e), _(this), this._listeners)) this._listeners[t]({ value: this.__getValue() });
                }
            }
        ]),
        t
    );
})(s);
