n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    s = n(317770),
    a = n(731971),
    o = n(626135),
    c = n(379164),
    d = n(590965),
    u = n(981631);
let _ = 'INVITE_MODAL_KEY';
class E extends s.Z {
    _initialize() {
        l.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), l.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, r.Mr3)(_), l.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), l.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        d.Z.isOpen() &&
            !(0, r.nfh)(_) &&
            (0, r.ZDy)(
                async () => {
                    let { default: e } = await n.e('86872').then(n.bind(n, 472365));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: _,
                    contextKey: (0, r.VnL)(t),
                    onCloseRequest: () => {
                        let e = (0, a.e7)(),
                            t = (0, a._J)();
                        o.default.track(u.rMx.INVITE_ACCEPT_DISMISSED, {
                            invite_code: e,
                            guild_id: t
                        }),
                            c.Z.close();
                    }
                }
            );
    }
    handleCloseModal() {
        (0, r.Mr3)(_);
    }
}
let h = new E();
