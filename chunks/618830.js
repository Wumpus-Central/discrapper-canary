"use strict";
n.r(t), n.d(t, { XXH64: () => h, hash: () => m });
let r = 0x9e3779b185ebca87n,
    i = 0xc2b2ae3d27d4eb4fn,
    a = 0x165667b19e3779f9n,
    s = 0x85ebca77c2b2ae63n,
    o = 0x27d4eb2f165667c5n,
    l = 64n,
    u = 2n ** l - 1n,
    c = new TextEncoder();
function d(e, t, n, r) {
    return BigInt(e) | (BigInt(t) << 16n) | (BigInt(n) << 32n) | (BigInt(r) << 48n);
}
function _(e, t) {
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
function f(e, t) {
    return ((e << t) & u) | (e >> (l - t));
}
function p(e) {
    return BigInt.asUintN(64, e);
}
class h {
    #t;
    #n;
    #r;
    #i;
    #a;
    #s;
    #o;
    #l;
    constructor(e = 0) {
        this.reset(e);
    }
    reset(e = this.#t) {
        return (
            (this.#t = BigInt.asUintN(32, BigInt(e))),
            (this.#n = p(this.#t + r + i)),
            (this.#r = p(this.#t + i)),
            (this.#i = this.#t),
            (this.#a = p(this.#t - r)),
            (this.#s = null),
            (this.#o = 0),
            (this.#l = 0),
            this
        );
    }
    update(e) {
        "string" == typeof e && (e = c.encode(e));
        let t = 0,
            n = e.length,
            a = t + n;
        if (0 === n) return this;
        if (((this.#o += n), 0 === this.#l && (this.#s = new Uint8Array(32)), this.#l + n < 32))
            return this.#s.set(e.subarray(0, n), this.#l), (this.#l += n), this;
        if (this.#l > 0) {
            let n;
            this.#s.set(e.subarray(0, 32 - this.#l), this.#l);
            let a = 0;
            (n = _(this.#s, a)),
                (this.#n = p(f(p(this.#n + n * i), 31n) * r)),
                (a += 8),
                (n = _(this.memory, a)),
                (this.#r = p(f(p(this.#r + n * i), 31n) * r)),
                (a += 8),
                (n = _(this.memory, a)),
                (this.#i = p(f(p(this.#i + n * i), 31n) * r)),
                (a += 8),
                (n = _(this.memory, a)),
                (this.#a = p(f(p(this.#a + n * i), 31n) * r)),
                (t += 32 - this.#l),
                (this.#l = 0);
        }
        if (t <= a - 32) {
            let n = a - 32;
            do {
                let n;
                (n = _(e, t)),
                    (this.#n = p(f(p(this.#n + n * i), 31n) * r)),
                    (t += 8),
                    (n = _(e, t)),
                    (this.#r = p(f(p(this.#r + n * i), 31n) * r)),
                    (t += 8),
                    (n = _(e, t)),
                    (this.#i = p(f(p(this.#i + n * i), 31n) * r)),
                    (t += 8),
                    (n = _(e, t)),
                    (this.#a = p(f(p(this.#a + n * i), 31n) * r)),
                    (t += 8);
            } while (t <= n);
        }
        return t < a && (this.#s.set(e.subarray(t, a), this.#l), (this.#l = a - t)), this;
    }
    digest() {
        let e = this.#s,
            t = this.#l,
            n = 0,
            l = 0n,
            u = 0n,
            c = 0n;
        for (
            this.#o >= 32
                ? ((l = p(
                      (l = f(this.#n, 1n) + f(this.#r, 7n) + f(this.#i, 12n) + f(this.#a, 18n)) ^
                          (f(p(this.#n * i), 31n) * r),
                  )),
                  (l = p(l * r + s)),
                  (l = p(l ^ (f(p(this.#r * i), 31n) * r))),
                  (l = p(l * r + s)),
                  (l = p(l ^ (f(p(this.#i * i), 31n) * r))),
                  (l = p(l * r + s)),
                  (l = p(l ^ (f(p(this.#a * i), 31n) * r))),
                  (l = p(l * r + s)))
                : (l = p(this.#t + o)),
                l += BigInt(this.#o);
            n <= t - 8;
        )
            (c = p(f(p((c = _(e, n)) * i), 31n) * r)), (l = p(f(l ^ c, 27n) * r + s)), (n += 8);
        for (
            n + 4 <= t &&
            ((l = p(f(l ^ p((c = d((e[n + 1] << 8) | e[n], (e[n + 3] << 8) | e[n + 2], 0, 0)) * r), 23n) * i + a)),
            (n += 4));
            n < t;
        )
            l = p(f(l ^ p((c = d(e[n++], 0, 0, 0)) * o), 11n) * r);
        return (
            (u = p(l >> 33n)),
            (l = p((l ^ u) * i)),
            (u = p(l >> 29n)),
            (l = p((l ^ u) * a)),
            (u = p(l >> 32n)),
            (l = p(l ^ u))
        );
    }
}
function m(e, t = 0) {
    return new h(t).update(e).digest();
}
