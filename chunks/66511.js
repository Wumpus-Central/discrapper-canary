var i = r(200651);
r(192379);
var a = r(952265),
    s = r(626135),
    o = r(863249),
    l = r(266395),
    u = r(592286),
    c = r(981631);
let d = () => {
        s.default.track(c.rMx.MODAL_DISMISSED, { type: u.N4 });
    },
    f = (e) => {
        s.default.track(c.rMx.OPEN_MODAL, {
            type: u.N4,
            guild_id: e
        });
    };
n.Z = {
    openMemberVerificationModal(e, n) {
        if (__OVERLAY__) return;
        f(e);
        let s = async (n) => {
            await o.ZP.submitVerificationForm(e, n);
        };
        (0, a.ZD)(
            async () => {
                let { default: n } = await Promise.all([r.e('53967'), r.e('80026'), r.e('77514')]).then(r.bind(r, 645264));
                return (r) =>
                    (0, i.jsx)(n, {
                        ...r,
                        guildId: e,
                        onComplete: s,
                        onClose: function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!e) {
                                if (l.rb.getState().hasUnsubmittedChanges) {
                                    (0, l.PE)(!0);
                                    return;
                                }
                                d();
                            }
                            r.onClose();
                        }
                    });
            },
            {
                modalKey: u.Pn,
                onCloseRequest: () => {
                    d(), l.rb.getState().hasUnsubmittedChanges ? (0, l.PE)(!0) : (0, a.Mr)(u.Pn);
                },
                onCloseCallback: n
            }
        );
    },
    closeMemberVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !e && d(), (0, a.Mr)(u.Pn);
    }
};
