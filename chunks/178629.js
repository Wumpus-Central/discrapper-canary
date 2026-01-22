n.d(t, { G: () => r });
var l = n(64700),
    a = n(664336);
function r() {
    let e = l.useRef(new a.A()),
        t = l.useCallback((t) => {
            e.current.handleScroll(t);
        }, []);
    return {
        resetScrollPosition: l.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t,
    };
}
