t.d(e, { default: () => p });
var l = t(627968);
t(64700);
var r = t(397927),
    a = t(442433),
    i = t(358367),
    c = t(793574),
    d = t(50268),
    A = t(533957),
    s = t(477190),
    u = t(307623),
    o = t(317910),
    E = t(475777),
    _ = t(985018);
let p = (0, i.A)(
    function (n) {
        let { channel: e, guild: t, onSelect: i } = n,
            c = (0, o.A)(e),
            p = (0, E.A)(e, t),
            h = (0, A.A)(e, t),
            b = (0, s.A)(e, t),
            x = (0, u.A)(e),
            D = (0, d.A)({ id: e.id, label: _.intl.string(_.t.gFHI3k) });
        return (0, l.jsxs)(r.W1t, {
            "data-menu-migrated": !0,
            navId: "channel-context",
            onClose: a.Z_,
            "aria-label": _.intl.string(_.t.Xm41aV),
            onSelect: i,
            children: [
                (0, l.jsx)(r.rXV, { children: c }),
                (0, l.jsxs)(r.rXV, { children: [p, h, b] }),
                (0, l.jsx)(r.rXV, { children: x }),
                (0, l.jsx)(r.rXV, { children: D }),
            ],
        });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
);
