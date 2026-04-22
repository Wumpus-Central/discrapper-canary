t.d(e, { default: () => _ });
var l = t(627968);
t(64700);
var i = t(861672),
    r = t(477782),
    a = t(442433),
    c = t(358367),
    o = t(793574),
    s = t(50268),
    A = t(307623),
    d = t(317910),
    E = t(475777),
    u = t(985018);
let _ = (0, c.A)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            o = (0, d.A)(e),
            _ = (0, E.A)(e, t),
            N = (0, A.A)(e),
            h = (0, s.A)({ id: e.id, label: u.intl.string(u.t.gFHI3k) });
        return (0, l.jsxs)(i.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: a.Z_,
            "aria-label": u.intl.string(u.t.Xm41aV),
            onSelect: c,
            children: [
                (0, l.jsx)(r.rX, { children: o }),
                (0, l.jsx)(r.rX, { children: _ }),
                (0, l.jsx)(r.rX, { children: N }),
                (0, l.jsx)(r.rX, { children: h }),
            ],
        });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
