a.d(t, { G: () => i });
var n = a(64700),
    l = a(664336);
function i() {
    let e = n.useRef(new l.A()),
        t = n.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: n.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t,
    };
}
