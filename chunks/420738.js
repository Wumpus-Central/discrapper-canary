n.d(t, {
    U: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(544231),
    s = n(665909),
    o = n(617641);

function l(e) {
    let { channelId: t, warningId: l, senderId: c, warningType: u } = e;
    if (
        !(0, o.wv)({
            location: "takeover-modal",
        })
    )
        return;
    let d = () => {
        (0, a.xi)(t, [l]),
            (0, s._$)({
                channelId: t,
                senderId: c,
                warningId: l,
                warningType: u,
                cta: s.Wm.USER_TAKEOVER_MODAL_DISMISS,
                isNudgeWarning: !1,
            });
    };
    (0, i.mMO)(
        async () => {
            let { default: e } = await Promise.all([n.e("45033"), n.e("18108")]).then(n.bind(n, 237170));
            return (n) =>
                (0, r.jsx)(e, {
                    channelId: t,
                    warningId: l,
                    senderId: c,
                    warningType: u,
                    modalProps: n,
                });
        },
        {
            backdropStyle: i.F2Z.BLUR,
            onCloseCallback: d,
        },
    );
}
