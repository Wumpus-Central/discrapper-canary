e.a(n, async function (r, u) {
    try {
        e.d(t, {
            h4: function () {
                return _;
            },
            hM: function () {
                return f;
            },
            nD: function () {
                return d;
            }
        });
        var i = e(612580);
        n = e.hmd(n);
        var a = r([i]);
        i = (a.then ? (await a)() : a)[0];
        let l = new ('undefined' == typeof TextDecoder ? (0, n.require)('util').TextDecoder : TextDecoder)('utf-8', {
            ignoreBOM: !0,
            fatal: !0
        });
        l.decode();
        let h = null;
        function o() {
            return (null === h || h.buffer !== i.memory.buffer) && (h = new Uint8Array(i.memory.buffer)), h;
        }
        let w = Array(32).fill(void 0);
        w.push(void 0, null, !0, !1);
        let b = w.length,
            s = 0,
            g = null;
        function c() {
            return (null === g || g.buffer !== i.memory.buffer) && (g = new Int32Array(i.memory.buffer)), g;
        }
        function f(n, t, e, r, u, a) {
            try {
                let g = i.__wbindgen_add_to_stack_pointer(-16);
                var f,
                    _,
                    d = (function (n, t) {
                        let e = t(1 * n.length);
                        return o().set(n, e / 1), (s = n.length), e;
                    })(n, i.__wbindgen_malloc),
                    l = s;
                i.crop_and_rotate_gif(g, d, l, t, e, r, u, a);
                var h = c()[g / 4 + 0],
                    w = c()[g / 4 + 1];
                var b = ((f = h), (_ = w), o().subarray(f / 1, f / 1 + _)).slice();
                return i.__wbindgen_free(h, 1 * w), b;
            } finally {
                i.__wbindgen_add_to_stack_pointer(16);
            }
        }
        function _(n, t) {
            var e,
                r,
                u = ((e = n), (r = t), l.decode(o().subarray(e, e + r)));
            return (function (n) {
                b === w.length && w.push(w.length + 1);
                let t = b;
                return (b = w[t]), (w[t] = n), t;
            })(u);
        }
        function d(n) {
            throw (function (n) {
                var t;
                let e = w[n];
                return (t = n) < 36 || ((w[t] = b), (b = t)), e;
            })(n);
        }
        u();
    } catch (n) {
        u(n);
    }
});
