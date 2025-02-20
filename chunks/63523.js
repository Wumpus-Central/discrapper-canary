e.exports = i;
var r = n(836560).EventEmitter;
function i() {
    r.call(this);
}
n(689118)(i, r),
    (i.Readable = n(555170)),
    (i.Writable = n(833327)),
    (i.Duplex = n(827664)),
    (i.Transform = n(92057)),
    (i.PassThrough = n(203163)),
    (i.finished = n(133495)),
    (i.pipeline = n(614805)),
    (i.Stream = i),
    (i.prototype.pipe = function (e, t) {
        var n = this;
        function i(t) {
            e.writable && !1 === e.write(t) && n.pause && n.pause();
        }
        function o() {
            n.readable && n.resume && n.resume();
        }
        n.on('data', i), e.on('drain', o), e._isStdio || (t && !1 === t.end) || (n.on('end', s), n.on('close', l));
        var a = !1;
        function s() {
            a || ((a = !0), e.end());
        }
        function l() {
            a || ((a = !0), 'function' == typeof e.destroy && e.destroy());
        }
        function c(e) {
            if ((u(), 0 === r.listenerCount(this, 'error'))) throw e;
        }
        function u() {
            n.removeListener('data', i), e.removeListener('drain', o), n.removeListener('end', s), n.removeListener('close', l), n.removeListener('error', c), e.removeListener('error', c), n.removeListener('end', u), n.removeListener('close', u), e.removeListener('close', u);
        }
        return n.on('error', c), e.on('error', c), n.on('end', u), n.on('close', u), e.on('close', u), e.emit('pipe', n), e;
    });
