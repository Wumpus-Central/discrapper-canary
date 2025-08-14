n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(674701),
    a = n(934415),
    s = n(834129),
    l = n(981631),
    c = n(60044);
function u(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: u, channel: d } = e;
    return (0, r.jsx)(s.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: c.icon }),
        children: (0, r.jsx)(o.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: o.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, a.mE)(d),
            analyticsSection: l.jXE.CHANNEL,
            giftIntentSecondaryAction: u,
        }),
    });
}
