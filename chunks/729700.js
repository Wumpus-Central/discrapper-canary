n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(704215),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(100527),
    c = n(906732),
    u = n(765585),
    d = n(703656),
    p = n(335131),
    h = n(981631),
    f = n(388032),
    g = n(20080);
let m = (e) => {
    let { displayOptions: t } = e,
        { analyticsLocations: n } = (0, c.ZP)(s.Z.HOME_PAGE_SHOP_TAB),
        m = (0, o.ZP)(),
        b = (0, l.wj)(m) ? t.assetDark : t.assetLight;
    return (0, r.jsx)(u.Z, {
        dismissibleContent: i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        inlineArt: !0,
        tryItText: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.intl.string(f.t.fYfGgI)
        }),
        onTryFeature: () => {
            (0, d.uL)(h.Z5c.COLLECTIBLES_SHOP),
                (0, p.mK)({
                    openInLayer: !1,
                    analyticsLocations: n,
                    analyticsSource: s.Z.HOME_PAGE_SHOP_TAB
                });
        },
        header: (0, r.jsx)(a.X6q, {
            variant: 'heading-md/extrabold',
            children: t.title()
        }),
        body: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            children: t.body()
        }),
        position: 'right',
        align: 'top',
        hideDismissButton: !0,
        contentClassName: g.contentOverlay,
        pointerClassName: g.pointerClassName,
        tryItButtonColor: a.zxk.Colors.BRAND,
        art: (0, r.jsx)('img', {
            className: g.art,
            src: b,
            alt: ''
        })
    });
};
