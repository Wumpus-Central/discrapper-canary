n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(674701),
    o = n(934415),
    l = n(834129),
    s = n(981631),
    c = n(687173);
function d(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: d, channel: u } = e;
    return (0, r.jsx)(l.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: c.icon }),
        children: (0, r.jsx)(a.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: a.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, o.mE)(u),
            analyticsSection: s.jXE.CHANNEL,
            giftIntentSecondaryAction: d
        })
    });
}
