t.d(s, { default: () => x });
var i = t(627968),
    n = t(397927),
    a = t(442433),
    r = t(995102),
    d = t(288104),
    o = t(661504),
    c = t(57907),
    h = t(375500),
    l = t(769591),
    u = t(95701),
    p = t(985018);
function x(e) {
    let { channel: s, onSelect: t } = e,
        x = (0, d.b)(s),
        b = (0, o.A0)(s),
        f = (0, h.A)(s),
        g = (0, r.Ay)(s),
        j = (0, c.A)(s),
        k = (0, l.os)("NotificationsInboxMessageContextMenu") && u.B4.has(s.type),
        m = s.isThread() ? (0, i.jsx)(n.rXV, { children: f }) : k ? b : (0, i.jsx)(n.rXV, { children: x });
    return (0, i.jsxs)(n.W1t, {
        "data-menu-migrated": !0,
        navId: "notifications-inbox-message-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: t,
        children: [(0, i.jsx)(n.rXV, { children: s.isThread() ? j : g }), m],
    });
}
