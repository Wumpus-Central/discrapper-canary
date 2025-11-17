i.d(e, { default: () => f });
var n = i(54381),
    a = i(473749),
    c = i(442837),
    s = i(481060),
    o = i(239091),
    r = i(13245),
    l = i(624864),
    u = i(987650),
    d = i(388032);
function f(t) {
    let { onSelect: e, onClose: i } = t,
        f = (0, c.e7)([l.Z], () => l.Z.isNotificationDisabled(u.n0.TextChat)),
        h = a.useRef(i);
    return (
        a.useEffect(() => {
            h.current = i;
        }),
        a.useEffect(
            () => () => {
                var t;
                return null == (t = h.current) ? void 0 : t.call(h);
            },
            [],
        ),
        (0, n.jsx)(s.v2r, {
            navId: "overlay-notifications-widget-context-menu",
            onClose: o.Zy,
            "aria-label": d.intl.string(d.t.tPfVWi),
            onSelect: e,
            children: (0, n.jsx)(s.S89, {
                label: d.intl.string(d.t.Fy5kPp),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => r.Z.setNotificationDisabled(u.n0.TextChat, !f),
            }),
        })
    );
}
