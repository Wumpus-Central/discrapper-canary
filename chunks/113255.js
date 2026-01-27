n.d(t, {
    default: () => d,
});
var r = n(627968);
n(64700);
var c = n(397927),
    i = n(442433),
    o = n(358367),
    l = n(793574),
    a = n(50268),
    u = n(533957),
    s = n(477190),
    b = n(307623),
    p = n(317910),
    O = n(475777),
    y = n(985018);
let d = (0, o.A)(
    function (e) {
        let { channel: t, guild: n, onSelect: o } = e,
            l = (0, p.A)(t),
            d = (0, O.A)(t, n),
            f = (0, u.A)(t, n),
            A = (0, s.A)(t, n),
            j = (0, b.A)(t),
            E = (0, a.A)({
                id: t.id,
                label: y.intl.string(y.t.gFHI3k),
            });
        return (0, r.jsxs)(c.W1t, {
            "data-menu-migrated": !0,
            navId: "channel-context",
            onClose: i.Z_,
            "aria-label": y.intl.string(y.t.Xm41aV),
            onSelect: o,
            children: [
                (0, r.jsx)(c.rXV, {
                    children: l,
                }),
                (0, r.jsxs)(c.rXV, {
                    children: [d, f, A],
                }),
                (0, r.jsx)(c.rXV, {
                    children: j,
                }),
                (0, r.jsx)(c.rXV, {
                    children: E,
                }),
            ],
        });
    },
    [l.A.CONTEXT_MENU, l.A.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
);
