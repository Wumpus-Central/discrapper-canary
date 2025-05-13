n.d(t, { Z: () => o }), n(388685);
var r = n(73800);
function i(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let a = [0, 0];
function o(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: o } = e,
        { dirty: s, scrollTop: l, offsetHeight: c } = n();
    (0, r.useLayoutEffect)(() => {
        s > 0 && o();
    }, [s, o]);
    let u = (0, r.useRef)(a);
    u.current = i(l, c, t);
    let [d, f] = u.current;
    return {
        forceUpdateOnChunkChange: (0, r.useCallback)(
            (e) => {
                let { dirty: r, scrollTop: a, offsetHeight: s } = n();
                if (r > 0) return;
                let [l, c] = i(a, s, t);
                l !== u.current[0] ? o() : 2 === e && c !== u.current[1] && o();
            },
            [o, t, n]
        ),
        chunkStart: d,
        chunkEnd: f,
        dirty: s
    };
}
