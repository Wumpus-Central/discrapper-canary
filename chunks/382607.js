n.d(t, { A: () => u });
var l = n(627968),
    i = n(64700),
    a = n(821609),
    s = n(954571),
    r = n(500049),
    o = n(522305),
    c = n(652215),
    d = n(985018);
function u(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: u } = e,
        [m, p] = i.useState(!1),
        _ = i.useRef(null),
        A = i.useCallback(async () => {
            s.default.track(c.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: r.F5.OPEN_APP_DM,
            }),
                p(!0);
            try {
                await (0, o.Q)({ appId: n, botId: t, analyticsLocations: u });
            } catch (e) {}
            clearTimeout(_.current), p(!1);
        }, [t, n, u]);
    return (0, l.jsx)(a.$, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: m,
        onClick: A,
        "aria-label": d.intl.string(d.t.AUM8hY),
        text: d.intl.string(d.t.AUM8hY),
    });
}
