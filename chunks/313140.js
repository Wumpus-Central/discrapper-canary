t.d(n, { default: () => _ });
var r = t(627968);
t(64700);
var i = t(980707),
    a = t(477782),
    l = t(442433),
    d = t(358367),
    s = t(793574),
    c = t(50268),
    h = t(307623),
    u = t(317910),
    A = t(475777),
    o = t(375708);
let _ = (0, d.A)(
    function (e) {
        let { channel: n, guild: t, onSelect: d } = e,
            s = (0, u.A)(n),
            _ = (0, A.A)(n, t),
            p = (0, h.A)(n),
            N = (0, c.A)({ id: n.id, label: o.intl.string(o.t.gFHI3k) });
        return (0, r.jsxs)(i.W, {
            "data-menu-migrated-auto": !0,
            navId: "channel-context",
            onClose: l.Z_,
            "aria-label": o.intl.string(o.t.Xm41aV),
            onSelect: d,
            children: [
                (0, r.jsx)(a.rX, { children: s }),
                (0, r.jsx)(a.rX, { children: _ }),
                (0, r.jsx)(a.rX, { children: p }),
                (0, r.jsx)(a.rX, { children: N }),
            ],
        });
    },
    [s.A.CONTEXT_MENU, s.A.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
