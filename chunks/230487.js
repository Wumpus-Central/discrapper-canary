n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(740492),
    a = n(626135),
    s = n(358085),
    o = n(998502),
    d = n(258220),
    c = n(981631);
let u = 'activity-hardware-acceleration-modal';
function h(e) {
    r.ZP.disableActivityHardwareAccelerationPrompt ||
        !s.isPlatformEmbedded ||
        o.ZP.getEnableHardwareAcceleration() ||
        (0, l.ZDy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 258220));
                return (n) =>
                    (0, i.jsx)(t, {
                        applicationId: e,
                        ...n
                    });
            },
            {
                modalKey: u,
                onCloseRequest: () => {
                    a.default.track(c.rMx.MODAL_DISMISSED, { type: d.r }), (0, l.Mr3)(u);
                }
            }
        );
}
