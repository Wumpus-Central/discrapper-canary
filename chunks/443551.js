function i(e, n) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n &&
            (i = i.filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            r.push.apply(r, i);
    }
    return r;
}
function a(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {};
        n % 2
            ? i(Object(r), !0).forEach(function (n) {
                  o(e, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(Object(r)).forEach(function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
                });
    }
    return e;
}
function o(e, n, r) {
    return (
        (n = c(n)) in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function s(e, n) {
    if (!(e instanceof n)) throw TypeError('Cannot call a class as a function');
}
function l(e, n) {
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, c(i.key), i);
    }
}
function u(e, n, r) {
    return n && l(e.prototype, n), r && l(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function c(e) {
    var n = d(e, 'string');
    return 'symbol' == typeof n ? n : String(n);
}
function d(e, n) {
    if ('object' != typeof e || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var i = r.call(e, n || 'default');
        if ('object' != typeof i) return i;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === n ? String : Number)(e);
}
var f = r(413135).Buffer,
    p = r(252602).inspect,
    h = (p && p.custom) || 'inspect';
function _(e, n, r) {
    f.prototype.copy.call(e, n, r);
}
e.exports = (function () {
    function e() {
        s(this, e), (this.head = null), (this.tail = null), (this.length = 0);
    }
    return (
        u(e, [
            {
                key: 'push',
                value: function (e) {
                    var n = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? (this.tail.next = n) : (this.head = n), (this.tail = n), ++this.length;
                }
            },
            {
                key: 'unshift',
                value: function (e) {
                    var n = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = n), (this.head = n), ++this.length;
                }
            },
            {
                key: 'shift',
                value: function () {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, e;
                    }
                }
            },
            {
                key: 'clear',
                value: function () {
                    (this.head = this.tail = null), (this.length = 0);
                }
            },
            {
                key: 'join',
                value: function (e) {
                    if (0 === this.length) return '';
                    for (var n = this.head, r = '' + n.data; (n = n.next); ) r += e + n.data;
                    return r;
                }
            },
            {
                key: 'concat',
                value: function (e) {
                    if (0 === this.length) return f.alloc(0);
                    for (var n = f.allocUnsafe(e >>> 0), r = this.head, i = 0; r; ) _(r.data, n, i), (i += r.data.length), (r = r.next);
                    return n;
                }
            },
            {
                key: 'consume',
                value: function (e, n) {
                    var r;
                    return e < this.head.data.length ? ((r = this.head.data.slice(0, e)), (this.head.data = this.head.data.slice(e))) : (r = e === this.head.data.length ? this.shift() : n ? this._getString(e) : this._getBuffer(e)), r;
                }
            },
            {
                key: 'first',
                value: function () {
                    return this.head.data;
                }
            },
            {
                key: '_getString',
                value: function (e) {
                    var n = this.head,
                        r = 1,
                        i = n.data;
                    for (e -= i.length; (n = n.next); ) {
                        var a = n.data,
                            o = e > a.length ? a.length : e;
                        if ((o === a.length ? (i += a) : (i += a.slice(0, e)), 0 == (e -= o))) {
                            o === a.length ? (++r, n.next ? (this.head = n.next) : (this.head = this.tail = null)) : ((this.head = n), (n.data = a.slice(o)));
                            break;
                        }
                        ++r;
                    }
                    return (this.length -= r), i;
                }
            },
            {
                key: '_getBuffer',
                value: function (e) {
                    var n = f.allocUnsafe(e),
                        r = this.head,
                        i = 1;
                    for (r.data.copy(n), e -= r.data.length; (r = r.next); ) {
                        var a = r.data,
                            o = e > a.length ? a.length : e;
                        if ((a.copy(n, n.length - e, 0, o), 0 == (e -= o))) {
                            o === a.length ? (++i, r.next ? (this.head = r.next) : (this.head = this.tail = null)) : ((this.head = r), (r.data = a.slice(o)));
                            break;
                        }
                        ++i;
                    }
                    return (this.length -= i), n;
                }
            },
            {
                key: h,
                value: function (e, n) {
                    return p(
                        this,
                        a(
                            a({}, n),
                            {},
                            {
                                depth: 0,
                                customInspect: !1
                            }
                        )
                    );
                }
            }
        ]),
        e
    );
})();
