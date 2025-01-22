function n(e) {
    var r = this;
    if ((!(r instanceof n) && (r = new n()), (r.tail = null), (r.head = null), (r.length = 0), e && 'function' == typeof e.forEach))
        e.forEach(function (e) {
            r.push(e);
        });
    else if (arguments.length > 0) for (var i = 0, a = arguments.length; i < a; i++) r.push(arguments[i]);
    return r;
}
function r(e, n) {
    (e.tail = new a(n, e.tail, null, e)), !e.head && (e.head = e.tail), e.length++;
}
function i(e, n) {
    (e.head = new a(n, null, e.head, e)), !e.tail && (e.tail = e.head), e.length++;
}
function a(e, n, r, i) {
    if (!(this instanceof a)) return new a(e, n, r, i);
    (this.list = i), (this.value = e), n ? ((n.next = this), (this.prev = n)) : (this.prev = null), r ? ((r.prev = this), (this.next = r)) : (this.next = null);
}
(e.exports = n),
    (n.Node = a),
    (n.create = n),
    (n.prototype.removeNode = function (e) {
        if (e.list !== this) throw Error('removing node which does not belong to this list');
        var n = e.next,
            r = e.prev;
        n && (n.prev = r), r && (r.next = n), e === this.head && (this.head = n), e === this.tail && (this.tail = r), e.list.length--, (e.next = null), (e.prev = null), (e.list = null);
    }),
    (n.prototype.unshiftNode = function (e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var n = this.head;
            (e.list = this), (e.next = n), n && (n.prev = e), (this.head = e), !this.tail && (this.tail = e), this.length++;
        }
    }),
    (n.prototype.pushNode = function (e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var n = this.tail;
            (e.list = this), (e.prev = n), n && (n.next = e), (this.tail = e), !this.head && (this.head = e), this.length++;
        }
    }),
    (n.prototype.push = function () {
        for (var e = 0, n = arguments.length; e < n; e++) r(this, arguments[e]);
        return this.length;
    }),
    (n.prototype.unshift = function () {
        for (var e = 0, n = arguments.length; e < n; e++) i(this, arguments[e]);
        return this.length;
    }),
    (n.prototype.pop = function () {
        if (!!this.tail) {
            var e = this.tail.value;
            return (this.tail = this.tail.prev), this.tail ? (this.tail.next = null) : (this.head = null), this.length--, e;
        }
    }),
    (n.prototype.shift = function () {
        if (!!this.head) {
            var e = this.head.value;
            return (this.head = this.head.next), this.head ? (this.head.prev = null) : (this.tail = null), this.length--, e;
        }
    }),
    (n.prototype.forEach = function (e, n) {
        n = n || this;
        for (var r = this.head, i = 0; null !== r; i++) e.call(n, r.value, i, this), (r = r.next);
    }),
    (n.prototype.forEachReverse = function (e, n) {
        n = n || this;
        for (var r = this.tail, i = this.length - 1; null !== r; i--) e.call(n, r.value, i, this), (r = r.prev);
    }),
    (n.prototype.get = function (e) {
        for (var n = 0, r = this.head; null !== r && n < e; n++) r = r.next;
        if (n === e && null !== r) return r.value;
    }),
    (n.prototype.getReverse = function (e) {
        for (var n = 0, r = this.tail; null !== r && n < e; n++) r = r.prev;
        if (n === e && null !== r) return r.value;
    }),
    (n.prototype.map = function (e, r) {
        r = r || this;
        for (var i = new n(), a = this.head; null !== a; ) i.push(e.call(r, a.value, this)), (a = a.next);
        return i;
    }),
    (n.prototype.mapReverse = function (e, r) {
        r = r || this;
        for (var i = new n(), a = this.tail; null !== a; ) i.push(e.call(r, a.value, this)), (a = a.prev);
        return i;
    }),
    (n.prototype.reduce = function (e, n) {
        var r,
            i = this.head;
        if (arguments.length > 1) r = n;
        else if (this.head) (i = this.head.next), (r = this.head.value);
        else throw TypeError('Reduce of empty list with no initial value');
        for (var a = 0; null !== i; a++) (r = e(r, i.value, a)), (i = i.next);
        return r;
    }),
    (n.prototype.reduceReverse = function (e, n) {
        var r,
            i = this.tail;
        if (arguments.length > 1) r = n;
        else if (this.tail) (i = this.tail.prev), (r = this.tail.value);
        else throw TypeError('Reduce of empty list with no initial value');
        for (var a = this.length - 1; null !== i; a--) (r = e(r, i.value, a)), (i = i.prev);
        return r;
    }),
    (n.prototype.toArray = function () {
        for (var e = Array(this.length), n = 0, r = this.head; null !== r; n++) (e[n] = r.value), (r = r.next);
        return e;
    }),
    (n.prototype.toArrayReverse = function () {
        for (var e = Array(this.length), n = 0, r = this.tail; null !== r; n++) (e[n] = r.value), (r = r.prev);
        return e;
    }),
    (n.prototype.slice = function (e, r) {
        (r = r || this.length) < 0 && (r += this.length), (e = e || 0) < 0 && (e += this.length);
        var i = new n();
        if (r < e || r < 0) return i;
        e < 0 && (e = 0), r > this.length && (r = this.length);
        for (var a = 0, o = this.head; null !== o && a < e; a++) o = o.next;
        for (; null !== o && a < r; a++, o = o.next) i.push(o.value);
        return i;
    }),
    (n.prototype.sliceReverse = function (e, r) {
        (r = r || this.length) < 0 && (r += this.length), (e = e || 0) < 0 && (e += this.length);
        var i = new n();
        if (r < e || r < 0) return i;
        e < 0 && (e = 0), r > this.length && (r = this.length);
        for (var a = this.length, o = this.tail; null !== o && a > r; a--) o = o.prev;
        for (; null !== o && a > e; a--, o = o.prev) i.push(o.value);
        return i;
    }),
    (n.prototype.reverse = function () {
        for (var e = this.head, n = this.tail, r = e; null !== r; r = r.prev) {
            var i = r.prev;
            (r.prev = r.next), (r.next = i);
        }
        return (this.head = n), (this.tail = e), this;
    });
