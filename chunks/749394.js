n.d(t, { A: () => l });
var i = n(440745),
    r = n.n(i),
    a = n(317097),
    s = n(315069);
class l extends s.A {
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
        let { background_colors: t, button_colors: n, confetti_colors: i } = e;
        return new l({
            backgroundColors: t.map((e) => r()((0, a.Hl)(e))),
            buttonColors: n.map((e) => r()((0, a.Hl)(e))),
            confettiColors: i.map((e) => r()((0, a.Hl)(e))),
        });
    }
}
