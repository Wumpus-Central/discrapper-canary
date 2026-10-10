r.d(t, { A: () => o });
var n = r(477900);
r(582128);
var i = r(661531),
    l = r(812993),
    a = r(146630);
function o(e) {
    let { mentionsCount: t, isMentionLowImportance: r } = e;
    return (0, n.jsx)("div", {
        className: a.R,
        "aria-hidden": !0,
        children: (0, n.jsx)(l.hV, {
            count: t,
            color: r ? i.A.colors.BACKGROUND_MOD_STRONG.css : i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
