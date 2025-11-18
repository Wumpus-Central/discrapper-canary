i.d(e, { default: () => x });
var s = i(54381),
    t = i(481060),
    a = i(239091),
    c = i(776568),
    o = i(218035),
    r = i(775666),
    d = i(71991),
    h = i(612856),
    l = i(423589),
    u = i(131704),
    p = i(388032);
function x(n) {
    let { channel: e, onSelect: i } = n,
        x = (0, o.c)(e),
        k = (0, r.EQ)(e),
        b = (0, h.Z)(e),
        f = (0, c.ZP)(e),
        j = (0, d.Z)(e),
        C = (0, l.Mn)("NotificationsInboxMessageContextMenu") && u.$N.has(e.type),
        Q = e.isThread() ? (0, s.jsx)(t.kSQ, { children: b }) : C ? k : (0, s.jsx)(t.kSQ, { children: x });
    return (0, s.jsxs)(t.v2r, {
        navId: "notifications-inbox-message-context",
        onClose: a.Zy,
        "aria-label": p.intl.string(p.t.Xm41aV),
        onSelect: i,
        children: [(0, s.jsx)(t.kSQ, { children: e.isThread() ? j : f }), Q],
    });
}
