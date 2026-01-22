n.d(t, {
    K: () => g,
    default: () => E,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(253604),
    s = n(287809),
    o = n(87719),
    l = n(244975),
    c = n(788868),
    u = n(652215),
    d = n(985018),
    f = n(698290);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function g(e) {
    let { analyticsSource: t, onSubscribeFinish: a } = e,
        o = s.default.getCurrentUser();
    null != o &&
        (0, i.mMO)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 407217));
            return (n) =>
                (0, r.jsx)(
                    e,
                    _(
                        {
                            user: o,
                            analyticsSource: t,
                            analyticsLocation: {
                                section: u.JJy.USER_PROFILE,
                                object: u.ZSU.BUTTON_CTA,
                            },
                            onSubscribeFinish: a,
                        },
                        n,
                    ),
                );
        });
}
function E(e) {
    let { user: t, onClose: n } = e,
        i = h(e, ["user", "onClose"]);
    return (0, r.jsx)(
        l.A,
        _(
            {
                modalClassName: f.yl,
                modalContentClassName: f.jE,
                type: c.e.TRY_IT_OUT_MODAL_UPSELL,
                title: d.intl.string(d.t.reVc0M),
                body: d.intl.string(d.t.KckEj7),
                glowUp: d.intl.string(d.t.reVc0M),
                onSecondaryClick: () => {
                    (0, o.x)(n);
                },
                secondaryCTA: d.intl.string(d.t.PcTCB7),
                onClose: n,
                enableArtBoxShadow: !1,
                hideBackButton: !0,
                showEnhancedUpsell: !0,
                LeadingComponent: (0, r.jsx)("div", {
                    className: f.wC,
                    children: (0, r.jsx)(a.A, {
                        containerClassName: f.i1,
                        user: t,
                        disabledInputs: !0,
                    }),
                }),
            },
            i,
        ),
    );
}
