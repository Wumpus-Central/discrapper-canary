n.d(t, {
    default: () => m,
    h: () => g
});
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(70097),
    o = n(174609),
    a = n(98278),
    s = n(790527),
    c = n(626135),
    u = n(981631),
    d = n(388032),
    p = n(178817),
    h = n(626065);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function m(e) {
    var { onClose: t, analytics: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['onClose', 'analytics']);
    let m = d.NW.format(d.t['7aNIkZ'], {
        onPressMore: function () {
            (0, o.Z)(),
                t(),
                c.default.track(u.rMx.PREMIUM_PROMOTION_OPENED, {
                    location_section: u.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
                    location_object: u.qAy.NAVIGATION_LINK
                }),
                (0, a.z)();
        }
    });
    return (0, r.jsx)(
        s.Z,
        f(
            {
                title: d.NW.string(d.t.K49fZG),
                glowUp: m,
                body: m,
                artContainerClassName: p.artContainer,
                enableArtBoxShadow: !1,
                type: n.type,
                analyticsLocation: {
                    section: u.jXE.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
                    object: n.object
                },
                analyticsSource: {
                    page: u.ZY5.CHANNEL_CALL,
                    section: n.section
                },
                onClose: t,
                onSubscribeClick: o.Z,
                artElement: (0, r.jsx)(l.Z, {
                    className: p.video,
                    src: h,
                    loop: !0,
                    autoPlay: !0
                })
            },
            i
        )
    );
}
function g(e) {
    let { analytics: t } = e;
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 310892));
        return (n) => (0, r.jsx)(e, f({ analytics: t }, n));
    });
}
