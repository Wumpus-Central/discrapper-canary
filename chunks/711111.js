t.d(l, { G: () => a });
var r = t(582128),
    s = t(202091);
class n {
    top = new s.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
function a() {
    let e = r.useRef(new n()),
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
