n.d(t, { iE: () => r, t0: () => i, v7: () => a });
let i = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
function r(e, t) {
    return t >= e.minSnapDownDpr ? e.maxUpscale : null;
}
function a(e) {
    let { targetWidth: t, targetHeight: n, sourceWidth: r, sourceHeight: a, maxUpscale: s, ladder: l = i } = e,
        o = Math.max(t, n);
    if (o <= 0 || 0 === l.length) return { width: t, height: n };
    let d = l.find((e) => o <= e) ?? l[l.length - 1],
        c = null != r && null != a && Math.max(r, a) <= d,
        u = d;
    if (null != s && s > 1 && !c) {
        let e;
        for (let t of l)
            if (t <= o) e = t;
            else break;
        null != e && o <= e * s && (u = e);
    }
    if (null != r && null != a && Math.max(r, a) <= u) return { width: r, height: a };
    let _ = u / o,
        E = Math.max(1, Math.round(t * _)),
        A = Math.max(1, Math.round(n * _));
    return { width: null != r ? Math.min(E, r) : E, height: null != a ? Math.min(A, a) : A };
}
