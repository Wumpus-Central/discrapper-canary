var t = Object.prototype.hasOwnProperty,
    n = '~';
function r() {}
function i(e, t, n) {
    (this.fn = e), (this.context = t), (this.once = n || !1);
}
function o(e, t, r, o, a) {
    if ('function' != typeof r) throw TypeError('The listener must be a function');
    var s = new i(r, o || e, a),
        l = n ? n + t : t;
    return e._events[l] ? (e._events[l].fn ? (e._events[l] = [e._events[l], s]) : e._events[l].push(s)) : ((e._events[l] = s), e._eventsCount++), e;
}
function a(e, t) {
    0 == --e._eventsCount ? (e._events = new r()) : delete e._events[t];
}
function s() {
    (this._events = new r()), (this._eventsCount = 0);
}
Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
    (s.prototype.eventNames = function () {
        var e,
            r,
            i = [];
        if (0 === this._eventsCount) return i;
        for (r in (e = this._events)) t.call(e, r) && i.push(n ? r.slice(1) : r);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
    }),
    (s.prototype.listeners = function (e) {
        var t = n ? n + e : e,
            r = this._events[t];
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var i = 0, o = r.length, a = Array(o); i < o; i++) a[i] = r[i].fn;
        return a;
    }),
    (s.prototype.listenerCount = function (e) {
        var t = n ? n + e : e,
            r = this._events[t];
        return r ? (r.fn ? 1 : r.length) : 0;
    }),
    (s.prototype.emit = function (e, t, r, i, o, a) {
        var s = n ? n + e : e;
        if (!this._events[s]) return !1;
        var l,
            c,
            u = this._events[s],
            d = arguments.length;
        if (u.fn) {
            switch ((u.once && this.removeListener(e, u.fn, void 0, !0), d)) {
                case 1:
                    return u.fn.call(u.context), !0;
                case 2:
                    return u.fn.call(u.context, t), !0;
                case 3:
                    return u.fn.call(u.context, t, r), !0;
                case 4:
                    return u.fn.call(u.context, t, r, i), !0;
                case 5:
                    return u.fn.call(u.context, t, r, i, o), !0;
                case 6:
                    return u.fn.call(u.context, t, r, i, o, a), !0;
            }
            for (c = 1, l = Array(d - 1); c < d; c++) l[c - 1] = arguments[c];
            u.fn.apply(u.context, l);
        } else {
            var f,
                p = u.length;
            for (c = 0; c < p; c++)
                switch ((u[c].once && this.removeListener(e, u[c].fn, void 0, !0), d)) {
                    case 1:
                        u[c].fn.call(u[c].context);
                        break;
                    case 2:
                        u[c].fn.call(u[c].context, t);
                        break;
                    case 3:
                        u[c].fn.call(u[c].context, t, r);
                        break;
                    case 4:
                        u[c].fn.call(u[c].context, t, r, i);
                        break;
                    default:
                        if (!l) for (f = 1, l = Array(d - 1); f < d; f++) l[f - 1] = arguments[f];
                        u[c].fn.apply(u[c].context, l);
                }
        }
        return !0;
    }),
    (s.prototype.on = function (e, t, n) {
        return o(this, e, t, n, !1);
    }),
    (s.prototype.once = function (e, t, n) {
        return o(this, e, t, n, !0);
    }),
    (s.prototype.removeListener = function (e, t, r, i) {
        var o = n ? n + e : e;
        if (!this._events[o]) return this;
        if (!t) return a(this, o), this;
        var s = this._events[o];
        if (s.fn) s.fn !== t || (i && !s.once) || (r && s.context !== r) || a(this, o);
        else {
            for (var l = 0, c = [], u = s.length; l < u; l++) (s[l].fn !== t || (i && !s[l].once) || (r && s[l].context !== r)) && c.push(s[l]);
            c.length ? (this._events[o] = 1 === c.length ? c[0] : c) : a(this, o);
        }
        return this;
    }),
    (s.prototype.removeAllListeners = function (e) {
        var t;
        return e ? ((t = n ? n + e : e), this._events[t] && a(this, t)) : ((this._events = new r()), (this._eventsCount = 0)), this;
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.addListener = s.prototype.on),
    (s.prefixed = n),
    (s.EventEmitter = s),
    (e.exports = s);
