n.d(t, {
    default: () => h,
    y: () => p
});
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(490220),
    a = n(594174),
    l = n(98278),
    o = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(784687);
function g(e) {
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
function p(e) {
    let t = a.default.getCurrentUser();
    null != t &&
        (0, i.ZDy)(async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 267717));
            return (n) =>
                (0, r.jsx)(
                    i,
                    g(
                        {
                            user: t,
                            analyticsSource: d.Sbl.PROFILE_PANEL,
                            analyticsLocation: {
                                section: d.jXE.USER_PROFILE,
                                object: d.qAy.BUTTON_CTA
                            },
                            onSubscribeFinish: e
                        },
                        n
                    )
                );
        });
}
function h(e) {
    var { user: t, onClose: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['user', 'onClose']);
    return (0, r.jsx)(
        o.Z,
        g(
            {
                modalClassName: m.modal,
                modalContentClassName: m.modalContent,
                type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
                title: u.NW.string(u.t.reVc0N),
                body: u.NW.string(u.t.KckEj4),
                glowUp: u.NW.string(u.t.reVc0N),
                onSecondaryClick: () => {
                    (0, l.$)(n);
                },
                secondaryCTA: u.NW.string(u.t.PcTCBw),
                onClose: n,
                enableArtBoxShadow: !1,
                hideBackButton: !0,
                showEnhancedUpsell: !0,
                LeadingComponent: (0, r.jsx)('div', {
                    className: m.previewContainerParent,
                    children: (0, r.jsx)(s.Z, {
                        containerClassName: m.previewContainer,
                        user: t,
                        disabledInputs: !0
                    })
                })
            },
            i
        )
    );
}
