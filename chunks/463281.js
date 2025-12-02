let r;
function _(e) {
    r = e;
}
t.d(n, {
    OB: () => l,
    hM: () => d,
    oT: () => _,
    xQ: () => u,
});
let f = null;
function i() {
    return (null === f || 0 === f.byteLength) && (f = new Uint8Array(r.memory.buffer)), f;
}
let a = new TextDecoder("utf-8", {
    ignoreBOM: !0,
    fatal: !0,
});
a.decode();
let o = 0,
    c = 0;
function d(e, n, t, _, f, a, o, d) {
    let l = (function (e, n) {
            let t = n(+e.length, 1) >>> 0;
            return i().set(e, t / 1), (c = e.length), t;
        })(e, r.__wbindgen_malloc),
        u = c,
        s = r.crop_and_rotate_gif(l, u, n, t, _, f, a, null == o ? 16777215 : o, null == d ? 16777215 : d);
    if (s[3])
        throw (function (e) {
            let n = r.__wbindgen_externrefs.get(e);
            return r.__externref_table_dealloc(e), n;
        })(s[2]);
    var b,
        g,
        w = ((b = s[0]), (g = s[1]), (b >>>= 0), i().subarray(b / 1, b / 1 + g)).slice();
    return r.__wbindgen_free(s[0], +s[1], 1), w;
}
function l(e, n) {
    var t, r;
    return (
        (t = e >>> 0),
        (o += r = n) >= 2146435072 &&
            ((a = new TextDecoder("utf-8", {
                ignoreBOM: !0,
                fatal: !0,
            })).decode(),
            (o = r)),
        a.decode(i().subarray(t, t + r))
    );
}
function u() {
    let e = r.__wbindgen_externrefs,
        n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, !0), e.set(n + 3, !1);
}
