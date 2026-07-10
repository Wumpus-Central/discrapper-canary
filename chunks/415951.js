"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(174459),
    s = n(408213),
    l = n(890620),
    o = n(260197),
    d = n(652215);
function c() {
    a.default.track(d.HAw.MODAL_DISMISSED, { type: o.mk });
}
let u = {
    openMemberVerificationModal(e, t, u) {
        !__OVERLAY__ &&
            (a.default.track(d.HAw.OPEN_MODAL, { type: o.mk, guild_id: e }),
            (0, r.openModalLazy)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("35316"),
                        n.e("23549"),
                        n.e("69722"),
                        n.e("80083"),
                        n.e("28510"),
                        n.e("83566"),
                        n.e("78104"),
                        n.e("8502"),
                        n.e("20802"),
                        n.e("31299"),
                        n.e("30593"),
                        n.e("60235"),
                        n.e("43437"),
                        n.e("86127"),
                        n.e("75842"),
                        n.e("8891"),
                        n.e("3589"),
                        n.e("90757"),
                        n.e("14285"),
                        n.e("28152"),
                        n.e("27323"),
                        n.e("65826"),
                        n.e("49520"),
                        n.e("8563"),
                        n.e("58164"),
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
                            inviteKey: u,
                            onComplete: _,
                            onClose: async function () {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e)
                                    if (l.YN.getState().hasUnsubmittedChanges) return void (0, l.C7)(!0);
                                    else c();
                                await n.onClose();
                            },
                        });
                },
                {
                    modalKey: o.LC,
                    onCloseRequest: () => {
                        c(), l.YN.getState().hasUnsubmittedChanges ? (0, l.C7)(!0) : (0, r.closeModal)(o.LC);
                    },
                    onCloseCallback: t,
                },
            ));
        async function _(t) {
            await s.Ay.submitVerificationForm(e, t);
        }
    },
    closeMemberVerificationModal() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        e || c(), (0, r.closeModal)(o.LC);
    },
    openMemberVerificationPreviewModal(e) {
        (0, r.openModalLazy)(async () => {
            let { default: t } = await Promise.all([
                n.e("35316"),
                n.e("23549"),
                n.e("69722"),
                n.e("80083"),
                n.e("28510"),
                n.e("83566"),
                n.e("78104"),
                n.e("8502"),
                n.e("20802"),
                n.e("31299"),
                n.e("30593"),
                n.e("60235"),
                n.e("43437"),
                n.e("86127"),
                n.e("75842"),
                n.e("8891"),
                n.e("3589"),
                n.e("90757"),
                n.e("14285"),
                n.e("28152"),
                n.e("27323"),
                n.e("65826"),
                n.e("49520"),
                n.e("8563"),
                n.e("58164"),
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
