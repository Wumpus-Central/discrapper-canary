n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    a = n(990078),
    r = n(397927),
    s = n(183555),
    o = n(633075),
    d = n(735321),
    c = n(384377),
    u = n(605694),
    g = n(518477),
    m = n(49999),
    x = n(985018);
function f(e) {
    let { user: t, application: n, onDismiss: f } = e,
        { trackUserProfileEditAction: h } = (0, s.NJ)(),
        p = l.useMemo(() => new o.R({ applicationId: n.id }), [n.id]),
        _ = l.useCallback(() => {
            null != p &&
                ((0, d.Y5)(p),
                h({ action: "WIDGET_ADDED", ...p.getProfileEditAnalyticsOptions() }),
                (0, c.XA)(g.jM.WIDGET_ADDED));
        }, [p, h]);
    return (0, i.jsx)(u.A, {
        user: t,
        widget: p,
        subtle: !0,
        cta: (0, i.jsx)(u.A.Cta, {
            showSuggestedForYou: !0,
            heading: x.intl.format(x.t.OIzLCy, { applicationName: n.name }),
            content: x.intl.format(x.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(a.m, {
                        text: x.intl.string(x.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(r.SCx, {
                            variant: "secondary",
                            size: "sm",
                            icon: r.PGe,
                            "aria-label": x.intl.string(x.t.WAI6xu),
                            onClick: () => {
                                f(m.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(a.m, {
                        text: x.intl.string(x.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(r.SCx, {
                            variant: "primary",
                            size: "sm",
                            icon: r.Uzd,
                            "aria-label": x.intl.formatToPlainString(x.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                f(m.i.TAKE_ACTION), _();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
