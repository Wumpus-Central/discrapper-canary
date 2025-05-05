r.d(e, { default: () => d });
var n = r(255367);
r(73800);
var o = r(174609),
    a = r(703656),
    s = r(626135),
    c = r(790527),
    l = r(474936),
    i = r(981631),
    u = r(388032),
    b = r(295491);
function d(t) {
    var { onClose: e } = t,
        d = (function (t, e) {
            if (null == t) return {};
            var r,
                n,
                o = (function (t, e) {
                    if (null == t) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                for (n = 0; n < a.length; n++) (r = a[n]), !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]);
            }
            return o;
        })(t, ['onClose']);
    let f = (0, n.jsx)('img', {
        src: r(414190),
        className: b.art,
        alt: ''
    });
    return (0, n.jsx)(
        c.Z,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        (n = r[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (t[e] = n);
                    });
            }
            return t;
        })(
            {
                title: u.intl.string(u.t.YqknLi),
                glowUp: u.intl.string(u.t['3hj4kZ']),
                body: u.intl.string(u.t['3hj4kZ']),
                artElement: f,
                artContainerClassName: b.artContainer,
                type: l.cd.VOICE_FILTERS_UPSELL,
                onClose: e,
                onSubscribeClick: o.Z,
                secondaryCTA: u.intl.string(u.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, o.Z)(),
                        e(),
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
