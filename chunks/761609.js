r.d(n, {
    R: function () {
        return c;
    }
});
var i = r(654861),
    a = r.n(i),
    o = r(413135);
function s(e, n, r) {
    return (
        n in e
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
function l(e) {
    return 0 | e.mod(4294967296).toJSNumber();
}
function u(e) {
    return 0 | e.shiftRight(32).toJSNumber();
}
class c {
    generate(e) {
        let n = a()(e),
            r = 0 | this._sequenceNumber++,
            i = new o.Buffer(24);
        return i.writeInt32LE(l(n), 0, !0), i.writeInt32LE(u(n), 4, !0), i.writeInt32LE(this._randomPrefix, 8, !0), i.writeInt32LE(l(this._creationTime), 12, !0), i.writeInt32LE(u(this._creationTime), 16, !0), i.writeInt32LE(r, 20, !0), i.toString('base64');
    }
    constructor() {
        s(this, '_randomPrefix', 0 | Math.floor(4294967296 * Math.random())), s(this, '_creationTime', a()(Date.now())), s(this, '_sequenceNumber', 0);
    }
}
