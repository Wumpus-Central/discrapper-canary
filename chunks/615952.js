n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(688810),
    r = n(233971),
    o = n(746174),
    c = n(961350),
    d = n(994500),
    u = n(993401),
    h = n(518477),
    A = n(652215),
    _ = n(985018);
function m(e) {
    let { user: t } = e,
        { analyticsLocations: n } = (0, a.Ay)(),
        m = (0, l.bG)([c.default], () => c.default.getId() === t.id),
        g = (0, l.bG)([d.A], () => d.A.isBlockedOrIgnored(t.id) || d.A.isSpam(t.id)),
        p = (0, o.j)("UserProfileGiftingBannerButton"),
        { openGiftModal: f } = (0, r.$)({
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
    return null == t || t.bot || m || g || !p
        ? null
        : (0, i.jsx)(u.br, { icon: s.okO, tooltipText: _.intl.string(_.t.PEjaCx), action: h.pt.GIFT, onClick: f });
}
