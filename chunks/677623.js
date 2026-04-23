"use strict";
function t(e) {
    if (((this._capacity = a(e)), (this._length = 0), (this._front = 0), this._makeCapacity(), r(e))) {
        for (var t = e.length, n = 0; n < t; ++n) this[n] = e[n];
        this._length = t;
    }
}
(t.prototype.toArray = function () {
    for (var e = this._length, t = Array(e), r = this._front, n = this._capacity, a = 0; a < e; ++a)
        t[a] = this[(r + a) & (n - 1)];
    return t;
}),
    (t.prototype.push = function (e) {
        var t = arguments.length,
            r = this._length;
        if (t > 1) {
            var n = this._capacity;
            if (r + t > n) {
                for (var a = 0; a < t; ++a) {
                    this._checkCapacity(r + 1);
                    var s = (this._front + r) & (this._capacity - 1);
                    (this[s] = arguments[a]), r++, (this._length = r);
                }
                return r;
            }
            for (var s = this._front, a = 0; a < t; ++a) (this[(s + r) & (n - 1)] = arguments[a]), s++;
            return (this._length = r + t), r + t;
        }
        if (0 === t) return r;
        this._checkCapacity(r + 1);
        var a = (this._front + r) & (this._capacity - 1);
        return (this[a] = e), (this._length = r + 1), r + 1;
    }),
    (t.prototype.pop = function () {
        var e = this._length;
        if (0 !== e) {
            var t = (this._front + e - 1) & (this._capacity - 1),
                r = this[t];
            return (this[t] = void 0), (this._length = e - 1), r;
        }
    }),
    (t.prototype.shift = function () {
        var e = this._length;
        if (0 !== e) {
            var t = this._front,
                r = this[t];
            return (this[t] = void 0), (this._front = (t + 1) & (this._capacity - 1)), (this._length = e - 1), r;
        }
    }),
    (t.prototype.unshift = function (e) {
        var t = this._length,
            r = arguments.length;
        if (r > 1) {
            var n = this._capacity;
            if (t + r > n) {
                for (var a = r - 1; a >= 0; a--) {
                    this._checkCapacity(t + 1);
                    var n = this._capacity,
                        s = (((this._front - 1) & (n - 1)) ^ n) - n;
                    (this[s] = arguments[a]), t++, (this._length = t), (this._front = s);
                }
                return t;
            }
            for (var i = this._front, a = r - 1; a >= 0; a--) {
                var s = (((i - 1) & (n - 1)) ^ n) - n;
                (this[s] = arguments[a]), (i = s);
            }
            return (this._front = i), (this._length = t + r), t + r;
        }
        if (0 === r) return t;
        this._checkCapacity(t + 1);
        var n = this._capacity,
            a = (((this._front - 1) & (n - 1)) ^ n) - n;
        return (this[a] = e), (this._length = t + 1), (this._front = a), t + 1;
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
            var r = this._length;
            if ((t < 0 && (t += r), !(t < 0) && !(t >= r))) return this[(this._front + t) & (this._capacity - 1)];
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
        this._capacity < e && this._resizeTo(a(1.5 * this._capacity + 16));
    }),
    (t.prototype._resizeTo = function (e) {
        var t = this._front,
            r = this._capacity,
            a = Array(r),
            s = this._length;
        if ((n(this, 0, a, 0, r), (this._capacity = e), this._makeCapacity(), (this._front = 0), t + s <= r))
            n(a, t, this, 0, s);
        else {
            var i = s - ((t + s) & (r - 1));
            n(a, t, this, 0, i), n(a, 0, this, i, s - i);
        }
    });
var r = Array.isArray;
function n(e, t, r, n, a) {
    for (var s = 0; s < a; ++s) r[s + n] = e[s + t];
}
function a(e) {
    var t;
    if ("number" != typeof e)
        if (!r(e)) return 16;
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
