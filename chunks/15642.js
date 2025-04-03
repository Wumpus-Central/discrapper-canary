n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(674701),
    l = n(934415),
    o = n(834129),
    s = n(981631),
    c = n(848024);
function u(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: u, channel: d } = e;
    return (0, r.jsx)(o.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: c.icon }),
        children: (0, r.jsx)(a.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: a.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, l.mE)(d),
            analyticsSection: s.jXE.CHANNEL,
            giftIntentSecondaryAction: u
        })
    });
}
