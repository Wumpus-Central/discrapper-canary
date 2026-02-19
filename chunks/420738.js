"use strict";
n.d(t, { U: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    s = n(544231),
    a = n(665909),
    o = n(617641);
function l(e) {
    let { channelId: t, warningId: l, senderId: u, warningType: c } = e;
    if (!(0, o.wv)({ location: "takeover-modal" })) return;
    let d = () => {
        (0, s.xi)(t, [l]),
            (0, a._$)({
                channelId: t,
                senderId: u,
                warningId: l,
                warningType: c,
                cta: a.Wm.USER_TAKEOVER_MODAL_DISMISS,
                isNudgeWarning: !1,
            });
    };
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("45033"), n.e("18108")]).then(n.bind(n, 237170));
            return (n) => (0, r.jsx)(e, { channelId: t, warningId: l, senderId: u, warningType: c, modalProps: n });
        },
        { backdropStyle: i.F2Z.BLUR, onCloseCallback: d },
    );
}
