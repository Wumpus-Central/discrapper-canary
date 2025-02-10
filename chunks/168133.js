i.d(e, { default: () => l });
var n = i(200651),
    c = i(192379),
    o = i(442837),
    a = i(481060),
    s = i(239091),
    u = i(13245),
    r = i(237997),
    d = i(981631),
    f = i(388032);
function l(t) {
    let { onSelect: e, onClose: i } = t,
        { textChatNotificationMode: l } = (0, o.cj)([r.Z], () => ({ textChatNotificationMode: r.Z.getTextChatNotificationMode() })),
        h = c.useRef(i);
    return (
        c.useEffect(() => {
            h.current = i;
        }),
        c.useEffect(() => () => h.current(), []),
        (0, n.jsx)(a.v2r, {
            navId: 'overlay-notifications-widget-context-menu',
            onClose: s.Zy,
            'aria-label': f.intl.string(f.t.tPfVWl),
            onSelect: e,
            children: (0, n.jsx)(a.S89, {
                label: f.intl.string(f.t.Fy5kPj),
                checked: l === d.Ypu.ENABLED,
                id: 'overlay-text-chat-notifications',
                action: () => u.Z.setTextChatNotificationMode(l === d.Ypu.ENABLED ? d.Ypu.DISABLED : d.Ypu.ENABLED)
            })
        })
    );
}
