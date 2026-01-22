n.d(t, { A: () => g });
var r = n(627968),
    l = n(64700),
    i = n(990078),
    a = n(397927),
    s = n(183555),
    o = n(633075),
    c = n(735321),
    u = n(384377),
    d = n(605694),
    f = n(518477),
    p = n(49999),
    b = n(985018);
function g(e) {
    let { user: t, application: n, onDismiss: g } = e,
        { trackUserProfileEditAction: m } = (0, s.NJ)(),
        y = l.useMemo(() => new o.R({ applicationId: n.id }), [n.id]),
        O = l.useCallback(() => {
            null != y &&
                ((0, c.Y5)(y),
                m(
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
                    })({ action: "WIDGET_ADDED" }, y.getProfileEditAnalyticsOptions()),
                ),
                (0, u.XA)(f.jM.WIDGET_ADDED));
        }, [y, m]);
    return (0, r.jsx)(d.A, {
        user: t,
        widget: y,
        subtle: !0,
        cta: (0, r.jsx)(d.A.Cta, {
            showSuggestedForYou: !0,
            heading: b.intl.format(b.t.OIzLCy, { applicationName: n.name }),
            content: b.intl.format(b.t.BQySru, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.m, {
                        text: b.intl.string(b.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, r.jsx)(a.SCx, {
                            variant: "secondary",
                            size: "sm",
                            icon: a.PGe,
                            "aria-label": b.intl.string(b.t.WAI6xu),
                            onClick: () => {
                                g(p.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(i.m, {
                        text: b.intl.string(b.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, r.jsx)(a.SCx, {
                            variant: "primary",
                            size: "sm",
                            icon: a.Uzd,
                            "aria-label": b.intl.formatToPlainString(b.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                g(p.i.TAKE_ACTION), O();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
