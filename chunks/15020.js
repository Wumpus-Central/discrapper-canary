s.d(e, {
    $h: () => u,
    DH: () => r,
    Fc: () => c,
    O8: () => n,
    Ow: () => o,
    Vw: () => x,
    ZJ: () => d,
    aZ: () => a,
    ld: () => w,
    qv: () => h,
    tY: () => p,
});
var i = s(294946);
let r = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    n = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    o = (t, e) => (t << (32 - e)) | (t >>> e),
    a = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
    h = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    f = (t) => ((t << 24) & 0xff000000) | ((t << 8) & 0xff0000) | ((t >>> 8) & 65280) | ((t >>> 24) & 255);
function c(t) {
    for (let e = 0; e < t.length; e++) t[e] = f(t[e]);
}
let l = async () => {};
async function u(t, e, s) {
    let i = Date.now();
    for (let r = 0; r < t; r++) {
        s(r);
        let t = Date.now() - i;
        (t >= 0 && t < e) || (await l(), (i += t));
    }
}
function d(t) {
    return (
        "string" == typeof t &&
            (t = (function (t) {
                if ("string" != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
        (0, i.ee)(t),
        t
    );
}
class x {
    clone() {
        return this._cloneInto();
    }
}
let b = {}.toString;
function p(t, e) {
    if (void 0 !== e && "[object Object]" !== b.call(e)) throw Error("Options should be object or undefined");
    return Object.assign(t, e);
}
function w(t) {
    let e = (e) => t().update(d(e)).digest(),
        s = t();
    return (e.outputLen = s.outputLen), (e.blockLen = s.blockLen), (e.create = () => t()), e;
}
