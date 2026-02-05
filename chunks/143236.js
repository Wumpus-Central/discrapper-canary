"use strict";
var t,
    n = "object" == typeof Reflect ? Reflect : null,
    r =
        n && "function" == typeof n.apply
            ? n.apply
            : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
              };
function i(e) {
    console && console.warn && console.warn(e);
}
t =
    n && "function" == typeof n.ownKeys
        ? n.ownKeys
        : Object.getOwnPropertySymbols
          ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
            }
          : function (e) {
                return Object.getOwnPropertyNames(e);
            };
var a =
    Number.isNaN ||
    function (e) {
        return e != e;
    };
function s() {
    s.init.call(this);
}
(e.exports = s),
    (e.exports.once = E),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
var o = 10;
function l(e) {
    if ("function" != typeof e)
        throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function u(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
}
function c(e, t, n, r) {
    if (
        (l(n),
        void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (s = e._events)),
              (o = s[t])),
        void 0 === o)
    )
        (o = s[t] = n), ++e._eventsCount;
    else if (
        ("function" == typeof o ? (o = s[t] = r ? [n, o] : [o, n]) : r ? o.unshift(n) : o.push(n),
        (a = u(e)) > 0 && o.length > a && !o.warned)
    ) {
        o.warned = !0;
        var a,
            s,
            o,
            c = Error(
                "Possible EventEmitter memory leak detected. " +
                    o.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit",
            );
        (c.name = "MaxListenersExceededWarning"), (c.emitter = e), (c.type = t), (c.count = o.length), i(c);
    }
    return e;
}
function d() {
    if (!this.fired)
        return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
}
function _(e, t, n) {
    var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        i = d.bind(r);
    return (i.listener = n), (r.wrapFn = i), i;
}
function f(e, t, n) {
    var r = e._events;
    if (void 0 === r) return [];
    var i = r[t];
    return void 0 === i ? [] : "function" == typeof i ? (n ? [i.listener || i] : [i]) : n ? g(i) : h(i, i.length);
}
function p(e) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
    }
    return 0;
}
function h(e, t) {
    for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
    return n;
}
function m(e, t) {
    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
    e.pop();
}
function g(e) {
    for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
    return t;
}
function E(e, t) {
    return new Promise(function (n, r) {
        function i(n) {
            e.removeListener(t, a), r(n);
        }
        function a() {
            "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments));
        }
        I(e, t, a, { once: !0 }), "error" !== t && A(e, i, { once: !0 });
    });
}
function A(e, t, n) {
    "function" == typeof e.on && I(e, "error", t, n);
}
function I(e, t, n, r) {
    if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
    else if ("function" == typeof e.addEventListener)
        e.addEventListener(t, function i(a) {
            r.once && e.removeEventListener(t, i), n(a);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
        return o;
    },
    set: function (e) {
        if ("number" != typeof e || e < 0 || a(e))
            throw RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    ".",
            );
        o = e;
    },
}),
    (s.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || a(e))
            throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return (this._maxListeners = e), this;
    }),
    (s.prototype.getMaxListeners = function () {
        return u(this);
    }),
    (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var i = "error" === e,
            a = this._events;
        if (void 0 !== a) i = i && void 0 === a.error;
        else if (!i) return !1;
        if (i) {
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var s,
                o = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
            throw ((o.context = s), o);
        }
        var l = a[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) r(l, this, t);
        else for (var u = l.length, c = h(l, u), n = 0; n < u; ++n) r(c[n], this, t);
        return !0;
    }),
    (s.prototype.addListener = function (e, t) {
        return c(this, e, t, !1);
    }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (e, t) {
        return c(this, e, t, !0);
    }),
    (s.prototype.once = function (e, t) {
        return l(t), this.on(e, _(this, e, t)), this;
    }),
    (s.prototype.prependOnceListener = function (e, t) {
        return l(t), this.prependListener(e, _(this, e, t)), this;
    }),
    (s.prototype.removeListener = function (e, t) {
        var n, r, i, a, s;
        if ((l(t), void 0 === (r = this._events) || void 0 === (n = r[e]))) return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (i = -1, a = n.length - 1; a >= 0; a--)
                if (n[a] === t || n[a].listener === t) {
                    (s = n[a].listener), (i = a);
                    break;
                }
            if (i < 0) return this;
            0 === i ? n.shift() : m(n, i),
                1 === n.length && (r[e] = n[0]),
                void 0 !== r.removeListener && this.emit("removeListener", e, s || t);
        }
        return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (e) {
        var t, n, r;
        if (void 0 === (n = this._events)) return this;
        if (void 0 === n.removeListener)
            return (
                0 == arguments.length
                    ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                    : void 0 !== n[e] &&
                      (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete n[e]),
                this
            );
        if (0 == arguments.length) {
            var i,
                a = Object.keys(n);
            for (r = 0; r < a.length; ++r) "removeListener" !== (i = a[r]) && this.removeAllListeners(i);
            return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
            );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
        return this;
    }),
    (s.prototype.listeners = function (e) {
        return f(this, e, !0);
    }),
    (s.prototype.rawListeners = function (e) {
        return f(this, e, !1);
    }),
    (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
    }),
    (s.prototype.listenerCount = p),
    (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? t(this._events) : [];
    });
