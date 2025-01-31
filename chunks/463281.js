t.a(n, async function (r, i) {
    try {
        t.d(e, {
            h4: () => d,
            hM: () => c,
            nD: () => f
        });
        var a = t(612580);
        n = t.hmd(n);
        var u = r([a]);
        a = (u.then ? (await u)() : u)[0];
        let l = new ('undefined' == typeof TextDecoder ? (0, n.require)('util').TextDecoder : TextDecoder)('utf-8', {
            ignoreBOM: !0,
            fatal: !0
        });
        l.decode();
        let h = null;
        function o() {
            return (null === h || h.buffer !== a.memory.buffer) && (h = new Uint8Array(a.memory.buffer)), h;
        }
        let w = Array(32).fill(void 0);
        w.push(void 0, null, !0, !1);
        let s = w.length,
            b = 0,
            g = null;
        function _() {
            return (null === g || g.buffer !== a.memory.buffer) && (g = new Int32Array(a.memory.buffer)), g;
        }
        function c(n, e, t, r, i, u) {
            try {
                let w = a.__wbindgen_add_to_stack_pointer(-16);
                var c = (function (n, e) {
                        let t = e(1 * n.length);
                        return o().set(n, t / 1), (b = n.length), t;
                    })(n, a.__wbindgen_malloc),
                    d = b;
                a.crop_and_rotate_gif(w, c, d, e, t, r, i, u);
                var f = _()[w / 4 + 0],
                    l = _()[w / 4 + 1],
                    h = o()
                        .subarray(f / 1, f / 1 + l)
                        .slice();
                return a.__wbindgen_free(f, 1 * l), h;
            } finally {
                a.__wbindgen_add_to_stack_pointer(16);
            }
        }
        function d(n, e) {
            var t = l.decode(o().subarray(n, n + e));
            return (function (n) {
                s === w.length && w.push(w.length + 1);
                let e = s;
                return (s = w[e]), (w[e] = n), e;
            })(t);
        }
        function f(n) {
            throw (function (n) {
                let e = w[n];
                return n < 36 || ((w[n] = s), (s = n)), e;
            })(n);
        }
        i();
    } catch (n) {
        i(n);
    }
});
