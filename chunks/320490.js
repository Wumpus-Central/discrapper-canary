i.d(e, {
    default: () => f,
});
var n = i(627968),
    a = i(64700),
    c = i(311907),
    s = i(397927),
    l = i(442433),
    o = i(684013),
    r = i(592598),
    u = i(672396),
    d = i(985018);

function f(t) {
    let { onSelect: e, onClose: i } = t,
        f = (0, c.bG)([r.A], () => r.A.isNotificationDisabled(u.KS.TextChat)),
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
        (0, n.jsx)(s.W1t, {
            navId: "overlay-notifications-widget-context-menu",
            onClose: l.Z_,
            "aria-label": d.intl.string(d.t.tPfVWi),
            onSelect: e,
            children: (0, n.jsx)(s.sLh, {
                label: d.intl.string(d.t.Fy5kPp),
                checked: !f,
                id: "overlay-text-chat-notifications",
                action: () => o.A.setNotificationDisabled(u.KS.TextChat, !f),
            }),
        })
    );
}
