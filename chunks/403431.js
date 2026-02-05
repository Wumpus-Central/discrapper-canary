"use strict";
n.d(t, { A: () => s });
var r = n(64700);
function i(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let a = [0, 0];
function s(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: s } = e,
        { dirty: o, scrollTop: l, offsetHeight: u } = n();
    (0, r.useLayoutEffect)(() => {
        o > 0 && s();
    }, [o, s]);
    let c = (0, r.useRef)(a);
    c.current = i(l, u, t);
    let [d, _] = c.current;
    return {
        forceUpdateOnChunkChange: (0, r.useCallback)(
            (e) => {
                let { dirty: r, scrollTop: a, offsetHeight: o } = n();
                if (r > 0) return;
                let [l, u] = i(a, o, t);
                l !== c.current[0] ? s() : 2 === e && u !== c.current[1] && s();
            },
            [s, t, n],
        ),
        chunkStart: d,
        chunkEnd: _,
        dirty: o,
    };
}
