n.d(t, { default: () => y });
var r = n(255367);
n(73800);
var c = n(481060),
    l = n(239091),
    i = n(108843),
    o = n(100527),
    a = n(299206),
    u = n(398048),
    s = n(3689),
    b = n(323597),
    p = n(852245),
    O = n(367722),
    f = n(388032);
let y = (0, i.Z)(
    function (e) {
        let { channel: t, guild: n, onSelect: i } = e,
            o = (0, p.Z)(t),
            y = (0, O.Z)(t, n),
            d = (0, u.Z)(t, n),
            j = (0, s.Z)(t, n),
            g = (0, b.Z)(t),
            P = (0, a.Z)({
                id: t.id,
                label: f.intl.string(f.t.gFHI3t)
            });
        return (0, r.jsxs)(c.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': f.intl.string(f.t.Xm41aW),
            onSelect: i,
            children: [
                (0, r.jsx)(c.kSQ, { children: o }),
                (0, r.jsxs)(c.kSQ, {
                    children: [y, d, j]
                }),
                (0, r.jsx)(c.kSQ, { children: g }),
                (0, r.jsx)(c.kSQ, { children: P })
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
);
