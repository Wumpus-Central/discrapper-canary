n.d(t, { Z: () => o });
var r = n(192379);
let i = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 0
});
function o() {
    let e = (0, r.useRef)(null),
        t = (0, r.useCallback)(() => {
            let { current: t } = e;
            if (null != t) {
                let { scrollTop: e, scrollLeft: n, scrollHeight: r, scrollWidth: i, offsetHeight: o, offsetWidth: a } = t;
                return {
                    scrollTop: e,
                    scrollLeft: n,
                    scrollHeight: r,
                    scrollWidth: i,
                    offsetHeight: o,
                    offsetWidth: a,
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
