"use strict";
n.d(t, { A: () => a });
var r = n(64700);
let i = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 2,
});
function a() {
    let e = (0, r.useRef)(null),
        t = (0, r.useRef)(i),
        n = (0, r.useCallback)(() => {
            let { current: n } = e,
                { dirty: r } = t.current;
            if (null == n || 0 === r) return t.current;
            if (1 === r) {
                let { scrollTop: e, scrollLeft: r } = n;
                t.current = { ...t.current, scrollTop: e, scrollLeft: r, dirty: 0 };
            } else {
                let {
                    scrollTop: e,
                    scrollLeft: r,
                    scrollHeight: i,
                    scrollWidth: a,
                    offsetHeight: s,
                    offsetWidth: o,
                } = n;
                t.current = {
                    scrollTop: e,
                    scrollLeft: r,
                    scrollHeight: i,
                    scrollWidth: a,
                    offsetHeight: s,
                    offsetWidth: o,
                    dirty: 0,
                };
            }
            return t.current;
        }, []);
    return { scrollerRef: e, scrollerState: t, getScrollerState: n };
}
