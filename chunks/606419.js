function t(e) {
    if (e) return n(e);
}
function n(e) {
    for (var n in t.prototype) e[n] = t.prototype[n];
    return e;
}
(e.exports = t),
    (t.prototype.on = t.prototype.addEventListener =
        function (e, t) {
            return (this._callbacks = this._callbacks || {}), (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t), this;
        }),
    (t.prototype.once = function (e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments);
        }
        return (n.fn = t), this.on(e, n), this;
    }),
    (t.prototype.off =
        t.prototype.removeListener =
        t.prototype.removeAllListeners =
        t.prototype.removeEventListener =
            function (e, t) {
                if (((this._callbacks = this._callbacks || {}), 0 == arguments.length)) return (this._callbacks = {}), this;
                var n,
                    i = this._callbacks['$' + e];
                if (!i) return this;
                if (1 == arguments.length) return delete this._callbacks['$' + e], this;
                for (var r = 0; r < i.length; r++)
                    if ((n = i[r]) === t || n.fn === t) {
                        i.splice(r, 1);
                        break;
                    }
                return 0 === i.length && delete this._callbacks['$' + e], this;
            }),
    (t.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        for (var t = Array(arguments.length - 1), n = this._callbacks['$' + e], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (n) {
            n = n.slice(0);
            for (var i = 0, r = n.length; i < r; ++i) n[i].apply(this, t);
        }
        return this;
    }),
    (t.prototype.listeners = function (e) {
        return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || [];
    }),
    (t.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
    });
