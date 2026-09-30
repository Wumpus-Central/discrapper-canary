r.d(c, { A: () => e });
var a = r(477900);
r(582128);
var i = r(661531),
    o = r(812993),
    d = r(146630);
function e(s) {
    let { mentionsCount: c, isMentionLowImportance: r } = s;
    return (0, a.jsx)("div", {
        className: d.R,
        "aria-hidden": !0,
        children: (0, a.jsx)(o.hV, {
            count: c,
            color: r ? i.A.colors.BACKGROUND_MOD_STRONG.css : i.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
