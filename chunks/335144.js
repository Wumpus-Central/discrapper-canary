n.d(t, { A: () => s, g: () => l });
var i = n(582128);
let r = (0, n(196765).v)(() => ({ topOffsetsBySurface: new Map() }));
function a(e, t, n) {
    r.setState((i) => {
        let r = new Map(i.topOffsetsBySurface.get(e));
        null == n ? r.delete(t) : r.set(t, n);
        let a = new Map(i.topOffsetsBySurface);
        return (a.set(e, r), { topOffsetsBySurface: a });
    });
}
function s(e) {
    return r((t) => {
        let n = t.topOffsetsBySurface.get(e);
        return null == n || 0 === n.size ? null : Math.max(...n.values());
    });
}
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = i.useId();
    i.useLayoutEffect(() => {
        let i = t.current;
        if (!n || null == i) return;
        let s = i.ownerDocument.defaultView ?? window;
        function l() {
            null != i && a(e, r, i.getBoundingClientRect().bottom);
        }
        l();
        let o = new ResizeObserver(l);
        return (
            o.observe(i),
            null != i.parentElement && o.observe(i.parentElement),
            s.addEventListener("resize", l),
            () => {
                (o.disconnect(), s.removeEventListener("resize", l), a(e, r, null));
            }
        );
    }, [n, r, t, e]);
}
