n.d(t, { Z: () => a });
var r = n(54381);
n(473749);
var i = n(831209),
    l = n(481060),
    o = n(49675);
function a(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)("div", {
        className: o.mentionsBadge,
        "aria-hidden": !0,
        children: (0, r.jsx)(l.mAB, {
            count: t,
            color: n ? i.Z.BACKGROUND_ACCENT : i.Z.STATUS_DANGER,
        }),
    });
}
