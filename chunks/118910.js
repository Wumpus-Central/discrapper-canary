n.d(t, { a: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(378298),
    s = n(473092),
    o = n(237292);
function l(e) {
    let { channelId: t, warningId: l, senderId: u, warningType: c } = e;
    if (!(0, o.mG)({ location: 'takeover-modal' })) return;
    let d = () => {
        (0, a.T)(t, [l]),
            (0, s.qc)({
                channelId: t,
                senderId: u,
                warningId: l,
                warningType: c,
                cta: s.NM.USER_TAKEOVER_MODAL_DISMISS,
                isNudgeWarning: !1
            });
    };
    (0, r.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('49508'), n.e('59650')]).then(n.bind(n, 955708));
            return (n) =>
                (0, i.jsx)(e, {
                    channelId: t,
                    warningId: l,
                    senderId: u,
                    warningType: c,
                    modalProps: n
                });
        },
        {
            backdropStyle: r.fCB.BLUR,
            onCloseCallback: d
        }
    );
}
