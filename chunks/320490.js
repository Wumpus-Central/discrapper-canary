i.d(e, {
    default: () => f,
});
var a = i(627968),
    n = i(64700),
    c = i(311907),
    s = i(397927),
    o = i(442433),
    r = i(684013),
    l = i(592598),
    u = i(672396),
    d = i(985018);

function f(t) {
    let { onSelect: e, onClose: i } = t,
        f = (0, c.bG)([l.A], () => l.A.isNotificationDisabled(u.KS.TextChat)),
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
            "data-menu-migrated-auto": !0,
            navId: "overlay-notifications-widget-context-menu",
            onClose: o.Z_,
            "aria-label": d.intl.string(d.t.tPfVWi),
            onSelect: e,
            children: (0, a.jsx)(s.sLh, {
                label: d.intl.string(d.t.Fy5kPp),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => r.A.setNotificationDisabled(u.KS.TextChat, !f),
            }),
        })
    );
}
