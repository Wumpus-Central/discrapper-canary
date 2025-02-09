n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    a = n(175281),
    o = n(285371);
class c extends s.Z {
    _initialize() {
        r.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        r.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, l.h7j)((e) => (0, i.jsx)(a.Z, { ...e }), { modalKey: o.J });
    }
    hideKeyboardShortcuts() {
        (0, l.Mr3)(o.J);
    }
}
let u = new c();
