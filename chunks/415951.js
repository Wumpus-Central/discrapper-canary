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
function c() {
    s.default.track(u.HAw.MODAL_DISMISSED, { type: l.mk });
}
let d = {
    openMemberVerificationModal(e, t, d) {
        !__OVERLAY__ &&
            (s.default.track(u.HAw.OPEN_MODAL, { type: l.mk, guild_id: e }),
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("8273"),
                        n.e("42714"),
                        n.e("85479"),
                        n.e("33566"),
                        n.e("97198"),
                        n.e("92424"),
                        n.e("31383"),
                        n.e("21858"),
                        n.e("6051"),
                        n.e("79877"),
                        n.e("43437"),
                        n.e("86127"),
                        n.e("75842"),
                        n.e("8891"),
                        n.e("3589"),
                        n.e("12193"),
                        n.e("14285"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("58164"),
                        n.e("71470"),
                        n.e("37490"),
                        n.e("27323"),
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
            ));
        async function _(t) {
            await a.Ay.submitVerificationForm(e, t);
        }
    },
    closeMemberVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e || c(), (0, r.closeModal)(l.LC);
    },
    openMemberVerificationPreviewModal(e) {
        (0, r.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("8273"),
                n.e("42714"),
                n.e("85479"),
                n.e("33566"),
                n.e("97198"),
                n.e("92424"),
                n.e("31383"),
                n.e("21858"),
                n.e("6051"),
                n.e("79877"),
                n.e("43437"),
                n.e("86127"),
                n.e("75842"),
                n.e("8891"),
                n.e("3589"),
                n.e("12193"),
                n.e("14285"),
                n.e("65826"),
                n.e("49520"),
                n.e("58164"),
                n.e("71470"),
                n.e("37490"),
                n.e("27323"),
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
