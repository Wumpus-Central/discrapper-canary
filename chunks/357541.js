n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    l = n(990078),
    s = n(657718),
    r = n(789645),
    o = n(478016),
    c = n(183555),
    d = n(633075),
    u = n(735321),
    g = n(606758),
    m = n(605694),
    _ = n(518477),
    f = n(49999),
    x = n(985018);
function p(e) {
    let { user: t, application: n, onDismiss: p } = e,
        { trackUserProfileEditAction: I } = (0, c.NJ)(),
        A = a.useMemo(() => new d.R({ applicationId: n.id }), [n.id]),
        h = a.useCallback(() => {
            null != A &&
                ((0, u.Y5)(A),
                I({ action: "WIDGET_ADDED", ...A.getProfileEditAnalyticsOptions() }),
                (0, g.XA)(_.jM.WIDGET_ADDED));
        }, [A, I]);
    return (0, i.jsx)(m.A, {
        user: t,
        widget: A,
        subtle: !0,
        cta: (0, i.jsx)(m.A.Cta, {
            showSuggestedForYou: !0,
            heading: x.intl.format(x.t.OIzLCy, { applicationName: n.name }),
            content: x.intl.format(x.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.m, {
                        text: x.intl.string(x.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: r.P,
                            "aria-label": x.intl.string(x.t.WAI6xu),
                            onClick: () => {
                                p(f.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(l.m, {
                        text: x.intl.string(x.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(s.S, {
                            variant: "primary",
                            size: "sm",
                            icon: o.U,
                            "aria-label": x.intl.formatToPlainString(x.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                p(f.i.TAKE_ACTION), h();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
