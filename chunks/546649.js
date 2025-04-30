l.d(t, { default: () => o });
var i = l(200651);
l(192379);
var e = l(481060),
    a = l(239091),
    r = l(299206),
    c = l(461757),
    s = l(388032);
function o(n) {
    let { channel: t, channelId: l, originalLink: o, messageId: u, onSelect: d } = n,
        h = (0, c.Z)(t, o, u),
        p = (0, r.Z)({
            id: l,
            label: s.intl.string(s.t.gFHI3t)
        });
    return (0, i.jsxs)(e.v2r, {
        navId: 'channel-mention-context',
        onClose: a.Zy,
        onSelect: d,
        'aria-label': s.intl.string(s.t.feGACA),
        children: [(0, i.jsx)(e.kSQ, { children: h }, 'channel-mention-actions'), (0, i.jsx)(e.kSQ, { children: p }, 'developer-actions')]
    });
}
