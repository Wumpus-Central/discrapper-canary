function r(t) {
    if (!Number.isSafeInteger(t) || t < 0) throw Error(`positive integer expected, not ${t}`);
}
function i(t, ...e) {
    if (!(t instanceof Uint8Array || (null != t && 'object' == typeof t && 'Uint8Array' === t.constructor.name))) throw Error('Uint8Array expected');
    if (e.length > 0 && !e.includes(t.length)) throw Error(`Uint8Array expected of length ${e}, not of length=${t.length}`);
}
function s(t) {
    if ('function' != typeof t || 'function' != typeof t.create) throw Error('Hash should be wrapped by utils.wrapConstructor');
    r(t.outputLen), r(t.blockLen);
}
function o(t, e = !0) {
    if (t.destroyed) throw Error('Hash instance has been destroyed');
    if (e && t.finished) throw Error('Hash#digest() has already been called');
}
function h(t, e) {
    i(t);
    let n = e.outputLen;
    if (t.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`);
}
n.d(e, {
    Gg: () => o,
    J8: () => h,
    Rx: () => r,
    aI: () => i,
    vp: () => s
});
