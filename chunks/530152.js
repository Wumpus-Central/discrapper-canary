a.d(s, { gT: () => t, BW: () => r, Sx: () => n, WY: () => g, LM: () => i });
class t extends Error {
    kind;
    constructor(e, s) {
        (super(s), (this.name = "ArboriumError"), (this.kind = e));
    }
}
function r(e, s) {
    if (0 === s.length) return [0, 0];
    let a = o.encode(s),
        t = e._malloc(a.length);
    return (e.HEAPU8.set(a, t), [t, a.length]);
}
function n(e, s, a) {
    return 0 === a ? "" : c.decode(e.HEAPU8.subarray(s, s + a));
}
async function i(e) {
    return e instanceof URL ? p(e) : e instanceof Uint8Array ? e : new Uint8Array(e);
}
async function g(e) {
    if ("string" == typeof e) return e;
    let s = await p(e);
    return c.decode(s);
}
async function p(e) {
    let s = await (async function () {
        return null;
    })();
    if (s) return s;
    let a = await fetch(e);
    if (!a.ok) throw new t("asset-fetch-failed", `failed to fetch ${e.href}: ${a.status} ${a.statusText}`);
    return new Uint8Array(await a.arrayBuffer());
}
let o = new TextEncoder(),
    c = new TextDecoder();
