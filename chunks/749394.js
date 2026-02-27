t.d(l, { A: () => i });
var r = t(440745),
    o = t.n(r),
    n = t(317097),
    a = t(315069);
class i extends a.A {
    backgroundColors;
    buttonColors;
    confettiColors;
    constructor(e) {
        super(),
            (this.backgroundColors = e.backgroundColors),
            (this.buttonColors = e.buttonColors),
            (this.confettiColors = e.confettiColors);
    }
    static fromServer(e) {
        let { background_colors: l, button_colors: t, confetti_colors: r } = e;
        return new i({
            backgroundColors: l.map((e) => o()((0, n.Hl)(e))),
            buttonColors: t.map((e) => o()((0, n.Hl)(e))),
            confettiColors: r.map((e) => o()((0, n.Hl)(e))),
        });
    }
}
