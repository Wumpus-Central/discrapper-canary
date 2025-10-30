n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(674701),
    o = n(934415),
    s = n(834129),
    l = n(981631),
    c = n(286168);
function u(e) {
    let { giftIntentType: t, recipientUser: n, giftIntentSecondaryAction: u, channel: d } = e;
    return (0, r.jsx)(s.Z, {
        contentClassName: c.messageContentContainer,
        iconContainerClassName: c.iconContainer,
        iconNode: (0, r.jsx)(i.Dkj, { colorClass: c.icon }),
        children: (0, r.jsx)(a.Z, {
            giftIntentType: t,
            premiumGiftIntentCardType: a.U.SYSTEM_MESSAGE,
            recipientUser: n,
            analyticsPage: (0, o.mE)(d),
            analyticsSection: l.jXE.CHANNEL,
            giftIntentSecondaryAction: u,
        }),
    });
}
