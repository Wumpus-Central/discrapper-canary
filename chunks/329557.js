n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    a = n(51596),
    o = n(823385),
    c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends s.Z {
    _initialize() {
        r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    _terminate() {
        r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
    }
    handleShow() {
        o.Z.isOpen() &&
            !(0, l.nfh)(u) &&
            (0, l.h7j)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: u,
                instant: !0,
                onCloseCallback: a.Cp
            });
    }
    handleHide() {
        (0, l.Mr3)(u);
    }
}
let E = new d();
