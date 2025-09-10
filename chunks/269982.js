n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    l = n(979554),
    o = n(481060),
    s = n(906732),
    c = n(436774),
    a = n(981631),
    u = n(388032),
    d = n(178368);
function f(e) {
    let { product: t, onSecondaryClick: f } = e,
        { newestAnalyticsLocation: p } = (0, s.ZP)(),
        m = i.useCallback(() => {
            null != t &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("43360").then(n.bind(n, 73415));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
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
                            })(
                                {
                                    collectableType: null == t ? void 0 : t.type,
                                    analyticsSource: p,
                                    analyticsLocation: {
                                        section: a.jXE.USER_PROFILE,
                                        object: a.qAy.BUTTON_CTA,
                                    },
                                    onSecondaryClick: f,
                                },
                                n,
                            ),
                        );
                });
        }, [t, p, f]),
        g = i.useMemo(() => {
            switch (null == t ? void 0 : t.type) {
                case l.Z.AVATAR_DECORATION:
                    return u.intl.format(u.t["aFR/EB"], { onClick: m });
                case l.Z.PROFILE_EFFECT:
                    return u.intl.format(u.t.eWNOND, { onClick: m });
            }
        }, [null == t ? void 0 : t.type, m]);
    return (0, r.jsxs)("div", {
        className: d.nitroUpsellContainer,
        children: [
            (0, r.jsx)(o.SrA, {
                className: d.nitroWheel,
                size: "md",
                color: c.JX.PREMIUM_TIER_2,
            }),
            (0, r.jsx)(o.Text, {
                className: d.nitroText,
                variant: "text-md/medium",
                children: g,
            }),
        ],
    });
}
