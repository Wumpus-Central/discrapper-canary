l.d(t, { default: () => r });
var i = l(54381);
l(473749);
var e = l(481060),
    s = l(239091),
    a = l(299206),
    c = l(461757),
    o = l(388032);
function r(n) {
    let { channel: t, channelId: l, originalLink: r, messageId: u, onSelect: d } = n,
        h = (0, c.Z)(t, r, u),
        p = (0, a.Z)({
            id: l,
            label: o.intl.string(o.t.gFHI3k),
        });
    return (0, i.jsxs)(e.v2r, {
        navId: "channel-mention-context",
        onClose: s.Zy,
        onSelect: d,
        "aria-label": o.intl.string(o.t.feGACE),
        children: [
            (0, i.jsx)(e.kSQ, { children: h }, "channel-mention-actions"),
            (0, i.jsx)(e.kSQ, { children: p }, "developer-actions"),
        ],
    });
}
