n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(28664),
    a = n(481060),
    o = n(785717),
    c = n(931847),
    s = n(86419),
    u = n(872269),
    d = n(860717),
    f = n(228168),
    g = n(921944),
    p = n(388032);
function m(e) {
    let { user: t, application: n, onDismiss: m } = e,
        { trackUserProfileEditAction: b } = (0, o.KZ)(),
        y = i.useMemo(() => new c.q({ applicationId: n.id }), [n.id]),
        j = i.useCallback(() => {
            null != y &&
                ((0, s.qH)(y),
                b(
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
                (0, u.L$)(f.qb.WIDGET_ADDED));
        }, [y, b]);
    return (0, r.jsx)(d.Z, {
        user: t,
        widget: y,
        subtle: !0,
        cta: (0, r.jsx)(d.Z.Cta, {
            showSuggestedForYou: !0,
            heading: p.intl.format(p.t.OIzLCy, { applicationName: n.name }),
            content: p.intl.format(p.t.BQySru, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.u, {
                        text: p.intl.string(p.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, r.jsx)(a.Yd2, {
                            variant: "secondary",
                            size: "sm",
                            icon: a.Dio,
                            "aria-label": p.intl.string(p.t.WAI6xu),
                            onClick: () => {
                                m(g.L.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(l.u, {
                        text: p.intl.string(p.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, r.jsx)(a.Yd2, {
                            variant: "primary",
                            size: "sm",
                            icon: a.kmB,
                            "aria-label": p.intl.formatToPlainString(p.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                m(g.L.TAKE_ACTION), j();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
