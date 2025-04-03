n.d(t, { default: () => y });
var r = n(200651);
n(192379);
var c = n(481060),
    o = n(239091),
    l = n(108843),
    a = n(100527),
    i = n(299206),
    u = n(398048),
    s = n(3689),
    b = n(323597),
    O = n(852245),
    f = n(367722),
    p = n(388032);
let y = (0, l.Z)(
    function (e) {
        let { channel: t, guild: n, onSelect: l } = e,
            a = (0, O.Z)(t),
            y = (0, f.Z)(t, n),
            d = (0, u.Z)(t, n),
            j = (0, s.Z)(t, n),
            g = (0, b.Z)(t),
            P = (0, i.Z)({
                id: t.id,
                label: p.NW.string(p.t.gFHI3t)
            });
        return (0, r.jsxs)(c.v2r, {
            navId: 'channel-context',
            onClose: o.Zy,
            'aria-label': p.NW.string(p.t.Xm41aW),
            onSelect: l,
            children: [
                (0, r.jsx)(c.kSQ, { children: a }),
                (0, r.jsxs)(c.kSQ, {
                    children: [y, d, j]
                }),
                (0, r.jsx)(c.kSQ, { children: g }),
                (0, r.jsx)(c.kSQ, { children: P })
            ]
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
);
