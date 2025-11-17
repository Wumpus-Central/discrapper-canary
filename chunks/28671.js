n.d(t, { Z: () => b });
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
    m = n(388032);
function b(e) {
    let { user: t, application: n, onDismiss: b } = e,
        { trackUserProfileEditAction: h } = (0, c.KZ)(),
        y = i.useMemo(
            () =>
                new s.q({
                    type: a.l.APPLICATION,
                    applicationId: n.id,
                }),
            [n.id],
        ),
        O = i.useCallback(() => {
            null != y &&
                ((0, u.qH)(y.type, y, !0),
                h({
                    action: "WIDGET_ADDED",
                    widgetEdited: y.type,
                }),
                (0, d.L$)(g.qb.WIDGET_ADDED));
        }, [y, h]);
    return (0, r.jsx)(f.Z, {
        user: t,
        widget: y,
        subtle: !0,
        cta: (0, r.jsx)(f.Z.Cta, {
            heading: m.intl.format(m.t.OIzLCy, { applicationName: n.name }),
            content: m.intl.format(m.t.BQySru, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.u, {
                        text: m.intl.string(m.t.WAI6xu),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "secondary",
                            size: "sm",
                            icon: o.Dio,
                            "aria-label": m.intl.string(m.t.WAI6xu),
                            onClick: () => {
                                b(p.L.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(l.u, {
                        text: m.intl.string(m.t["lBG2s/"]),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "primary",
                            size: "sm",
                            icon: o.kmB,
                            "aria-label": m.intl.formatToPlainString(m.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                b(p.L.TAKE_ACTION), O();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
