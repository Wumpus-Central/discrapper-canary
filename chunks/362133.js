n.d(e, {
    GL: () => s,
    Jq: () => i,
    O0: () => d,
    U5: () => b,
    XG: () => h,
    hE: () => g,
    iA: () => a,
    kb: () => x,
    l1: () => c,
    np: () => o,
    oY: () => u
});
var r = n(180450);
let i = (t) => new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
    s = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
    o = (t, e) => (t << (32 - e)) | (t >>> e),
    h = (t, e) => (t << e) | ((t >>> (32 - e)) >>> 0),
    a = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
    f = (t) => ((t << 24) & 4278190080) | ((t << 8) & 16711680) | ((t >>> 8) & 65280) | ((t >>> 24) & 255);
function c(t) {
    for (let e = 0; e < t.length; e++) t[e] = f(t[e]);
}
let l = async () => {};
async function u(t, e, n) {
    let r = Date.now();
    for (let i = 0; i < t; i++) {
        n(i);
        let t = Date.now() - r;
        (t >= 0 && t < e) || (await l(), (r += t));
    }
}
function d(t) {
    return (
        'string' == typeof t &&
            (t = (function (t) {
                if ('string' != typeof t) throw Error(`utf8ToBytes expected string, got ${typeof t}`);
                return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
        (0, r.aI)(t),
        t
    );
}
class x {
    clone() {
        return this._cloneInto();
    }
}
let p = {}.toString;
function b(t, e) {
    if (void 0 !== e && '[object Object]' !== p.call(e)) throw Error('Options should be object or undefined');
    return Object.assign(t, e);
}
function g(t) {
    let e = (e) => t().update(d(e)).digest(),
        n = t();
    return (e.outputLen = n.outputLen), (e.blockLen = n.blockLen), (e.create = () => t()), e;
}
