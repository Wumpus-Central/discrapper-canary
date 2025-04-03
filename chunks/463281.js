t.a(n, async function (r, a) {
    try {
        t.d(e, {
            h4: () => d,
            hM: () => o,
            nD: () => f
        });
        var i = t(612580);
        n = t.hmd(n);
        var u = r([i]);
        i = (u.then ? (await u)() : u)[0];
        let l = new ('undefined' == typeof TextDecoder ? (0, n.require)('util').TextDecoder : TextDecoder)('utf-8', {
            ignoreBOM: !0,
            fatal: !0
        });
        l.decode();
        let h = null;
        function _() {
            return (null === h || h.buffer !== i.memory.buffer) && (h = new Uint8Array(i.memory.buffer)), h;
        }
        let w = Array(32).fill(void 0);
        w.push(void 0, null, !0, !1);
        let s = w.length,
            b = 0,
            g = null;
        function c() {
            return (null === g || g.buffer !== i.memory.buffer) && (g = new Int32Array(i.memory.buffer)), g;
        }
        function o(n, e, t, r, a, u) {
            try {
                let w = i.__wbindgen_add_to_stack_pointer(-16);
                var o = (function (n, e) {
                        let t = e(+n.length);
                        return _().set(n, t / 1), (b = n.length), t;
                    })(n, i.__wbindgen_malloc),
                    d = b;
                i.crop_and_rotate_gif(w, o, d, e, t, r, a, u);
                var f = c()[w / 4 + 0],
                    l = c()[w / 4 + 1],
                    h = _()
                        .subarray(f / 1, f / 1 + l)
                        .slice();
                return i.__wbindgen_free(f, +l), h;
            } finally {
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        function d(n, e) {
            var t = l.decode(_().subarray(n, n + e));
            s === w.length && w.push(w.length + 1);
            let r = s;
            return (s = w[r]), (w[r] = t), r;
        }
        function f(n) {
            throw (function (n) {
                let e = w[n];
                return n < 36 || ((w[n] = s), (s = n)), e;
            })(n);
        }
        a();
    } catch (n) {
        a(n);
    }
});
