n.d(t, {
    A: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(954571),
    o = n(500049),
    l = n(522305),
    c = n(652215),
    u = n(985018);

function d(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: d } = e,
        [f, p] = i.useState(!1),
        _ = i.useRef(null),
        h = i.useCallback(async () => {
            s.default.track(c.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: o.F5.OPEN_APP_DM,
            }),
                p(!0);
            try {
                await (0, l.Q)({
                    appId: n,
                    botId: t,
                    analyticsLocations: d,
                });
            } catch (e) {}
            clearTimeout(_.current), p(!1);
        }, [t, n, d]);
    return (0, r.jsx)(a.Button, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: f,
        onClick: h,
        "aria-label": u.intl.string(u.t.AUM8hY),
        text: u.intl.string(u.t.AUM8hY),
    });
}
