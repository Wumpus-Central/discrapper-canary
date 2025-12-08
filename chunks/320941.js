r.d(t, { n: () => S }), r(953529);
var a = r(54381),
    n = r(473749),
    o = r(481060),
    i = r(518727),
    l = r(585483),
    c = r(453227),
    s = r(709093),
    d = r(741245),
    p = r(783017),
    u = r(317269),
    b = r(474936),
    m = r(981631),
    _ = r(388032),
    h = r(724683);
function f(e) {
    let { onClose: t } = e,
        r = (0, a.jsx)(o.Text, {
            className: h.description,
            variant: "text-md/normal",
            children: _.intl.string(_.t.FCsTCk),
        });
    return (0, a.jsx)(p.Z, {
        type: d.ZP.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: _.intl.string(_.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}
function C(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(u.ZP, {
        planId: b.Xh.PREMIUM_MONTH_TIER_0,
        onClose: t,
    });
}
let S = (e) => {
    let { transitionState: t, onClose: r, premiumType: d } = e,
        p = d === b.PremiumTypes.TIER_0,
        u = n.useCallback(() => {
            l.S.dispatch(m.CkL.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                c.Z.isDisplayingWowMomentConfirmation && c.Z.isAnimated
                    ? setTimeout(() => {
                          r();
                      }, i.P)
                    : r();
        }, [r]);
    return (0, a.jsxs)(o.Y0X, {
        className: h.root,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, a.jsx)(s.Z, {
                onClose: u,
                upgradeToPremiumType: d,
            }),
            (0, a.jsx)(o.hzk, { children: (0, a.jsx)(p ? C : f, { onClose: u }) }),
        ],
    });
};
