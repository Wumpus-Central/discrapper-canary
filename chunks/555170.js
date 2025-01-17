var i,
    a,
    s,
    o,
    l,
    u = r(444675);
(e.exports = O), (O.ReadableState = R), r(836560).EventEmitter;
var c = function (e, n) {
        return e.listeners(n).length;
    },
    d = r(138772),
    f = r(413135).Buffer,
    _ = (void 0 !== r.g ? r.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function h(e) {
    return f.from(e);
}
function p(e) {
    return f.isBuffer(e) || e instanceof _;
}
var m = r(260907);
a = m && m.debuglog ? m.debuglog('stream') : function () {};
var g = r(443551),
    E = r(887866),
    v = r(97703).getHighWaterMark,
    I = r(531478).codes,
    T = I.ERR_INVALID_ARG_TYPE,
    b = I.ERR_STREAM_PUSH_AFTER_EOF,
    y = I.ERR_METHOD_NOT_IMPLEMENTED,
    S = I.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
r(689118)(O, d);
var A = E.errorOrDestroy,
    N = ['error', 'close', 'destroy', 'pause', 'resume'];
function C(e, n, r) {
    if ('function' == typeof e.prependListener) return e.prependListener(n, r);
    e._events && e._events[n] ? (Array.isArray(e._events[n]) ? e._events[n].unshift(r) : (e._events[n] = [r, e._events[n]])) : e.on(n, r);
}
function R(e, n, a) {
    (i = i || r(827664)), (e = e || {}), 'boolean' != typeof a && (a = n instanceof i), (this.objectMode = !!e.objectMode), a && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = v(this, e, 'readableHighWaterMark', a)), (this.buffer = new g()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (!s && (s = r(2682).StringDecoder), (this.decoder = new s(e.encoding)), (this.encoding = e.encoding));
}
function O(e) {
    if (((i = i || r(827664)), !(this instanceof O))) return new O(e);
    var n = this instanceof i;
    (this._readableState = new R(e, this, n)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), d.call(this);
}
function D(e, n, r, i, s) {
    a('readableAddChunk', n);
    var o,
        l = e._readableState;
    if (null === n) (l.reading = !1), k(e, l);
    else if ((!s && (o = x(l, n)), o)) A(e, o);
    else if (l.objectMode || (n && n.length > 0)) {
        if (('string' != typeof n && !l.objectMode && Object.getPrototypeOf(n) !== f.prototype && (n = h(n)), i)) l.endEmitted ? A(e, new S()) : L(e, l, n, !0);
        else if (l.ended) A(e, new b());
        else {
            if (l.destroyed) return !1;
            (l.reading = !1), l.decoder && !r ? ((n = l.decoder.write(n)), l.objectMode || 0 !== n.length ? L(e, l, n, !1) : G(e, l)) : L(e, l, n, !1);
        }
    } else !i && ((l.reading = !1), G(e, l));
    return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
}
function L(e, n, r, i) {
    n.flowing && 0 === n.length && !n.sync ? ((n.awaitDrain = 0), e.emit('data', r)) : ((n.length += n.objectMode ? 1 : r.length), i ? n.buffer.unshift(r) : n.buffer.push(r), n.needReadable && U(e)), G(e, n);
}
function x(e, n) {
    var r;
    return !p(n) && 'string' != typeof n && void 0 !== n && !e.objectMode && (r = new T('chunk', ['string', 'Buffer', 'Uint8Array'], n)), r;
}
Object.defineProperty(O.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
        if (!!this._readableState) this._readableState.destroyed = e;
    }
}),
    (O.prototype.destroy = E.destroy),
    (O.prototype._undestroy = E.undestroy),
    (O.prototype._destroy = function (e, n) {
        n(e);
    }),
    (O.prototype.push = function (e, n) {
        var r,
            i = this._readableState;
        return i.objectMode ? (r = !0) : 'string' == typeof e && ((n = n || i.defaultEncoding) !== i.encoding && ((e = f.from(e, n)), (n = '')), (r = !0)), D(this, e, n, !1, r);
    }),
    (O.prototype.unshift = function (e) {
        return D(this, e, null, !0, !1);
    }),
    (O.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
    }),
    (O.prototype.setEncoding = function (e) {
        !s && (s = r(2682).StringDecoder);
        var n = new s(e);
        (this._readableState.decoder = n), (this._readableState.encoding = this._readableState.decoder.encoding);
        for (var i = this._readableState.buffer.head, a = ''; null !== i; ) (a += n.write(i.data)), (i = i.next);
        return this._readableState.buffer.clear(), '' !== a && this._readableState.buffer.push(a), (this._readableState.length = a.length), this;
    });
var w = 1073741824;
function P(e) {
    return e >= w ? (e = w) : (e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++), e;
}
function M(e, n) {
    if (e <= 0 || (0 === n.length && n.ended)) return 0;
    if (n.objectMode) return 1;
    if (e != e) return n.flowing && n.length ? n.buffer.head.data.length : n.length;
    return (e > n.highWaterMark && (n.highWaterMark = P(e)), e <= n.length) ? e : n.ended ? n.length : ((n.needReadable = !0), 0);
}
function k(e, n) {
    if ((a('onEofChunk'), !n.ended)) {
        if (n.decoder) {
            var r = n.decoder.end();
            r && r.length && (n.buffer.push(r), (n.length += n.objectMode ? 1 : r.length));
        }
        (n.ended = !0), n.sync ? U(e) : ((n.needReadable = !1), !n.emittedReadable && ((n.emittedReadable = !0), B(e)));
    }
}
function U(e) {
    var n = e._readableState;
    a('emitReadable', n.needReadable, n.emittedReadable), (n.needReadable = !1), !n.emittedReadable && (a('emitReadable', n.flowing), (n.emittedReadable = !0), u.nextTick(B, e));
}
function B(e) {
    var n = e._readableState;
    a('emitReadable_', n.destroyed, n.length, n.ended), !n.destroyed && (n.length || n.ended) && (e.emit('readable'), (n.emittedReadable = !1)), (n.needReadable = !n.flowing && !n.ended && n.length <= n.highWaterMark), W(e);
}
function G(e, n) {
    !n.readingMore && ((n.readingMore = !0), u.nextTick(Z, e, n));
}
function Z(e, n) {
    for (; !n.reading && !n.ended && (n.length < n.highWaterMark || (n.flowing && 0 === n.length)); ) {
        var r = n.length;
        if ((a('maybeReadMore read 0'), e.read(0), r === n.length)) break;
    }
    n.readingMore = !1;
}
function F(e) {
    return function () {
        var n = e._readableState;
        a('pipeOnDrain', n.awaitDrain), n.awaitDrain && n.awaitDrain--, 0 === n.awaitDrain && c(e, 'data') && ((n.flowing = !0), W(e));
    };
}
function V(e) {
    var n = e._readableState;
    (n.readableListening = e.listenerCount('readable') > 0), n.resumeScheduled && !n.paused ? (n.flowing = !0) : e.listenerCount('data') > 0 && e.resume();
}
function j(e) {
    a('readable nexttick read 0'), e.read(0);
}
function H(e, n) {
    !n.resumeScheduled && ((n.resumeScheduled = !0), u.nextTick(Y, e, n));
}
function Y(e, n) {
    a('resume', n.reading), !n.reading && e.read(0), (n.resumeScheduled = !1), e.emit('resume'), W(e), n.flowing && !n.reading && e.read(0);
}
function W(e) {
    var n = e._readableState;
    for (a('flow', n.flowing); n.flowing && null !== e.read(); );
}
function K(e, n) {
    var r;
    return 0 === n.length ? null : (n.objectMode ? (r = n.buffer.shift()) : !e || e >= n.length ? ((r = n.decoder ? n.buffer.join('') : 1 === n.buffer.length ? n.buffer.first() : n.buffer.concat(n.length)), n.buffer.clear()) : (r = n.buffer.consume(e, n.decoder)), r);
}
function z(e) {
    var n = e._readableState;
    a('endReadable', n.endEmitted), !n.endEmitted && ((n.ended = !0), u.nextTick(q, n, e));
}
function q(e, n) {
    if ((a('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (n.readable = !1), n.emit('end'), e.autoDestroy))) {
        var r = n._writableState;
        (!r || (r.autoDestroy && r.finished)) && n.destroy();
    }
}
function Q(e, n) {
    for (var r = 0, i = e.length; r < i; r++) if (e[r] === n) return r;
    return -1;
}
(O.prototype.read = function (e) {
    a('read', e), (e = parseInt(e, 10));
    var n,
        r = this._readableState,
        i = e;
    if ((0 !== e && (r.emittedReadable = !1), 0 === e && r.needReadable && ((0 !== r.highWaterMark ? r.length >= r.highWaterMark : r.length > 0) || r.ended))) return a('read: emitReadable', r.length, r.ended), 0 === r.length && r.ended ? z(this) : U(this), null;
    if (0 === (e = M(e, r)) && r.ended) return 0 === r.length && z(this), null;
    var s = r.needReadable;
    return a('need readable', s), (0 === r.length || r.length - e < r.highWaterMark) && a('length less than watermark', (s = !0)), r.ended || r.reading ? a('reading or ended', (s = !1)) : s && (a('do read'), (r.reading = !0), (r.sync = !0), 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), (r.sync = !1), !r.reading && (e = M(i, r))), null === (n = e > 0 ? K(e, r) : null) ? ((r.needReadable = r.length <= r.highWaterMark), (e = 0)) : ((r.length -= e), (r.awaitDrain = 0)), 0 === r.length && (!r.ended && (r.needReadable = !0), i !== e && r.ended && z(this)), null !== n && this.emit('data', n), n;
}),
    (O.prototype._read = function (e) {
        A(this, new y('_read()'));
    }),
    (O.prototype.pipe = function (e, n) {
        var r = this,
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
        (i.pipesCount += 1), a('pipe count=%d opts=%j', i.pipesCount, n);
        var s = (n && !1 === n.end) || e === u.stdout || e === u.stderr ? E : l;
        function o(e, n) {
            a('onunpipe'), e === r && n && !1 === n.hasUnpiped && ((n.hasUnpiped = !0), _());
        }
        function l() {
            a('onend'), e.end();
        }
        i.endEmitted ? u.nextTick(s) : r.once('end', s), e.on('unpipe', o);
        var d = F(r);
        e.on('drain', d);
        var f = !1;
        function _() {
            a('cleanup'), e.removeListener('close', m), e.removeListener('finish', g), e.removeListener('drain', d), e.removeListener('error', p), e.removeListener('unpipe', o), r.removeListener('end', l), r.removeListener('end', E), r.removeListener('data', h), (f = !0), i.awaitDrain && (!e._writableState || e._writableState.needDrain) && d();
        }
        function h(n) {
            a('ondata');
            var s = e.write(n);
            a('dest.write', s), !1 === s && (((1 === i.pipesCount && i.pipes === e) || (i.pipesCount > 1 && -1 !== Q(i.pipes, e))) && !f && (a('false write response, pause', i.awaitDrain), i.awaitDrain++), r.pause());
        }
        function p(n) {
            a('onerror', n), E(), e.removeListener('error', p), 0 === c(e, 'error') && A(e, n);
        }
        function m() {
            e.removeListener('finish', g), E();
        }
        function g() {
            a('onfinish'), e.removeListener('close', m), E();
        }
        function E() {
            a('unpipe'), r.unpipe(e);
        }
        return r.on('data', h), C(e, 'error', p), e.once('close', m), e.once('finish', g), e.emit('pipe', r), !i.flowing && (a('pipe resume'), r.resume()), e;
    }),
    (O.prototype.unpipe = function (e) {
        var n = this._readableState,
            r = { hasUnpiped: !1 };
        if (0 === n.pipesCount) return this;
        if (1 === n.pipesCount) return e && e !== n.pipes ? this : (!e && (e = n.pipes), (n.pipes = null), (n.pipesCount = 0), (n.flowing = !1), e && e.emit('unpipe', this, r), this);
        if (!e) {
            var i = n.pipes,
                a = n.pipesCount;
            (n.pipes = null), (n.pipesCount = 0), (n.flowing = !1);
            for (var s = 0; s < a; s++) i[s].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var o = Q(n.pipes, e);
        return -1 === o ? this : (n.pipes.splice(o, 1), (n.pipesCount -= 1), 1 === n.pipesCount && (n.pipes = n.pipes[0]), e.emit('unpipe', this, r), this);
    }),
    (O.prototype.on = function (e, n) {
        var r = d.prototype.on.call(this, e, n),
            i = this._readableState;
        return 'data' === e ? ((i.readableListening = this.listenerCount('readable') > 0), !1 !== i.flowing && this.resume()) : 'readable' === e && !i.endEmitted && !i.readableListening && ((i.readableListening = i.needReadable = !0), (i.flowing = !1), (i.emittedReadable = !1), a('on readable', i.length, i.reading), i.length ? U(this) : !i.reading && u.nextTick(j, this)), r;
    }),
    (O.prototype.addListener = O.prototype.on),
    (O.prototype.removeListener = function (e, n) {
        var r = d.prototype.removeListener.call(this, e, n);
        return 'readable' === e && u.nextTick(V, this), r;
    }),
    (O.prototype.removeAllListeners = function (e) {
        var n = d.prototype.removeAllListeners.apply(this, arguments);
        return ('readable' === e || void 0 === e) && u.nextTick(V, this), n;
    }),
    (O.prototype.resume = function () {
        var e = this._readableState;
        return !e.flowing && (a('resume'), (e.flowing = !e.readableListening), H(this, e)), (e.paused = !1), this;
    }),
    (O.prototype.pause = function () {
        return a('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (a('pause'), (this._readableState.flowing = !1), this.emit('pause')), (this._readableState.paused = !0), this;
    }),
    (O.prototype.wrap = function (e) {
        var n = this,
            r = this._readableState,
            i = !1;
        for (var s in (e.on('end', function () {
            if ((a('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && n.push(e);
            }
            n.push(null);
        }),
        e.on('data', function (s) {
            if ((a('wrapped data'), r.decoder && (s = r.decoder.write(s)), r.objectMode && null == s)) return;
            if (!!r.objectMode || (!!s && !!s.length)) !n.push(s) && ((i = !0), e.pause());
        }),
        e))
            void 0 === this[s] &&
                'function' == typeof e[s] &&
                (this[s] = (function (n) {
                    return function () {
                        return e[n].apply(e, arguments);
                    };
                })(s));
        for (var o = 0; o < N.length; o++) e.on(N[o], this.emit.bind(this, N[o]));
        return (
            (this._read = function (n) {
                a('wrapped _read', n), i && ((i = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (O.prototype[Symbol.asyncIterator] = function () {
            return void 0 === o && (o = r(634587)), o(this);
        }),
    Object.defineProperty(O.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }),
    Object.defineProperty(O.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }),
    Object.defineProperty(O.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }),
    (O._fromList = K),
    Object.defineProperty(O.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }),
    'function' == typeof Symbol &&
        (O.from = function (e, n) {
            return void 0 === l && (l = r(787838)), l(O, e, n);
        });
