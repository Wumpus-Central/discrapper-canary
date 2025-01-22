function r() {
    return e.e('47674').then(e.bind(e, 305522));
}
async function u({ gif: n, x: t, y: e, width: u, height: o, rotationDegrees: i = 0 }) {
    return (await r()).crop_and_rotate_gif(n, t, e, u, o, i);
}
e.d(t, {
    Q: function () {
        return u;
    },
    Z: function () {
        return r;
    }
});
