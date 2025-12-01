n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(692547),
    l = n(481060),
    o = n(655645);
function a(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: o.mentionsBadge,
        "aria-hidden": !0,
        children: (0, r.jsx)(l.mAB, {
            count: t,
            color: n ? i.Z.colors.BACKGROUND_ACCENT.css : i.Z.colors.STATUS_DANGER.css,
        }),
    });
}
