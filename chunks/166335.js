r.d(t, { default: () => d });
var n = r(200651);
r(192379);
var o = r(174609),
    a = r(703656),
    s = r(626135),
    c = r(790527),
    l = r(474936),
    i = r(981631),
    u = r(388032),
    b = r(295491);
function d(e) {
    var { onClose: t } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++) (r = a[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['onClose']);
    let f = (0, n.jsx)('img', {
        src: r(414190),
        className: b.art,
        alt: ''
    });
    return (0, n.jsx)(
        c.Z,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                title: u.NW.string(u.t.YqknLi),
                glowUp: u.NW.string(u.t['3hj4kZ']),
                body: u.NW.string(u.t['3hj4kZ']),
                artElement: f,
                artContainerClassName: b.artContainer,
                type: l.cd.VOICE_FILTERS_UPSELL,
                onClose: t,
                onSubscribeClick: o.Z,
                secondaryCTA: u.NW.string(u.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, o.Z)(),
                        t(),
                        s.default.track(i.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_section: i.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            location_object: i.qAy.NAVIGATION_LINK
                        }),
                        (0, a.uL)(i.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                enableArtBoxShadow: !1,
                headerClassName: b.header,
                modalClassName: b.modal,
                smallText: !0,
                footerClassName: b.footer,
                subscribeButtonClassname: b.subscribeButton,
                showBetaBadge: !0
            },
            d
        )
    );
}
