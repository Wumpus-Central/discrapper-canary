async function s(e) {
    return null;
}
a.d(t, { WY: () => p, gT: () => r, Sx: () => i, BW: () => n, LM: () => g });
class r extends Error {
    kind;
    constructor(e, t) {
        (super(t), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function n(e, t) {
    if (0 === t.length) return [0, 0];
    let a = l.encode(t),
        s = e._malloc(a.length);
    return (e.HEAPU8.set(a, s), [s, a.length]);
}
function i(e, t, a) {
    return 0 === a ? "" : c.decode(e.HEAPU8.subarray(t, t + a));
}
async function g(e) {
    return e instanceof URL ? o(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function p(e) {
    if ("string" == typeof e) return e;
    let t = await o(e);
    return c.decode(t);
}
async function o(e) {
    let t = await s(e);
    if (t) return t;
    let a = await fetch(e);
    if (!a.ok) throw new r("asset-fetch-failed", `failed to fetch ${e.href}: ${a.status} ${a.statusText}`);
    return new Uint8Array(await a.arrayBuffer());
}
let l = new TextEncoder(),
    c = new TextDecoder();
