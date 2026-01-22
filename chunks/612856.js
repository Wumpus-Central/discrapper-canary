t.d(l, {
    default: () => o,
});
var i = t(627968);
t(64700);
var e = t(397927),
    a = t(442433),
    r = t(50268),
    s = t(687279),
    c = t(985018);

function o(n) {
    let { channel: l, channelId: t, originalLink: o, messageId: d, onSelect: u } = n,
        h = (0, s.A)(l, o, d),
        p = (0, r.A)({
            id: t,
            label: c.intl.string(c.t.gFHI3k),
        });
    return (0, i.jsxs)(e.W1t, {
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
