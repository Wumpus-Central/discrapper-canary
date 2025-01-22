var i = r(200651);
r(192379);
var a = r(952265),
    o = r(626135),
    s = r(863249),
    l = r(63568),
    u = r(266395),
    c = r(592286),
    d = r(981631);
let f = () => {
        o.default.track(d.rMx.MODAL_DISMISSED, { type: c.N4 });
    },
    p = (e) => {
        o.default.track(d.rMx.OPEN_MODAL, {
            type: c.N4,
            guild_id: e
        });
    };
n.Z = {
    openMemberVerificationModal(e, n) {
        if (__OVERLAY__) return;
        p(e);
        let o = async (n) => {
                await s.ZP.submitVerificationForm(e, n);
            },
            d = (0, l.K2)(e, 'MemberVerificationModalActionCreators');
        (0, a.ZD)(
            async () => {
                let { default: n } = d ? await Promise.all([r.e('53967'), r.e('99916'), r.e('55774'), r.e('56835')]).then(r.bind(r, 309135)) : await Promise.all([r.e('53967'), r.e('99916'), r.e('80026'), r.e('29260')]).then(r.bind(r, 645264));
                return (r) =>
                    (0, i.jsx)(n, {
                        ...r,
                        guildId: e,
                        onComplete: o,
                        onClose: function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (!e) {
                                if (u.rb.getState().hasUnsubmittedChanges) {
                                    (0, u.PE)(!0);
                                    return;
                                }
                                f();
                            }
                            r.onClose();
                        }
                    });
            },
            {
                modalKey: c.Pn,
                onCloseRequest: () => {
                    f(), u.rb.getState().hasUnsubmittedChanges ? (0, u.PE)(!0) : (0, a.Mr)(c.Pn);
                },
                onCloseCallback: n
            }
        );
    },
    closeMemberVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        !e && f(), (0, a.Mr)(c.Pn);
    },
    openMemberVerificationPreviewModal(e) {
        let n = (0, l.K2)(e, 'openMemberVerificationPreviewModal');
        (0, a.ZD)(async () => {
            let { default: a } = n ? await Promise.all([r.e('53967'), r.e('99916'), r.e('55774'), r.e('56835')]).then(r.bind(r, 309135)) : await Promise.all([r.e('53967'), r.e('99916'), r.e('80026'), r.e('29260')]).then(r.bind(r, 645264));
            return (n) =>
                (0, i.jsx)(a, {
                    ...n,
                    guildId: e,
                    isPreview: !0
                });
        });
    }
};
