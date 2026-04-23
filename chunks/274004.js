s.d(e, { A: () => o });
var i = s(294946),
    r = s(187282),
    n = s(15020);
function o(t, e, s, o) {
    var a;
    let h,
        {
            c: f,
            dkLen: c,
            DK: l,
            PRF: u,
            PRFSalt: d,
        } = (function (t, e, s, o) {
            (0, i.tW)(t);
            let { c: a, dkLen: h, asyncTick: f } = (0, n.tY)({ dkLen: 32, asyncTick: 10 }, o);
            if (((0, i.ai)(a), (0, i.ai)(h), (0, i.ai)(f), a < 1)) throw Error("PBKDF2: iterations (c) should be >= 1");
            let c = (0, n.ZJ)(e),
                l = (0, n.ZJ)(s),
                u = new Uint8Array(h),
                d = r.w.create(t, c),
                x = d._cloneInto().update(l);
            return { c: a, dkLen: h, asyncTick: f, DK: u, PRF: d, PRFSalt: x };
        })(t, e, s, o),
        x = new Uint8Array(4),
        b = (0, n.O8)(x),
        p = new Uint8Array(u.outputLen);
    for (let t = 1, e = 0; e < c; t++, e += u.outputLen) {
        let s = l.subarray(e, e + u.outputLen);
        b.setInt32(0, t, !1), (h = d._cloneInto(h)).update(x).digestInto(p), s.set(p.subarray(0, s.length));
        for (let t = 1; t < f; t++) {
            u._cloneInto(h).update(p).digestInto(p);
            for (let t = 0; t < s.length; t++) s[t] ^= p[t];
        }
    }
    return (a = h), u.destroy(), d.destroy(), a && a.destroy(), p.fill(0), l;
}
