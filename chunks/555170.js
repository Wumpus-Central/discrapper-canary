var i,
    r,
    a,
    s,
    o,
    l = n(444675);
(e.exports = R), (R.ReadableState = C), n(836560).EventEmitter;
var u = function (e, t) {
        return e.listeners(t).length;
    },
    c = n(138772),
    d = n(413135).Buffer,
    f = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function _(e) {
    return d.from(e);
}
function p(e) {
    return d.isBuffer(e) || e instanceof f;
}
var h = n(260907);
r = h && h.debuglog ? h.debuglog('stream') : function () {};
var m = n(443551),
    g = n(887866),
    E = n(97703).getHighWaterMark,
    v = n(531478).codes,
    y = v.ERR_INVALID_ARG_TYPE,
    I = v.ERR_STREAM_PUSH_AFTER_EOF,
    T = v.ERR_METHOD_NOT_IMPLEMENTED,
    b = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
n(689118)(R, c);
var S = g.errorOrDestroy,
    A = ['error', 'close', 'destroy', 'pause', 'resume'];
function N(e, t, n) {
    if ('function' == typeof e.prependListener) return e.prependListener(t, n);
    e._events && e._events[t] ? (Array.isArray(e._events[t]) ? e._events[t].unshift(n) : (e._events[t] = [n, e._events[t]])) : e.on(t, n);
}
function C(e, t, r) {
    (i = i || n(827664)), (e = e || {}), 'boolean' != typeof r && (r = t instanceof i), (this.objectMode = !!e.objectMode), r && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = E(this, e, 'readableHighWaterMark', r)), (this.buffer = new m()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (a || (a = n(2682).StringDecoder), (this.decoder = new a(e.encoding)), (this.encoding = e.encoding));
}
function R(e) {
    if (((i = i || n(827664)), !(this instanceof R))) return new R(e);
    var t = this instanceof i;
    (this._readableState = new C(e, this, t)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), c.call(this);
}
function O(e, t, n, i, a) {
    r('readableAddChunk', t);
    var s,
        o = e._readableState;
    if (null === t) (o.reading = !1), M(e, o);
    else if ((a || (s = L(o, t)), s)) S(e, s);
    else if (o.objectMode || (t && t.length > 0)) {
        if (('string' == typeof t || o.objectMode || Object.getPrototypeOf(t) === d.prototype || (t = _(t)), i)) o.endEmitted ? S(e, new b()) : D(e, o, t, !0);
        else if (o.ended) S(e, new I());
        else {
            if (o.destroyed) return !1;
            (o.reading = !1), o.decoder && !n ? ((t = o.decoder.write(t)), o.objectMode || 0 !== t.length ? D(e, o, t, !1) : G(e, o)) : D(e, o, t, !1);
        }
    } else i || ((o.reading = !1), G(e, o));
    return !o.ended && (o.length < o.highWaterMark || 0 === o.length);
}
function D(e, t, n, i) {
    t.flowing && 0 === t.length && !t.sync ? ((t.awaitDrain = 0), e.emit('data', n)) : ((t.length += t.objectMode ? 1 : n.length), i ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && k(e)), G(e, t);
}
function L(e, t) {
    var n;
    return p(t) || 'string' == typeof t || void 0 === t || e.objectMode || (n = new y('chunk', ['string', 'Buffer', 'Uint8Array'], t)), n;
}
Object.defineProperty(R.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
        this._readableState && (this._readableState.destroyed = e);
    }
}),
    (R.prototype.destroy = g.destroy),
    (R.prototype._undestroy = g.undestroy),
    (R.prototype._destroy = function (e, t) {
        t(e);
    }),
    (R.prototype.push = function (e, t) {
        var n,
            i = this._readableState;
        return i.objectMode ? (n = !0) : 'string' == typeof e && ((t = t || i.defaultEncoding) !== i.encoding && ((e = d.from(e, t)), (t = '')), (n = !0)), O(this, e, t, !1, n);
    }),
    (R.prototype.unshift = function (e) {
        return O(this, e, null, !0, !1);
    }),
    (R.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
    }),
    (R.prototype.setEncoding = function (e) {
        a || (a = n(2682).StringDecoder);
        var t = new a(e);
        (this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding);
        for (var i = this._readableState.buffer.head, r = ''; null !== i; ) (r += t.write(i.data)), (i = i.next);
        return this._readableState.buffer.clear(), '' !== r && this._readableState.buffer.push(r), (this._readableState.length = r.length), this;
    });
var x = 1073741824;
function P(e) {
    return e >= x ? (e = x) : (e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++), e;
}
function w(e, t) {
    return e <= 0 || (0 === t.length && t.ended) ? 0 : t.objectMode ? 1 : e != e ? (t.flowing && t.length ? t.buffer.head.data.length : t.length) : (e > t.highWaterMark && (t.highWaterMark = P(e)), e <= t.length) ? e : t.ended ? t.length : ((t.needReadable = !0), 0);
}
function M(e, t) {
    if ((r('onEofChunk'), !t.ended)) {
        if (t.decoder) {
            var n = t.decoder.end();
            n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
        }
        (t.ended = !0), t.sync ? k(e) : ((t.needReadable = !1), t.emittedReadable || ((t.emittedReadable = !0), U(e)));
    }
}
function k(e) {
    var t = e._readableState;
    r('emitReadable', t.needReadable, t.emittedReadable), (t.needReadable = !1), t.emittedReadable || (r('emitReadable', t.flowing), (t.emittedReadable = !0), l.nextTick(U, e));
}
function U(e) {
    var t = e._readableState;
    r('emitReadable_', t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit('readable'), (t.emittedReadable = !1)), (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark), Y(e);
}
function G(e, t) {
    t.readingMore || ((t.readingMore = !0), l.nextTick(B, e, t));
}
function B(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length)); ) {
        var n = t.length;
        if ((r('maybeReadMore read 0'), e.read(0), n === t.length)) break;
    }
    t.readingMore = !1;
}
function Z(e) {
    return function () {
        var t = e._readableState;
        r('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && u(e, 'data') && ((t.flowing = !0), Y(e));
    };
}
function F(e) {
    var t = e._readableState;
    (t.readableListening = e.listenerCount('readable') > 0), t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount('data') > 0 && e.resume();
}
function V(e) {
    r('readable nexttick read 0'), e.read(0);
}
function j(e, t) {
    t.resumeScheduled || ((t.resumeScheduled = !0), l.nextTick(H, e, t));
}
function H(e, t) {
    r('resume', t.reading), t.reading || e.read(0), (t.resumeScheduled = !1), e.emit('resume'), Y(e), t.flowing && !t.reading && e.read(0);
}
function Y(e) {
    var t = e._readableState;
    for (r('flow', t.flowing); t.flowing && null !== e.read(); );
}
function W(e, t) {
    var n;
    return 0 === t.length ? null : (t.objectMode ? (n = t.buffer.shift()) : !e || e >= t.length ? ((n = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length)), t.buffer.clear()) : (n = t.buffer.consume(e, t.decoder)), n);
}
function K(e) {
    var t = e._readableState;
    r('endReadable', t.endEmitted), t.endEmitted || ((t.ended = !0), l.nextTick(z, t, e));
}
function z(e, t) {
    if ((r('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit('end'), e.autoDestroy))) {
        var n = t._writableState;
        (!n || (n.autoDestroy && n.finished)) && t.destroy();
    }
}
function q(e, t) {
    for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
    return -1;
}
(R.prototype.read = function (e) {
    r('read', e), (e = parseInt(e, 10));
    var t,
        n = this._readableState,
        i = e;
    if ((0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended))) return r('read: emitReadable', n.length, n.ended), 0 === n.length && n.ended ? K(this) : k(this), null;
    if (0 === (e = w(e, n)) && n.ended) return 0 === n.length && K(this), null;
    var a = n.needReadable;
    return r('need readable', a), (0 === n.length || n.length - e < n.highWaterMark) && r('length less than watermark', (a = !0)), n.ended || n.reading ? r('reading or ended', (a = !1)) : a && (r('do read'), (n.reading = !0), (n.sync = !0), 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), (n.sync = !1), n.reading || (e = w(i, n))), null === (t = e > 0 ? W(e, n) : null) ? ((n.needReadable = n.length <= n.highWaterMark), (e = 0)) : ((n.length -= e), (n.awaitDrain = 0)), 0 === n.length && (n.ended || (n.needReadable = !0), i !== e && n.ended && K(this)), null !== t && this.emit('data', t), t;
}),
    (R.prototype._read = function (e) {
        S(this, new T('_read()'));
    }),
    (R.prototype.pipe = function (e, t) {
        var n = this,
            i = this._readableState;
        switch (i.pipesCount) {
            case 0:
                i.pipes = e;
                break;
            case 1:
                i.pipes = [i.pipes, e];
                break;
            default:
                i.pipes.push(e);
        }
        (i.pipesCount += 1), r('pipe count=%d opts=%j', i.pipesCount, t);
        var a = (t && !1 === t.end) || e === l.stdout || e === l.stderr ? g : o;
        function s(e, t) {
            r('onunpipe'), e === n && t && !1 === t.hasUnpiped && ((t.hasUnpiped = !0), f());
        }
        function o() {
            r('onend'), e.end();
        }
        i.endEmitted ? l.nextTick(a) : n.once('end', a), e.on('unpipe', s);
        var c = Z(n);
        e.on('drain', c);
        var d = !1;
        function f() {
            r('cleanup'), e.removeListener('close', h), e.removeListener('finish', m), e.removeListener('drain', c), e.removeListener('error', p), e.removeListener('unpipe', s), n.removeListener('end', o), n.removeListener('end', g), n.removeListener('data', _), (d = !0), i.awaitDrain && (!e._writableState || e._writableState.needDrain) && c();
        }
        function _(t) {
            r('ondata');
            var a = e.write(t);
            r('dest.write', a), !1 === a && (((1 === i.pipesCount && i.pipes === e) || (i.pipesCount > 1 && -1 !== q(i.pipes, e))) && !d && (r('false write response, pause', i.awaitDrain), i.awaitDrain++), n.pause());
        }
        function p(t) {
            r('onerror', t), g(), e.removeListener('error', p), 0 === u(e, 'error') && S(e, t);
        }
        function h() {
            e.removeListener('finish', m), g();
        }
        function m() {
            r('onfinish'), e.removeListener('close', h), g();
        }
        function g() {
            r('unpipe'), n.unpipe(e);
        }
        return n.on('data', _), N(e, 'error', p), e.once('close', h), e.once('finish', m), e.emit('pipe', n), i.flowing || (r('pipe resume'), n.resume()), e;
    }),
    (R.prototype.unpipe = function (e) {
        var t = this._readableState,
            n = { hasUnpiped: !1 };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return (e && e !== t.pipes) || (e || (e = t.pipes), (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1), e && e.emit('unpipe', this, n)), this;
        if (!e) {
            var i = t.pipes,
                r = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var a = 0; a < r; a++) i[a].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var s = q(t.pipes, e);
        return -1 === s || (t.pipes.splice(s, 1), (t.pipesCount -= 1), 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n)), this;
    }),
    (R.prototype.on = function (e, t) {
        var n = c.prototype.on.call(this, e, t),
            i = this._readableState;
        return 'data' === e ? ((i.readableListening = this.listenerCount('readable') > 0), !1 !== i.flowing && this.resume()) : 'readable' !== e || i.endEmitted || i.readableListening || ((i.readableListening = i.needReadable = !0), (i.flowing = !1), (i.emittedReadable = !1), r('on readable', i.length, i.reading), i.length ? k(this) : i.reading || l.nextTick(V, this)), n;
    }),
    (R.prototype.addListener = R.prototype.on),
    (R.prototype.removeListener = function (e, t) {
        var n = c.prototype.removeListener.call(this, e, t);
        return 'readable' === e && l.nextTick(F, this), n;
    }),
    (R.prototype.removeAllListeners = function (e) {
        var t = c.prototype.removeAllListeners.apply(this, arguments);
        return ('readable' === e || void 0 === e) && l.nextTick(F, this), t;
    }),
    (R.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (r('resume'), (e.flowing = !e.readableListening), j(this, e)), (e.paused = !1), this;
    }),
    (R.prototype.pause = function () {
        return r('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (r('pause'), (this._readableState.flowing = !1), this.emit('pause')), (this._readableState.paused = !0), this;
    }),
    (R.prototype.wrap = function (e) {
        var t = this,
            n = this._readableState,
            i = !1;
        for (var a in (e.on('end', function () {
            if ((r('wrapped end'), n.decoder && !n.ended)) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }),
        e.on('data', function (a) {
            if ((r('wrapped data'), n.decoder && (a = n.decoder.write(a)), !n.objectMode || null != a)) (n.objectMode || (a && a.length)) && (t.push(a) || ((i = !0), e.pause()));
        }),
        e))
            void 0 === this[a] &&
                'function' == typeof e[a] &&
                (this[a] = (function (t) {
                    return function () {
                        return e[t].apply(e, arguments);
                    };
                })(a));
        for (var s = 0; s < A.length; s++) e.on(A[s], this.emit.bind(this, A[s]));
        return (
            (this._read = function (t) {
                r('wrapped _read', t), i && ((i = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (R.prototype[Symbol.asyncIterator] = function () {
            return void 0 === s && (s = n(634587)), s(this);
        }),
    Object.defineProperty(R.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }),
    Object.defineProperty(R.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }),
    Object.defineProperty(R.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }),
    (R._fromList = W),
    Object.defineProperty(R.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }),
    'function' == typeof Symbol &&
        (R.from = function (e, t) {
            return void 0 === o && (o = n(787838)), o(R, e, t);
        });
