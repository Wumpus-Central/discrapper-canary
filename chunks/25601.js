n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(481060),
    a = n(616891);
function o(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: a.mentionsBadge,
        "aria-hidden": !0,
        children: (0, r.jsx)(l.mAB, {
            count: t,
            color: n ? i.Z.colors.BACKGROUND_MOD_STRONG.css : i.Z.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
        }),
    });
}
