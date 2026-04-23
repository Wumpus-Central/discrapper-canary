n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(192308),
    s = n(73153),
    a = n(272355),
    r = n(296838),
    o = n(946974);
class d extends a.A {
    _initialize() {
        s.h.subscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.subscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    _terminate() {
        s.h.unsubscribe("SHOW_KEYBOARD_SHORTCUTS", this.showKeyboardShortcuts),
            s.h.unsubscribe("HIDE_KEYBOARD_SHORTCUTS", this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, l.openModal)((e) => (0, i.jsx)(r.A, { ...e }), { modalKey: o.P });
    }
    hideKeyboardShortcuts() {
        (0, l.closeModal)(o.P);
    }
}
let c = new d();
