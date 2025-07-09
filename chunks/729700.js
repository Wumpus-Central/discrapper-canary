n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(704215),
    l = n(780384),
    a = n(755721),
    o = n(481060),
    s = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(765585),
    p = n(703656),
    h = n(335131),
    f = n(981631),
    g = n(388032),
    m = n(20080);
let b = (e) => {
    let { displayOptions: t } = e,
        { analyticsLocations: n } = (0, u.ZP)(c.Z.HOME_PAGE_SHOP_TAB),
        b = (0, s.ZP)(),
        _ = (0, l.wj)(b) ? t.assetDark : t.assetLight;
    return (0, r.jsx)(d.Z, {
        dismissibleContent: i.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        inlineArt: !0,
        tryItText: (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'always-white',
            children: g.intl.string(g.t.fYfGgI)
        }),
        onTryFeature: () => {
            ((0, p.uL)(f.Z5c.COLLECTIBLES_SHOP),
                (0, h.mK)({
                    openInLayer: !1,
                    analyticsLocations: n,
                    analyticsSource: c.Z.HOME_PAGE_SHOP_TAB
                }));
        },
        header: (0, r.jsx)(o.X6q, {
            variant: 'heading-md/extrabold',
            children: t.title()
        }),
        body: (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            children: t.body()
        }),
        position: 'right',
        align: 'top',
        hideDismissButton: !0,
        contentClassName: m.contentOverlay,
        pointerClassName: m.pointerClassName,
        tryItButtonColor: a.zx.Colors.BRAND,
        art: (0, r.jsx)('img', {
            className: m.art,
            src: _,
            alt: ''
        })
    });
};
