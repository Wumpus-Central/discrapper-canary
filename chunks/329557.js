n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    o = n(51596),
    a = n(823385),
    c = n(900085);
let d = 'QUICK_SWITCHER_MODAL_KEY';
class u extends s.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        a.Z.isOpen() &&
            !(0, l.nfh)(d) &&
            (0, l.h7j)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: d,
                instant: !0,
                onCloseCallback: o.Cp
            });
    }
    handleHide() {
        (0, l.Mr3)(d);
    }
}
let _ = new u();
