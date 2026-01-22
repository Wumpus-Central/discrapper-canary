n.d(t, {
    $h: () => p,
    DH: () => i,
    Fc: () => u,
    O8: () => a,
    Ow: () => s,
    Vw: () => m,
    ZJ: () => h,
    aZ: () => o,
    ld: () => b,
    qv: () => l,
    tY: () => E,
});
var r = n(294946);
let i = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
    a = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength),
    s = (e, t) => (e << (32 - t)) | (e >>> t),
    o = (e, t) => (e << t) | ((e >>> (32 - t)) >>> 0),
    l = 68 === new Uint8Array(new Uint32Array([0x11223344]).buffer)[0],
    c = (e) => ((e << 24) & 0xff000000) | ((e << 8) & 0xff0000) | ((e >>> 8) & 65280) | ((e >>> 24) & 255);

function u(e) {
    for (let t = 0; t < e.length; t++) e[t] = c(e[t]);
}
let d = null,
    f = async () => {};
async function p(e, t, n) {
    let r = Date.now();
    for (let i = 0; i < e; i++) {
        n(i);
        let e = Date.now() - r;
        (e >= 0 && e < t) || (await f(), (r += e));
    }
}

function _(e) {
    if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
    return new Uint8Array(new TextEncoder().encode(e));
}

function h(e) {
    return "string" == typeof e && (e = _(e)), (0, r.ee)(e), e;
}
class m {
    clone() {
        return this._cloneInto();
    }
}
let g = {}.toString;

function E(e, t) {
    if (void 0 !== t && "[object Object]" !== g.call(t)) throw Error("Options should be object or undefined");
    return Object.assign(e, t);
}

function b(e) {
    let t = (t) => e().update(h(t)).digest(),
        n = e();
    return (t.outputLen = n.outputLen), (t.blockLen = n.blockLen), (t.create = () => e()), t;
}
