e.exports = a;
var i = r(836560).EventEmitter;
function a() {
    i.call(this);
}
r(689118)(a, i),
    (a.Readable = r(555170)),
    (a.Writable = r(833327)),
    (a.Duplex = r(827664)),
    (a.Transform = r(92057)),
    (a.PassThrough = r(203163)),
    (a.finished = r(133495)),
    (a.pipeline = r(614805)),
    (a.Stream = a),
    (a.prototype.pipe = function (e, n) {
        var r = this;
        function a(n) {
            e.writable && !1 === e.write(n) && r.pause && r.pause();
        }
        function o() {
            r.readable && r.resume && r.resume();
        }
        r.on('data', a), e.on('drain', o), !e._isStdio && (!n || !1 !== n.end) && (r.on('end', l), r.on('close', u));
        var s = !1;
        function l() {
            !s && ((s = !0), e.end());
        }
        function u() {
            !s && ((s = !0), 'function' == typeof e.destroy && e.destroy());
        }
        function c(e) {
            if ((d(), 0 === i.listenerCount(this, 'error'))) throw e;
        }
        function d() {
            r.removeListener('data', a), e.removeListener('drain', o), r.removeListener('end', l), r.removeListener('close', u), r.removeListener('error', c), e.removeListener('error', c), r.removeListener('end', d), r.removeListener('close', d), e.removeListener('close', d);
        }
        return r.on('error', c), e.on('error', c), r.on('end', d), r.on('close', d), e.on('close', d), e.emit('pipe', r), e;
    });
