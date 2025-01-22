r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(442837),
    s = r(481060),
    l = r(174609),
    u = r(703656),
    c = r(210887),
    d = r(594174),
    f = r(626135),
    p = r(424218),
    h = r(63063),
    _ = r(380684),
    m = r(74538),
    g = r(790527),
    E = r(474936),
    v = r(981631),
    y = r(388032),
    b = r(364443);
function I(e) {
    let { onClose: n, ...r } = e,
        I = (0, o.e7)([d.default], () => d.default.getCurrentUser()),
        T = (0, o.e7)([c.Z], () => c.Z.theme) === v.BRd.LIGHT ? 'light' : 'dark',
        S = (0, i.jsx)('img', {
            className: b.art,
            alt: 'File Upload Nitro Perk',
            src: 'https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_'.concat(T, '_v2.png')
        }),
        A = a.useMemo(() => {
            let e = m.ZP.getUserMaxFileSize(I);
            return (0, p.BU)(e / 1024, { useKibibytes: !0 });
        }, [I]),
        C = (0, _.iL)({
            user: I,
            onClick: () => {
                window.open(h.Z.getArticleURL(v.BhN.NITRO_FAQ), '_blank');
            }
        }),
        N = (0, i.jsx)('div', {
            className: b.body,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                children: C
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
        artContainerClassName: b.artContainer,
        enableArtBoxShadow: !1,
        type: E.cd.UPLOAD_ERROR_UPSELL,
        title: y.intl.string(y.t['9C+41t']),
        body: N,
        context: y.intl.formatToPlainString(y.t.q5fTZm, { maxSize: A }),
        glowUp: C,
        analyticsLocation: { section: v.jXE.FILE_UPLOAD_POPOUT },
        onClose: n,
        subscriptionTier: E.Si.TIER_2,
        secondaryCTA: y.intl.string(y.t.ZnqyZ2),
        onSecondaryClick: R,
        showEnhancedUpsell: !0,
        ...r
    });
}
