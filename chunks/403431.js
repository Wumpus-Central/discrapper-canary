n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700);

function i(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let a = [0, 0];

function s(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: s } = e,
        { dirty: o, scrollTop: l, offsetHeight: c } = n();
    (0, r.useLayoutEffect)(() => {
        o > 0 && s();
    }, [o, s]);
    let u = (0, r.useRef)(a);
    u.current = i(l, c, t);
    let [d, f] = u.current;
    return {
        forceUpdateOnChunkChange: (0, r.useCallback)(
            (e) => {
                let { dirty: r, scrollTop: a, offsetHeight: o } = n();
                if (r > 0) return;
                let [l, c] = i(a, o, t);
                l !== u.current[0] ? s() : 2 === e && c !== u.current[1] && s();
            },
            [s, t, n],
        ),
        chunkStart: d,
        chunkEnd: f,
        dirty: o,
    };
}
