i.d(s, { default: () => x });
var n = i(627968),
    t = i(397927),
    a = i(442433),
    r = i(995102),
    o = i(288104),
    c = i(661504),
    d = i(57907),
    h = i(375500),
    l = i(769591),
    p = i(95701),
    u = i(985018);
function x(e) {
    let { channel: s, onSelect: i } = e,
        x = (0, o.b)(s),
        b = (0, c.A0)(s),
        f = (0, h.A)(s),
        j = (0, r.Ay)(s),
        k = (0, d.A)(s),
        A = (0, l.os)("NotificationsInboxMessageContextMenu") && p.B4.has(s.type),
        C = s.isThread() ? (0, n.jsx)(t.rXV, { children: f }) : A ? b : (0, n.jsx)(t.rXV, { children: x });
    return (0, n.jsxs)(t.W1t, {
        navId: "notifications-inbox-message-context",
        onClose: a.Z_,
        "aria-label": u.intl.string(u.t.Xm41aV),
        onSelect: i,
        children: [(0, n.jsx)(t.rXV, { children: s.isThread() ? k : j }), C],
    });
}
