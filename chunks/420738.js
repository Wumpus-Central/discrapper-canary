"use strict";
n.d(t, { U: () => u });
var r = n(627968);
n(64700);
var i = n(192308),
    s = n(892491),
    a = n(544231),
    o = n(665909),
    l = n(617641);
function u(e) {
    let { channelId: t, warningId: u, senderId: d, warningType: c } = e;
    (0, l.wv)({ location: "takeover-modal" }) &&
        (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("93103"), n.e("45033"), n.e("79137")]).then(
                    n.bind(n, 237170),
                );
                return (n) => (0, r.jsx)(e, { channelId: t, warningId: u, senderId: d, warningType: c, modalProps: n });
            },
            {
                backdropStyle: s.F.BLUR,
                onCloseCallback: () => {
                    (0, a.xi)(t, [u]),
                        (0, o._$)({
                            channelId: t,
                            senderId: d,
                            warningId: u,
                            warningType: c,
                            cta: o.Wm.USER_TAKEOVER_MODAL_DISMISS,
                            isNudgeWarning: !1,
                        });
                },
            },
        );
}
