t.d(r, { N: () => a });
async function a({
    gif: e,
    x: r,
    y: a,
    width: o,
    height: i,
    imageRotation: n = 0,
    resizeWidth: l = null,
    resizeHeight: s = null,
}) {
    return (await t.e("47580").then(t.bind(t, 844183))).crop_and_rotate_gif(e, r, a, o, i, n, l, s);
}
