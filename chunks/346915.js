t.d(r, { N: () => a });
async function a({
    gif: e,
    x: r,
    y: o,
    width: i,
    height: n,
    imageRotation: l = 0,
    flipHorizontal: s = !1,
    resizeWidth: f = null,
    resizeHeight: c = null,
}) {
    return (await t.e("47580").then(t.bind(t, 844183))).crop_and_rotate_gif(e, r, o, i, n, l, s, f, c);
}
