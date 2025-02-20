e.d(t, { default: () => o });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(239091),
    r = e(299206),
    c = e(461757),
    s = e(388032);
function o(n) {
    let { channel: t, channelId: e, originalLink: o, messageId: d, onSelect: h } = n,
        u = (0, c.Z)(t, o, d),
        p = (0, r.Z)({
            id: e,
            label: s.NW.string(s.t.gFHI3t)
        });
    return (0, i.jsxs)(a.v2r, {
        navId: 'channel-mention-context',
        onClose: l.Zy,
        onSelect: h,
        'aria-label': s.NW.string(s.t.feGACA),
        children: [(0, i.jsx)(a.kSQ, { children: u }, 'channel-mention-actions'), (0, i.jsx)(a.kSQ, { children: p }, 'developer-actions')]
    });
}
