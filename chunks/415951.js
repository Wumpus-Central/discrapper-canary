"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(954571),
    a = n(408213),
    o = n(890620),
    l = n(260197),
    d = n(652215);
let _ = () => {
        s.default.track(d.HAw.MODAL_DISMISSED, { type: l.mk });
    },
    u = {
        openMemberVerificationModal(e, t, u) {
            if (__OVERLAY__) return;
            s.default.track(d.HAw.OPEN_MODAL, { type: l.mk, guild_id: e });
            let c = async (t) => {
                await a.Ay.submitVerificationForm(e, t);
            };
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([n.e("97386"), n.e("8458"), n.e("9277")]).then(
                        n.bind(n, 823591),
                    );
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            inviteKey: u,
                            onComplete: c,
                            onClose: async function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e)
                                    if (o.YN.getState().hasUnsubmittedChanges) return void (0, o.C7)(!0);
                                    else _();
                                await n.onClose();
                            },
                        });
                },
                {
                    modalKey: l.LC,
                    onCloseRequest: () => {
                        _(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(!0) : (0, r.closeModal)(l.LC);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || _(), (0, r.closeModal)(l.LC);
        },
        openMemberVerificationPreviewModal(e) {
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("97386"), n.e("8458"), n.e("9277")]).then(
                    n.bind(n, 823591),
                );
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, isPreview: !0 });
            });
        },
    };
