n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(73153),
    a = n(272355),
    r = n(793322),
    o = n(174768),
    d = n(814340);
let c = "QUICK_SWITCHER_MODAL_KEY";
class u extends a.A {
    _initialize() {
        s.h.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.subscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    _terminate() {
        s.h.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.h.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide);
    }
    handleShow() {
        o.A.isOpen() &&
            !(0, l.kBI)(c) &&
            (0, l.qfG)((e) => (0, i.jsx)(d.A, { ...e }), { modalKey: c, instant: !0, onCloseCallback: r.jD });
    }
    handleHide() {
        (0, l.OoC)(c);
    }
}
let h = new u();
