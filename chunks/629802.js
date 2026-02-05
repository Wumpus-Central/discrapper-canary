let n, r, a, s, h, o, l, c, m;
i.d(e, { A: () => p, n: () => f }), i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
var u = i(284009),
    d = i.n(u);
let f = (0, i(795521).u)(async () => {
    let t = await i.e("45082").then(i.bind(i, 145025)),
        e = await t.default();
    (a = e.cwrap("lottie_create", "number", ["string"])),
        (s = e._lottie_destroy),
        (h = e._lottie_draw_into_bgra),
        (o = e._lottie_draw_into_rgba),
        (l = e._lottie_frame_count),
        (c = e._lottie_frame_rate),
        (m = e._memory_create),
        (n = e),
        (r = m(409600));
});
function v(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class p {
    native;
    constructor(t) {
        if (((this.native = a(t)), 0 === this.native))
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
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
}
