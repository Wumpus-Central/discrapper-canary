t.d(e, { default: () => h });
var l = t(200651);
t(192379);
var a = t(481060),
    i = t(239091),
    c = t(108843),
    r = t(100527),
    d = t(299206),
    s = t(398048),
    u = t(3689),
    o = t(323597),
    E = t(852245),
    Z = t(367722),
    _ = t(388032);
let h = (0, c.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            r = (0, E.Z)(e),
            h = (0, Z.Z)(e, t),
            N = (0, s.Z)(e, t),
            A = (0, u.Z)(e, t),
            f = (0, o.Z)(e),
            C = (0, d.Z)({
                id: e.id,
                label: _.intl.string(_.t.gFHI3t)
            });
        return (0, l.jsxs)(a.v2r, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': _.intl.string(_.t.Xm41aW),
            onSelect: c,
            children: [
                (0, l.jsx)(a.kSQ, { children: r }),
                (0, l.jsxs)(a.kSQ, {
                    children: [h, N, A]
                }),
                (0, l.jsx)(a.kSQ, { children: f }),
                (0, l.jsx)(a.kSQ, { children: C })
            ]
        });
    },
    [r.Z.CONTEXT_MENU, r.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
);
