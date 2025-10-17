n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(296009),
    l = n(28664),
    o = n(481060),
    s = n(785717),
    c = n(931847),
    u = n(86419),
    d = n(872269),
    f = n(860717),
    g = n(228168),
    p = n(921944),
    m = n(388032);
function b(e) {
    let { user: t, application: n, onDismiss: b } = e,
        { trackUserProfileEditAction: h } = (0, s.KZ)(),
        v = i.useMemo(
            () =>
                new c.q({
                    type: a.l.APPLICATION,
                    applicationId: n.id,
                }),
            [n.id],
        ),
        y = i.useCallback(() => {
            null != v &&
                ((0, u.qH)(v.type, v, !0),
                h({
                    action: "WIDGET_ADDED",
                    widgetEdited: v.type,
                }),
                (0, d.L$)(g.qb.WIDGET_ADDED));
        }, [v, h]);
    return (0, r.jsx)(f.Z, {
        user: t,
        widget: v,
        cta: (0, r.jsx)(f.Z.Cta, {
            heading: m.intl.format(m.t.OIzLCw, { applicationName: n.name }),
            content: m.intl.format(m.t.BQySrq, { applicationName: n.name }),
            buttons: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.u, {
                        text: m.intl.string(m.t.WAI6xs),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "secondary",
                            size: "sm",
                            icon: o.Dio,
                            "aria-label": m.intl.string(m.t.WAI6xs),
                            onClick: () => {
                                b(p.L.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, r.jsx)(l.u, {
                        text: m.intl.string(m.t.lBG2s7),
                        children: (0, r.jsx)(o.Yd2, {
                            variant: "primary",
                            size: "sm",
                            icon: o.kmB,
                            "aria-label": m.intl.formatToPlainString(m.t.KfGahI, { applicationName: n.name }),
                            onClick: () => {
                                b(p.L.TAKE_ACTION), y();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
