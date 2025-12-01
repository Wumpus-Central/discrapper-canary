n.d(t, { n: () => l });
var r = n(134994),
    i = n(8170),
    a = n(492733);
function o(e, t, n, o) {
    (0, r.vp)(e);
    let {
        c: s,
        dkLen: l,
        asyncTick: c,
    } = (0, a.U5)(
        {
            dkLen: 32,
            asyncTick: 10,
        },
        o,
    );
    if (((0, r.Rx)(s), (0, r.Rx)(l), (0, r.Rx)(c), s < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
    let u = (0, a.O0)(t),
        d = (0, a.O0)(n),
        f = new Uint8Array(l),
        p = i.b.create(e, u),
        _ = p._cloneInto().update(d);
    return {
        c: s,
        dkLen: l,
        asyncTick: c,
        DK: f,
        PRF: p,
        PRFSalt: _,
    };
}
function s(e, t, n, r, i) {
    return e.destroy(), t.destroy(), r && r.destroy(), i.fill(0), n;
}
function l(e, t, n, r) {
    let i,
        { c: l, dkLen: c, DK: u, PRF: d, PRFSalt: f } = o(e, t, n, r),
        p = new Uint8Array(4),
        _ = (0, a.GL)(p),
        m = new Uint8Array(d.outputLen);
    for (let e = 1, t = 0; t < c; e++, t += d.outputLen) {
        let n = u.subarray(t, t + d.outputLen);
        _.setInt32(0, e, !1), (i = f._cloneInto(i)).update(p).digestInto(m), n.set(m.subarray(0, n.length));
        for (let e = 1; e < l; e++) {
            d._cloneInto(i).update(m).digestInto(m);
            for (let e = 0; e < n.length; e++) n[e] ^= m[e];
        }
    }
    return s(d, f, u, i, m);
}
