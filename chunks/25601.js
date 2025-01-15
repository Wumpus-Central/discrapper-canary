n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(831209),
    o = n(481060),
    s = n(162520);
function c(e) {
    let { mentionsCount: t, isMentionLowImportance: n, className: l } = e;
    return (0, i.jsx)('div', {
        className: r()(s.mentionsBadge, l),
        'aria-hidden': !0,
        children: (0, i.jsx)(o.NumberBadge, {
            count: t,
            color: n ? a.Z.BACKGROUND_ACCENT : a.Z.STATUS_DANGER
        })
    });
}
