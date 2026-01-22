r.d(t, {
    B: () => x,
}),
    r(228524);
var a = r(627968),
    n = r(64700),
    c = r(397927),
    i = r(639289),
    o = r(203982),
    f = r(573359),
    s = r(28003),
    d = r(659746),
    l = r(4471),
    b = r(380083),
    u = r(788868),
    p = r(652215),
    _ = r(985018),
    m = r(401517);

function y(e) {
    let { onClose: t } = e,
        r = (0, a.jsx)(c.Text, {
            className: m.h,
            variant: "text-md/normal",
            children: _.intl.string(_.t.FCsTCk),
        });
    return (0, a.jsx)(l.A, {
        type: d.Ay.Types.PREMIUM_ACTIVATED,
        text: r,
        buttonText: _.intl.string(_.t.TkTvBz),
        hideClose: !1,
        onClose: t,
    });
}

function g(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(b.Ay, {
        planId: u.gD.PREMIUM_MONTH_TIER_0,
        onClose: t,
    });
}
let x = (e) => {
    let { transitionState: t, onClose: r, premiumType: d } = e,
        l = d === u.PremiumTypes.TIER_0,
        b = n.useCallback(() => {
            o._.dispatch(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED),
                f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated
                    ? setTimeout(() => {
                          r();
                      }, i.K)
                    : r();
        }, [r]);
    return (0, a.jsxs)(c.EOs, {
        "data-migration-pending": !0,
        className: m.z,
        transitionState: t,
        parentComponent: "ResubscribeSuccessStep",
        children: [
            (0, a.jsx)(s.A, {
                onClose: b,
                upgradeToPremiumType: d,
            }),
            (0, a.jsx)(c.$mQ, {
                "data-migration-pending": !0,
                children: (0, a.jsx)(l ? g : y, {
                    onClose: b,
                }),
            }),
        ],
    });
};
