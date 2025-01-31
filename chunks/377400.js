n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    o = n(175281),
    a = n(285371);
class c extends s.Z {
    _initialize() {
        r.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        r.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, l.h7j)((e) => (0, i.jsx)(o.Z, { ...e }), { modalKey: a.J });
    }
    hideKeyboardShortcuts() {
        (0, l.Mr3)(a.J);
    }
}
let d = new c();
