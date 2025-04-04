n.d(t, { default: () => y });
var r = n(200651);
n(192379);
var c = n(481060),
    l = n(239091),
    o = n(108843),
    i = n(100527),
    a = n(299206),
    u = n(398048),
    s = n(3689),
    b = n(323597),
    O = n(852245),
    f = n(367722),
    p = n(388032);
let y = (0, o.Z)(
    function (e) {
        let { channel: t, guild: n, onSelect: o } = e,
            i = (0, O.Z)(t),
            y = (0, f.Z)(t, n),
            d = (0, u.Z)(t, n),
            j = (0, s.Z)(t, n),
            g = (0, b.Z)(t),
            P = (0, a.Z)({
                id: t.id,
                label: p.NW.string(p.t.gFHI3t)
            });
        return (0, r.jsxs)(c.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': p.NW.string(p.t.Xm41aW),
            onSelect: o,
            children: [
                (0, r.jsx)(c.kSQ, { children: i }),
                (0, r.jsxs)(c.kSQ, {
                    children: [y, d, j]
                }),
                (0, r.jsx)(c.kSQ, { children: g }),
                (0, r.jsx)(c.kSQ, { children: P })
            ]
        });
    },
    [i.Z.CONTEXT_MENU, i.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
);
