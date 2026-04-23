a.d(t, { A: () => l });
var n = a(419354);
class l {
    top = new n.SpringValue(0);
    handleScroll(e) {
        this.top.set(e.currentTarget.scrollTop);
    }
    get scrollPosition() {
        return this.top;
    }
}
