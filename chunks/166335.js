n.d(t, {
    default: () => h,
    i: () => f
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(174609),
    o = n(703656),
    l = n(626135),
    s = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    p = n(771309);
function m(e) {
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
function f() {
    (0, i.ZDy)(async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 166335));
        return (t) =>
            (0, r.jsx)(
                e,
                m(
                    {
                        analyticsSource: d.Sbl.VOICE_FILTERS,
                        analyticsLocation: {
                            section: d.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            object: d.qAy.BUTTON_CTA
                        }
                    },
                    t
                )
            );
    });
}
function h(e) {
    var { onClose: t } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['onClose']);
    let f = (0, r.jsx)('img', {
            src: n(414190),
            className: p.art,
            alt: ''
        }),
        h = (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)('div', { className: p.blur0 }), (0, r.jsx)('div', { className: p.blur1 }), (0, r.jsx)('div', { className: p.blur2 })]
        });
    return (0, r.jsx)(
        s.Z,
        m(
            {
                title: u.NW.string(u.t.YqknLi),
                glowUp: u.NW.string(u.t['3hj4kZ']),
                body: u.NW.string(u.t['3hj4kZ']),
                artElement: f,
                artContainerClassName: p.artContainer,
                type: c.cd.VOICE_FILTERS_UPSELL,
                onClose: t,
                onSubscribeClick: a.Z,
                secondaryCTA: u.NW.string(u.t.ZnqyZ2),
                onSecondaryClick: function () {
                    (0, a.Z)(),
                        t(),
                        l.default.track(d.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_section: d.jXE.VOICE_FILTERS_UPSELL_MODAL,
                            location_object: d.qAy.NAVIGATION_LINK
                        }),
                        (0, o.uL)(d.Z5c.APPLICATION_STORE);
                },
                showEnhancedUpsell: !0,
                enableArtBoxShadow: !1,
                headerClassName: p.header,
                modalClassName: p.modal,
                backgroundElements: h,
                smallText: !0,
                footerClassName: p.footer,
                subscribeButtonClassname: p.subscribeButton
            },
            i
        )
    );
}
