"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(688810),
    a = n(979474),
    o = n(746174),
    c = n(961350),
    d = n(994500),
    u = n(993401),
    h = n(518477),
    A = n(652215),
    m = n(985018);
function p(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, r.Ay)(),
        p = (0, s.bG)([c.default], () => c.default.getId() === t.id),
        g = (0, s.bG)([d.A], () => d.A.isBlockedOrIgnored(t.id) || d.A.isSpam(t.id)),
        _ = (0, o.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: f } = (0, a.$)({
            giftRecipient: t,
            analyticsLocations: n,
            analyticsObject: {
                page: A.liQ.USER_PROFILE,
                section: A.JJy.USER_PROFILE,
                object: A.ZSU.BUTTON_ICON,
                objectType: A.AnalyticsObjectTypes.GIFT,
            },
            location: "user-profile-gifting-banner-button",
        });
    return null == t || t.bot || p || g || !_
        ? null
        : (0, i.jsx)(u.br, { icon: l.okO, tooltipText: m.intl.string(m.t.PEjaCx), action: h.pt.GIFT, onClick: f });
}
