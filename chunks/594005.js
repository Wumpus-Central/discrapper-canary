n.d(i, {
    default: () => x,
});
var s = n(627968),
    t = n(397927),
    a = n(442433),
    r = n(995102),
    o = n(288104),
    d = n(661504),
    c = n(57907),
    h = n(375500),
    l = n(769591),
    u = n(95701),
    p = n(985018);

function x(e) {
    let { channel: i, onSelect: n } = e,
        x = (0, o.b)(i),
        b = (0, d.A0)(i),
        f = (0, h.A)(i),
        g = (0, r.Ay)(i),
        j = (0, c.A)(i),
        k = (0, l.os)("NotificationsInboxMessageContextMenu") && u.B4.has(i.type),
        m = i.isThread()
            ? (0, s.jsx)(t.rXV, {
                  children: f,
              })
            : k
              ? b
              : (0, s.jsx)(t.rXV, {
                    children: x,
                });
    return (0, s.jsxs)(t.W1t, {
        "data-menu-migration-ready": !0,
        navId: "notifications-inbox-message-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: n,
        children: [
            (0, s.jsx)(t.rXV, {
                children: i.isThread() ? j : g,
            }),
            m,
        ],
    });
}
