r.d(t, { N: () => o });
async function o({
    gif: e,
    x: t,
    y: o,
    width: a,
    height: n,
    imageRotation: i = 0,
    resizeWidth: l = null,
    resizeHeight: c = null,
}) {
    return (await r.e("47580").then(r.bind(r, 844183))).crop_and_rotate_gif(e, t, o, a, n, i, l, c);
}
