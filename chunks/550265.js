i.d(e, { default: () => p });
var s = i(255367),
    t = i(481060),
    a = i(239091),
    c = i(776568),
    o = i(218035),
    r = i(775666),
    d = i(612856),
    h = i(423589),
    l = i(131704),
    u = i(388032);
function p(n) {
    let { channel: e, onSelect: i } = n,
        p = (0, o.c)(e),
        x = (0, r.EQ)(e),
        k = (0, d.Z)(e),
        b = (0, c.ZP)(e),
        f = (0, h.Mn)("NotificationsInboxMessageContextMenu") && l.$N.has(e.type),
        j = e.isThread() ? (0, s.jsx)(t.kSQ, { children: k }) : f ? x : (0, s.jsx)(t.kSQ, { children: p });
    return (0, s.jsxs)(t.v2r, {
        navId: "notifications-inbox-message-context",
        onClose: a.Zy,
        "aria-label": u.intl.string(u.t.Xm41aW),
        onSelect: i,
        children: [(0, s.jsx)(t.kSQ, { children: b }), j],
    });
}
