r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(192379);
let a = Object.freeze({
    scrollTop: 0,
    scrollLeft: 0,
    scrollHeight: 0,
    scrollWidth: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    dirty: 0
});
function o() {
    let e = (0, i.useRef)(null),
        n = (0, i.useCallback)(() => {
            let { current: n } = e;
            if (null != n) {
                let { scrollTop: e, scrollLeft: r, scrollHeight: i, scrollWidth: a, offsetHeight: o, offsetWidth: s } = n;
                return {
                    scrollTop: e,
                    scrollLeft: r,
                    scrollHeight: i,
                    scrollWidth: a,
                    offsetHeight: o,
                    offsetWidth: s,
                    dirty: 0
                };
            }
            return a;
        }, []);
    return {
        scrollerRef: e,
        getScrollerState: n
    };
}
