n.d(t, {
    default: () => y,
    r: () => E,
}),
    n(781311);
var r = n(951288);
n(647438);
var i = n(581282),
    l = n(442837),
    a = n(8853),
    o = n(481060),
    s = n(2052),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    p = n(266454),
    f = n(594174),
    h = n(960048),
    g = n(266198),
    m = n(276792),
    b = n(290347),
    _ = n(837689),
    O = n(388032);
function E(e) {
    let { content: t, isPreview: n } = e,
        r = a.t.fromBinary((0, i.c)(t));
    return "announcementModalVariant1" !== r.properties.oneofKind ||
        (!n &&
            (0 === r.properties.announcementModalVariant1.dismissKey.trim().length ||
                (0, p.zu)(Number(r.properties.announcementModalVariant1.dismissKey))))
        ? null
        : (n && (r.properties.announcementModalVariant1.dismissKey = ""), r);
}
function y(e) {
    let { renderModalProps: t, properties: n } = e,
        { location: i } = (0, s.O)(),
        { analyticsLocations: a } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        p = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        E = (0, c.ZP)(),
        y = (0, o.apv)(E);
    if ("announcementModalVariant1" === n.properties.oneofKind) {
        let e = null,
            l = null;
        if (n.contentIdentifier === _.V) {
            let t = (0, g.OA)(p);
            t === g.TO.COHORT_1
                ? (l = O.t["x2ga+/"])
                : t === g.TO.COHORT_2
                  ? (l = O.t.YJchsb)
                  : t === g.TO.COHORT_3 && (l = O.t.gZXFmZ),
                null != l && (e = String(O.intl.format(l, { date: (0, g.WP)() })));
        }
        let o = (0, m.N)({
            content: n.properties.announcementModalVariant1,
            renderModalProps: t,
            analyticsLocations: a,
            analyticsLocation: i,
            isLightTheme: y,
            subHeaderStringOverride: e,
        });
        return (0, r.jsx)(
            b.Z,
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
            })({}, o),
        );
    }
    return (
        h.Z.captureMessage(
            "Property type ".concat(n.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal"),
        ),
        null
    );
}
