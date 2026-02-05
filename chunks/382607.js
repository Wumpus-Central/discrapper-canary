"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(954571),
    o = n(500049),
    l = n(522305),
    u = n(652215),
    c = n(985018);
function d(e) {
    let { botUserId: t, applicationId: n, analyticsLocations: d } = e,
        [_, f] = i.useState(!1),
        p = i.useRef(null),
        h = i.useCallback(async () => {
            s.default.track(u.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                application_id: n,
                button_action: o.F5.OPEN_APP_DM,
            }),
                f(!0);
            try {
                await (0, l.Q)({ appId: n, botId: t, analyticsLocations: d });
            } catch (e) {}
            clearTimeout(p.current), f(!1);
        }, [t, n, d]);
    return (0, r.jsx)(a.Button, {
        type: "submit",
        size: "md",
        variant: "secondary",
        loading: _,
        onClick: h,
        "aria-label": c.intl.string(c.t.AUM8hY),
        text: c.intl.string(c.t.AUM8hY),
    });
}
