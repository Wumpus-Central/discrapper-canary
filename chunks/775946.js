n.d(t, { A: () => o });
var r = n(477900);
n(582128);
var i = n(661531),
    l = n(812993),
    a = n(146630);
function o(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: a.R,
        "aria-hidden": !0,
        children: (0, r.jsx)(l.hV, {
            count: t,
            color: n ? i.A.colors.BACKGROUND_MOD_STRONG.css : i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
