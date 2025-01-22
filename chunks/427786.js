function n(e) {
    if (((this._capacity = o(e)), (this._length = 0), (this._front = 0), this._makeCapacity(), r(e))) {
        for (var n = e.length, i = 0; i < n; ++i) this[i] = e[i];
        this._length = n;
    }
}
(n.prototype.toArray = function () {
    for (var e = this._length, n = Array(e), r = this._front, i = this._capacity, a = 0; a < e; ++a) n[a] = this[(r + a) & (i - 1)];
    return n;
}),
    (n.prototype.push = function (e) {
        var n = arguments.length,
            r = this._length;
        if (n > 1) {
            var i = this._capacity;
            if (r + n > i) {
                for (var a = 0; a < n; ++a) {
                    this._checkCapacity(r + 1);
                    var o = (this._front + r) & (this._capacity - 1);
                    (this[o] = arguments[a]), r++, (this._length = r);
                }
                return r;
            }
            for (var o = this._front, a = 0; a < n; ++a) (this[(o + r) & (i - 1)] = arguments[a]), o++;
            return (this._length = r + n), r + n;
        }
        if (0 === n) return r;
        this._checkCapacity(r + 1);
        var a = (this._front + r) & (this._capacity - 1);
        return (this[a] = e), (this._length = r + 1), r + 1;
    }),
    (n.prototype.pop = function () {
        var e = this._length;
        if (0 !== e) {
            var n = (this._front + e - 1) & (this._capacity - 1),
                r = this[n];
            return (this[n] = void 0), (this._length = e - 1), r;
        }
    }),
    (n.prototype.shift = function () {
        var e = this._length;
        if (0 !== e) {
            var n = this._front,
                r = this[n];
            return (this[n] = void 0), (this._front = (n + 1) & (this._capacity - 1)), (this._length = e - 1), r;
        }
    }),
    (n.prototype.unshift = function (e) {
        var n = this._length,
            r = arguments.length;
        if (r > 1) {
            var i = this._capacity;
            if (n + r > i) {
                for (var a = r - 1; a >= 0; a--) {
                    this._checkCapacity(n + 1);
                    var i = this._capacity,
                        o = (((this._front - 1) & (i - 1)) ^ i) - i;
                    (this[o] = arguments[a]), n++, (this._length = n), (this._front = o);
                }
                return n;
            }
            for (var s = this._front, a = r - 1; a >= 0; a--) {
                var o = (((s - 1) & (i - 1)) ^ i) - i;
                (this[o] = arguments[a]), (s = o);
            }
            return (this._front = s), (this._length = n + r), n + r;
        }
        if (0 === r) return n;
        this._checkCapacity(n + 1);
        var i = this._capacity,
            a = (((this._front - 1) & (i - 1)) ^ i) - i;
        return (this[a] = e), (this._length = n + 1), (this._front = a), n + 1;
    }),
    (n.prototype.peekBack = function () {
        var e = this._length;
        if (0 !== e) return this[(this._front + e - 1) & (this._capacity - 1)];
    }),
    (n.prototype.peekFront = function () {
        if (0 !== this._length) return this[this._front];
    }),
    (n.prototype.get = function (e) {
        var n = e;
        if (n !== (0 | n)) return;
        var r = this._length;
        if ((n < 0 && (n += r), !(n < 0) && !(n >= r))) return this[(this._front + n) & (this._capacity - 1)];
    }),
    (n.prototype.isEmpty = function () {
        return 0 === this._length;
    }),
    (n.prototype.clear = function () {
        (this._length = 0), (this._front = 0), this._makeCapacity();
    }),
    (n.prototype.toString = function () {
        return this.toArray().toString();
    }),
    (n.prototype.valueOf = n.prototype.toString),
    (n.prototype.removeFront = n.prototype.shift),
    (n.prototype.removeBack = n.prototype.pop),
    (n.prototype.insertFront = n.prototype.unshift),
    (n.prototype.insertBack = n.prototype.push),
    (n.prototype.enqueue = n.prototype.push),
    (n.prototype.dequeue = n.prototype.shift),
    (n.prototype.toJSON = n.prototype.toArray),
    Object.defineProperty(n.prototype, 'length', {
        get: function () {
            return this._length;
        },
        set: function () {
            throw RangeError('');
        }
    }),
    (n.prototype._makeCapacity = function () {
        for (var e = this._capacity, n = 0; n < e; ++n) this[n] = void 0;
    }),
    (n.prototype._checkCapacity = function (e) {
        this._capacity < e && this._resizeTo(o(1.5 * this._capacity + 16));
    }),
    (n.prototype._resizeTo = function (e) {
        var n = this._front,
            r = this._capacity,
            a = Array(r),
            o = this._length;
        if ((i(this, 0, a, 0, r), (this._capacity = e), this._makeCapacity(), (this._front = 0), n + o <= r)) i(a, n, this, 0, o);
        else {
            var s = o - ((n + o) & (r - 1));
            i(a, n, this, 0, s), i(a, 0, this, s, o - s);
        }
    });
var r = Array.isArray;
function i(e, n, r, i, a) {
    for (var o = 0; o < a; ++o) r[o + i] = e[o + n];
}
function a(e) {
    return (e >>>= 0), (e -= 1), (e |= e >> 1), (e |= e >> 2), (e |= e >> 4), (e |= e >> 8), (e |= e >> 16) + 1;
}
function o(e) {
    if ('number' != typeof e) {
        if (!r(e)) return 16;
        e = e.length;
    }
    return a(Math.min(Math.max(16, e), 1073741824));
}
e.exports = n;
