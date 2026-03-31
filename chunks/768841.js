n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    s = n(73153),
    a = n(272355),
    r = n(296838),
    o = n(946974);
class c extends a.A {
    _initialize() {
        s.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    _terminate() {
        s.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, l.qfG)((e) => (0, i.jsx)(r.A, { ...e }), { modalKey: o.P });
    }
    hideKeyboardShortcuts() {
        (0, l.OoC)(o.P);
    }
}
let d = new c();
