function n() {
    let e = 0,
        t = 0;
    for (let r = 0; r < 28; r += 7) {
        let n = this.buf[this.pos++];
        if (((e |= (127 & n) << r), (128 & n) == 0)) return this.assertBounds(), [e, t];
    }
    let r = this.buf[this.pos++];
    if (((e |= (15 & r) << 28), (t = (112 & r) >> 4), (128 & r) == 0)) return this.assertBounds(), [e, t];
    for (let r = 3; r <= 31; r += 7) {
        let n = this.buf[this.pos++];
        if (((t |= (127 & n) << r), (128 & n) == 0)) return this.assertBounds(), [e, t];
    }
    throw Error("invalid varint");
}
function i(e, t, r) {
    for (let n = 0; n < 28; n += 7) {
        let i = e >>> n,
            o = i >>> 7 != 0 || 0 != t,
            a = (o ? 128 | i : i) & 255;
        if ((r.push(a), !o)) return;
    }
    let n = ((e >>> 28) & 15) | ((7 & t) << 4),
        i = t >> 3 != 0;
    if ((r.push((i ? 128 | n : n) & 255), i)) {
        for (let e = 3; e < 31; e += 7) {
            let n = t >>> e,
                i = n >>> 7 != 0,
                o = (i ? 128 | n : n) & 255;
            if ((r.push(o), !i)) return;
        }
        r.push((t >>> 31) & 1);
    }
}
function o(e) {
    let t = "-" == e[0];
    t && (e = e.slice(1));
    let r = 0,
        n = 0;
    function i(t, i) {
        let o = Number(e.slice(t, i));
        (n *= 1e6), (r = 1e6 * r + o) >= 0x100000000 && ((n += (r / 0x100000000) | 0), (r %= 0x100000000));
    }
    return i(-24, -18), i(-18, -12), i(-12, -6), i(-6), [t, r, n];
}
function a(e, t) {
    if (t <= 2097151) return "" + (0x100000000 * t + (e >>> 0));
    let r = (((e >>> 24) | (t << 8)) >>> 0) & 0xffffff,
        n = (t >> 16) & 65535,
        i = (0xffffff & e) + 6777216 * r + 6710656 * n,
        o = r + 8147497 * n,
        a = 2 * n;
    function s(e, t) {
        let r = e ? String(e) : "";
        return t ? "0000000".slice(r.length) + r : r;
    }
    return (
        i >= 1e7 && ((o += Math.floor(i / 1e7)), (i %= 1e7)),
        o >= 1e7 && ((a += Math.floor(o / 1e7)), (o %= 1e7)),
        s(a, 0) + s(o, a) + s(i, 1)
    );
}
function s(e, t) {
    if (e >= 0) {
        for (; e > 127; ) t.push((127 & e) | 128), (e >>>= 7);
        t.push(e);
    } else {
        for (let r = 0; r < 9; r++) t.push((127 & e) | 128), (e >>= 7);
        t.push(1);
    }
}
function l() {
    let e = this.buf[this.pos++],
        t = 127 & e;
    if (
        (128 & e) == 0 ||
        ((t |= (127 & (e = this.buf[this.pos++])) << 7), (128 & e) == 0) ||
        ((t |= (127 & (e = this.buf[this.pos++])) << 14), (128 & e) == 0) ||
        ((t |= (127 & (e = this.buf[this.pos++])) << 21), (128 & e) == 0)
    )
        return this.assertBounds(), t;
    t |= (15 & (e = this.buf[this.pos++])) << 28;
    for (let t = 5; (128 & e) != 0 && t < 10; t++) e = this.buf[this.pos++];
    if ((128 & e) != 0) throw Error("invalid varint");
    return this.assertBounds(), t >>> 0;
}
r.d(t, { Gn: () => l, Jg: () => o, cV: () => i, f7: () => s, ls: () => n, oJ: () => a });
