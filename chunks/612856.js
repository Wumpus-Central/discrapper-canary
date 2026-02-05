i.d(t, { default: () => o });
var l = i(627968);
i(64700);
var e = i(397927),
    a = i(442433),
    r = i(50268),
    s = i(687279),
    c = i(985018);
function o(n) {
    let { channel: t, channelId: i, originalLink: o, messageId: d, onSelect: u } = n,
        h = (0, s.A)(t, o, d),
        p = (0, r.A)({ id: i, label: c.intl.string(c.t.gFHI3k) });
    return (0, l.jsxs)(e.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: a.Z_,
        onSelect: u,
        "aria-label": c.intl.string(c.t.feGACE),
        children: [
            (0, l.jsx)(e.rXV, { children: h }, "channel-mention-actions"),
            (0, l.jsx)(e.rXV, { children: p }, "developer-actions"),
        ],
    });
}
