n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    o = n(979554),
    a = n(481060),
    s = n(906732),
    l = n(436774),
    c = n(981631),
    u = n(388032),
    d = n(717906);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { product: t, onSecondaryClick: f } = e,
        { newestAnalyticsLocation: p } = (0, s.ZP)(),
        h = i.useCallback(() => {
            null != t &&
                (0, a.ZDy)(async () => {
                    let { default: e } = await n.e('43360').then(n.bind(n, 73415));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            _(
                                {
                                    collectableType: null == t ? void 0 : t.type,
                                    analyticsSource: p,
                                    analyticsLocation: {
                                        section: c.jXE.USER_PROFILE,
                                        object: c.qAy.BUTTON_CTA
                                    },
                                    onSecondaryClick: f
                                },
                                n
                            )
                        );
                });
        }, [t, p, f]),
        m = i.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case o.Z.AVATAR_DECORATION:
                    return u.intl.format(u.t['aFR/EB'], { onClick: h });
                case o.Z.PROFILE_EFFECT:
                    return u.intl.format(u.t.eWNOND, { onClick: h });
            }
        }, [null == t ? void 0 : t.type, h]);
    return (0, r.jsxs)('div', {
        className: d.nitroUpsellContainer,
        children: [
            (0, r.jsx)(a.SrA, {
                className: d.nitroWheel,
                size: 'md',
                color: l.JX.PREMIUM_TIER_2
            }),
            (0, r.jsx)(a.Text, {
                className: d.nitroText,
                variant: 'text-md/medium',
                children: m
            })
        ]
    });
}
