"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(954571),
    a = n(408213),
    o = n(890620),
    l = n(260197),
    u = n(652215);
let d = () => {
        s.default.track(u.HAw.MODAL_DISMISSED, { type: l.mk });
    },
    c = {
        openMemberVerificationModal(e, t, c) {
            if (__OVERLAY__) return;
            s.default.track(u.HAw.OPEN_MODAL, { type: l.mk, guild_id: e });
            let _ = async (t) => {
                await a.Ay.submitVerificationForm(e, t);
            };
            (0, i.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("24199"),
                        n.e("57036"),
                        n.e("70474"),
                        n.e("76640"),
                        n.e("7175"),
                        n.e("55202"),
                        n.e("23353"),
                        n.e("73667"),
                        n.e("11250"),
                        n.e("14138"),
                        n.e("3442"),
                        n.e("85071"),
                        n.e("88017"),
                        n.e("70994"),
                        n.e("17239"),
                        n.e("24267"),
                        n.e("51793"),
                        n.e("58164"),
                        n.e("81645"),
                        n.e("36682"),
                        n.e("63070"),
                        n.e("25370"),
                        n.e("96313"),
                        n.e("97386"),
                        n.e("8458"),
                        n.e("17422"),
                        n.e("38419"),
                        n.e("58380"),
                    ]).then(n.bind(n, 89473));
                    return (n) =>
                        (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            inviteKey: c,
                            onComplete: _,
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
                        d(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(!0) : (0, i.closeModal)(l.LC);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || d(), (0, i.closeModal)(l.LC);
        },
        openMemberVerificationPreviewModal(e) {
            (0, i.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("24199"),
                    n.e("57036"),
                    n.e("70474"),
                    n.e("76640"),
                    n.e("7175"),
                    n.e("55202"),
                    n.e("23353"),
                    n.e("73667"),
                    n.e("11250"),
                    n.e("14138"),
                    n.e("3442"),
                    n.e("85071"),
                    n.e("88017"),
                    n.e("70994"),
                    n.e("17239"),
                    n.e("24267"),
                    n.e("51793"),
                    n.e("58164"),
                    n.e("81645"),
                    n.e("36682"),
                    n.e("63070"),
                    n.e("25370"),
                    n.e("96313"),
                    n.e("97386"),
                    n.e("8458"),
                    n.e("17422"),
                    n.e("38419"),
                    n.e("58380"),
                ]).then(n.bind(n, 89473));
                return (n) => (0, r.jsx)(t, { ...n, guildId: e, isPreview: !0 });
            });
        },
    };
