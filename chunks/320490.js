i.d(e, { default: () => f });
var a = i(627968),
    n = i(64700),
    s = i(311907),
    c = i(397927),
    o = i(442433),
    r = i(684013),
    d = i(592598),
    l = i(672396),
    u = i(985018);
function f(t) {
    let { onSelect: e, onClose: i } = t,
        f = (0, s.bG)([d.A], () => d.A.isNotificationDisabled(l.KS.TextChat)),
        h = n.useRef(i);
    return (
        n.useEffect(() => {
            h.current = i;
        }),
        n.useEffect(() => () => h.current?.(), []),
        (0, a.jsx)(c.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-notifications-widget-context-menu",
            onClose: o.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: e,
            children: (0, a.jsx)(c.sLh, {
                label: u.intl.string(u.t.Fy5kPp),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => r.A.setNotificationDisabled(l.KS.TextChat, !f),
            }),
        })
    );
}
