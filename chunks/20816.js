var t = Object.prototype.hasOwnProperty,
    r = "~";
function n() {}
function i(e, t, r) {
    (this.fn = e), (this.context = t), (this.once = r || !1);
}
function o(e, t, n, o, a) {
    if ("function" != typeof n) throw TypeError("The listener must be a function");
    var s = new i(n, o || e, a),
        l = r ? r + t : t;
    return (
        e._events[l]
            ? e._events[l].fn
                ? (e._events[l] = [e._events[l], s])
                : e._events[l].push(s)
            : ((e._events[l] = s), e._eventsCount++),
        e
    );
}
function a(e, t) {
    0 == --e._eventsCount ? (e._events = new n()) : delete e._events[t];
}
function s() {
    (this._events = new n()), (this._eventsCount = 0);
}
Object.create && ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
    (s.prototype.eventNames = function () {
        var e,
            n,
            i = [];
        if (0 === this._eventsCount) return i;
        for (n in (e = this._events)) t.call(e, n) && i.push(r ? n.slice(1) : n);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i;
    }),
    (s.prototype.listeners = function (e) {
        var t = r ? r + e : e,
            n = this._events[t];
        if (!n) return [];
        if (n.fn) return [n.fn];
        for (var i = 0, o = n.length, a = Array(o); i < o; i++) a[i] = n[i].fn;
        return a;
    }),
    (s.prototype.listenerCount = function (e) {
        var t = r ? r + e : e,
            n = this._events[t];
        return n ? (n.fn ? 1 : n.length) : 0;
    }),
    (s.prototype.emit = function (e, t, n, i, o, a) {
        var s = r ? r + e : e;
        if (!this._events[s]) return !1;
        var l,
            u,
            c = this._events[s],
            f = arguments.length;
        if (c.fn) {
            switch ((c.once && this.removeListener(e, c.fn, void 0, !0), f)) {
                case 1:
                    return c.fn.call(c.context), !0;
                case 2:
                    return c.fn.call(c.context, t), !0;
                case 3:
                    return c.fn.call(c.context, t, n), !0;
                case 4:
                    return c.fn.call(c.context, t, n, i), !0;
                case 5:
                    return c.fn.call(c.context, t, n, i, o), !0;
                case 6:
                    return c.fn.call(c.context, t, n, i, o, a), !0;
            }
            for (u = 1, l = Array(f - 1); u < f; u++) l[u - 1] = arguments[u];
            c.fn.apply(c.context, l);
        } else {
            var d,
                p = c.length;
            for (u = 0; u < p; u++)
                switch ((c[u].once && this.removeListener(e, c[u].fn, void 0, !0), f)) {
                    case 1:
                        c[u].fn.call(c[u].context);
                        break;
                    case 2:
                        c[u].fn.call(c[u].context, t);
                        break;
                    case 3:
                        c[u].fn.call(c[u].context, t, n);
                        break;
                    case 4:
                        c[u].fn.call(c[u].context, t, n, i);
                        break;
                    default:
                        if (!l) for (d = 1, l = Array(f - 1); d < f; d++) l[d - 1] = arguments[d];
                        c[u].fn.apply(c[u].context, l);
                }
        }
        return !0;
    }),
    (s.prototype.on = function (e, t, r) {
        return o(this, e, t, r, !1);
    }),
    (s.prototype.once = function (e, t, r) {
        return o(this, e, t, r, !0);
    }),
    (s.prototype.removeListener = function (e, t, n, i) {
        var o = r ? r + e : e;
        if (!this._events[o]) return this;
        if (!t) return a(this, o), this;
        var s = this._events[o];
        if (s.fn) s.fn !== t || (i && !s.once) || (n && s.context !== n) || a(this, o);
        else {
            for (var l = 0, u = [], c = s.length; l < c; l++)
                (s[l].fn !== t || (i && !s[l].once) || (n && s[l].context !== n)) && u.push(s[l]);
            u.length ? (this._events[o] = 1 === u.length ? u[0] : u) : a(this, o);
        }
        return this;
    }),
    (s.prototype.removeAllListeners = function (e) {
        var t;
        return (
            e
                ? ((t = r ? r + e : e), this._events[t] && a(this, t))
                : ((this._events = new n()), (this._eventsCount = 0)),
            this
        );
    }),
    (s.prototype.off = s.prototype.removeListener),
    (s.prototype.addListener = s.prototype.on),
    (s.prefixed = r),
    (s.EventEmitter = s),
    (e.exports = s);
