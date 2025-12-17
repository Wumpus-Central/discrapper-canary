n.d(t, {
    default: () => b,
    r: () => m,
});
var r = n(54381);
n(473749);
var i = n(581282),
    l = n(704215),
    a = n(8853),
    o = n(481060),
    s = n(2052),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(266454),
    f = n(960048),
    g = n(276792),
    h = n(290347);
function m(e) {
    let { promotionId: t, content: n, isPreview: r } = e,
        o = a.t.fromBinary((0, i.c)(n));
    if ("announcementModalVariant1" !== o.properties.oneofKind) return null;
    {
        let { isDismissed: e } = (0, p.Ob)(l.z.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !r && e ? null : (r && (o.properties.announcementModalVariant1.dismissKey = ""), o);
    }
}
function b(e) {
    let { componentId: t, promotionId: n, renderModalProps: i, properties: l } = e,
        { location: a } = (0, s.O)(),
        { analyticsLocations: p } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        m = (0, c.ZP)(),
        b = (0, o.apv)(m);
    if ("announcementModalVariant1" === l.properties.oneofKind) {
        let e = (0, g.N)({
            componentId: t,
            promotionId: n,
            content: l.properties.announcementModalVariant1,
            renderModalProps: i,
            analyticsLocations: p,
            analyticsLocation: a,
            isLightTheme: b,
        });
        return (0, r.jsx)(
            h.Z,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e),
        );
    }
    return (
        f.Z.captureMessage(
            "Property type ".concat(l.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal"),
        ),
        null
    );
}
