t.d(e, { default: () => f });
var r = t(54381);
t(473749);
var c = t(481060),
    l = t(239091),
    i = t(108843),
    o = t(100527),
    a = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    d = t(388032);
let f = (0, i.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: i } = n,
            o = (0, s.Z)(e),
            f = (0, b.Z)(e, t),
            O = (0, u.Z)(e),
            p = (0, a.Z)({
                id: e.id,
                label: d.intl.string(d.t.gFHI3k),
            });
        return (0, r.jsxs)(c.v2r, {
            navId: "channel-context",
            onClose: l.Zy,
            "aria-label": d.intl.string(d.t.Xm41aV),
            onSelect: i,
            children: [
                (0, r.jsx)(c.kSQ, { children: o }),
                (0, r.jsx)(c.kSQ, { children: f }),
                (0, r.jsx)(c.kSQ, { children: O }),
                (0, r.jsx)(c.kSQ, { children: p }),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
