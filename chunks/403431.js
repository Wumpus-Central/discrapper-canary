"use strict";
n.d(t, { A: () => a });
var i = n(64700);
function r(e, t, n) {
    return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1];
}
let s = [0, 0];
function a(e) {
    let { chunkSize: t, getScrollerState: n, forceUpdate: a } = e,
        { dirty: o, scrollTop: l, offsetHeight: u } = n();
    (0, i.useLayoutEffect)(() => {
        o > 0 && a();
    }, [o, a]);
    let c = (0, i.useRef)(s);
    c.current = r(l, u, t);
    let [d, _] = c.current;
    return {
        forceUpdateOnChunkChange: (0, i.useCallback)(
            (e) => {
                let { dirty: i, scrollTop: s, offsetHeight: o } = n();
                if (i > 0) return;
                let [l, u] = r(s, o, t);
                l !== c.current[0] ? a() : 2 === e && u !== c.current[1] && a();
            },
            [a, t, n],
        ),
        chunkStart: d,
        chunkEnd: _,
        dirty: o,
    };
}
