n.d(t, { Z: () => a });
var r = n(73800);
let i = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 0
});
function a() {
    let e = (0, r.useRef)(null),
        t = (0, r.useCallback)(() => {
            let { current: t } = e;
            if (null != t) {
                let { scrollTop: e, scrollLeft: n, scrollHeight: r, scrollWidth: i, offsetHeight: a, offsetWidth: o } = t;
                return {
                    scrollTop: e,
                    scrollLeft: n,
                    scrollHeight: r,
                    scrollWidth: i,
                    offsetHeight: a,
                    offsetWidth: o,
                    dirty: 0
                };
            }
            return i;
        }, []);
    return {
        scrollerRef: e,
        getScrollerState: t
    };
}
