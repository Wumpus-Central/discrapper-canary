"use strict";
n.d(t, { A: () => o });
var r = n(440745),
    i = n.n(r),
    s = n(317097),
    a = n(315069);
class o extends a.A {
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
        let { background_colors: t, button_colors: n, confetti_colors: r } = e;
        return new o({
            backgroundColors: t.map((e) => i()((0, s.Hl)(e))),
            buttonColors: n.map((e) => i()((0, s.Hl)(e))),
            confettiColors: r.map((e) => i()((0, s.Hl)(e))),
        });
    }
}
