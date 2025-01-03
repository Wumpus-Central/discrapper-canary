n.r(t),
    n.d(t, {
        default: function () {
            return f;
        },
        extractAnnouncementModalContent: function () {
            return g;
        }
    });
var i = n(200651);
n(192379);
var r = n(581282),
    l = n(8853),
    a = n(663002),
    s = n(2052),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(605236),
    h = n(960048),
    m = n(276792),
    p = n(290347);
function g(e) {
    let { content: t, isPreview: n } = e,
        i = l.t.fromBinary((0, r.c)(t));
    return 'announcementModalVariant1' !== i.properties.oneofKind ? null : !n && (0 === i.properties.announcementModalVariant1.dismissKey.trim().length || (0, u.un)(Number(i.properties.announcementModalVariant1.dismissKey))) ? null : (n && (i.properties.announcementModalVariant1.dismissKey = ''), i);
}
function f(e) {
    let { renderModalProps: t, properties: n } = e,
        { location: r } = (0, s.O)(),
        { analyticsLocations: l } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        u = (0, o.ZP)(),
        g = (0, a.ap)(u);
    if ('announcementModalVariant1' === n.properties.oneofKind) {
        let e = (0, m.N)({
            content: n.properties.announcementModalVariant1,
            renderModalProps: t,
            analyticsLocations: l,
            analyticsLocation: r,
            isLightTheme: g
        });
        return (0, i.jsx)(p.Z, { ...e });
    }
    return h.Z.captureMessage('Property type '.concat(n.properties.oneofKind, ' is not supported to render ServerDriveAnnouncementModal')), null;
}
