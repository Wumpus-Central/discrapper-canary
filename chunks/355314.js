r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(174609),
    u = r(703656),
    c = r(210887),
    d = r(914010),
    f = r(594174),
    p = r(626135),
    h = r(424218),
    _ = r(403182),
    m = r(63063),
    g = r(74538),
    E = r(790527),
    v = r(474936),
    y = r(981631),
    b = r(388032),
    I = r(364443);
function T(e) {
    let { onClose: n, ...r } = e,
        T = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        S = (0, o.e7)([c.Z], () => c.Z.theme),
        A = (0, o.e7)([d.Z], () => d.Z.getGuildId()),
        C = S === y.BRd.LIGHT ? 'light' : 'dark',
        N = (0, i.jsx)('img', {
            className: I.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(C, '_v2.png')
        }),
        R = a.useMemo(() => {
            let e = g.ZP.getUserMaxFileSize(T);
            return (0, h.BU)(e / 1024, { useKibibytes: !0 });
        }, [T]),
        O = (0, _.iL)({
            guildId: A,
            onClick: () => {
                window.open(m.Z.getArticleURL(y.BhN.NITRO_FAQ), '_blank');
            }
        }),
        D = (0, i.jsx)('div', {
            className: I.body,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                children: O
            })
        });
    function L() {
        (0, l.Z)(),
            n(),
            p.default.track(y.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: y.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: y.qAy.NAVIGATION_LINK
            }),
            (0, u.uL)(y.Z5c.APPLICATION_STORE);
    }
    return (0, i.jsx)(E.Z, {
        artElement: N,
        artContainerClassName: I.artContainer,
        enableArtBoxShadow: !1,
        type: v.cd.UPLOAD_ERROR_UPSELL,
        title: b.intl.string(b.t['9C+41t']),
        body: D,
        context: b.intl.formatToPlainString(b.t.q5fTZm, { maxSize: R }),
        glowUp: O,
        analyticsLocation: { section: y.jXE.FILE_UPLOAD_POPOUT },
        onClose: n,
        subscriptionTier: v.Si.TIER_2,
        secondaryCTA: b.intl.string(b.t.ZnqyZ2),
        onSecondaryClick: L,
        showEnhancedUpsell: !0,
        ...r
    });
}
