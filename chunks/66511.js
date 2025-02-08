n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(952265),
    a = n(626135),
    s = n(863249),
    o = n(63568),
    l = n(266395),
    u = n(592286),
    c = n(981631);
let d = () => {
        a.default.track(c.rMx.MODAL_DISMISSED, { type: u.N4 });
    },
    f = (e) => {
        a.default.track(c.rMx.OPEN_MODAL, {
            type: u.N4,
            guild_id: e
        });
    },
    _ = {
        openMemberVerificationModal(e, t) {
            if (__OVERLAY__) return;
            f(e);
            let a = async (t) => {
                    await s.ZP.submitVerificationForm(e, t);
                },
                c = (0, o.K2)(e, 'MemberVerificationModalActionCreators');
            (0, r.ZD)(
                async () => {
                    let { default: t } = c ? await Promise.all([n.e('54408'), n.e('99916'), n.e('10409'), n.e('2485')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('81038'), n.e('95676')]).then(n.bind(n, 645264));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.rb.getState().hasUnsubmittedChanges) {
                                        (0, l.PE)(!0);
                                        return;
                                    }
                                    d();
                                }
                                n.onClose();
                            }
                        });
                },
                {
                    modalKey: u.Pn,
                    onCloseRequest: () => {
                        d(), l.rb.getState().hasUnsubmittedChanges ? (0, l.PE)(!0) : (0, r.Mr)(u.Pn);
                    },
                    onCloseCallback: t
                }
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || d(), (0, r.Mr)(u.Pn);
        },
        openMemberVerificationPreviewModal(e) {
            let t = (0, o.K2)(e, 'openMemberVerificationPreviewModal');
            (0, r.ZD)(async () => {
                let { default: r } = t ? await Promise.all([n.e('54408'), n.e('99916'), n.e('10409'), n.e('2485')]).then(n.bind(n, 309135)) : await Promise.all([n.e('99916'), n.e('81038'), n.e('95676')]).then(n.bind(n, 645264));
                return (t) =>
                    (0, i.jsx)(r, {
                        ...t,
                        guildId: e,
                        isPreview: !0
                    });
            });
        }
    };
