t.d(e, { default: () => E });
var r = t(54381);
t(473749);
var l = t(481060),
    i = t(239091),
    c = t(108843),
    o = t(100527),
    a = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    d = t(388032);
let E = (0, c.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            o = (0, s.Z)(e),
            E = (0, b.Z)(e, t),
            f = (0, u.Z)(e),
            p = (0, a.Z)({
                id: e.id,
                label: d.intl.string(d.t.gFHI3k),
            });
        return (0, r.jsxs)(l.v2r, {
            navId: "channel-context",
            onClose: i.Zy,
            "aria-label": d.intl.string(d.t.Xm41aV),
            onSelect: c,
            children: [
                (0, r.jsx)(l.kSQ, { children: o }),
                (0, r.jsx)(l.kSQ, { children: E }),
                (0, r.jsx)(l.kSQ, { children: f }),
                (0, r.jsx)(l.kSQ, { children: p }),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_STORE_CHANNEL_MENU],
);
