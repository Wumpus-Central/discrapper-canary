n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    s = n(317770),
    a = n(731971),
    o = n(626135),
    c = n(379164),
    u = n(590965),
    d = n(981631);
let E = 'INVITE_MODAL_KEY';
class _ extends s.Z {
    _initialize() {
        r.Z.subscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.subscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    _terminate() {
        (0, l.Mr3)(E), r.Z.unsubscribe('INVITE_MODAL_OPEN', this.handleOpenModal), r.Z.unsubscribe('INVITE_MODAL_CLOSE', this.handleCloseModal);
    }
    handleOpenModal(e) {
        let { context: t } = e;
        u.Z.isOpen() &&
            !(0, l.nfh)(E) &&
            (0, l.ZDy)(
                async () => {
                    let { default: e } = await Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('17298'), n.e('76540'), n.e('17938'), n.e('81966'), n.e('22646'), n.e('3940'), n.e('78258'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('72992'), n.e('49508'), n.e('25183'), n.e('28044'), n.e('44307'), n.e('32926'), n.e('24725')]).then(n.bind(n, 472365));
                    return (t) => (0, i.jsx)(e, { ...t });
                },
                {
                    modalKey: E,
                    contextKey: (0, l.VnL)(t),
                    onCloseRequest: () => {
                        let e = (0, a.e7)(),
                            t = (0, a._J)();
                        o.default.track(d.rMx.INVITE_ACCEPT_DISMISSED, {
                            invite_code: e,
                            guild_id: t
                        }),
                            c.Z.close();
                    }
                }
            );
    }
    handleCloseModal() {
        (0, l.Mr3)(E);
    }
}
let h = new _();
