i.d(t, { default: () => o });
var e = i(200651);
i(192379);
var l = i(481060),
    a = i(239091),
    r = i(299206),
    c = i(461757),
    s = i(388032);
function o(n) {
    let { channel: t, channelId: i, originalLink: o, messageId: d, onSelect: h } = n,
        u = (0, c.Z)(t, o, d),
        p = (0, r.Z)({
            id: i,
            label: s.intl.string(s.t.gFHI3t)
        });
    return (0, e.jsxs)(l.v2r, {
        navId: 'channel-mention-context',
        onClose: a.Zy,
        onSelect: h,
        'aria-label': s.intl.string(s.t.feGACA),
        children: [(0, e.jsx)(l.kSQ, { children: u }, 'channel-mention-actions'), (0, e.jsx)(l.kSQ, { children: p }, 'developer-actions')]
    });
}
