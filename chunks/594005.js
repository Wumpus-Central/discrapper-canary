i.d(s, { default: () => b });
var n = i(627968),
    t = i(477782),
    a = i(861672),
    r = i(442433),
    d = i(995102),
    o = i(288104),
    c = i(661504),
    h = i(57907),
    l = i(375500),
    u = i(769591),
    p = i(95701),
    x = i(985018);
function b(e) {
    let { channel: s, onSelect: i } = e,
        b = (0, o.b)(s),
        f = (0, c.A0)(s),
        g = (0, l.A)(s),
        j = (0, d.A)(s),
        k = (0, h.A)(s),
        m = (0, u.os)("NotificationsInboxMessageContextMenu") && p.B4.has(s.type),
        A = s.isThread() ? (0, n.jsx)(t.rX, { children: g }) : m ? f : (0, n.jsx)(t.rX, { children: b });
    return (0, n.jsxs)(a.W, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: r.Z_,
        "aria-label": x.intl.string(x.t.Xm41aV),
        onSelect: i,
        children: [(0, n.jsx)(t.rX, { children: s.isThread() ? k : j }), A],
    });
}
