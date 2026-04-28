"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(954571),
    a = n(408213),
    o = n(890620),
    l = n(260197),
    _ = n(652215);
let d = () => {
        s.default.track(_.HAw.MODAL_DISMISSED, { type: l.mk });
    },
    u = {
        openMemberVerificationModal(e, t, u) {
            if (__OVERLAY__) return;
            s.default.track(_.HAw.OPEN_MODAL, { type: l.mk, guild_id: e });
            let c = async (t) => {
                await a.Ay.submitVerificationForm(e, t);
            };
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("24199"),
                        n.e("57036"),
                        n.e("88394"),
                        n.e("80527"),
                        n.e("21909"),
                        n.e("31825"),
                        n.e("23353"),
                        n.e("96123"),
                        n.e("7175"),
                        n.e("37249"),
                        n.e("14138"),
                        n.e("8971"),
                        n.e("88017"),
                        n.e("77404"),
                        n.e("1040"),
                        n.e("64615"),
                        n.e("17239"),
                        n.e("67849"),
                        n.e("64492"),
                        n.e("20861"),
                        n.e("36682"),
                        n.e("45723"),
                        n.e("56871"),
                        n.e("69601"),
                        n.e("63191"),
                        n.e("51444"),
                        n.e("62290"),
                        n.e("80973"),
                        n.e("95208"),
                        n.e("76390"),
                        n.e("45675"),
                        n.e("8458"),
                        n.e("20172"),
                        n.e("5181"),
                    ]).then(n.bind(n, 823591));
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
                                    else d();
                                await n.onClose();
                            },
                        });
                },
                {
                    modalKey: l.LC,
                    onCloseRequest: () => {
                        d(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(!0) : (0, r.closeModal)(l.LC);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || d(), (0, r.closeModal)(l.LC);
        },
        openMemberVerificationPreviewModal(e) {
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("88394"),
                    n.e("80527"),
                    n.e("21909"),
                    n.e("31825"),
                    n.e("23353"),
                    n.e("96123"),
                    n.e("7175"),
                    n.e("37249"),
                    n.e("14138"),
                    n.e("8971"),
                    n.e("88017"),
                    n.e("77404"),
                    n.e("1040"),
                    n.e("64615"),
                    n.e("17239"),
                    n.e("67849"),
                    n.e("64492"),
                    n.e("20861"),
                    n.e("36682"),
                    n.e("45723"),
                    n.e("56871"),
                    n.e("69601"),
                    n.e("63191"),
                    n.e("51444"),
                    n.e("62290"),
                    n.e("80973"),
                    n.e("95208"),
                    n.e("76390"),
                    n.e("45675"),
                    n.e("8458"),
                    n.e("20172"),
                    n.e("5181"),
                ]).then(n.bind(n, 823591));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, isPreview: !0 });
            });
        },
    };
