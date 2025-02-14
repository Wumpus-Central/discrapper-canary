n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    s = n(317770),
    a = n(51596),
    o = n(823385),
    c = n(900085);
let d = 'QUICK_SWITCHER_MODAL_KEY';
class u extends s.Z {
    _initialize() {
        l.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), l.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        l.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), l.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        o.Z.isOpen() &&
            !(0, r.nfh)(d) &&
            (0, r.h7j)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: d,
                instant: !0,
                onCloseCallback: a.Cp
            });
    }
    handleHide() {
        (0, r.Mr3)(d);
    }
}
let _ = new u();
