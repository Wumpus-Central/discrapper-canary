r.d(t, { Q: () => n });
async function n({
    gif: e,
    x: t,
    y: n,
    width: o,
    height: a,
    imageRotation: i = 0,
    resizeWidth: s = null,
    resizeHeight: c = null,
}) {
    return (await r.e("47674").then(r.bind(r, 305522))).crop_and_rotate_gif(e, t, n, o, a, i, s, c);
}
