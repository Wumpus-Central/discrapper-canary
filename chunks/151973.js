n.d(t, { Z: () => a }), n(47120);
var r = n(192379);
function i(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let o = [0, 0];
function a(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: a } = e,
        { dirty: s, scrollTop: l, offsetHeight: c } = n();
    (0, r.useLayoutEffect)(() => {
        s > 0 && a();
    }, [s, a]);
    let u = (0, r.useRef)(o);
    u.current = i(l, c, t);
    let [d, f] = u.current;
    return {
        forceUpdateOnChunkChange: (0, r.useCallback)(
            (e) => {
                let { dirty: r, scrollTop: o, offsetHeight: s } = n();
                if (r > 0) return;
                let [l, c] = i(o, s, t);
                l !== u.current[0] ? a() : 2 === e && c !== u.current[1] && a();
            },
            [a, t, n]
        ),
        chunkStart: d,
        chunkEnd: f,
        dirty: s
    };
}
