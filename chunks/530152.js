p.d(s, { gT: () => c, BW: () => a, Sx: () => t, WY: () => d, LM: () => r });
class c extends Error {
    kind;
    constructor(e, s) {
        (super(s), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function a(e, s) {
    if (0 === s.length) return [0, 0];
    let p = f.encode(s),
        c = e._malloc(p.length);
    return (e.HEAPU8.set(p, c), [c, p.length]);
}
function t(e, s, p) {
    return 0 === p ? "" : x.decode(e.HEAPU8.subarray(s, s + p));
}
async function r(e) {
    return e instanceof URL ? o(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function d(e) {
    if ("string" == typeof e) return e;
    let s = await o(e);
    return x.decode(s);
}
async function o(e) {
    let s = await (async function () {
        return null;
    })();
    if (s) return s;
    let p = await fetch(e);
    if (!p.ok) throw new c("asset-fetch-failed", `failed to fetch ${e.href}: ${p.status} ${p.statusText}`);
    return new Uint8Array(await p.arrayBuffer());
}
let f = new TextEncoder(),
    x = new TextDecoder();
