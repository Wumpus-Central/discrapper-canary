function r(e) {
    if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`);
}

function i(e) {
    return e instanceof Uint8Array || (null != e && "object" == typeof e && "Uint8Array" === e.constructor.name);
}

function a(e, ...t) {
    if (!i(e)) throw Error("Uint8Array expected");
    if (t.length > 0 && !t.includes(e.length))
        throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}

function s(e) {
    if ("function" != typeof e || "function" != typeof e.create)
        throw Error("Hash should be wrapped by utils.wrapConstructor");
    r(e.outputLen), r(e.blockLen);
}

function o(e, t = !0) {
    if (e.destroyed) throw Error("Hash instance has been destroyed");
    if (t && e.finished) throw Error("Hash#digest() has already been called");
}

function l(e, t) {
    a(e);
    let n = t.outputLen;
    if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
}
n.d(t, {
    CG: () => l,
    ai: () => r,
    ee: () => a,
    t2: () => o,
    tW: () => s,
});
