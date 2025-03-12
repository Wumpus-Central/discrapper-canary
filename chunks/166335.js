r.d(t, { default: () => d });
var n = r(200651);
r(192379);
var a = r(174609),
    o = r(703656),
    s = r(626135),
    c = r(790527),
    l = r(474936),
    b = r(981631),
    i = r(388032),
    u = r(593064);
function d(e) {
    var { onClose: t } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['onClose']);
    let f = (0, n.jsx)('img', {
            src: r(414190),
            className: u.art,
            alt: ''
        }),
        O = (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)('div', { className: u.blur0 }), (0, n.jsx)('div', { className: u.blur1 }), (0, n.jsx)('div', { className: u.blur2 })]
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
                title: i.NW.string(i.t.YqknLi),
                glowUp: i.NW.string(i.t['3hj4kZ']),
                body: i.NW.string(i.t['3hj4kZ']),
                artElement: f,
                artContainerClassName: u.artContainer,
                type: l.cd.VOICE_FILTERS_UPSELL,
                onClose: t,
                onSubscribeClick: a.Z,
                secondaryCTA: i.NW.string(i.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, a.Z)(),
                        t(),
                        s.default.track(b.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_section: b.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            location_object: b.qAy.NAVIGATION_LINK
                        }),
                        (0, o.uL)(b.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                enableArtBoxShadow: !1,
                headerClassName: u.header,
                modalClassName: u.modal,
                backgroundElements: O,
                smallText: !0,
                footerClassName: u.footer,
                subscribeButtonClassname: u.subscribeButton,
                showBetaBadge: !0
            },
            d
        )
    );
}
