n.d(t, { a: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(378298),
    a = n(473092),
    s = n(237292);
function l(e) {
    let { channelId: t, warningId: l, senderId: c, warningType: u } = e;
    if (!(0, s.mG)({ location: 'takeover-modal' })) return;
    let d = () => {
        (0, o.T)(t, [l]),
            (0, a.qc)({
                channelId: t,
                senderId: c,
                warningId: l,
                warningType: u,
                cta: a.NM.USER_TAKEOVER_MODAL_DISMISS,
                isNudgeWarning: !1
            });
    };
    (0, i.ZDy)(
        async () => {
            let { default: e } = await Promise.all([n.e('49508'), n.e('59650')]).then(n.bind(n, 955708));
            return (n) =>
                (0, r.jsx)(e, {
                    channelId: t,
                    warningId: l,
                    senderId: c,
                    warningType: u,
                    modalProps: n
                });
        },
        {
            backdropStyle: i.fCB.BLUR,
            onCloseCallback: d
        }
    );
}
