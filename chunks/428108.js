n.d(t, { default: () => O });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    c = n(108843),
    o = n(100527),
    a = n(299206),
    u = n(398048),
    s = n(3689),
    b = n(323597),
    p = n(852245),
    d = n(367722),
    f = n(388032);
let O = (0, c.Z)(
    function (e) {
        let { channel: t, guild: n, onSelect: c } = e,
            o = (0, p.Z)(t),
            O = (0, d.Z)(t, n),
            y = (0, u.Z)(t, n),
            j = (0, s.Z)(t, n),
            E = (0, b.Z)(t),
            g = (0, a.Z)({
                id: t.id,
                label: f.intl.string(f.t.gFHI3k),
            });
        return (0, r.jsxs)(i.v2r, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": f.intl.string(f.t.Xm41aV),
            onSelect: c,
            children: [
                (0, r.jsx)(i.kSQ, { children: o }),
                (0, r.jsxs)(i.kSQ, {
                    children: [O, y, j],
                }),
                (0, r.jsx)(i.kSQ, { children: E }),
                (0, r.jsx)(i.kSQ, { children: g }),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
);
