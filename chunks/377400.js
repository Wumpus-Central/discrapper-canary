var n = s(200651);
s(192379);
var i = s(481060),
    r = s(570140),
    o = s(317770),
    a = s(175281),
    l = s(285371);
class c extends o.Z {
    _initialize() {
        r.Z.subscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.subscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    _terminate() {
        r.Z.unsubscribe('SHOW_KEYBOARD_SHORTCUTS', this.showKeyboardShortcuts), r.Z.unsubscribe('HIDE_KEYBOARD_SHORTCUTS', this.hideKeyboardShortcuts);
    }
    showKeyboardShortcuts() {
        (0, i.openModal)((e) => (0, n.jsx)(a.Z, { ...e }), { modalKey: l.J });
    }
    hideKeyboardShortcuts() {
        (0, i.closeModal)(l.J);
    }
}
t.Z = new c();
