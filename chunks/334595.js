n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(964404),
    l = n(954571),
    s = n(723702),
    o = n(837921),
    d = n(845187),
    u = n(652215);
let c = "activity-hardware-acceleration-modal";
function A(e) {
    a.Ay.disableActivityHardwareAccelerationPrompt ||
        !s.isPlatformEmbedded ||
        o.Ay.getEnableHardwareAcceleration() ||
        (0, r.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 845187));
                return (n) => (0, i.jsx)(t, { applicationId: e, ...n });
            },
            {
                modalKey: c,
                onCloseRequest: () => {
                    l.default.track(u.HAw.MODAL_DISMISSED, { type: d.a }), (0, r.closeModal)(c);
                },
            },
        );
}
