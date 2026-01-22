let n, r, a, s, h, o, l, c, u;
i.d(e, {
    A: () => p,
    n: () => f,
}),
    i(927092),
    i(212978),
    i(597227),
    i(393431),
    i(752391),
    i(532706),
    i(42231),
    i(232424),
    i(757074),
    i(949626),
    i(767709),
    i(65162),
    i(65821);
var m = i(284009),
    d = i.n(m);
let f = (0, i(795521).u)(async () => {
    let t = await Promise.all([i.e("16203"), i.e("45082")]).then(i.bind(i, 145025)),
        e = await t.default();
    (a = e.cwrap("lottie_create", "number", ["string"])),
        (s = e._lottie_destroy),
        (h = e._lottie_draw_into_bgra),
        (o = e._lottie_draw_into_rgba),
        (l = e._lottie_frame_count),
        (c = e._lottie_frame_rate),
        (u = e._memory_create),
        (n = e),
        (r = u(409600));
});

function v(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class p {
    get fps() {
        return c(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(t, e, i) {
        return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            h(this.native, r, t, e, i),
            v(e, i)
        );
    }
    get_rgba(t, e, i) {
        return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            o(this.native, r, t, e, i),
            v(e, i)
        );
    }
    drop() {
        s(this.native);
    }
    constructor(t) {
        if (
            (!(function (t, e, i) {
                e in t
                    ? Object.defineProperty(t, e, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (t[e] = i);
            })(this, "native", void 0),
            (this.native = a(t)),
            0 === this.native)
        )
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
}
