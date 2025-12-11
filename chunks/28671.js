n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    a = n(296009),
    l = n(28664),
    o = n(481060),
    c = n(785717),
    s = n(931847),
    u = n(86419),
    d = n(872269),
    f = n(860717),
    g = n(228168),
    p = n(921944),
    b = n(388032);
function m(e) {
    let { user: t, application: n, onDismiss: m } = e,
        { trackUserProfileEditAction: h } = (0, c.KZ)(),
        y = i.useMemo(
            () =>
                new s.q({
                    type: a.l.APPLICATION,
                    applicationId: n.id,
                }),
            [n.id],
        ),
        v = i.useCallback(() => {
            null != y &&
                ((0, u.qH)(y.type, y, !0),
                h(
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
                (0, d.L$)(g.qb.WIDGET_ADDED));
        }, [y, h]);
    return (0, r.jsx)(f.Z, {
        user: t,
        widget: y,
        subtle: !0,
        cta: (0, r.jsx)(f.Z.Cta, {
            showSuggestedForYou: !0,
            heading: b.intl.format(b.t.OIzLCy, { applicationName: n.name }),
            content: b.intl.format(b.t.BQySru, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.u, {
                        text: b.intl.string(b.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "secondary",
                            size: "sm",
                            icon: o.Dio,
                            "aria-label": b.intl.string(b.t.WAI6xu),
                            onClick: () => {
                                m(p.L.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(l.u, {
                        text: b.intl.string(b.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "primary",
                            size: "sm",
                            icon: o.kmB,
                            "aria-label": b.intl.formatToPlainString(b.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                m(p.L.TAKE_ACTION), v();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
