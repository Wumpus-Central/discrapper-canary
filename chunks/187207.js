n.d(t, { n: () => c });
var r = n(824120),
    i = n.n(r),
    a = n(264572);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    return 0 | e.mod(4294967296).toJSNumber();
}
function l(e) {
    return 0 | e.shiftRight(32).toJSNumber();
}
class c {
    generate(e) {
        let t = i()(e),
            n = 0 | this._sequenceNumber++,
            r = new a.Buffer(24);
        return (
            r.writeInt32LE(o(t), 0, !0),
            r.writeInt32LE(l(t), 4, !0),
            r.writeInt32LE(this._randomPrefix, 8, !0),
            r.writeInt32LE(o(this._creationTime), 12, !0),
            r.writeInt32LE(l(this._creationTime), 16, !0),
            r.writeInt32LE(n, 20, !0),
            r.toString("base64")
        );
    }
    constructor() {
        s(this, "_randomPrefix", 0 | Math.floor(4294967296 * Math.random())),
            s(this, "_creationTime", i()(Date.now())),
            s(this, "_sequenceNumber", 0);
    }
}
