"use strict";
var t = Object.prototype.hasOwnProperty,
    n = "~";
function r() {}
function i(e, t, n) {
    (this.fn = e), (this.context = t), (this.once = n || !1);
}
function a(e, t, r, a, s) {
    if ("function" != typeof r) throw TypeError("The listener must be a function");
    var o = new i(r, a || e, s),
        l = n ? n + t : t;
    return (
        e._events[l]
            ? e._events[l].fn
                ? (e._events[l] = [e._events[l], o])
                : e._events[l].push(o)
            : ((e._events[l] = o), e._eventsCount++),
        e
    );
}
function s(e, t) {
    0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
}
function o() {
    (this._events = new r()), (this._eventsCount = 0);
}
Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
    (o.prototype.eventNames = function () {
        var e,
            r,
            i = [];
        if (0 === this._eventsCount) return i;
        for (r in (e = this._events)) t.call(e, r) && i.push(n ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
    }),
    (o.prototype.listeners = function (e) {
        var t = n ? n + e : e,
            r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var i = 0, a = r.length, s = Array(a); i < a; i++) s[i] = r[i].fn;
        return s;
    }),
    (o.prototype.listenerCount = function (e) {
        var t = n ? n + e : e,
            r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (o.prototype.emit = function (e, t, r, i, a, s) {
        var o = n ? n + e : e;
        if (!this._events[o]) return !1;
        var l,
            u,
            c = this._events[o],
            d = arguments.length;
        if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), d)) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, t), !0;
                case 3:
                    return c.fn.call(c.context, t, r), !0;
                case 4:
                    return c.fn.call(c.context, t, r, i), !0;
                case 5:
                    return c.fn.call(c.context, t, r, i, a), !0;
                case 6:
                    return c.fn.call(c.context, t, r, i, a, s), !0;
            }
            for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
        } else {
            var _,
                f = c.length;
            for (u = 0; u < f; u++)
                switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, t);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, t, r);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, t, r, i);
                        break;
                    default:
                        if (!l) for (_ = 1, l = Array(d - 1); _ < d; _++) l[_ - 1] = arguments[_];
                        c[u].fn.apply(c[u].context, l);
                }
        }
        return !0;
    }),
    (o.prototype.on = function (e, t, n) {
        return a(this, e, t, n, !1);
    }),
    (o.prototype.once = function (e, t, n) {
        return a(this, e, t, n, !0);
    }),
    (o.prototype.removeListener = function (e, t, r, i) {
        var a = n ? n + e : e;
        if (!this._events[a]) return this;
        if (!t) return s(this, a), this;
        var o = this._events[a];
        if (o.fn) o.fn !== t || (i && !o.once) || (r && o.context !== r) || s(this, a);
        else {
            for (var l = 0, u = [], c = o.length; l < c; l++)
                (o[l].fn !== t || (i && !o[l].once) || (r && o[l].context !== r)) && u.push(o[l]);
            u.length ? (this._events[a] = 1 === u.length ? u[0] : u) : s(this, a);
        }
        return this;
    }),
    (o.prototype.removeAllListeners = function (e) {
        var t;
        return (
            e
                ? ((t = n ? n + e : e), this._events[t] && s(this, t))
                : ((this._events = new r()), (this._eventsCount = 0)),
            this
        );
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.addListener = o.prototype.on),
    (o.prefixed = n),
    (o.EventEmitter = o),
    (e.exports = o);
