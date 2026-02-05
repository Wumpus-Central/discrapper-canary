t.d(e, { default: () => u });
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(442433),
    a = t(358367),
    c = t(793574),
    s = t(50268),
    A = t(307623),
    o = t(317910),
    d = t(475777),
    E = t(985018);
let u = (0, a.A)(
    function (n) {
        let { channel: e, guild: t, onSelect: a } = n,
            c = (0, o.A)(e),
            u = (0, d.A)(e, t),
            _ = (0, A.A)(e),
            p = (0, s.A)({ id: e.id, label: E.intl.string(E.t.gFHI3k) });
        return (0, i.jsxs)(r.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: l.Z_,
            "aria-label": E.intl.string(E.t.Xm41aV),
            onSelect: a,
            children: [
                (0, i.jsx)(r.rXV, { children: c }),
                (0, i.jsx)(r.rXV, { children: u }),
                (0, i.jsx)(r.rXV, { children: _ }),
                (0, i.jsx)(r.rXV, { children: p }),
            ],
        });
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
