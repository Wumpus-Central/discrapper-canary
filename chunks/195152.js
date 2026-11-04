s.d(a, { gT: () => t, BW: () => r, Sx: () => n, WY: () => g, LM: () => i });
class t extends Error {
    kind;
    constructor(e, a) {
        (super(a), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function r(e, a) {
    if (0 === a.length) return [0, 0];
    let s = o.encode(a),
        t = e._malloc(s.length);
    return (e.HEAPU8.set(s, t), [t, s.length]);
}
function n(e, a, s) {
    return 0 === s ? "" : c.decode(e.HEAPU8.subarray(a, a + s));
}
async function i(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function g(e) {
    if ("string" == typeof e) return e;
    let a = await p(e);
    return c.decode(a);
}
async function p(e) {
    let a = await (async function () {
        return null;
    })();
    if (a) return a;
    let s = await fetch(e);
    if (!s.ok) throw new t("asset-fetch-failed", `failed to fetch ${e.href}: ${s.status} ${s.statusText}`);
    return new Uint8Array(await s.arrayBuffer());
}
let o = new TextEncoder(),
    c = new TextDecoder();
