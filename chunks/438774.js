var t = Object.prototype.hasOwnProperty,
    n = '~';
function i() {}
function r(e, t, n) {
    (this.fn = e), (this.context = t), (this.once = n || !1);
}
function a(e, t, i, a, s) {
    if ('function' != typeof i) throw TypeError('The listener must be a function');
    var o = new r(i, a || e, s),
        l = n ? n + t : t;
    return e._events[l] ? (e._events[l].fn ? (e._events[l] = [e._events[l], o]) : e._events[l].push(o)) : ((e._events[l] = o), e._eventsCount++), e;
}
function s(e, t) {
    0 == --e._eventsCount ? (e._events = new i()) : delete e._events[t];
}
function o() {
    (this._events = new i()), (this._eventsCount = 0);
}
Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (n = !1)),
    (o.prototype.eventNames = function () {
        var e,
            i,
            r = [];
        if (0 === this._eventsCount) return r;
        for (i in (e = this._events)) t.call(e, i) && r.push(n ? i.slice(1) : i);
        return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r;
    }),
    (o.prototype.listeners = function (e) {
        var t = n ? n + e : e,
            i = this._events[t];
        if (!i) return [];
        if (i.fn) return [i.fn];
        for (var r = 0, a = i.length, s = Array(a); r < a; r++) s[r] = i[r].fn;
        return s;
    }),
    (o.prototype.listenerCount = function (e) {
        var t = n ? n + e : e,
            i = this._events[t];
        return i ? (i.fn ? 1 : i.length) : 0;
    }),
    (o.prototype.emit = function (e, t, i, r, a, s) {
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
                    return c.fn.call(c.context, t, i), !0;
                case 4:
                    return c.fn.call(c.context, t, i, r), !0;
                case 5:
                    return c.fn.call(c.context, t, i, r, a), !0;
                case 6:
                    return c.fn.call(c.context, t, i, r, a, s), !0;
            }
            for (u = 1, l = Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
        } else {
            var f,
                _ = c.length;
            for (u = 0; u < _; u++)
                switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d)) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, t);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, t, i);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, t, i, r);
                        break;
                    default:
                        if (!l) for (f = 1, l = Array(d - 1); f < d; f++) l[f - 1] = arguments[f];
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
    (o.prototype.removeListener = function (e, t, i, r) {
        var a = n ? n + e : e;
        if (!this._events[a]) return this;
        if (!t) return s(this, a), this;
        var o = this._events[a];
        if (o.fn) o.fn !== t || (r && !o.once) || (i && o.context !== i) || s(this, a);
        else {
            for (var l = 0, u = [], c = o.length; l < c; l++) (o[l].fn !== t || (r && !o[l].once) || (i && o[l].context !== i)) && u.push(o[l]);
            u.length ? (this._events[a] = 1 === u.length ? u[0] : u) : s(this, a);
        }
        return this;
    }),
    (o.prototype.removeAllListeners = function (e) {
        var t;
        return e ? ((t = n ? n + e : e), this._events[t] && s(this, t)) : ((this._events = new i()), (this._eventsCount = 0)), this;
    }),
    (o.prototype.off = o.prototype.removeListener),
    (o.prototype.addListener = o.prototype.on),
    (o.prefixed = n),
    (o.EventEmitter = o),
    (e.exports = o);
