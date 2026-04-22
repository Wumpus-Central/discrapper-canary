t.d(e, { default: () => b });
var l = t(627968);
t(64700);
var a = t(861672),
    r = t(477782),
    i = t(442433),
    c = t(358367),
    d = t(793574),
    o = t(50268),
    A = t(533957),
    s = t(477190),
    u = t(307623),
    E = t(317910),
    _ = t(475777),
    h = t(985018);
let b = (0, c.A)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            d = (0, E.A)(e),
            b = (0, _.A)(e, t),
            x = (0, A.A)(e, t),
            D = (0, s.A)(e, t),
            g = (0, u.A)(e),
            p = (0, o.A)({ id: e.id, label: h.intl.string(h.t.gFHI3k) });
        return (0, l.jsxs)(a.W, {
            "data-menu-migrated": !0,
            navId: "channel-context",
            onClose: i.Z_,
            "aria-label": h.intl.string(h.t.Xm41aV),
            onSelect: c,
            children: [
                (0, l.jsx)(r.rX, { children: d }),
                (0, l.jsxs)(r.rX, { children: [b, x, D] }),
                (0, l.jsx)(r.rX, { children: g }),
                (0, l.jsx)(r.rX, { children: p }),
            ],
        });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_ACTIVITY_FEED_VOICE_MENU],
);
