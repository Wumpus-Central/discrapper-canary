n.d(t, {
    default: () => g,
    r: () => h,
}),
    n(781311);
var r = n(951288);
n(647438);
var i = n(581282),
    l = n(8853),
    a = n(481060),
    s = n(2052),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(266454),
    p = n(960048),
    f = n(276792),
    m = n(290347);
function h(e) {
    let { content: t, isPreview: n } = e,
        r = l.t.fromBinary((0, i.c)(t));
    return "announcementModalVariant1" !== r.properties.oneofKind ||
        (!n &&
            (0 === r.properties.announcementModalVariant1.dismissKey.trim().length ||
                (0, d.zu)(Number(r.properties.announcementModalVariant1.dismissKey))))
        ? null
        : (n && (r.properties.announcementModalVariant1.dismissKey = ""), r);
}
function g(e) {
    let { renderModalProps: t, properties: n } = e,
        { location: i } = (0, s.O)(),
        { analyticsLocations: l } = (0, u.ZP)(c.Z.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL),
        d = (0, o.ZP)(),
        h = (0, a.apv)(d);
    if ("announcementModalVariant1" === n.properties.oneofKind) {
        let e = (0, f.N)({
            content: n.properties.announcementModalVariant1,
            renderModalProps: t,
            analyticsLocations: l,
            analyticsLocation: i,
            isLightTheme: h,
        });
        return (0, r.jsx)(
            m.Z,
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
        p.Z.captureMessage(
            "Property type ".concat(n.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal"),
        ),
        null
    );
}
