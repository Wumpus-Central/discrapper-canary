n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(831209),
    l = n(481060),
    o = n(646094);
function a(e) {
    let { mentionsCount: t, isMentionLowImportance: n } = e;
    return (0, r.jsx)('div', {
        className: o.mentionsBadge,
        'aria-hidden': !0,
        children: (0, r.jsx)(l.mAB, {
            count: t,
            color: n ? i.Z.BACKGROUND_ACCENT : i.Z.STATUS_DANGER
        })
    });
}
