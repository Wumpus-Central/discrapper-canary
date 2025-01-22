var i,
    a,
    o,
    s,
    l,
    u = r(444675);
(e.exports = O), (O.ReadableState = R), r(836560).EventEmitter;
var c = function (e, n) {
        return e.listeners(n).length;
    },
    d = r(138772),
    f = r(413135).Buffer,
    p = (void 0 !== r.g ? r.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function h(e) {
    return f.from(e);
}
function _(e) {
    return f.isBuffer(e) || e instanceof p;
}
var m = r(260907);
a = m && m.debuglog ? m.debuglog('stream') : function () {};
var g = r(443551),
    E = r(887866),
    v = r(97703).getHighWaterMark,
    y = r(531478).codes,
    b = y.ERR_INVALID_ARG_TYPE,
    I = y.ERR_STREAM_PUSH_AFTER_EOF,
    T = y.ERR_METHOD_NOT_IMPLEMENTED,
    S = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
r(689118)(O, d);
var A = E.errorOrDestroy,
    C = ['error', 'close', 'destroy', 'pause', 'resume'];
function N(e, n, r) {
    if ('function' == typeof e.prependListener) return e.prependListener(n, r);
    e._events && e._events[n] ? (Array.isArray(e._events[n]) ? e._events[n].unshift(r) : (e._events[n] = [r, e._events[n]])) : e.on(n, r);
}
function R(e, n, a) {
    (i = i || r(827664)), (e = e || {}), 'boolean' != typeof a && (a = n instanceof i), (this.objectMode = !!e.objectMode), a && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = v(this, e, 'readableHighWaterMark', a)), (this.buffer = new g()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (!o && (o = r(2682).StringDecoder), (this.decoder = new o(e.encoding)), (this.encoding = e.encoding));
}
function O(e) {
    if (((i = i || r(827664)), !(this instanceof O))) return new O(e);
    var n = this instanceof i;
    (this._readableState = new R(e, this, n)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), d.call(this);
}
function D(e, n, r, i, o) {
    a('readableAddChunk', n);
    var s,
        l = e._readableState;
    if (null === n) (l.reading = !1), k(e, l);
    else if ((!o && (s = L(l, n)), s)) A(e, s);
    else if (l.objectMode || (n && n.length > 0)) {
        if (('string' != typeof n && !l.objectMode && Object.getPrototypeOf(n) !== f.prototype && (n = h(n)), i)) l.endEmitted ? A(e, new S()) : x(e, l, n, !0);
        else if (l.ended) A(e, new I());
        else {
            if (l.destroyed) return !1;
            (l.reading = !1), l.decoder && !r ? ((n = l.decoder.write(n)), l.objectMode || 0 !== n.length ? x(e, l, n, !1) : G(e, l)) : x(e, l, n, !1);
        }
    } else !i && ((l.reading = !1), G(e, l));
    return !l.ended && (l.length < l.highWaterMark || 0 === l.length);
}
function x(e, n, r, i) {
    n.flowing && 0 === n.length && !n.sync ? ((n.awaitDrain = 0), e.emit('data', r)) : ((n.length += n.objectMode ? 1 : r.length), i ? n.buffer.unshift(r) : n.buffer.push(r), n.needReadable && U(e)), G(e, n);
}
function L(e, n) {
    var r;
    return !_(n) && 'string' != typeof n && void 0 !== n && !e.objectMode && (r = new b('chunk', ['string', 'Buffer', 'Uint8Array'], n)), r;
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
        !o && (o = r(2682).StringDecoder);
        var n = new o(e);
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
    var o = r.needReadable;
    return a('need readable', o), (0 === r.length || r.length - e < r.highWaterMark) && a('length less than watermark', (o = !0)), r.ended || r.reading ? a('reading or ended', (o = !1)) : o && (a('do read'), (r.reading = !0), (r.sync = !0), 0 === r.length && (r.needReadable = !0), this._read(r.highWaterMark), (r.sync = !1), !r.reading && (e = M(i, r))), null === (n = e > 0 ? K(e, r) : null) ? ((r.needReadable = r.length <= r.highWaterMark), (e = 0)) : ((r.length -= e), (r.awaitDrain = 0)), 0 === r.length && (!r.ended && (r.needReadable = !0), i !== e && r.ended && z(this)), null !== n && this.emit('data', n), n;
}),
    (O.prototype._read = function (e) {
        A(this, new T('_read()'));
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
        var o = (n && !1 === n.end) || e === u.stdout || e === u.stderr ? E : l;
        function s(e, n) {
            a('onunpipe'), e === r && n && !1 === n.hasUnpiped && ((n.hasUnpiped = !0), p());
        }
        function l() {
            a('onend'), e.end();
        }
        i.endEmitted ? u.nextTick(o) : r.once('end', o), e.on('unpipe', s);
        var d = F(r);
        e.on('drain', d);
        var f = !1;
        function p() {
            a('cleanup'), e.removeListener('close', m), e.removeListener('finish', g), e.removeListener('drain', d), e.removeListener('error', _), e.removeListener('unpipe', s), r.removeListener('end', l), r.removeListener('end', E), r.removeListener('data', h), (f = !0), i.awaitDrain && (!e._writableState || e._writableState.needDrain) && d();
        }
        function h(n) {
            a('ondata');
            var o = e.write(n);
            a('dest.write', o), !1 === o && (((1 === i.pipesCount && i.pipes === e) || (i.pipesCount > 1 && -1 !== Q(i.pipes, e))) && !f && (a('false write response, pause', i.awaitDrain), i.awaitDrain++), r.pause());
        }
        function _(n) {
            a('onerror', n), E(), e.removeListener('error', _), 0 === c(e, 'error') && A(e, n);
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
        return r.on('data', h), N(e, 'error', _), e.once('close', m), e.once('finish', g), e.emit('pipe', r), !i.flowing && (a('pipe resume'), r.resume()), e;
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
            for (var o = 0; o < a; o++) i[o].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var s = Q(n.pipes, e);
        return -1 === s ? this : (n.pipes.splice(s, 1), (n.pipesCount -= 1), 1 === n.pipesCount && (n.pipes = n.pipes[0]), e.emit('unpipe', this, r), this);
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
        for (var o in (e.on('end', function () {
            if ((a('wrapped end'), r.decoder && !r.ended)) {
                var e = r.decoder.end();
                e && e.length && n.push(e);
            }
            n.push(null);
        }),
        e.on('data', function (o) {
            if ((a('wrapped data'), r.decoder && (o = r.decoder.write(o)), r.objectMode && null == o)) return;
            if (!!r.objectMode || (!!o && !!o.length)) !n.push(o) && ((i = !0), e.pause());
        }),
        e))
            void 0 === this[o] &&
                'function' == typeof e[o] &&
                (this[o] = (function (n) {
                    return function () {
                        return e[n].apply(e, arguments);
                    };
                })(o));
        for (var s = 0; s < C.length; s++) e.on(C[s], this.emit.bind(this, C[s]));
        return (
            (this._read = function (n) {
                a('wrapped _read', n), i && ((i = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (O.prototype[Symbol.asyncIterator] = function () {
            return void 0 === s && (s = r(634587)), s(this);
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
