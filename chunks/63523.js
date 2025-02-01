e.exports = r;
var i = n(836560).EventEmitter;
function r() {
    i.call(this);
}
n(689118)(r, i),
    (r.Readable = n(555170)),
    (r.Writable = n(833327)),
    (r.Duplex = n(827664)),
    (r.Transform = n(92057)),
    (r.PassThrough = n(203163)),
    (r.finished = n(133495)),
    (r.pipeline = n(614805)),
    (r.Stream = r),
    (r.prototype.pipe = function (e, t) {
        var n = this;
        function r(t) {
            e.writable && !1 === e.write(t) && n.pause && n.pause();
        }
        function a() {
            n.readable && n.resume && n.resume();
        }
        n.on('data', r), e.on('drain', a), e._isStdio || (t && !1 === t.end) || (n.on('end', o), n.on('close', l));
        var s = !1;
        function o() {
            s || ((s = !0), e.end());
        }
        function l() {
            s || ((s = !0), 'function' == typeof e.destroy && e.destroy());
        }
        function u(e) {
            if ((c(), 0 === i.listenerCount(this, 'error'))) throw e;
        }
        function c() {
            n.removeListener('data', r), e.removeListener('drain', a), n.removeListener('end', o), n.removeListener('close', l), n.removeListener('error', u), e.removeListener('error', u), n.removeListener('end', c), n.removeListener('close', c), e.removeListener('close', c);
        }
        return n.on('error', u), e.on('error', u), n.on('end', c), n.on('close', c), e.on('close', c), e.emit('pipe', n), e;
    });
