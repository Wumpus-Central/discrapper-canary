"use strict";
function t(e) {
    if (((this._capacity = r(e)), (this._length = 0), (this._front = 0), this._makeCapacity(), n(e))) {
        for (var t = e.length, i = 0; i < t; ++i) this[i] = e[i];
        this._length = t;
    }
}
(t.prototype.toArray = function () {
    for (var e = this._length, t = Array(e), n = this._front, i = this._capacity, r = 0; r < e; ++r)
        t[r] = this[(n + r) & (i - 1)];
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
                    var s = (this._front + n) & (this._capacity - 1);
                    (this[s] = arguments[r]), n++, (this._length = n);
                }
                return n;
            }
            for (var s = this._front, r = 0; r < t; ++r) (this[(s + n) & (i - 1)] = arguments[r]), s++;
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
                        s = (((this._front - 1) & (i - 1)) ^ i) - i;
                    (this[s] = arguments[r]), t++, (this._length = t), (this._front = s);
                }
                return t;
            }
            for (var a = this._front, r = n - 1; r >= 0; r--) {
                var s = (((a - 1) & (i - 1)) ^ i) - i;
                (this[s] = arguments[r]), (a = s);
            }
            return (this._front = a), (this._length = t + n), t + n;
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
    Object.defineProperty(t.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function () {
            throw RangeError("");
        },
    }),
    (t.prototype._makeCapacity = function () {
        for (var e = this._capacity, t = 0; t < e; ++t) this[t] = void 0;
    }),
    (t.prototype._checkCapacity = function (e) {
        this._capacity < e && this._resizeTo(r(1.5 * this._capacity + 16));
    }),
    (t.prototype._resizeTo = function (e) {
        var t = this._front,
            n = this._capacity,
            r = Array(n),
            s = this._length;
        if ((i(this, 0, r, 0, n), (this._capacity = e), this._makeCapacity(), (this._front = 0), t + s <= n))
            i(r, t, this, 0, s);
        else {
            var a = s - ((t + s) & (n - 1));
            i(r, t, this, 0, a), i(r, 0, this, a, s - a);
        }
    });
var n = Array.isArray;
function i(e, t, n, i, r) {
    for (var s = 0; s < r; ++s) n[s + i] = e[s + t];
}
function r(e) {
    var t;
    if ("number" != typeof e)
        if (!n(e)) return 16;
        else e = e.length;
    return (
        (t = (Math.min(Math.max(16, e), 0x40000000) >>> 0) - 1),
        (t |= t >> 1),
        (t |= t >> 2),
        (t |= t >> 4),
        (t |= t >> 8),
        (t |= t >> 16) + 1
    );
}
e.exports = t;
