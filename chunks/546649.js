l.d(t, { default: () => o });
var e = l(200651);
l(192379);
var i = l(481060),
    a = l(239091),
    r = l(299206),
    c = l(461757),
    s = l(388032);
function o(n) {
    let { channel: t, channelId: l, originalLink: o, messageId: u, onSelect: d } = n,
        h = (0, c.Z)(t, o, u),
        p = (0, r.Z)({
            id: l,
            label: s.NW.string(s.t.gFHI3t)
        });
    return (0, e.jsxs)(i.v2r, {
        navId: 'channel-mention-context',
        onClose: a.Zy,
        onSelect: d,
        'aria-label': s.NW.string(s.t.feGACA),
        children: [(0, e.jsx)(i.kSQ, { children: h }, 'channel-mention-actions'), (0, e.jsx)(i.kSQ, { children: p }, 'developer-actions')]
    });
}
