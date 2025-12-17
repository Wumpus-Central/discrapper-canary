a.d(t, { n: () => v }), a(953529);
var r = a(54381),
    n = a(473749),
    o = a(481060),
    i = a(518727),
    c = a(585483),
    l = a(453227),
    d = a(709093),
    s = a(741245),
    b = a(783017),
    f = a(317269),
    p = a(474936),
    u = a(981631),
    m = a(388032),
    C = a(745769);
function h(e) {
    let { onClose: t } = e,
        a = (0, r.jsx)(o.Text, {
            className: C.description,
            variant: "text-md/normal",
            children: m.intl.string(m.t.FCsTCk),
        });
    return (0, r.jsx)(b.Z, {
        type: s.ZP.Types.PREMIUM_ACTIVATED,
        text: a,
        buttonText: m.intl.string(m.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function S(e) {
    let { onClose: t } = e;
    return (0, r.jsx)(f.ZP, {
        planId: p.Xh.PREMIUM_MONTH_TIER_0,
        onClose: t,
    });
}
let v = (e) => {
    let { transitionState: t, onClose: a, premiumType: s } = e,
        b = s === p.PremiumTypes.TIER_0,
        f = n.useCallback(() => {
            c.S.dispatch(u.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                l.Z.isDisplayingWowMomentConfirmation && l.Z.isAnimated
                    ? setTimeout(() => {
                          a();
                      }, i.P)
                    : a();
        }, [a]);
    return (0, r.jsxs)(o.Y0X, {
        className: C.root,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, r.jsx)(d.Z, {
                onClose: f,
                upgradeToPremiumType: s,
            }),
            (0, r.jsx)(o.hzk, { children: (0, r.jsx)(b ? S : h, { onClose: f }) }),
        ],
    });
};
