function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function r(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? i(Object(n), !0).forEach(function (t) {
                  a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : i(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
function a(e, t, n) {
    return (
        (t = u(t)) in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e, t) {
    if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
}
function o(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, u(i.key), i);
    }
}
function l(e, t, n) {
    return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function u(e) {
    var t = c(e, 'string');
    return 'symbol' == typeof t ? t : String(t);
}
function c(e, t) {
    if ('object' != typeof e || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (void 0 !== n) {
        var i = n.call(e, t || 'default');
        if ('object' != typeof i) return i;
        throw TypeError('@@toPrimitive must return a primitive value.');
    }
    return ('string' === t ? String : Number)(e);
}
var d = n(413135).Buffer,
    f = n(252602).inspect,
    _ = (f && f.custom) || 'inspect';
function p(e, t, n) {
    d.prototype.copy.call(e, t, n);
}
e.exports = (function () {
    function e() {
        s(this, e), (this.head = null), (this.tail = null), (this.length = 0);
    }
    return (
        l(e, [
            {
                key: 'push',
                value: function (e) {
                    var t = {
                        data: e,
                        next: null
                    };
                    this.length > 0 ? (this.tail.next = t) : (this.head = t), (this.tail = t), ++this.length;
                }
            },
            {
                key: 'unshift',
                value: function (e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t), (this.head = t), ++this.length;
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
                    for (var t = this.head, n = '' + t.data; (t = t.next); ) n += e + t.data;
                    return n;
                }
            },
            {
                key: 'concat',
                value: function (e) {
                    if (0 === this.length) return d.alloc(0);
                    for (var t = d.allocUnsafe(e >>> 0), n = this.head, i = 0; n; ) p(n.data, t, i), (i += n.data.length), (n = n.next);
                    return t;
                }
            },
            {
                key: 'consume',
                value: function (e, t) {
                    var n;
                    return e < this.head.data.length ? ((n = this.head.data.slice(0, e)), (this.head.data = this.head.data.slice(e))) : (n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)), n;
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
                    var t = this.head,
                        n = 1,
                        i = t.data;
                    for (e -= i.length; (t = t.next); ) {
                        var r = t.data,
                            a = e > r.length ? r.length : e;
                        if ((a === r.length ? (i += r) : (i += r.slice(0, e)), 0 == (e -= a))) {
                            a === r.length ? (++n, t.next ? (this.head = t.next) : (this.head = this.tail = null)) : ((this.head = t), (t.data = r.slice(a)));
                            break;
                        }
                        ++n;
                    }
                    return (this.length -= n), i;
                }
            },
            {
                key: '_getBuffer',
                value: function (e) {
                    var t = d.allocUnsafe(e),
                        n = this.head,
                        i = 1;
                    for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
                        var r = n.data,
                            a = e > r.length ? r.length : e;
                        if ((r.copy(t, t.length - e, 0, a), 0 == (e -= a))) {
                            a === r.length ? (++i, n.next ? (this.head = n.next) : (this.head = this.tail = null)) : ((this.head = n), (n.data = r.slice(a)));
                            break;
                        }
                        ++i;
                    }
                    return (this.length -= i), t;
                }
            },
            {
                key: _,
                value: function (e, t) {
                    return f(
                        this,
                        r(
                            r({}, t),
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
