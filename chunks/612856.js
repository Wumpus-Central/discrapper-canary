l.d(t, {
    default: () => o,
});
var i = l(627968);
l(64700);
var e = l(397927),
    a = l(442433),
    r = l(50268),
    s = l(687279),
    c = l(985018);

function o(n) {
    let { channel: t, channelId: l, originalLink: o, messageId: d, onSelect: u } = n,
        h = (0, s.A)(t, o, d),
        p = (0, r.A)({
            id: l,
            label: c.intl.string(c.t.gFHI3k),
        });
    return (0, i.jsxs)(e.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-mention-context",
        onClose: a.Z_,
        onSelect: u,
        "aria-label": c.intl.string(c.t.feGACE),
        children: [
            (0, i.jsx)(
                e.rXV,
                {
                    children: h,
                },
                "channel-mention-actions",
            ),
            (0, i.jsx)(
                e.rXV,
                {
                    children: p,
                },
                "developer-actions",
            ),
        ],
    });
}
