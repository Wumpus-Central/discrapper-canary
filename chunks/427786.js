function t(e) {
    if (((this._capacity = a(e)), (this._length = 0), (this._front = 0), this._makeCapacity(), n(e))) {
        for (var t = e.length, i = 0; i < t; ++i) this[i] = e[i];
        this._length = t;
    }
}
(t.prototype.toArray = function () {
    for (var e = this._length, t = Array(e), n = this._front, i = this._capacity, r = 0; r < e; ++r) t[r] = this[(n + r) & (i - 1)];
    return t;
}),
    (t.prototype.push = function (e) {
        var t = arguments.length,
            n = this._length;
        if (t > 1) {
            var i = this._capacity;
            if (n + t > i) {
                for (var r = 0; r < t; ++r) {
                    this._checkCapacity(n + 1);
                    var a = (this._front + n) & (this._capacity - 1);
                    (this[a] = arguments[r]), n++, (this._length = n);
                }
                return n;
            }
            for (var a = this._front, r = 0; r < t; ++r) (this[(a + n) & (i - 1)] = arguments[r]), a++;
            return (this._length = n + t), n + t;
        }
        if (0 === t) return n;
        this._checkCapacity(n + 1);
        var r = (this._front + n) & (this._capacity - 1);
        return (this[r] = e), (this._length = n + 1), n + 1;
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
            var i = this._capacity;
            if (t + n > i) {
                for (var r = n - 1; r >= 0; r--) {
                    this._checkCapacity(t + 1);
                    var i = this._capacity,
                        a = (((this._front - 1) & (i - 1)) ^ i) - i;
                    (this[a] = arguments[r]), t++, (this._length = t), (this._front = a);
                }
                return t;
            }
            for (var s = this._front, r = n - 1; r >= 0; r--) {
                var a = (((s - 1) & (i - 1)) ^ i) - i;
                (this[a] = arguments[r]), (s = a);
            }
            return (this._front = s), (this._length = t + n), t + n;
        }
        if (0 === n) return t;
        this._checkCapacity(t + 1);
        var i = this._capacity,
            r = (((this._front - 1) & (i - 1)) ^ i) - i;
        return (this[r] = e), (this._length = t + 1), (this._front = r), t + 1;
    }),
    (t.prototype.peekBack = function () {
        var e = this._length;
        if (0 !== e) return this[(this._front + e - 1) & (this._capacity - 1)];
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
        this._capacity < e && this._resizeTo(a(1.5 * this._capacity + 16));
    }),
    (t.prototype._resizeTo = function (e) {
        var t = this._front,
            n = this._capacity,
            r = Array(n),
            a = this._length;
        if ((i(this, 0, r, 0, n), (this._capacity = e), this._makeCapacity(), (this._front = 0), t + a <= n)) i(r, t, this, 0, a);
        else {
            var s = a - ((t + a) & (n - 1));
            i(r, t, this, 0, s), i(r, 0, this, s, a - s);
        }
    });
var n = Array.isArray;
function i(e, t, n, i, r) {
    for (var a = 0; a < r; ++a) n[a + i] = e[a + t];
}
function r(e) {
    return (e >>>= 0), (e -= 1), (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16) + 1;
}
function a(e) {
    if ('number' != typeof e) {
        if (!n(e)) return 16;
        e = e.length;
    }
    return r(Math.min(Math.max(16, e), 1073741824));
}
e.exports = t;
