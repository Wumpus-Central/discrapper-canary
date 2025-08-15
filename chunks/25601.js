n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(831209),
    l = n(481060),
    o = n(655645);
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
