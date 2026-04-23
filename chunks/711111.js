a.d(t, { G: () => s });
var n = a(64700),
    l = a(419354);
class i {
    top = new l.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
function s() {
    let e = n.useRef(new i()),
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
