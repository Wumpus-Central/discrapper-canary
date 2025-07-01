t.a(n, async function (r, i) {
    try {
        t.d(e, {
            h4: () => c,
            hM: () => o,
            nD: () => d
        });
        var a = t(612580);
        n = t.hmd(n);
        var f = r([a]);
        a = (f.then ? (await f)() : f)[0];
        let l = new ('undefined' == typeof TextDecoder ? (0, n.require)('util').TextDecoder : TextDecoder)('utf-8', {
            ignoreBOM: !0,
            fatal: !0
        });
        l.decode();
        let h = null;
        function u() {
            return ((null === h || h.buffer !== a.memory.buffer) && (h = new Uint8Array(a.memory.buffer)), h);
        }
        let w = Array(32).fill(void 0);
        w.push(void 0, null, !0, !1);
        let s = w.length,
            b = 0,
            g = null;
        function _() {
            return ((null === g || g.buffer !== a.memory.buffer) && (g = new Int32Array(a.memory.buffer)), g);
        }
        function o(n, e, t, r, i, f, o, c) {
            try {
                let g = a.__wbindgen_add_to_stack_pointer(-16);
                var d = (function (n, e) {
                        let t = e(+n.length);
                        return (u().set(n, t / 1), (b = n.length), t);
                    })(n, a.__wbindgen_malloc),
                    l = b;
                a.crop_and_rotate_gif(g, d, l, e, t, r, i, f, null == o ? 16777215 : o, null == c ? 16777215 : c);
                var h = _()[g / 4 + 0],
                    w = _()[g / 4 + 1],
                    s = u()
                        .subarray(h / 1, h / 1 + w)
                        .slice();
                return (a.__wbindgen_free(h, +w), s);
            } finally {
                a.__wbindgen_add_to_stack_pointer(16);
            }
        }
        function c(n, e) {
            var t = l.decode(u().subarray(n, n + e));
            s === w.length && w.push(w.length + 1);
            let r = s;
            return ((s = w[r]), (w[r] = t), r);
        }
        function d(n) {
            throw (function (n) {
                let e = w[n];
                return (n < 36 || ((w[n] = s), (s = n)), e);
            })(n);
        }
        i();
    } catch (n) {
        i(n);
    }
});
