n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
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
    g = n(20080),
    m = n(565914),
    b = n(252900);
let _ = () => {
    let { analyticsLocations: e } = (0, c.ZP)(s.Z.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP),
        t = (0, o.ZP)(),
        n = (0, l.wj)(t);
    return (0, r.jsx)(u.Z, {
        dismissibleContent: i.z.COLLECTIBLES_NAMEPLATE_SHOP_COACHMARK,
        inlineArt: !0,
        tryItText: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.NW.string(f.t.Mi3iPD)
        }),
        onTryFeature: () => {
            (0, d.uL)(h.Z5c.COLLECTIBLES_SHOP),
                (0, p.mK)({
                    openInLayer: !1,
                    analyticsLocations: e,
                    analyticsSource: s.Z.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP
                });
        },
        header: (0, r.jsx)(a.X6q, {
            variant: 'heading-md/extrabold',
            children: f.NW.string(f.t.FkIdLy)
        }),
        body: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            children: f.NW.string(f.t.sb8vi4)
        }),
        position: 'right',
        align: 'top',
        hideDismissButton: !0,
        contentClassName: g.contentOverlay,
        pointerClassName: g.pointerClassName,
        tryItButtonColor: a.zxk.Colors.BRAND,
        art: (0, r.jsx)('img', {
            className: g.art,
            src: n ? m : b,
            alt: ''
        })
    });
};
