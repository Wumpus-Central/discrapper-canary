function t(e) {
    var n = this;
    if ((n instanceof t || (n = new t()), (n.tail = null), (n.head = null), (n.length = 0), e && 'function' == typeof e.forEach))
        e.forEach(function (e) {
            n.push(e);
        });
    else if (arguments.length > 0) for (var r = 0, i = arguments.length; r < i; r++) n.push(arguments[r]);
    return n;
}
function n(e, t) {
    (e.tail = new i(t, e.tail, null, e)), e.head || (e.head = e.tail), e.length++;
}
function r(e, t) {
    (e.head = new i(t, null, e.head, e)), e.tail || (e.tail = e.head), e.length++;
}
function i(e, t, n, r) {
    if (!(this instanceof i)) return new i(e, t, n, r);
    (this.list = r), (this.value = e), t ? ((t.next = this), (this.prev = t)) : (this.prev = null), n ? ((n.prev = this), (this.next = n)) : (this.next = null);
}
(e.exports = t),
    (t.Node = i),
    (t.create = t),
    (t.prototype.removeNode = function (e) {
        if (e.list !== this) throw Error('removing node which does not belong to this list');
        var t = e.next,
            n = e.prev;
        t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, (e.next = null), (e.prev = null), (e.list = null);
    }),
    (t.prototype.unshiftNode = function (e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            (e.list = this), (e.next = t), t && (t.prev = e), (this.head = e), this.tail || (this.tail = e), this.length++;
        }
    }),
    (t.prototype.pushNode = function (e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            (e.list = this), (e.prev = t), t && (t.next = e), (this.tail = e), this.head || (this.head = e), this.length++;
        }
    }),
    (t.prototype.push = function () {
        for (var e = 0, t = arguments.length; e < t; e++) n(this, arguments[e]);
        return this.length;
    }),
    (t.prototype.unshift = function () {
        for (var e = 0, t = arguments.length; e < t; e++) r(this, arguments[e]);
        return this.length;
    }),
    (t.prototype.pop = function () {
        if (this.tail) {
            var e = this.tail.value;
            return (this.tail = this.tail.prev), this.tail ? (this.tail.next = null) : (this.head = null), this.length--, e;
        }
    }),
    (t.prototype.shift = function () {
        if (this.head) {
            var e = this.head.value;
            return (this.head = this.head.next), this.head ? (this.head.prev = null) : (this.tail = null), this.length--, e;
        }
    }),
    (t.prototype.forEach = function (e, t) {
        t = t || this;
        for (var n = this.head, r = 0; null !== n; r++) e.call(t, n.value, r, this), (n = n.next);
    }),
    (t.prototype.forEachReverse = function (e, t) {
        t = t || this;
        for (var n = this.tail, r = this.length - 1; null !== n; r--) e.call(t, n.value, r, this), (n = n.prev);
    }),
    (t.prototype.get = function (e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
        if (t === e && null !== n) return n.value;
    }),
    (t.prototype.getReverse = function (e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
        if (t === e && null !== n) return n.value;
    }),
    (t.prototype.map = function (e, n) {
        n = n || this;
        for (var r = new t(), i = this.head; null !== i; ) r.push(e.call(n, i.value, this)), (i = i.next);
        return r;
    }),
    (t.prototype.mapReverse = function (e, n) {
        n = n || this;
        for (var r = new t(), i = this.tail; null !== i; ) r.push(e.call(n, i.value, this)), (i = i.prev);
        return r;
    }),
    (t.prototype.reduce = function (e, t) {
        var n,
            r = this.head;
        if (arguments.length > 1) n = t;
        else if (this.head) (r = this.head.next), (n = this.head.value);
        else throw TypeError('Reduce of empty list with no initial value');
        for (var i = 0; null !== r; i++) (n = e(n, r.value, i)), (r = r.next);
        return n;
    }),
    (t.prototype.reduceReverse = function (e, t) {
        var n,
            r = this.tail;
        if (arguments.length > 1) n = t;
        else if (this.tail) (r = this.tail.prev), (n = this.tail.value);
        else throw TypeError('Reduce of empty list with no initial value');
        for (var i = this.length - 1; null !== r; i--) (n = e(n, r.value, i)), (r = r.prev);
        return n;
    }),
    (t.prototype.toArray = function () {
        for (var e = Array(this.length), t = 0, n = this.head; null !== n; t++) (e[t] = n.value), (n = n.next);
        return e;
    }),
    (t.prototype.toArrayReverse = function () {
        for (var e = Array(this.length), t = 0, n = this.tail; null !== n; t++) (e[t] = n.value), (n = n.prev);
        return e;
    }),
    (t.prototype.slice = function (e, n) {
        (n = n || this.length) < 0 && (n += this.length), (e = e || 0) < 0 && (e += this.length);
        var r = new t();
        if (n < e || n < 0) return r;
        e < 0 && (e = 0), n > this.length && (n = this.length);
        for (var i = 0, a = this.head; null !== a && i < e; i++) a = a.next;
        for (; null !== a && i < n; i++, a = a.next) r.push(a.value);
        return r;
    }),
    (t.prototype.sliceReverse = function (e, n) {
        (n = n || this.length) < 0 && (n += this.length), (e = e || 0) < 0 && (e += this.length);
        var r = new t();
        if (n < e || n < 0) return r;
        e < 0 && (e = 0), n > this.length && (n = this.length);
        for (var i = this.length, a = this.tail; null !== a && i > n; i--) a = a.prev;
        for (; null !== a && i > e; i--, a = a.prev) r.push(a.value);
        return r;
    }),
    (t.prototype.reverse = function () {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var r = n.prev;
            (n.prev = n.next), (n.next = r);
        }
        return (this.head = t), (this.tail = e), this;
    });
