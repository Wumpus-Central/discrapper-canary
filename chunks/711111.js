t.d(l, { G: () => a });
var r = t(64700),
    n = t(18005);
class s {
    top = new n.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
function a() {
    let e = r.useRef(new s()),
        l = r.useCallback((l) => {
            e.current.handleScroll(l);
        }, []);
    return {
        resetScrollPosition: r.useCallback(() => {
            e.current.scrollPosition.set(0);
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: l,
    };
}
