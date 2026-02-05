a.d(t, { G: () => s });
var n = a(64700),
    i = a(664336);
function s() {
    let e = n.useRef(new i.A()),
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
