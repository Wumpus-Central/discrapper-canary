l.d(r, { A: () => a });
var t = l(440745),
    o = l.n(t),
    i = l(317097),
    n = l(315069);
class a extends n.A {
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
        let { background_colors: r, button_colors: l, confetti_colors: t } = e;
        return new a({
            backgroundColors: r.map((e) => o()((0, i.Hl)(e))),
            buttonColors: l.map((e) => o()((0, i.Hl)(e))),
            confettiColors: t.map((e) => o()((0, i.Hl)(e))),
        });
    }
}
