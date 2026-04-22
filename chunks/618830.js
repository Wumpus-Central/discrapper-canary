"use strict";
n.r(t), n.d(t, { XXH64: () => u, hash: () => d });
let r = 2n ** 64n - 1n,
    i = new TextEncoder();
function s(e, t, n, r) {
    return BigInt(e) | (BigInt(t) << 16n) | (BigInt(n) << 32n) | (BigInt(r) << 48n);
}
function a(e, t) {
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
function o(e, t) {
    return ((e << t) & r) | (e >> (64n - t));
}
function l(e) {
    return BigInt.asUintN(64, e);
}
class u {
    #t;
    #n;
    #r;
    #i;
    #s;
    #a;
    #o;
    #l;
    constructor(e = 0) {
        this.reset(e);
    }
    reset(e = this.#t) {
        return (
            (this.#t = BigInt.asUintN(32, BigInt(e))),
            (this.#n = l(this.#t + 0x9e3779b185ebca87n + 0xc2b2ae3d27d4eb4fn)),
            (this.#r = l(this.#t + 0xc2b2ae3d27d4eb4fn)),
            (this.#i = this.#t),
            (this.#s = l(this.#t - 0x9e3779b185ebca87n)),
            (this.#a = null),
            (this.#o = 0),
            (this.#l = 0),
            this
        );
    }
    update(e) {
        "string" == typeof e && (e = i.encode(e));
        let t = 0,
            n = e.length,
            r = t + n;
        if (0 === n) return this;
        if (((this.#o += n), 0 === this.#l && (this.#a = new Uint8Array(32)), this.#l + n < 32))
            return this.#a.set(e.subarray(0, n), this.#l), (this.#l += n), this;
        if (this.#l > 0) {
            let n;
            this.#a.set(e.subarray(0, 32 - this.#l), this.#l);
            let r = 0;
            (n = a(this.#a, r)),
                (this.#n = l(0x9e3779b185ebca87n * o(l(this.#n + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                (r += 8),
                (n = a(this.memory, r)),
                (this.#r = l(0x9e3779b185ebca87n * o(l(this.#r + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                (r += 8),
                (n = a(this.memory, r)),
                (this.#i = l(0x9e3779b185ebca87n * o(l(this.#i + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                (r += 8),
                (n = a(this.memory, r)),
                (this.#s = l(0x9e3779b185ebca87n * o(l(this.#s + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                (t += 32 - this.#l),
                (this.#l = 0);
        }
        if (t <= r - 32) {
            let n = r - 32;
            do {
                let n;
                (n = a(e, t)),
                    (this.#n = l(0x9e3779b185ebca87n * o(l(this.#n + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                    (t += 8),
                    (n = a(e, t)),
                    (this.#r = l(0x9e3779b185ebca87n * o(l(this.#r + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                    (t += 8),
                    (n = a(e, t)),
                    (this.#i = l(0x9e3779b185ebca87n * o(l(this.#i + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                    (t += 8),
                    (n = a(e, t)),
                    (this.#s = l(0x9e3779b185ebca87n * o(l(this.#s + 0xc2b2ae3d27d4eb4fn * n), 31n))),
                    (t += 8);
            } while (t <= n);
        }
        return t < r && (this.#a.set(e.subarray(t, r), this.#l), (this.#l = r - t)), this;
    }
    digest() {
        let e = this.#a,
            t = this.#l,
            n = 0,
            r = 0n,
            i = 0n,
            u = 0n;
        for (
            this.#o >= 32
                ? ((r = l(
                      (r = o(this.#n, 1n) + o(this.#r, 7n) + o(this.#i, 12n) + o(this.#s, 18n)) ^
                          (0x9e3779b185ebca87n * o(l(0xc2b2ae3d27d4eb4fn * this.#n), 31n)),
                  )),
                  (r = l(0x9e3779b185ebca87n * r + 0x85ebca77c2b2ae63n)),
                  (r = l(r ^ (0x9e3779b185ebca87n * o(l(0xc2b2ae3d27d4eb4fn * this.#r), 31n)))),
                  (r = l(0x9e3779b185ebca87n * r + 0x85ebca77c2b2ae63n)),
                  (r = l(r ^ (0x9e3779b185ebca87n * o(l(0xc2b2ae3d27d4eb4fn * this.#i), 31n)))),
                  (r = l(0x9e3779b185ebca87n * r + 0x85ebca77c2b2ae63n)),
                  (r = l(r ^ (0x9e3779b185ebca87n * o(l(0xc2b2ae3d27d4eb4fn * this.#s), 31n)))),
                  (r = l(0x9e3779b185ebca87n * r + 0x85ebca77c2b2ae63n)))
                : (r = l(this.#t + 0x27d4eb2f165667c5n)),
                r += BigInt(this.#o);
            n <= t - 8;
        )
            (u = l(0x9e3779b185ebca87n * o(l(0xc2b2ae3d27d4eb4fn * (u = a(e, n))), 31n))),
                (r = l(0x9e3779b185ebca87n * o(r ^ u, 27n) + 0x85ebca77c2b2ae63n)),
                (n += 8);
        for (
            n + 4 <= t &&
            ((r = l(
                0xc2b2ae3d27d4eb4fn *
                    o(
                        r ^ l(0x9e3779b185ebca87n * (u = s((e[n + 1] << 8) | e[n], (e[n + 3] << 8) | e[n + 2], 0, 0))),
                        23n,
                    ) +
                    0x165667b19e3779f9n,
            )),
            (n += 4));
            n < t;
        )
            r = l(0x9e3779b185ebca87n * o(r ^ l(0x27d4eb2f165667c5n * (u = s(e[n++], 0, 0, 0))), 11n));
        return (
            (i = l(r >> 33n)),
            (r = l((r ^ i) * 0xc2b2ae3d27d4eb4fn)),
            (i = l(r >> 29n)),
            (r = l((r ^ i) * 0x165667b19e3779f9n)),
            (i = l(r >> 32n)),
            (r = l(r ^ i))
        );
    }
}
function d(e, t = 0) {
    return new u(t).update(e).digest();
}
