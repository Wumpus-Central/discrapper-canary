"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(192308),
    s = n(174459),
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
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("12296"),
                        n.e("33799"),
                        n.e("52077"),
                        n.e("11328"),
                        n.e("31299"),
                        n.e("734"),
                        n.e("24727"),
                        n.e("60235"),
                        n.e("43437"),
                        n.e("86127"),
                        n.e("75842"),
                        n.e("8891"),
                        n.e("3589"),
                        n.e("74810"),
                        n.e("90664"),
                        n.e("14285"),
                        n.e("28152"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("58164"),
                        n.e("27323"),
                        n.e("71470"),
                        n.e("37490"),
                        n.e("70008"),
                        n.e("8364"),
                        n.e("86692"),
                        n.e("8458"),
                        n.e("37479"),
                        n.e("84861"),
                        n.e("50096"),
                        n.e("84438"),
                    ]).then(n.bind(n, 823591));
                    return (n) =>
                        (0, i.jsx)(t, {
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
                        c(), o.YN.getState().hasUnsubmittedChanges ? (0, o.C7)(!0) : (0, r.closeModal)(l.LC);
                    },
                    onCloseCallback: t,
                },
            );
        },
        closeMemberVerificationModal() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e || c(), (0, r.closeModal)(l.LC);
        },
        openMemberVerificationPreviewModal(e) {
            (0, r.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("12296"),
                    n.e("33799"),
                    n.e("52077"),
                    n.e("11328"),
                    n.e("31299"),
                    n.e("734"),
                    n.e("24727"),
                    n.e("60235"),
                    n.e("43437"),
                    n.e("86127"),
                    n.e("75842"),
                    n.e("8891"),
                    n.e("3589"),
                    n.e("74810"),
                    n.e("90664"),
                    n.e("14285"),
                    n.e("28152"),
                    n.e("65826"),
                    n.e("49520"),
                    n.e("58164"),
                    n.e("27323"),
                    n.e("71470"),
                    n.e("37490"),
                    n.e("70008"),
                    n.e("8364"),
                    n.e("86692"),
                    n.e("8458"),
                    n.e("37479"),
                    n.e("84861"),
                    n.e("50096"),
                    n.e("84438"),
                ]).then(n.bind(n, 823591));
                return (n) => (0, i.jsx)(t, { ...n, guildId: e, isPreview: !0 });
            });
        },
    };
