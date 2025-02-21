n.d(t, {
    BY: () => u,
    bt: () => l,
    wE: () => c,
    xh: () => d
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
    a = n(396821),
    s = n(231338);
function l(e, t, n) {
    return null == e ? void 0 : ('#' !== e.charAt(0) && (e = '#' + e), 7 !== e.length) ? void 0 : n ? e + 'FF' : t ? e + '99' : e + '4D';
}
function c(e, t, n, r) {
    if (null == e) return;
    let i = t === s.BR.LIGHT ? e.lightBackground : e.darkBackground,
        o = n || r;
    return {
        left: ''.concat(i).concat(o ? '1A' : '00'),
        right: ''.concat(i).concat(o ? '80' : '4D')
    };
}
function u(e, t) {
    let { getImgCache: n, setImgCache: i } = (0, a.W_)();
    (0, r.useEffect)(() => {
        null != e &&
            null == n(e) &&
            (async () => {
                let t = await fetch(e),
                    n = await t.arrayBuffer();
                i(e, e, await d(n));
            })();
    }, [e, n, i]);
    let o = n(e);
    if (null == o) return null;
    let { animatedUrl: s, staticUrl: l } = o;
    return t ? s : l;
}
function d(e) {
    let t = o().decode(e),
        n = o().toRGBA8(t)[0],
        r = document.createElement('canvas');
    (r.width = t.width), (r.height = t.height);
    let i = r.getContext('2d'),
        a = new ImageData(new Uint8ClampedArray(n), t.width, t.height);
    return i.putImageData(a, 0, 0), r.toDataURL('image/png');
}
