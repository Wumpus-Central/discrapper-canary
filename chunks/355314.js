n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(174609),
    l = n(703656),
    u = n(210887),
    c = n(914010),
    d = n(594174),
    f = n(626135),
    _ = n(424218),
    p = n(403182),
    h = n(63063),
    m = n(74538),
    g = n(790527),
    E = n(474936),
    v = n(981631),
    y = n(388032),
    I = n(459706);
function T(e) {
    let { onClose: t, ...n } = e,
        T = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        b = (0, a.e7)([u.Z], () => u.Z.theme),
        S = (0, a.e7)([c.Z], () => c.Z.getGuildId()),
        A = b === v.BRd.LIGHT ? 'light' : 'dark',
        N = (0, i.jsx)('img', {
            className: I.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(A, '_v2.png')
        }),
        C = r.useMemo(() => {
            let e = m.ZP.getUserMaxFileSize(T);
            return (0, _.BU)(e / 1024, { useKibibytes: !0 });
        }, [T]),
        R = (0, p.iL)({
            guildId: S,
            onClick: () => {
                window.open(h.Z.getArticleURL(v.BhN.NITRO_FAQ), '_blank');
            }
        }),
        O = (0, i.jsx)('div', {
            className: I.body,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                children: R
            })
        });
    function D() {
        (0, o.Z)(),
            t(),
            f.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: v.qAy.NAVIGATION_LINK
            }),
            (0, l.uL)(v.Z5c.APPLICATION_STORE);
    }
    return (0, i.jsx)(g.Z, {
        artElement: N,
        artContainerClassName: I.artContainer,
        enableArtBoxShadow: !1,
        type: E.cd.UPLOAD_ERROR_UPSELL,
        title: y.intl.string(y.t['9C+41t']),
        body: O,
        context: y.intl.formatToPlainString(y.t.q5fTZm, { maxSize: C }),
        glowUp: R,
        analyticsLocation: { section: v.jXE.FILE_UPLOAD_POPOUT },
        onClose: t,
        subscriptionTier: E.Si.TIER_2,
        secondaryCTA: y.intl.string(y.t.ZnqyZ2),
        onSecondaryClick: D,
        showEnhancedUpsell: !0,
        ...n
    });
}
