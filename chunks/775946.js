e.d(n, { A: () => o });
var N = e(477900);
e(582128);
var s = e(661531),
    I = e(812993),
    u = e(146630);
function o(t) {
    let { mentionsCount: n, isMentionLowImportance: e } = t;
    return (0, N.jsx)("div", {
        className: u.R,
        "aria-hidden": !0,
        children: (0, N.jsx)(I.hV, {
            count: n,
            color: e ? s.A.colors.BACKGROUND_MOD_STRONG.css : s.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
