function r(e, t, n) {
    let r = e.videoWidth / e.videoHeight,
        i = t.width - 2 * n,
        a = t.height - 2 * n;
    if (r > i / a) {
        let e = a,
            t = e * r;
        return {
            offsetX: n + (i - t) / 2,
            offsetY: n,
            height: e,
            width: t,
        };
    }
    {
        let e = i,
            t = e / r;
        return {
            offsetX: n,
            offsetY: n + (a - t) / 2,
            width: e,
            height: t,
        };
    }
}

function i(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        { width: a, height: s, offsetX: o, offsetY: l } = r(e, t, i);
    n.drawImage(e, o, l, a, s);
}
n.d(t, {
    A: () => i,
});
