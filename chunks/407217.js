n.d(t, {
    K: () => m,
    default: () => g,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(253604),
    s = n(287809),
    a = n(87719),
    o = n(244975),
    c = n(788868),
    d = n(652215),
    u = n(985018),
    _ = n(698290);

function p(e) {
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
}

function m(e) {
    let { analyticsSource: t, onSubscribeFinish: l } = e,
        a = s.default.getCurrentUser();
    null != a &&
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) =>
                (0, r.jsx)(
                    e,
                    p(
                        {
                            user: a,
                            analyticsSource: t,
                            analyticsLocation: {
                                section: d.JJy.USER_PROFILE,
                                object: d.ZSU.BUTTON_CTA,
                            },
                            onSubscribeFinish: l,
                        },
                        n,
                    ),
                );
        });
}

function g(e) {
    let { user: t, onClose: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["user", "onClose"]);
    return (0, r.jsx)(
        o.A,
        p(
            {
                modalClassName: _.yl,
                modalContentClassName: _.jE,
                type: c.e.TRY_IT_OUT_MODAL_UPSELL,
                title: u.intl.string(u.t.reVc0M),
                body: u.intl.string(u.t.KckEj7),
                glowUp: u.intl.string(u.t.reVc0M),
                onSecondaryClick: () => {
                    (0, a.x)(n);
                },
                secondaryCTA: u.intl.string(u.t.PcTCB7),
                onClose: n,
                enableArtBoxShadow: !1,
                hideBackButton: !0,
                showEnhancedUpsell: !0,
                LeadingComponent: (0, r.jsx)("div", {
                    className: _.wC,
                    children: (0, r.jsx)(l.A, {
                        containerClassName: _.i1,
                        user: t,
                        disabledInputs: !0,
                    }),
                }),
            },
            i,
        ),
    );
}
