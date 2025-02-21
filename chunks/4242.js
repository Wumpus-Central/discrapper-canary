n.d(t, {
    BY: () => u,
    bt: () => l,
    wE: () => c
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
            (async () => {
                let t = await d(e);
                i(e, e, t);
            })();
    }, [e, n, i]);
    let o = n(e);
    if (null == o) return null;
    let { animatedUrl: s, staticUrl: l } = o;
    return t ? s : l;
}
async function d(e) {
    let t = await fetch(e),
        n = await t.arrayBuffer(),
        r = o().decode(n),
        i = o().toRGBA8(r)[0],
        a = document.createElement('canvas');
    (a.width = r.width), (a.height = r.height);
    let s = a.getContext('2d'),
        l = new ImageData(new Uint8ClampedArray(i), r.width, r.height);
    return s.putImageData(l, 0, 0), a.toDataURL('image/png');
}
