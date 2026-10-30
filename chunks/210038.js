async function r(e) {
    return null;
}
s.d(t, { WY: () => c, gT: () => a, Sx: () => o, BW: () => i, LM: () => n });
class a extends Error {
    kind;
    constructor(e, t) {
        (super(t), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function i(e, t) {
    if (0 === t.length) return [0, 0];
    let s = _.encode(t),
        r = e._malloc(s.length);
    return (e.HEAPU8.set(s, r), [r, s.length]);
}
function o(e, t, s) {
    return 0 === s ? "" : l.decode(e.HEAPU8.subarray(t, t + s));
}
async function n(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function c(e) {
    if ("string" == typeof e) return e;
    let t = await p(e);
    return l.decode(t);
}
async function p(e) {
    let t = await r(e);
    if (t) return t;
    let s = await fetch(e);
    if (!s.ok) throw new a("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let _ = new TextEncoder(),
    l = new TextDecoder();
