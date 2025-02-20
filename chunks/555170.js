var r,
    i,
    o,
    a,
    s,
    l = n(444675);
(e.exports = C), (C.ReadableState = A), n(836560).EventEmitter;
var c = function (e, t) {
        return e.listeners(t).length;
    },
    u = n(138772),
    d = n(413135).Buffer,
    f = (void 0 !== n.g ? n.g : 'undefined' != typeof window ? window : 'undefined' != typeof self ? self : {}).Uint8Array || function () {};
function p(e) {
    return d.from(e);
}
function _(e) {
    return d.isBuffer(e) || e instanceof f;
}
var h = n(260907);
i = h && h.debuglog ? h.debuglog('stream') : function () {};
var m = n(443551),
    g = n(887866),
    E = n(97703).getHighWaterMark,
    v = n(531478).codes,
    b = v.ERR_INVALID_ARG_TYPE,
    y = v.ERR_STREAM_PUSH_AFTER_EOF,
    O = v.ERR_METHOD_NOT_IMPLEMENTED,
    S = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
n(689118)(C, u);
var I = g.errorOrDestroy,
    T = ['error', 'close', 'destroy', 'pause', 'resume'];
function N(e, t, n) {
    if ('function' == typeof e.prependListener) return e.prependListener(t, n);
    e._events && e._events[t] ? (Array.isArray(e._events[t]) ? e._events[t].unshift(n) : (e._events[t] = [n, e._events[t]])) : e.on(t, n);
}
function A(e, t, i) {
    (r = r || n(827664)), (e = e || {}), 'boolean' != typeof i && (i = t instanceof r), (this.objectMode = !!e.objectMode), i && (this.objectMode = this.objectMode || !!e.readableObjectMode), (this.highWaterMark = E(this, e, 'readableHighWaterMark', i)), (this.buffer = new m()), (this.length = 0), (this.pipes = null), (this.pipesCount = 0), (this.flowing = null), (this.ended = !1), (this.endEmitted = !1), (this.reading = !1), (this.sync = !0), (this.needReadable = !1), (this.emittedReadable = !1), (this.readableListening = !1), (this.resumeScheduled = !1), (this.paused = !0), (this.emitClose = !1 !== e.emitClose), (this.autoDestroy = !!e.autoDestroy), (this.destroyed = !1), (this.defaultEncoding = e.defaultEncoding || 'utf8'), (this.awaitDrain = 0), (this.readingMore = !1), (this.decoder = null), (this.encoding = null), e.encoding && (o || (o = n(2682).StringDecoder), (this.decoder = new o(e.encoding)), (this.encoding = e.encoding));
}
function C(e) {
    if (((r = r || n(827664)), !(this instanceof C))) return new C(e);
    var t = this instanceof r;
    (this._readableState = new A(e, this, t)), (this.readable = !0), e && ('function' == typeof e.read && (this._read = e.read), 'function' == typeof e.destroy && (this._destroy = e.destroy)), u.call(this);
}
function R(e, t, n, r, o) {
    i('readableAddChunk', t);
    var a,
        s = e._readableState;
    if (null === t) (s.reading = !1), M(e, s);
    else if ((o || (a = w(s, t)), a)) I(e, a);
    else if (s.objectMode || (t && t.length > 0)) {
        if (('string' == typeof t || s.objectMode || Object.getPrototypeOf(t) === d.prototype || (t = p(t)), r)) s.endEmitted ? I(e, new S()) : P(e, s, t, !0);
        else if (s.ended) I(e, new y());
        else {
            if (s.destroyed) return !1;
            (s.reading = !1), s.decoder && !n ? ((t = s.decoder.write(t)), s.objectMode || 0 !== t.length ? P(e, s, t, !1) : U(e, s)) : P(e, s, t, !1);
        }
    } else r || ((s.reading = !1), U(e, s));
    return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
}
function P(e, t, n, r) {
    t.flowing && 0 === t.length && !t.sync ? ((t.awaitDrain = 0), e.emit('data', n)) : ((t.length += t.objectMode ? 1 : n.length), r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && k(e)), U(e, t);
}
function w(e, t) {
    var n;
    return _(t) || 'string' == typeof t || void 0 === t || e.objectMode || (n = new b('chunk', ['string', 'Buffer', 'Uint8Array'], t)), n;
}
Object.defineProperty(C.prototype, 'destroyed', {
    enumerable: !1,
    get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
    },
    set: function (e) {
        this._readableState && (this._readableState.destroyed = e);
    }
}),
    (C.prototype.destroy = g.destroy),
    (C.prototype._undestroy = g.undestroy),
    (C.prototype._destroy = function (e, t) {
        t(e);
    }),
    (C.prototype.push = function (e, t) {
        var n,
            r = this._readableState;
        return r.objectMode ? (n = !0) : 'string' == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && ((e = d.from(e, t)), (t = '')), (n = !0)), R(this, e, t, !1, n);
    }),
    (C.prototype.unshift = function (e) {
        return R(this, e, null, !0, !1);
    }),
    (C.prototype.isPaused = function () {
        return !1 === this._readableState.flowing;
    }),
    (C.prototype.setEncoding = function (e) {
        o || (o = n(2682).StringDecoder);
        var t = new o(e);
        (this._readableState.decoder = t), (this._readableState.encoding = this._readableState.decoder.encoding);
        for (var r = this._readableState.buffer.head, i = ''; null !== r; ) (i += t.write(r.data)), (r = r.next);
        return this._readableState.buffer.clear(), '' !== i && this._readableState.buffer.push(i), (this._readableState.length = i.length), this;
    });
var D = 1073741824;
function x(e) {
    return e >= D ? (e = D) : (e--, (e |= e >>> 1), (e |= e >>> 2), (e |= e >>> 4), (e |= e >>> 8), (e |= e >>> 16), e++), e;
}
function L(e, t) {
    return e <= 0 || (0 === t.length && t.ended) ? 0 : t.objectMode ? 1 : e != e ? (t.flowing && t.length ? t.buffer.head.data.length : t.length) : (e > t.highWaterMark && (t.highWaterMark = x(e)), e <= t.length) ? e : t.ended ? t.length : ((t.needReadable = !0), 0);
}
function M(e, t) {
    if ((i('onEofChunk'), !t.ended)) {
        if (t.decoder) {
            var n = t.decoder.end();
            n && n.length && (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
        }
        (t.ended = !0), t.sync ? k(e) : ((t.needReadable = !1), t.emittedReadable || ((t.emittedReadable = !0), j(e)));
    }
}
function k(e) {
    var t = e._readableState;
    i('emitReadable', t.needReadable, t.emittedReadable), (t.needReadable = !1), t.emittedReadable || (i('emitReadable', t.flowing), (t.emittedReadable = !0), l.nextTick(j, e));
}
function j(e) {
    var t = e._readableState;
    i('emitReadable_', t.destroyed, t.length, t.ended), !t.destroyed && (t.length || t.ended) && (e.emit('readable'), (t.emittedReadable = !1)), (t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark), W(e);
}
function U(e, t) {
    t.readingMore || ((t.readingMore = !0), l.nextTick(G, e, t));
}
function G(e, t) {
    for (; !t.reading && !t.ended && (t.length < t.highWaterMark || (t.flowing && 0 === t.length)); ) {
        var n = t.length;
        if ((i('maybeReadMore read 0'), e.read(0), n === t.length)) break;
    }
    t.readingMore = !1;
}
function B(e) {
    return function () {
        var t = e._readableState;
        i('pipeOnDrain', t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && c(e, 'data') && ((t.flowing = !0), W(e));
    };
}
function Z(e) {
    var t = e._readableState;
    (t.readableListening = e.listenerCount('readable') > 0), t.resumeScheduled && !t.paused ? (t.flowing = !0) : e.listenerCount('data') > 0 && e.resume();
}
function F(e) {
    i('readable nexttick read 0'), e.read(0);
}
function V(e, t) {
    t.resumeScheduled || ((t.resumeScheduled = !0), l.nextTick(H, e, t));
}
function H(e, t) {
    i('resume', t.reading), t.reading || e.read(0), (t.resumeScheduled = !1), e.emit('resume'), W(e), t.flowing && !t.reading && e.read(0);
}
function W(e) {
    var t = e._readableState;
    for (i('flow', t.flowing); t.flowing && null !== e.read(); );
}
function Y(e, t) {
    var n;
    return 0 === t.length ? null : (t.objectMode ? (n = t.buffer.shift()) : !e || e >= t.length ? ((n = t.decoder ? t.buffer.join('') : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length)), t.buffer.clear()) : (n = t.buffer.consume(e, t.decoder)), n);
}
function K(e) {
    var t = e._readableState;
    i('endReadable', t.endEmitted), t.endEmitted || ((t.ended = !0), l.nextTick(z, t, e));
}
function z(e, t) {
    if ((i('endReadableNT', e.endEmitted, e.length), !e.endEmitted && 0 === e.length && ((e.endEmitted = !0), (t.readable = !1), t.emit('end'), e.autoDestroy))) {
        var n = t._writableState;
        (!n || (n.autoDestroy && n.finished)) && t.destroy();
    }
}
function q(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
}
(C.prototype.read = function (e) {
    i('read', e), (e = parseInt(e, 10));
    var t,
        n = this._readableState,
        r = e;
    if ((0 !== e && (n.emittedReadable = !1), 0 === e && n.needReadable && ((0 !== n.highWaterMark ? n.length >= n.highWaterMark : n.length > 0) || n.ended))) return i('read: emitReadable', n.length, n.ended), 0 === n.length && n.ended ? K(this) : k(this), null;
    if (0 === (e = L(e, n)) && n.ended) return 0 === n.length && K(this), null;
    var o = n.needReadable;
    return i('need readable', o), (0 === n.length || n.length - e < n.highWaterMark) && i('length less than watermark', (o = !0)), n.ended || n.reading ? i('reading or ended', (o = !1)) : o && (i('do read'), (n.reading = !0), (n.sync = !0), 0 === n.length && (n.needReadable = !0), this._read(n.highWaterMark), (n.sync = !1), n.reading || (e = L(r, n))), null === (t = e > 0 ? Y(e, n) : null) ? ((n.needReadable = n.length <= n.highWaterMark), (e = 0)) : ((n.length -= e), (n.awaitDrain = 0)), 0 === n.length && (n.ended || (n.needReadable = !0), r !== e && n.ended && K(this)), null !== t && this.emit('data', t), t;
}),
    (C.prototype._read = function (e) {
        I(this, new O('_read()'));
    }),
    (C.prototype.pipe = function (e, t) {
        var n = this,
            r = this._readableState;
        switch (r.pipesCount) {
            case 0:
                r.pipes = e;
                break;
            case 1:
                r.pipes = [r.pipes, e];
                break;
            default:
                r.pipes.push(e);
        }
        (r.pipesCount += 1), i('pipe count=%d opts=%j', r.pipesCount, t);
        var o = (t && !1 === t.end) || e === l.stdout || e === l.stderr ? g : s;
        function a(e, t) {
            i('onunpipe'), e === n && t && !1 === t.hasUnpiped && ((t.hasUnpiped = !0), f());
        }
        function s() {
            i('onend'), e.end();
        }
        r.endEmitted ? l.nextTick(o) : n.once('end', o), e.on('unpipe', a);
        var u = B(n);
        e.on('drain', u);
        var d = !1;
        function f() {
            i('cleanup'), e.removeListener('close', h), e.removeListener('finish', m), e.removeListener('drain', u), e.removeListener('error', _), e.removeListener('unpipe', a), n.removeListener('end', s), n.removeListener('end', g), n.removeListener('data', p), (d = !0), r.awaitDrain && (!e._writableState || e._writableState.needDrain) && u();
        }
        function p(t) {
            i('ondata');
            var o = e.write(t);
            i('dest.write', o), !1 === o && (((1 === r.pipesCount && r.pipes === e) || (r.pipesCount > 1 && -1 !== q(r.pipes, e))) && !d && (i('false write response, pause', r.awaitDrain), r.awaitDrain++), n.pause());
        }
        function _(t) {
            i('onerror', t), g(), e.removeListener('error', _), 0 === c(e, 'error') && I(e, t);
        }
        function h() {
            e.removeListener('finish', m), g();
        }
        function m() {
            i('onfinish'), e.removeListener('close', h), g();
        }
        function g() {
            i('unpipe'), n.unpipe(e);
        }
        return n.on('data', p), N(e, 'error', _), e.once('close', h), e.once('finish', m), e.emit('pipe', n), r.flowing || (i('pipe resume'), n.resume()), e;
    }),
    (C.prototype.unpipe = function (e) {
        var t = this._readableState,
            n = { hasUnpiped: !1 };
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return (e && e !== t.pipes) || (e || (e = t.pipes), (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1), e && e.emit('unpipe', this, n)), this;
        if (!e) {
            var r = t.pipes,
                i = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < i; o++) r[o].emit('unpipe', this, { hasUnpiped: !1 });
            return this;
        }
        var a = q(t.pipes, e);
        return -1 === a || (t.pipes.splice(a, 1), (t.pipesCount -= 1), 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit('unpipe', this, n)), this;
    }),
    (C.prototype.on = function (e, t) {
        var n = u.prototype.on.call(this, e, t),
            r = this._readableState;
        return 'data' === e ? ((r.readableListening = this.listenerCount('readable') > 0), !1 !== r.flowing && this.resume()) : 'readable' !== e || r.endEmitted || r.readableListening || ((r.readableListening = r.needReadable = !0), (r.flowing = !1), (r.emittedReadable = !1), i('on readable', r.length, r.reading), r.length ? k(this) : r.reading || l.nextTick(F, this)), n;
    }),
    (C.prototype.addListener = C.prototype.on),
    (C.prototype.removeListener = function (e, t) {
        var n = u.prototype.removeListener.call(this, e, t);
        return 'readable' === e && l.nextTick(Z, this), n;
    }),
    (C.prototype.removeAllListeners = function (e) {
        var t = u.prototype.removeAllListeners.apply(this, arguments);
        return ('readable' === e || void 0 === e) && l.nextTick(Z, this), t;
    }),
    (C.prototype.resume = function () {
        var e = this._readableState;
        return e.flowing || (i('resume'), (e.flowing = !e.readableListening), V(this, e)), (e.paused = !1), this;
    }),
    (C.prototype.pause = function () {
        return i('call pause flowing=%j', this._readableState.flowing), !1 !== this._readableState.flowing && (i('pause'), (this._readableState.flowing = !1), this.emit('pause')), (this._readableState.paused = !0), this;
    }),
    (C.prototype.wrap = function (e) {
        var t = this,
            n = this._readableState,
            r = !1;
        for (var o in (e.on('end', function () {
            if ((i('wrapped end'), n.decoder && !n.ended)) {
                var e = n.decoder.end();
                e && e.length && t.push(e);
            }
            t.push(null);
        }),
        e.on('data', function (o) {
            if ((i('wrapped data'), n.decoder && (o = n.decoder.write(o)), !n.objectMode || null != o)) (n.objectMode || (o && o.length)) && (t.push(o) || ((r = !0), e.pause()));
        }),
        e))
            void 0 === this[o] &&
                'function' == typeof e[o] &&
                (this[o] = (function (t) {
                    return function () {
                        return e[t].apply(e, arguments);
                    };
                })(o));
        for (var a = 0; a < T.length; a++) e.on(T[a], this.emit.bind(this, T[a]));
        return (
            (this._read = function (t) {
                i('wrapped _read', t), r && ((r = !1), e.resume());
            }),
            this
        );
    }),
    'function' == typeof Symbol &&
        (C.prototype[Symbol.asyncIterator] = function () {
            return void 0 === a && (a = n(634587)), a(this);
        }),
    Object.defineProperty(C.prototype, 'readableHighWaterMark', {
        enumerable: !1,
        get: function () {
            return this._readableState.highWaterMark;
        }
    }),
    Object.defineProperty(C.prototype, 'readableBuffer', {
        enumerable: !1,
        get: function () {
            return this._readableState && this._readableState.buffer;
        }
    }),
    Object.defineProperty(C.prototype, 'readableFlowing', {
        enumerable: !1,
        get: function () {
            return this._readableState.flowing;
        },
        set: function (e) {
            this._readableState && (this._readableState.flowing = e);
        }
    }),
    (C._fromList = Y),
    Object.defineProperty(C.prototype, 'readableLength', {
        enumerable: !1,
        get: function () {
            return this._readableState.length;
        }
    }),
    'function' == typeof Symbol &&
        (C.from = function (e, t) {
            return void 0 === s && (s = n(787838)), s(C, e, t);
        });
