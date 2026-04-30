"use strict";
var t,
    n = "object" == typeof Reflect ? Reflect : null,
    i =
        n && "function" == typeof n.apply
            ? n.apply
            : function (e, t, n) {
                  return Function.prototype.apply.call(e, t, n);
              };
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
var r =
    Number.isNaN ||
    function (e) {
        return e != e;
    };
function s() {
    s.init.call(this);
}
(e.exports = s),
    (e.exports.once = function (e, t) {
        return new Promise(function (n, i) {
            var r, s, a;
            function o(n) {
                e.removeListener(t, l), i(n);
            }
            function l() {
                "function" == typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments));
            }
            p(e, t, l, { once: !0 }),
                "error" !== t &&
                    ((r = e), (s = o), (a = { once: !0 }), "function" == typeof r.on && p(r, "error", s, a));
        });
    }),
    (s.EventEmitter = s),
    (s.prototype._events = void 0),
    (s.prototype._eventsCount = 0),
    (s.prototype._maxListeners = void 0);
var a = 10;
function o(e) {
    if ("function" != typeof e)
        throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function l(e) {
    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners;
}
function u(e, t, n, i) {
    if (
        (o(n),
        void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (s = e._events)),
              (a = s[t])),
        void 0 === a)
    )
        (a = s[t] = n), ++e._eventsCount;
    else if (
        ("function" == typeof a ? (a = s[t] = i ? [n, a] : [a, n]) : i ? a.unshift(n) : a.push(n),
        (r = l(e)) > 0 && a.length > r && !a.warned)
    ) {
        a.warned = !0;
        var r,
            s,
            a,
            u = Error(
                "Possible EventEmitter memory leak detected. " +
                    a.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit",
            );
        (u.name = "MaxListenersExceededWarning"),
            (u.emitter = e),
            (u.type = t),
            (u.count = a.length),
            console && console.warn && console.warn(u);
    }
    return e;
}
function c() {
    if (!this.fired)
        return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
}
function d(e, t, n) {
    var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        r = c.bind(i);
    return (r.listener = n), (i.wrapFn = r), r;
}
function _(e, t, n) {
    var i = e._events;
    if (void 0 === i) return [];
    var r = i[t];
    return void 0 === r
        ? []
        : "function" == typeof r
          ? n
              ? [r.listener || r]
              : [r]
          : n
            ? (function (e) {
                  for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                  return t;
              })(r)
            : h(r, r.length);
}
function f(e) {
    var t = this._events;
    if (void 0 !== t) {
        var n = t[e];
        if ("function" == typeof n) return 1;
        if (void 0 !== n) return n.length;
    }
    return 0;
}
function h(e, t) {
    for (var n = Array(t), i = 0; i < t; ++i) n[i] = e[i];
    return n;
}
function p(e, t, n, i) {
    if ("function" == typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
    else if ("function" == typeof e.addEventListener)
        e.addEventListener(t, function r(s) {
            i.once && e.removeEventListener(t, r), n(s);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function () {
        return a;
    },
    set: function (e) {
        if ("number" != typeof e || e < 0 || r(e))
            throw RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                    e +
                    ".",
            );
        a = e;
    },
}),
    (s.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
    }),
    (s.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || r(e))
            throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return (this._maxListeners = e), this;
    }),
    (s.prototype.getMaxListeners = function () {
        return l(this);
    }),
    (s.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
            s = this._events;
        if (void 0 !== s) r = r && void 0 === s.error;
        else if (!r) return !1;
        if (r) {
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var a,
                o = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw ((o.context = a), o);
        }
        var l = s[e];
        if (void 0 === l) return !1;
        if ("function" == typeof l) i(l, this, t);
        else for (var u = l.length, c = h(l, u), n = 0; n < u; ++n) i(c[n], this, t);
        return !0;
    }),
    (s.prototype.addListener = function (e, t) {
        return u(this, e, t, !1);
    }),
    (s.prototype.on = s.prototype.addListener),
    (s.prototype.prependListener = function (e, t) {
        return u(this, e, t, !0);
    }),
    (s.prototype.once = function (e, t) {
        return o(t), this.on(e, d(this, e, t)), this;
    }),
    (s.prototype.prependOnceListener = function (e, t) {
        return o(t), this.prependListener(e, d(this, e, t)), this;
    }),
    (s.prototype.removeListener = function (e, t) {
        var n, i, r, s, a;
        if ((o(t), void 0 === (i = this._events) || void 0 === (n = i[e]))) return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (r = -1, s = n.length - 1; s >= 0; s--)
                if (n[s] === t || n[s].listener === t) {
                    (a = n[s].listener), (r = s);
                    break;
                }
            if (r < 0) return this;
            0 === r
                ? n.shift()
                : (function (e, t) {
                      for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                      e.pop();
                  })(n, r),
                1 === n.length && (i[e] = n[0]),
                void 0 !== i.removeListener && this.emit("removeListener", e, a || t);
        }
        return this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.removeAllListeners = function (e) {
        var t, n, i;
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
            var r,
                s = Object.keys(n);
            for (i = 0; i < s.length; ++i) "removeListener" !== (r = s[i]) && this.removeAllListeners(r);
            return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
            );
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t);
        else if (void 0 !== t) for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
        return this;
    }),
    (s.prototype.listeners = function (e) {
        return _(this, e, !0);
    }),
    (s.prototype.rawListeners = function (e) {
        return _(this, e, !1);
    }),
    (s.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t);
    }),
    (s.prototype.listenerCount = f),
    (s.prototype.eventNames = function () {
        return this._eventsCount > 0 ? t(this._events) : [];
    });
