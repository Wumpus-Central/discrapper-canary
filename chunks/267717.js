n.d(t, {
    default: () => h,
    y: () => p
});
var i = n(200651);
n(192379);
var r = n(481060),
    s = n(490220),
    l = n(594174),
    a = n(98278),
    o = n(790527),
    c = n(474936),
    d = n(981631),
    u = n(388032),
    m = n(784687);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function p(e) {
    let t = l.default.getCurrentUser();
    null != t &&
        (0, r.ZDy)(async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 267717));
            return (n) =>
                (0, i.jsx)(
                    r,
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
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['user', 'onClose']);
    return (0, i.jsx)(
        o.Z,
        g(
            {
                modalClassName: m.modal,
                modalContentClassName: m.modalContent,
                type: c.cd.TRY_IT_OUT_MODAL_UPSELL,
                title: u.intl.string(u.t.reVc0N),
                body: u.intl.string(u.t.KckEj4),
                glowUp: u.intl.string(u.t.reVc0N),
                onSecondaryClick: () => {
                    (0, a.$)(n);
                },
                secondaryCTA: u.intl.string(u.t.PcTCBw),
                onClose: n,
                enableArtBoxShadow: !1,
                hideBackButton: !0,
                showEnhancedUpsell: !0,
                LeadingComponent: (0, i.jsx)('div', {
                    className: m.previewContainerParent,
                    children: (0, i.jsx)(s.Z, {
                        containerClassName: m.previewContainer,
                        user: t,
                        disabledInputs: !0
                    })
                })
            },
            r
        )
    );
}
