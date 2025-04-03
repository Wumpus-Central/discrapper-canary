e.d(i, { default: () => u });
var n = e(200651),
    a = e(192379),
    c = e(442837),
    o = e(481060),
    s = e(239091),
    r = e(13245),
    l = e(486016),
    d = e(624864),
    f = e(388032);
function u(t) {
    let { onSelect: i, onClose: e } = t,
        u = (0, c.e7)([d.Z], () => d.Z.isNotificationDisabled(l.OverlayNotificationDisabledSetting.TEXT_CHAT)),
        b = a.useRef(e);
    return (
        a.useEffect(() => {
            b.current = e;
        }),
        a.useEffect(() => () => b.current(), []),
        (0, n.jsx)(o.v2r, {
            navId: 'overlay-notifications-widget-context-menu',
            onClose: s.Zy,
            'aria-label': f.NW.string(f.t.tPfVWl),
            onSelect: i,
            children: (0, n.jsx)(o.S89, {
                label: f.NW.string(f.t.Fy5kPj),
                checked: u,
                id: 'overlay-text-chat-notifications',
                action: () => r.Z.setNotificationDisabledSetting(l.OverlayNotificationDisabledSetting.TEXT_CHAT, !u)
            })
        })
    );
}
