r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(481060),
    l = r(174609),
    u = r(703656),
    c = r(210887),
    d = r(594174),
    f = r(626135),
    _ = r(424218),
    h = r(63063),
    p = r(380684),
    m = r(74538),
    g = r(790527),
    E = r(474936),
    v = r(981631),
    I = r(388032),
    T = r(364443);
function b(e) {
    let { onClose: n, ...r } = e,
        b = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        y = (0, s.e7)([c.Z], () => c.Z.theme) === v.BRd.LIGHT ? 'light' : 'dark',
        S = (0, i.jsx)('img', {
            className: T.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(y, '_v2.png')
        }),
        A = a.useMemo(() => {
            let e = m.ZP.getUserMaxFileSize(b);
            return (0, _.BU)(e / 1024, { useKibibytes: !0 });
        }, [b]),
        N = (0, p.iL)({
            user: b,
            onClick: () => {
                window.open(h.Z.getArticleURL(v.BhN.NITRO_FAQ), '_blank');
            }
        }),
        C = (0, i.jsx)('div', {
            className: T.body,
            children: (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: N
            })
        });
    function R() {
        (0, l.Z)(),
            n(),
            f.default.track(v.rMx.PREMIUM_PROMOTION_OPENED, {
                location_section: v.jXE.FILE_UPLOAD_UPSELL_MODAL,
                location_object: v.qAy.NAVIGATION_LINK
            }),
            (0, u.uL)(v.Z5c.APPLICATION_STORE);
    }
    return (0, i.jsx)(g.Z, {
        artElement: S,
        artContainerClassName: T.artContainer,
        enableArtBoxShadow: !1,
        type: E.cd.UPLOAD_ERROR_UPSELL,
        title: I.intl.string(I.t['9C+41t']),
        body: C,
        context: I.intl.formatToPlainString(I.t.q5fTZm, { maxSize: A }),
        glowUp: N,
        analyticsLocation: { section: v.jXE.FILE_UPLOAD_POPOUT },
        onClose: n,
        subscriptionTier: E.Si.TIER_2,
        secondaryCTA: I.intl.string(I.t.ZnqyZ2),
        onSecondaryClick: R,
        showEnhancedUpsell: !0,
        ...r
    });
}
