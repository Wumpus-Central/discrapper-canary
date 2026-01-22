t.d(n, { default: () => p });
var r = t(627968);
t(64700);
var c = t(397927),
    l = t(442433),
    i = t(358367),
    a = t(793574),
    o = t(50268),
    u = t(307623),
    s = t(317910),
    b = t(475777),
    A = t(985018);
let p = (0, i.A)(
    function (e) {
        let { channel: n, guild: t, onSelect: i } = e,
            a = (0, s.A)(n),
            p = (0, b.A)(n, t),
            d = (0, u.A)(n),
            E = (0, o.A)({
                id: n.id,
                label: A.intl.string(A.t.gFHI3k),
            });
        return (0, r.jsxs)(c.W1t, {
            navId: "channel-context",
            onClose: l.Z_,
            "aria-label": A.intl.string(A.t.Xm41aV),
            onSelect: i,
            children: [
                (0, r.jsx)(c.rXV, { children: a }),
                (0, r.jsx)(c.rXV, { children: p }),
                (0, r.jsx)(c.rXV, { children: d }),
                (0, r.jsx)(c.rXV, { children: E }),
            ],
        });
    },
    [a.A.CONTEXT_MENU, a.A.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
