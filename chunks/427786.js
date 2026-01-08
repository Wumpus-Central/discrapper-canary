function e(t) {
    if (((this._capacity = i(t)), (this._length = 0), (this._front = 0), this._makeCapacity(), r(t))) {
        for (var e = t.length, n = 0; n < e; ++n) this[n] = t[n];
        this._length = e;
    }
}
(e.prototype.toArray = function () {
    for (var t = this._length, e = Array(t), r = this._front, n = this._capacity, i = 0; i < t; ++i)
        e[i] = this[(r + i) & (n - 1)];
    return e;
}),
    (e.prototype.push = function (t) {
        var e = arguments.length,
            r = this._length;
        if (e > 1) {
            var n = this._capacity;
            if (r + e > n) {
                for (var i = 0; i < e; ++i) {
                    this._checkCapacity(r + 1);
                    var a = (this._front + r) & (this._capacity - 1);
                    (this[a] = arguments[i]), r++, (this._length = r);
                }
                return r;
            }
            for (var a = this._front, i = 0; i < e; ++i) (this[(a + r) & (n - 1)] = arguments[i]), a++;
            return (this._length = r + e), r + e;
        }
        if (0 === e) return r;
        this._checkCapacity(r + 1);
        var i = (this._front + r) & (this._capacity - 1);
        return (this[i] = t), (this._length = r + 1), r + 1;
    }),
    (e.prototype.pop = function () {
        var t = this._length;
        if (0 !== t) {
            var e = (this._front + t - 1) & (this._capacity - 1),
                r = this[e];
            return (this[e] = void 0), (this._length = t - 1), r;
        }
    }),
    (e.prototype.shift = function () {
        var t = this._length;
        if (0 !== t) {
            var e = this._front,
                r = this[e];
            return (this[e] = void 0), (this._front = (e + 1) & (this._capacity - 1)), (this._length = t - 1), r;
        }
    }),
    (e.prototype.unshift = function (t) {
        var e = this._length,
            r = arguments.length;
        if (r > 1) {
            var n = this._capacity;
            if (e + r > n) {
                for (var i = r - 1; i >= 0; i--) {
                    this._checkCapacity(e + 1);
                    var n = this._capacity,
                        a = (((this._front - 1) & (n - 1)) ^ n) - n;
                    (this[a] = arguments[i]), e++, (this._length = e), (this._front = a);
                }
                return e;
            }
            for (var o = this._front, i = r - 1; i >= 0; i--) {
                var a = (((o - 1) & (n - 1)) ^ n) - n;
                (this[a] = arguments[i]), (o = a);
            }
            return (this._front = o), (this._length = e + r), e + r;
        }
        if (0 === r) return e;
        this._checkCapacity(e + 1);
        var n = this._capacity,
            i = (((this._front - 1) & (n - 1)) ^ n) - n;
        return (this[i] = t), (this._length = e + 1), (this._front = i), e + 1;
    }),
    (e.prototype.peekBack = function () {
        var t = this._length;
        if (0 !== t) return this[(this._front + t - 1) & (this._capacity - 1)];
    }),
    (e.prototype.peekFront = function () {
        if (0 !== this._length) return this[this._front];
    }),
    (e.prototype.get = function (t) {
        var e = t;
        if (e === (0 | e)) {
            var r = this._length;
            if ((e < 0 && (e += r), !(e < 0) && !(e >= r))) return this[(this._front + e) & (this._capacity - 1)];
        }
    }),
    (e.prototype.isEmpty = function () {
        return 0 === this._length;
    }),
    (e.prototype.clear = function () {
        (this._length = 0), (this._front = 0), this._makeCapacity();
    }),
    (e.prototype.toString = function () {
        return this.toArray().toString();
    }),
    (e.prototype.valueOf = e.prototype.toString),
    (e.prototype.removeFront = e.prototype.shift),
    (e.prototype.removeBack = e.prototype.pop),
    (e.prototype.insertFront = e.prototype.unshift),
    (e.prototype.insertBack = e.prototype.push),
    (e.prototype.enqueue = e.prototype.push),
    (e.prototype.dequeue = e.prototype.shift),
    (e.prototype.toJSON = e.prototype.toArray),
    Object.defineProperty(e.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function () {
            throw RangeError("");
        },
    }),
    (e.prototype._makeCapacity = function () {
        for (var t = this._capacity, e = 0; e < t; ++e) this[e] = void 0;
    }),
    (e.prototype._checkCapacity = function (t) {
        this._capacity < t && this._resizeTo(i(1.5 * this._capacity + 16));
    }),
    (e.prototype._resizeTo = function (t) {
        var e = this._front,
            r = this._capacity,
            i = Array(r),
            a = this._length;
        if ((n(this, 0, i, 0, r), (this._capacity = t), this._makeCapacity(), (this._front = 0), e + a <= r))
            n(i, e, this, 0, a);
        else {
            var o = a - ((e + a) & (r - 1));
            n(i, e, this, 0, o), n(i, 0, this, o, a - o);
        }
    });
var r = Array.isArray;
function n(t, e, r, n, i) {
    for (var a = 0; a < i; ++a) r[a + n] = t[a + e];
}
function i(t) {
    var e;
    if ("number" != typeof t)
        if (!r(t)) return 16;
        else t = t.length;
    return (
        (e = (Math.min(Math.max(16, t), 1073741824) >>> 0) - 1),
        (e |= e >> 1),
        (e |= e >> 2),
        (e |= e >> 4),
        (e |= e >> 8),
        (e |= e >> 16) + 1
    );
}
t.exports = e;
