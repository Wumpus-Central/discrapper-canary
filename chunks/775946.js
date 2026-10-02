e.d(n, { A: () => c });
var I = e(477900);
e(582128);
var s = e(661531),
    N = e(812993),
    u = e(146630);
function c(t) {
    let { mentionsCount: n, isMentionLowImportance: e } = t;
    return (0, I.jsx)("div", {
        className: u.R,
        "aria-hidden": !0,
        children: (0, I.jsx)(N.hV, {
            count: n,
            color: e ? s.A.colors.BACKGROUND_MOD_STRONG.css : s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
