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
function o() {
    o.init.call(this);
}
(e.exports = o),
    (e.exports.once = function (e, t) {
        return new Promise(function (n, i) {
            var r, o, a;
            function s(n) {
                e.removeListener(t, u), i(n);
            }
            function u() {
                "function" == typeof e.removeListener && e.removeListener("error", s), n([].slice.call(arguments));
            }
            y(e, t, u, { once: !0 }),
                "error" !== t &&
                    ((r = e), (o = s), (a = { once: !0 }), "function" == typeof r.on && y(r, "error", o, a));
        });
    }),
    (o.EventEmitter = o),
    (o.prototype._events = void 0),
    (o.prototype._eventsCount = 0),
    (o.prototype._maxListeners = void 0);
var a = 10;
function s(e) {
    if ("function" != typeof e)
        throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function u(e) {
    return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners;
}
function l(e, t, n, i) {
    if (
        (s(n),
        void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), (o = e._events)),
              (a = o[t])),
        void 0 === a)
    )
        (a = o[t] = n), ++e._eventsCount;
    else if (
        ("function" == typeof a ? (a = o[t] = i ? [n, a] : [a, n]) : i ? a.unshift(n) : a.push(n),
        (r = u(e)) > 0 && a.length > r && !a.warned)
    ) {
        a.warned = !0;
        var r,
            o,
            a,
            l = Error(
                "Possible EventEmitter memory leak detected. " +
                    a.length +
                    " " +
                    String(t) +
                    " listeners added. Use emitter.setMaxListeners() to increase limit",
            );
        (l.name = "MaxListenersExceededWarning"),
            (l.emitter = e),
            (l.type = t),
            (l.count = a.length),
            console && console.warn && console.warn(l);
    }
    return e;
}
function c() {
    if (!this.fired)
        return (this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 == arguments.length)
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments);
}
function f(e, t, n) {
    var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
        r = c.bind(i);
    return (r.listener = n), (i.wrapFn = r), r;
}
function d(e, t, n) {
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
    for (var n = Array(t), i = 0; i < t; ++i) n[i] = e[i];
    return n;
}
function y(e, t, n, i) {
    if ("function" == typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
    else if ("function" == typeof e.addEventListener)
        e.addEventListener(t, function r(o) {
            i.once && e.removeEventListener(t, r), n(o);
        });
    else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
Object.defineProperty(o, "defaultMaxListeners", {
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
    (o.init = function () {
        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) &&
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
    }),
    (o.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || r(e))
            throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
        return (this._maxListeners = e), this;
    }),
    (o.prototype.getMaxListeners = function () {
        return u(this);
    }),
    (o.prototype.emit = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        var r = "error" === e,
            o = this._events;
        if (void 0 !== o) r = r && void 0 === o.error;
        else if (!r) return !1;
        if (r) {
            if ((t.length > 0 && (a = t[0]), a instanceof Error)) throw a;
            var a,
                s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw ((s.context = a), s);
        }
        var u = o[e];
        if (void 0 === u) return !1;
        if ("function" == typeof u) i(u, this, t);
        else for (var l = u.length, c = h(u, l), n = 0; n < l; ++n) i(c[n], this, t);
        return !0;
    }),
    (o.prototype.addListener = function (e, t) {
        return l(this, e, t, !1);
    }),
    (o.prototype.on = o.prototype.addListener),
    (o.prototype.prependListener = function (e, t) {
        return l(this, e, t, !0);
    }),
    (o.prototype.once = function (e, t) {
        return s(t), this.on(e, f(this, e, t)), this;
    }),
    (o.prototype.prependOnceListener = function (e, t) {
        return s(t), this.prependListener(e, f(this, e, t)), this;
    }),
    (o.prototype.removeListener = function (e, t) {
        var n, i, r, o, a;
        if ((s(t), void 0 === (i = this._events) || void 0 === (n = i[e]))) return this;
        if (n === t || n.listener === t)
            0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
        else if ("function" != typeof n) {
            for (r = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === t || n[o].listener === t) {
                    (a = n[o].listener), (r = o);
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
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.removeAllListeners = function (e) {
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
                o = Object.keys(n);
            for (i = 0; i < o.length; ++i) "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
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
    (o.prototype.listeners = function (e) {
        return d(this, e, !0);
    }),
    (o.prototype.rawListeners = function (e) {
        return d(this, e, !1);
    }),
    (o.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t);
    }),
    (o.prototype.listenerCount = p),
    (o.prototype.eventNames = function () {
        return this._eventsCount > 0 ? t(this._events) : [];
    });
