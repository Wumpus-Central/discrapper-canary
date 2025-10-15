n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(296009),
    a = n(28664),
    o = n(481060),
    s = n(785717),
    c = n(931847),
    u = n(86419),
    d = n(872269),
    p = n(860717),
    f = n(228168),
    h = n(921944),
    g = n(388032);
function m(e) {
    let { user: t, application: n, onDismiss: m } = e,
        { trackUserProfileEditAction: b } = (0, s.KZ)(),
        _ = i.useMemo(
            () =>
                new c.q({
                    type: l.l.APPLICATION,
                    applicationId: n.id,
                }),
            [n.id],
        ),
        O = i.useCallback(() => {
            null != _ &&
                ((0, u.qH)(_.type, _, !0),
                b({
                    action: "WIDGET_ADDED",
                    widgetEdited: _.type,
                }),
                (0, d.L$)(f.qb.WIDGET_ADDED));
        }, [_, b]);
    return (0, r.jsx)(p.Z, {
        user: t,
        widget: _,
        cta: (0, r.jsx)(p.Z.Cta, {
            heading: g.intl.format(g.t.OIzLCy, { applicationName: n.name }),
            content: g.intl.format(g.t.BQySru, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(a.u, {
                        text: g.intl.string(g.t.WAI6xu),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "secondary",
                            size: "sm",
                            icon: o.Dio,
                            "aria-label": g.intl.string(g.t.WAI6xu),
                            onClick: () => {
                                m(h.L.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(a.u, {
                        text: g.intl.string(g.t["lBG2s/"]),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "primary",
                            size: "sm",
                            icon: o.kmB,
                            "aria-label": g.intl.formatToPlainString(g.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                m(h.L.TAKE_ACTION), O();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
