n.d(t, {
    BY: () => s,
    xh: () => l
}),
    n(66153),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(610885),
    n(126298);
var r = n(192379),
    i = n(605387),
    o = n.n(i),
    a = n(396821);
function s(e, t) {
    let { getImgCache: n, setImgCache: i } = (0, a.W_)();
    (0, r.useEffect)(() => {
        null != e &&
            null == n(e) &&
            (async () => {
                let t = await fetch(e),
                    n = await t.arrayBuffer();
                i(e, e, await l(n));
            })();
    }, [e, n, i]);
    let o = n(e);
    if (null == o) return null;
    let { animatedUrl: s, staticUrl: c } = o;
    return t ? s : c;
}
function l(e) {
    let t = o().decode(e),
        n = o().toRGBA8(t)[0],
        r = document.createElement('canvas');
    (r.width = t.width), (r.height = t.height);
    let i = r.getContext('2d'),
        a = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
    return i.putImageData(a, 0, 0), r.toDataURL('image/png');
}
n(231338);
