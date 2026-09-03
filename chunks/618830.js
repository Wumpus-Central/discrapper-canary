r.r(t), r.d(t, { XXH64: () => u, hash: () => c });
let n = 2n ** 64n - 1n,
    i = new TextEncoder();
function o(e, t, r, n) {
    return BigInt(e) | (BigInt(t) << 16n) | (BigInt(r) << 32n) | (BigInt(n) << 48n);
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
function s(e, t) {
    return ((e << t) & n) | (e >> (64n - t));
}
function l(e) {
    return BigInt.asUintN(64, e);
}
class u {
    #e;
    #t;
    #r;
    #n;
    #i;
    #o;
    #a;
    #s;
    constructor(e = 0) {
        this.reset(e);
    }
    reset(e = this.#e) {
        return (
            (this.#e = BigInt.asUintN(32, BigInt(e))),
            (this.#t = l(this.#e + 0x9e3779b185ebca87n + 0xc2b2ae3d27d4eb4fn)),
            (this.#r = l(this.#e + 0xc2b2ae3d27d4eb4fn)),
            (this.#n = this.#e),
            (this.#i = l(this.#e - 0x9e3779b185ebca87n)),
            (this.#o = null),
            (this.#a = 0),
            (this.#s = 0),
            this
        );
    }
    update(e) {
        "string" == typeof e && (e = i.encode(e));
        let t = 0,
            r = e.length,
            n = t + r;
        if (0 === r) return this;
        if (((this.#a += r), 0 === this.#s && (this.#o = new Uint8Array(32)), this.#s + r < 32))
            return this.#o.set(e.subarray(0, r), this.#s), (this.#s += r), this;
        if (this.#s > 0) {
            let r;
            this.#o.set(e.subarray(0, 32 - this.#s), this.#s);
            let n = 0;
            (r = a(this.#o, n)),
                (this.#t = l(0x9e3779b185ebca87n * s(l(this.#t + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                (n += 8),
                (r = a(this.memory, n)),
                (this.#r = l(0x9e3779b185ebca87n * s(l(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                (n += 8),
                (r = a(this.memory, n)),
                (this.#n = l(0x9e3779b185ebca87n * s(l(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                (n += 8),
                (r = a(this.memory, n)),
                (this.#i = l(0x9e3779b185ebca87n * s(l(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                (t += 32 - this.#s),
                (this.#s = 0);
        }
        if (t <= n - 32) {
            let r = n - 32;
            do {
                let r;
                (r = a(e, t)),
                    (this.#t = l(0x9e3779b185ebca87n * s(l(this.#t + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                    (t += 8),
                    (r = a(e, t)),
                    (this.#r = l(0x9e3779b185ebca87n * s(l(this.#r + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                    (t += 8),
                    (r = a(e, t)),
                    (this.#n = l(0x9e3779b185ebca87n * s(l(this.#n + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                    (t += 8),
                    (r = a(e, t)),
                    (this.#i = l(0x9e3779b185ebca87n * s(l(this.#i + 0xc2b2ae3d27d4eb4fn * r), 31n))),
                    (t += 8);
            } while (t <= r);
        }
        return t < n && (this.#o.set(e.subarray(t, n), this.#s), (this.#s = n - t)), this;
    }
    digest() {
        let e = this.#o,
            t = this.#s,
            r = 0,
            n = 0n,
            i = 0n,
            u = 0n;
        for (
            this.#a >= 32
                ? ((n = l(
                      (n = s(this.#t, 1n) + s(this.#r, 7n) + s(this.#n, 12n) + s(this.#i, 18n)) ^
                          (0x9e3779b185ebca87n * s(l(0xc2b2ae3d27d4eb4fn * this.#t), 31n)),
                  )),
                  (n = l(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                  (n = l(n ^ (0x9e3779b185ebca87n * s(l(0xc2b2ae3d27d4eb4fn * this.#r), 31n)))),
                  (n = l(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                  (n = l(n ^ (0x9e3779b185ebca87n * s(l(0xc2b2ae3d27d4eb4fn * this.#n), 31n)))),
                  (n = l(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)),
                  (n = l(n ^ (0x9e3779b185ebca87n * s(l(0xc2b2ae3d27d4eb4fn * this.#i), 31n)))),
                  (n = l(0x9e3779b185ebca87n * n + 0x85ebca77c2b2ae63n)))
                : (n = l(this.#e + 0x27d4eb2f165667c5n)),
                n += BigInt(this.#a);
            r <= t - 8;
        )
            (u = l(0x9e3779b185ebca87n * s(l(0xc2b2ae3d27d4eb4fn * (u = a(e, r))), 31n))),
                (n = l(0x9e3779b185ebca87n * s(n ^ u, 27n) + 0x85ebca77c2b2ae63n)),
                (r += 8);
        for (
            r + 4 <= t &&
            ((n = l(
                0xc2b2ae3d27d4eb4fn *
                    s(
                        n ^ l(0x9e3779b185ebca87n * (u = o((e[r + 1] << 8) | e[r], (e[r + 3] << 8) | e[r + 2], 0, 0))),
                        23n,
                    ) +
                    0x165667b19e3779f9n,
            )),
            (r += 4));
            r < t;
        )
            n = l(0x9e3779b185ebca87n * s(n ^ l(0x27d4eb2f165667c5n * (u = o(e[r++], 0, 0, 0))), 11n));
        return (
            (i = l(n >> 33n)),
            (n = l((n ^ i) * 0xc2b2ae3d27d4eb4fn)),
            (i = l(n >> 29n)),
            (n = l((n ^ i) * 0x165667b19e3779f9n)),
            (i = l(n >> 32n)),
            (n = l(n ^ i))
        );
    }
}
function c(e, t = 0) {
    return new u(t).update(e).digest();
}
