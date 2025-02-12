n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(674701),
    r = n(934415),
    s = n(834129),
    o = n(981631),
    c = n(89526);
function d(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: d, channel: u } = e;
    return (0, i.jsx)(s.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, i.jsx)(l.Dkj, { colorClass: c.icon }),
        children: (0, i.jsx)(a.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: a.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, r.mE)(u),
            analyticsSection: o.jXE.CHANNEL,
            giftIntentSecondaryAction: d
        })
    });
}
