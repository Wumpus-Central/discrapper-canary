var n = s(200651);
s(192379);
var i = s(481060),
    r = s(570140),
    o = s(317770),
    l = s(51596),
    a = s(823385),
    c = s(900085);
let d = 'QUICK_SWITCHER_MODAL_KEY';
class u extends o.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        a.Z.isOpen() &&
            !(0, i.hasModalOpen)(d) &&
            (0, i.openModal)((e) => (0, n.jsx)(c.Z, { ...e }), {
                modalKey: d,
                instant: !0,
                onCloseCallback: l.Cp
            });
    }
    handleHide() {
        (0, i.closeModal)(d);
    }
}
t.Z = new u();
