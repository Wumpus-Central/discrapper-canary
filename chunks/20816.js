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
            c,
            u = this._events[o],
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
                    return u.fn.call(u.context, t, r, i, a), !0;
                case 6:
                    return u.fn.call(u.context, t, r, i, a, s), !0;
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
            for (var l = 0, c = [], u = o.length; l < u; l++)
                (o[l].fn !== t || (i && !o[l].once) || (r && o[l].context !== r)) && c.push(o[l]);
            c.length ? (this._events[a] = 1 === c.length ? c[0] : c) : s(this, a);
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
