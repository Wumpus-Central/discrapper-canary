i.d(e, {
    default: () => f,
});
var a = i(627968),
    n = i(64700),
    c = i(311907),
    s = i(397927),
    r = i(442433),
    o = i(684013),
    l = i(592598),
    d = i(672396),
    u = i(985018);

function f(t) {
    let { onSelect: e, onClose: i } = t,
        f = (0, c.bG)([l.A], () => l.A.isNotificationDisabled(d.KS.TextChat)),
        h = n.useRef(i);
    return (
        n.useEffect(() => {
            h.current = i;
        }),
        n.useEffect(
            () => () => {
                var t;
                return null == (t = h.current) ? void 0 : t.call(h);
            },
            [],
        ),
        (0, a.jsx)(s.W1t, {
            "data-menu-migration-ready": !0,
            navId: "overlay-notifications-widget-context-menu",
            onClose: r.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: e,
            children: (0, a.jsx)(s.sLh, {
                label: u.intl.string(u.t.Fy5kPp),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => o.A.setNotificationDisabled(d.KS.TextChat, !f),
            }),
        })
    );
}
