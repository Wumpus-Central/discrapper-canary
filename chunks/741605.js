n.d(t, { n: () => l });
var r = n(134994),
    i = n(8170),
    o = n(492733);
function a(e, t, n, a) {
    (0, r.vp)(e);
    let {
        c: s,
        dkLen: l,
        asyncTick: c
    } = (0, o.U5)(
        {
            dkLen: 32,
            asyncTick: 10
        },
        a
    );
    if (((0, r.Rx)(s), (0, r.Rx)(l), (0, r.Rx)(c), s < 1)) throw Error('PBKDF2: iterations (c) should be >= 1');
    let u = (0, o.O0)(t),
        d = (0, o.O0)(n),
        f = new Uint8Array(l),
        _ = i.b.create(e, u),
        p = _._cloneInto().update(d);
    return {
        c: s,
        dkLen: l,
        asyncTick: c,
        DK: f,
        PRF: _,
        PRFSalt: p
    };
}
function s(e, t, n, r, i) {
    return (e.destroy(), t.destroy(), r && r.destroy(), i.fill(0), n);
}
function l(e, t, n, r) {
    let i,
        { c: l, dkLen: c, DK: u, PRF: d, PRFSalt: f } = a(e, t, n, r),
        _ = new Uint8Array(4),
        p = (0, o.GL)(_),
        h = new Uint8Array(d.outputLen);
    for (let e = 1, t = 0; t < c; e++, t += d.outputLen) {
        let n = u.subarray(t, t + d.outputLen);
        (p.setInt32(0, e, !1), (i = f._cloneInto(i)).update(_).digestInto(h), n.set(h.subarray(0, n.length)));
        for (let e = 1; e < l; e++) {
            d._cloneInto(i).update(h).digestInto(h);
            for (let e = 0; e < n.length; e++) n[e] ^= h[e];
        }
    }
    return s(d, f, u, i, h);
}
