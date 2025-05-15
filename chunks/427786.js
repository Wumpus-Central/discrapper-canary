function t(e) {
    if (((this._capacity = o(e)), (this._length = 0), (this._front = 0), this._makeCapacity(), n(e))) {
        for (var t = e.length, r = 0; r < t; ++r) this[r] = e[r];
        this._length = t;
    }
}
(t.prototype.toArray = function () {
    for (var e = this._length, t = Array(e), n = this._front, r = this._capacity, i = 0; i < e; ++i) t[i] = this[(n + i) & (r - 1)];
    return t;
}),
    (t.prototype.push = function (e) {
        var t = arguments.length,
            n = this._length;
        if (t > 1) {
            var r = this._capacity;
            if (n + t > r) {
                for (var i = 0; i < t; ++i) {
                    this._checkCapacity(n + 1);
                    var o = (this._front + n) & (this._capacity - 1);
                    (this[o] = arguments[i]), n++, (this._length = n);
                }
                return n;
            }
            for (var o = this._front, i = 0; i < t; ++i) (this[(o + n) & (r - 1)] = arguments[i]), o++;
            return (this._length = n + t), n + t;
        }
        if (0 === t) return n;
        this._checkCapacity(n + 1);
        var i = (this._front + n) & (this._capacity - 1);
        return (this[i] = e), (this._length = n + 1), n + 1;
    }),
    (t.prototype.pop = function () {
        var e = this._length;
        if (0 !== e) {
            var t = (this._front + e - 1) & (this._capacity - 1),
                n = this[t];
            return (this[t] = void 0), (this._length = e - 1), n;
        }
    }),
    (t.prototype.shift = function () {
        var e = this._length;
        if (0 !== e) {
            var t = this._front,
                n = this[t];
            return (this[t] = void 0), (this._front = (t + 1) & (this._capacity - 1)), (this._length = e - 1), n;
        }
    }),
    (t.prototype.unshift = function (e) {
        var t = this._length,
            n = arguments.length;
        if (n > 1) {
            var r = this._capacity;
            if (t + n > r) {
                for (var i = n - 1; i >= 0; i--) {
                    this._checkCapacity(t + 1);
                    var r = this._capacity,
                        o = (((this._front - 1) & (r - 1)) ^ r) - r;
                    (this[o] = arguments[i]), t++, (this._length = t), (this._front = o);
                }
                return t;
            }
            for (var a = this._front, i = n - 1; i >= 0; i--) {
                var o = (((a - 1) & (r - 1)) ^ r) - r;
                (this[o] = arguments[i]), (a = o);
            }
            return (this._front = a), (this._length = t + n), t + n;
        }
        if (0 === n) return t;
        this._checkCapacity(t + 1);
        var r = this._capacity,
            i = (((this._front - 1) & (r - 1)) ^ r) - r;
        return (this[i] = e), (this._length = t + 1), (this._front = i), t + 1;
    }),
    (t.prototype.peekBack = function () {
        var e = this._length;
        if (0 !== e) {
            var t = (this._front + e - 1) & (this._capacity - 1);
            return this[t];
        }
    }),
    (t.prototype.peekFront = function () {
        if (0 !== this._length) return this[this._front];
    }),
    (t.prototype.get = function (e) {
        var t = e;
        if (t === (0 | t)) {
            var n = this._length;
            if ((t < 0 && (t += n), !(t < 0) && !(t >= n))) return this[(this._front + t) & (this._capacity - 1)];
        }
    }),
    (t.prototype.isEmpty = function () {
        return 0 === this._length;
    }),
    (t.prototype.clear = function () {
        (this._length = 0), (this._front = 0), this._makeCapacity();
    }),
    (t.prototype.toString = function () {
        return this.toArray().toString();
    }),
    (t.prototype.valueOf = t.prototype.toString),
    (t.prototype.removeFront = t.prototype.shift),
    (t.prototype.removeBack = t.prototype.pop),
    (t.prototype.insertFront = t.prototype.unshift),
    (t.prototype.insertBack = t.prototype.push),
    (t.prototype.enqueue = t.prototype.push),
    (t.prototype.dequeue = t.prototype.shift),
    (t.prototype.toJSON = t.prototype.toArray),
    Object.defineProperty(t.prototype, 'length', {
        get: function () {
            return this._length;
        },
        set: function () {
            throw RangeError('');
        }
    }),
    (t.prototype._makeCapacity = function () {
        for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0;
    }),
    (t.prototype._checkCapacity = function (e) {
        this._capacity < e && this._resizeTo(o(1.5 * this._capacity + 16));
    }),
    (t.prototype._resizeTo = function (e) {
        var t = this._front,
            n = this._capacity,
            i = Array(n),
            o = this._length;
        if ((r(this, 0, i, 0, n), (this._capacity = e), this._makeCapacity(), (this._front = 0), t + o <= n)) r(i, t, this, 0, o);
        else {
            var a = o - ((t + o) & (n - 1));
            r(i, t, this, 0, a), r(i, 0, this, a, o - a);
        }
    });
var n = Array.isArray;
function r(e, t, n, r, i) {
    for (var o = 0; o < i; ++o) n[o + r] = e[o + t];
}
function i(e) {
    return (e >>>= 0), (e -= 1), (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16) + 1;
}
function o(e) {
    if ('number' != typeof e)
        if (!n(e)) return 16;
        else e = e.length;
    return i(Math.min(Math.max(16, e), 1073741824));
}
e.exports = t;
