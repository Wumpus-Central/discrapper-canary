n.r(t),
    n.d(t, {
        XXH64: () => h,
        hash: () => m,
    });
let r = 0x9e3779b185ebca87n,
    i = 0xc2b2ae3d27d4eb4fn,
    a = 0x165667b19e3779f9n,
    s = 0x85ebca77c2b2ae63n,
    o = 0x27d4eb2f165667c5n,
    l = 64n,
    c = 2n ** l - 1n,
    u = new TextEncoder();

function d(e, t, n, r) {
    return BigInt(e) | (BigInt(t) << 16n) | (BigInt(n) << 32n) | (BigInt(r) << 48n);
}

function f(e, t) {
    return (
        BigInt(e[t]) |
        (BigInt(e[t + 1]) << 8n) |
        (BigInt(e[t + 2]) << 16n) |
        (BigInt(e[t + 3]) << 24n) |
        (BigInt(e[t + 4]) << 32n) |
        (BigInt(e[t + 5]) << 40n) |
        (BigInt(e[t + 6]) << 48n) |
        (BigInt(e[t + 7]) << 56n)
    );
}

function p(e, t) {
    return ((e << t) & c) | (e >> (l - t));
}

function _(e) {
    return BigInt.asUintN(64, e);
}
class h {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #s;
    #o;
    constructor(e = 0) {
        this.reset(e);
    }
    reset(e = this.#e) {
        return (
            (this.#e = BigInt.asUintN(32, BigInt(e))),
            (this.#t = _(this.#e + r + i)),
            (this.#n = _(this.#e + i)),
            (this.#r = this.#e),
            (this.#i = _(this.#e - r)),
            (this.#a = null),
            (this.#s = 0),
            (this.#o = 0),
            this
        );
    }
    update(e) {
        "string" == typeof e && (e = u.encode(e));
        let t = 0,
            n = e.length,
            a = t + n;
        if (0 === n) return this;
        if (((this.#s += n), 0 === this.#o && (this.#a = new Uint8Array(32)), this.#o + n < 32))
            return this.#a.set(e.subarray(0, n), this.#o), (this.#o += n), this;
        if (this.#o > 0) {
            let n;
            this.#a.set(e.subarray(0, 32 - this.#o), this.#o);
            let a = 0;
            (n = f(this.#a, a)),
                (this.#t = _(p(_(this.#t + n * i), 31n) * r)),
                (a += 8),
                (n = f(this.memory, a)),
                (this.#n = _(p(_(this.#n + n * i), 31n) * r)),
                (a += 8),
                (n = f(this.memory, a)),
                (this.#r = _(p(_(this.#r + n * i), 31n) * r)),
                (a += 8),
                (n = f(this.memory, a)),
                (this.#i = _(p(_(this.#i + n * i), 31n) * r)),
                (t += 32 - this.#o),
                (this.#o = 0);
        }
        if (t <= a - 32) {
            let n = a - 32;
            do {
                let n;
                (n = f(e, t)),
                    (this.#t = _(p(_(this.#t + n * i), 31n) * r)),
                    (t += 8),
                    (n = f(e, t)),
                    (this.#n = _(p(_(this.#n + n * i), 31n) * r)),
                    (t += 8),
                    (n = f(e, t)),
                    (this.#r = _(p(_(this.#r + n * i), 31n) * r)),
                    (t += 8),
                    (n = f(e, t)),
                    (this.#i = _(p(_(this.#i + n * i), 31n) * r)),
                    (t += 8);
            } while (t <= n);
        }
        return t < a && (this.#a.set(e.subarray(t, a), this.#o), (this.#o = a - t)), this;
    }
    digest() {
        let e = this.#a,
            t = this.#o,
            n = 0,
            l = 0n,
            c = 0n,
            u = 0n;
        for (
            this.#s >= 32
                ? ((l = _(
                      (l = p(this.#t, 1n) + p(this.#n, 7n) + p(this.#r, 12n) + p(this.#i, 18n)) ^
                          (p(_(this.#t * i), 31n) * r),
                  )),
                  (l = _(l * r + s)),
                  (l = _(l ^ (p(_(this.#n * i), 31n) * r))),
                  (l = _(l * r + s)),
                  (l = _(l ^ (p(_(this.#r * i), 31n) * r))),
                  (l = _(l * r + s)),
                  (l = _(l ^ (p(_(this.#i * i), 31n) * r))),
                  (l = _(l * r + s)))
                : (l = _(this.#e + o)),
                l += BigInt(this.#s);
            n <= t - 8;
        )
            (u = _(p(_((u = f(e, n)) * i), 31n) * r)), (l = _(p(l ^ u, 27n) * r + s)), (n += 8);
        for (
            n + 4 <= t &&
            ((l = _(p(l ^ _((u = d((e[n + 1] << 8) | e[n], (e[n + 3] << 8) | e[n + 2], 0, 0)) * r), 23n) * i + a)),
            (n += 4));
            n < t;
        )
            l = _(p(l ^ _((u = d(e[n++], 0, 0, 0)) * o), 11n) * r);
        return (
            (c = _(l >> 33n)),
            (l = _((l ^ c) * i)),
            (c = _(l >> 29n)),
            (l = _((l ^ c) * a)),
            (c = _(l >> 32n)),
            (l = _(l ^ c))
        );
    }
}

function m(e, t = 0) {
    return new h(t).update(e).digest();
}
