r.d(t, { Q: () => o });
async function o({
    gif: e,
    x: t,
    y: o,
    width: n,
    height: a,
    imageRotation: i = 0,
    resizeWidth: c = null,
    resizeHeight: l = null,
}) {
    return (await r.e("47674").then(r.bind(r, 305522))).crop_and_rotate_gif(e, t, o, n, a, i, c, l);
}
