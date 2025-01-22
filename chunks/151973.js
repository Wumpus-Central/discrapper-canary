r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379);
function o(e, n, r) {
    return [Math.floor(e / r) - 1, Math.ceil((e + n) / r) + 1];
}
let s = [0, 0];
function l(e) {
    let { chunkSize: n, getScrollerState: r, forceUpdate: i } = e,
        { dirty: l, scrollTop: u, offsetHeight: c } = r();
    (0, a.useLayoutEffect)(() => {
        l > 0 && i();
    }, [l, i]);
    let d = (0, a.useRef)(s);
    d.current = o(u, c, n);
    let [f, p] = d.current;
    return {
        forceUpdateOnChunkChange: (0, a.useCallback)(
            (e) => {
                let { dirty: a, scrollTop: s, offsetHeight: l } = r();
                if (a > 0) return;
                let [u, c] = o(s, l, n);
                u !== d.current[0] ? i() : 2 === e && c !== d.current[1] && i();
            },
            [i, n, r]
        ),
        chunkStart: f,
        chunkEnd: p,
        dirty: l
    };
}
