"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(954571),
    a = n(408213),
    o = n(890620),
    l = n(260197),
    u = n(652215);
let c = () => {
        s.default.track(u.HAw.MODAL_DISMISSED, { type: l.mk });
    },
    d = {
        openMemberVerificationModal(e, t, d) {
            if (__OVERLAY__) return;
            s.default.track(u.HAw.OPEN_MODAL, { type: l.mk, guild_id: e });
            let _ = async (t) => {
                await a.Ay.submitVerificationForm(e, t);
            };
            (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e("97386"), n.e("8458"), n.e("56357")]).then(
                        n.bind(n, 89473),
                    );
                    return (n) =>
                        (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            inviteKey: d,
                            onComplete: _,
                            onClose: async function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e)
                                    if (o.YN.getState().hasUnsubmittedChanges) return void (0, o.C7)(!0);
                                    else c();
                                await n.onClose();
                            },
                        });
                },
                {
                    modalKey: l.LC,
                    onCloseRequest: () => {
                        c(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(!0) : (0, i.closeModal)(l.LC);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || c(), (0, i.closeModal)(l.LC);
        },
        openMemberVerificationPreviewModal(e) {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("97386"), n.e("8458"), n.e("56357")]).then(
                    n.bind(n, 89473),
                );
                return (n) => (0, r.jsx)(t, { ...n, guildId: e, isPreview: !0 });
            });
        },
    };
