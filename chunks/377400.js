n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    s = n(317770),
    a = n(175281),
    o = n(285371);
class c extends s.Z {
    _initialize() {
        l.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), l.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        l.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), l.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, r.h7j)((e) => (0, i.jsx)(a.Z, { ...e }), { modalKey: o.J });
    }
    hideKeyboardShortcuts() {
        (0, r.Mr3)(o.J);
    }
}
let d = new c();
