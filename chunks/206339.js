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
                    r = this._callbacks['$' + e];
                if (!r) return this;
                if (1 == arguments.length) return delete this._callbacks['$' + e], this;
                for (var i = 0; i < r.length; i++)
                    if ((n = r[i]) === t || n.fn === t) {
                        r.splice(i, 1);
                        break;
                    }
                return 0 === r.length && delete this._callbacks['$' + e], this;
            }),
    (t.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        for (var t = Array(arguments.length - 1), n = this._callbacks['$' + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        if (n) {
            n = n.slice(0);
            for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t);
        }
        return this;
    }),
    (t.prototype.listeners = function (e) {
        return (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || [];
    }),
    (t.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
    });
