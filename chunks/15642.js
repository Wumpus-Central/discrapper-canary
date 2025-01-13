n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(674701),
    a = n(934415),
    o = n(834129),
    s = n(981631),
    c = n(306136);
function d(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: d, channel: u } = e;
    return (0, i.jsx)(o.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, i.jsx)(r.BellIcon, { colorClass: c.icon }),
        children: (0, i.jsx)(l.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: l.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, a.mE)(u),
            analyticsSection: s.jXE.CHANNEL,
            giftIntentSecondaryAction: d
        })
    });
}
