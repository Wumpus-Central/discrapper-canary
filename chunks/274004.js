n.d(t, { A: () => l });
var r = n(294946),
    i = n(187282),
    a = n(15020);
function s(e, t, n, s) {
    (0, r.tW)(e);
    let {
        c: o,
        dkLen: l,
        asyncTick: c,
    } = (0, a.tY)(
        {
            dkLen: 32,
            asyncTick: 10,
        },
        s,
    );
    if (((0, r.ai)(o), (0, r.ai)(l), (0, r.ai)(c), o < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
    let u = (0, a.ZJ)(t),
        d = (0, a.ZJ)(n),
        f = new Uint8Array(l),
        p = i.w.create(e, u),
        _ = p._cloneInto().update(d);
    return {
        c: o,
        dkLen: l,
        asyncTick: c,
        DK: f,
        PRF: p,
        PRFSalt: _,
    };
}
function o(e, t, n, r, i) {
    return e.destroy(), t.destroy(), r && r.destroy(), i.fill(0), n;
}
function l(e, t, n, r) {
    let i,
        { c: l, dkLen: c, DK: u, PRF: d, PRFSalt: f } = s(e, t, n, r),
        p = new Uint8Array(4),
        _ = (0, a.O8)(p),
        h = new Uint8Array(d.outputLen);
    for (let e = 1, t = 0; t < c; e++, t += d.outputLen) {
        let n = u.subarray(t, t + d.outputLen);
        _.setInt32(0, e, !1), (i = f._cloneInto(i)).update(p).digestInto(h), n.set(h.subarray(0, n.length));
        for (let e = 1; e < l; e++) {
            d._cloneInto(i).update(h).digestInto(h);
            for (let e = 0; e < n.length; e++) n[e] ^= h[e];
        }
    }
    return o(d, f, u, i, h);
}
