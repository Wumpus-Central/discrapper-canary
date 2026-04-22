i.d(t, { default: () => d });
var l = i(627968);
i(64700);
var e = i(861672),
    a = i(477782),
    r = i(442433),
    s = i(50268),
    c = i(687279),
    o = i(985018);
function d(n) {
    let { channel: t, channelId: i, originalLink: d, messageId: u, onSelect: h } = n,
        p = (0, c.A)(t, d, u),
        A = (0, s.A)({ id: i, label: o.intl.string(o.t.gFHI3k) });
    return (0, l.jsxs)(e.W, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: r.Z_,
        onSelect: h,
        "aria-label": o.intl.string(o.t.feGACE),
        children: [
            (0, l.jsx)(a.rX, { children: p }, "channel-mention-actions"),
            (0, l.jsx)(a.rX, { children: A }, "developer-actions"),
        ],
    });
}
