var n = s(200651);
s(192379);
var i = s(481060),
    r = s(570140),
    o = s(317770),
    a = s(731971),
    l = s(472365),
    c = s(590965);
let d = 'INVITE_MODAL_KEY';
class u extends o.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, i.closeModal)(d), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        c.Z.isOpen() &&
            !(0, i.hasModalOpen)(d) &&
            (0, i.openModal)((e) => (0, n.jsx)(l.Z, { ...e }), {
                modalKey: d,
                onCloseRequest: () => {
                    (0, a.oE)(), r.Z.dispatch({ type: 'INVITE_MODAL_CLOSE' });
                }
            });
    }
    handleCloseModal() {
        (0, i.closeModal)(d);
    }
}
t.Z = new u();
