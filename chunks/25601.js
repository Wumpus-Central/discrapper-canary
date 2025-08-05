n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(831209),
    l = n(481060),
    o = n(646094);
function s(e) {
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
