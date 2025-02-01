e.d(n, { default: () => c }), e(47120);
var i = e(200651),
    a = e(192379),
    s = e(481060),
    l = e(693546),
    r = e(246364),
    u = e(388032);
let c = (t) => {
    let { guildId: n, userId: e, guildJoinRequestId: c, onConfirm: d, onError: h, modalProps: o } = t,
        [p, x] = a.useState(),
        C = async () => {
            try {
                await l.Z.updateGuildJoinRequest(n, e, c, r.wB.REJECTED, p), null == d || d();
            } catch (t) {
                null == h || h();
            }
        };
    return (0, i.jsx)(s.ConfirmModal, {
        header: u.intl.string(u.t['mFP/q6']),
        cancelText: u.intl.string(u.t['ETE/oK']),
        confirmText: u.intl.string(u.t.hDtbs7),
        onConfirm: C,
        ...o,
        children: (0, i.jsx)(s.Kx8, {
            value: p,
            onChange: x,
            maxLength: 160
        })
    });
};
