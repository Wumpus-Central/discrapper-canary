n.d(t, {
    default: () => y,
});
var r = n(627968);
n(64700);
var c = n(397927),
    i = n(442433),
    l = n(358367),
    a = n(793574),
    o = n(50268),
    u = n(533957),
    s = n(477190),
    b = n(307623),
    p = n(317910),
    O = n(475777),
    f = n(985018);
let y = (0, l.A)(
    function (e) {
        let { channel: t, guild: n, onSelect: l } = e,
            a = (0, p.A)(t),
            y = (0, O.A)(t, n),
            d = (0, u.A)(t, n),
            j = (0, s.A)(t, n),
            A = (0, b.A)(t),
            g = (0, o.A)({
                id: t.id,
                label: f.intl.string(f.t.gFHI3k),
            });
        return (0, r.jsxs)(c.W1t, {
            "data-menu-mixed": !0,
            navId: "channel-context",
            onClose: i.Z_,
            "aria-label": f.intl.string(f.t.Xm41aV),
            onSelect: l,
            children: [
                (0, r.jsx)(c.rXV, {
                    children: a,
                }),
                (0, r.jsxs)(c.rXV, {
                    children: [y, d, j],
                }),
                (0, r.jsx)(c.rXV, {
                    children: A,
                }),
                (0, r.jsx)(c.rXV, {
                    children: g,
                }),
            ],
        });
    },
    [a.A.CONTEXT_MENU, a.A.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
);
