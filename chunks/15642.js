n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(674701),
    a = n(934415),
    o = n(834129),
    s = n(981631),
    c = n(848024);
function u(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: u, channel: d } = e;
    return (0, r.jsx)(o.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: c.icon }),
        children: (0, r.jsx)(l.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: l.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, a.mE)(d),
            analyticsSection: s.jXE.CHANNEL,
            giftIntentSecondaryAction: u
        })
    });
}
