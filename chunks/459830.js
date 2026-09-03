n.d(t, { iE: () => r, v7: () => a });
let i = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
function r(e, t) {
    return t >= e.minSnapDownDpr ? e.maxUpscale : null;
}
function a(e) {
    let { targetWidth: t, targetHeight: n, sourceWidth: r, sourceHeight: a, maxUpscale: s } = e,
        l = Math.max(t, n);
    if (l <= 0) return { width: t, height: n };
    let o = i.find((e) => l <= e) ?? i[i.length - 1],
        d = null != r && null != a && Math.max(r, a) <= o,
        c = o;
    if (null != s && s > 1 && !d) {
        let e;
        for (let t of i)
            if (t <= l) e = t;
            else break;
        null != e && l <= e * s && (c = e);
    }
    if (null != r && null != a && Math.max(r, a) <= c) return { width: r, height: a };
    let u = c / l,
        _ = Math.max(1, Math.round(t * u)),
        E = Math.max(1, Math.round(n * u));
    return { width: null != r ? Math.min(_, r) : _, height: null != a ? Math.min(E, a) : E };
}
