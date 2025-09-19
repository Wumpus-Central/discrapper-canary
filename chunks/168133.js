e.d(i, { default: () => f });
var n = e(951288),
    a = e(647438),
    c = e(442837),
    l = e(481060),
    o = e(239091),
    s = e(13245),
    r = e(486016),
    d = e(624864),
    u = e(388032);
function f(t) {
    let { onSelect: i, onClose: e } = t,
        f = (0, c.e7)([d.Z], () => d.Z.isNotificationDisabled(r.OverlayNotificationDisabledSetting.TEXT_CHAT)),
        v = a.useRef(e);
    return (
        a.useEffect(() => {
            v.current = e;
        }),
        a.useEffect(
            () => () => {
                var t;
                return null == (t = v.current) ? void 0 : t.call(v);
            },
            [],
        ),
        (0, n.jsx)(l.v2r, {
            navId: "overlay-notifications-widget-context-menu",
            onClose: o.Zy,
            "aria-label": u.intl.string(u.t.tPfVWl),
            onSelect: i,
            children: (0, n.jsx)(l.S89, {
                label: u.intl.string(u.t.Fy5kPj),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => s.Z.setNotificationDisabledSetting(r.OverlayNotificationDisabledSetting.TEXT_CHAT, !f),
            }),
        })
    );
}
