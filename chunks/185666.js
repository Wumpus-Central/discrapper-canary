var n = s(200651);
s(192379);
var i = s(481060),
    r = s(570140),
    o = s(317770),
    l = s(731971),
    a = s(626135),
    c = s(472365),
    d = s(379164),
    u = s(590965),
    h = s(981631);
let E = 'INVITE_MODAL_KEY';
class p extends o.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, i.closeModal)(E), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        u.Z.isOpen() &&
            !(0, i.hasModalOpen)(E) &&
            (0, i.openModal)((e) => (0, n.jsx)(c.Z, { ...e }), {
                modalKey: E,
                onCloseRequest: () => {
                    let e = (0, l.e7)(),
                        t = (0, l._J)();
                    a.default.track(h.rMx.INVITE_ACCEPT_DISMISSED, {
                        invite_code: e,
                        guild_id: t
                    }),
                        d.Z.close();
                }
            });
    }
    handleCloseModal() {
        (0, i.closeModal)(E);
    }
}
t.Z = new p();
