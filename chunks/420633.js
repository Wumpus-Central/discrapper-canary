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
var o = n(22672),
    l = n(431732),
    u = n(526811),
    c = n(912037);
n(328794);
var d = n(16686),
    f = n.g.Set || n(344460);
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
var p = (function (e) {
    function t(e) {
        r(this, t);
        var n = a(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (n._value = e), (n._offset = 0), (n._animation = null), (n._listeners = {}), n;
    }
    return (
        s(t, e),
        i(t, [
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
                    return new u(this, c.create(e));
                }
            },
            {
                key: 'animate',
                value: function (e, t) {
                    var n = this,
                        i = null;
                    e.__isInteraction && (i = l.current.createInteractionHandle());
                    var r = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = e),
                        e.start(
                            this._value,
                            function (e) {
                                n._updateValue(e);
                            },
                            function (e) {
                                (n._animation = null), null !== i && l.current.clearInteractionHandle(i), t && t(e);
                            },
                            r
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
})(o);
e.exports = p;
