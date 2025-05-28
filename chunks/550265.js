e.d(t, { default: () => u });
var i = e(255367),
    s = e(481060),
    a = e(239091),
    c = e(776568),
    o = e(218035),
    r = e(775666),
    d = e(423589),
    l = e(131704),
    h = e(388032);
function u(n) {
    let { channel: t, onSelect: e } = n,
        u = (0, o.c)(t),
        p = (0, r.EQ)(t),
        x = (0, c.ZP)(t),
        k = (0, d.Mn)('NotificationsInboxMessageContextMenu') && l.$N.has(t.type);
    return (0, i.jsxs)(s.v2r, {
        navId: 'notifications-inbox-message-context',
        onClose: a.Zy,
        'aria-label': h.intl.string(h.t.Xm41aW),
        onSelect: e,
        children: [(0, i.jsx)(s.kSQ, { children: x }), k ? p : (0, i.jsx)(s.kSQ, { children: u })]
    });
}
