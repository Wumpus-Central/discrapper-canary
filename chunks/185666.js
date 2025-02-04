n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    o = n(731971),
    a = n(626135),
    c = n(472365),
    d = n(379164),
    u = n(590965),
    _ = n(981631);
let E = 'INVITE_MODAL_KEY';
class h extends s.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, l.Mr3)(E), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal() {
        u.Z.isOpen() &&
            !(0, l.nfh)(E) &&
            (0, l.h7j)((e) => (0, i.jsx)(c.Z, { ...e }), {
                modalKey: E,
                onCloseRequest: () => {
                    let e = (0, o.e7)(),
                        t = (0, o._J)();
                    a.default.track(_.rMx.INVITE_ACCEPT_DISMISSED, {
                        invite_code: e,
                        guild_id: t
                    }),
                        d.Z.close();
                }
            });
    }
    handleCloseModal() {
        (0, l.Mr3)(E);
    }
}
let p = new h();
