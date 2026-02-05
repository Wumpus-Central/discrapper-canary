"use strict";
n.d(t, { n: () => l });
var r = n(824120),
    i = n.n(r),
    a = n(264572);
function s(e) {
    return 0 | e.mod(0x100000000).toJSNumber();
}
function o(e) {
    return 0 | e.shiftRight(32).toJSNumber();
}
class l {
    _randomPrefix = 0 | Math.floor(0x100000000 * Math.random());
    _creationTime = i()(Date.now());
    _sequenceNumber = 0;
    generate(e) {
        let t = i()(e),
            n = 0 | this._sequenceNumber++,
            r = new a.Buffer(24);
        return (
            r.writeInt32LE(s(t), 0, !0),
            r.writeInt32LE(o(t), 4, !0),
            r.writeInt32LE(this._randomPrefix, 8, !0),
            r.writeInt32LE(s(this._creationTime), 12, !0),
            r.writeInt32LE(o(this._creationTime), 16, !0),
            r.writeInt32LE(n, 20, !0),
            r.toString("base64")
        );
    }
}
