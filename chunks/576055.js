n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(573435),
    s = n(145497),
    o = n(649640),
    l = n(985018),
    c = n(838934);
function u(e) {
    let { guildId: t, name: n } = e,
        u = (0, o.b2)(),
        d = (0, o.n6)(u.hex());
    return (0, r.jsxs)("div", {
        className: c.kL,
        children: [
            (0, r.jsx)("div", {
                className: c.vK,
                style: { background: d },
            }),
            (0, r.jsx)("div", {
                className: c.H,
                children: (0, r.jsx)(a.Ay, {
                    mask: a.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)("div", {
                        className: c.R3,
                        children: (0, r.jsx)(s.j, {
                            guildId: t,
                            guildName: null != n ? n : "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: c.F2,
                        }),
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: c.wx,
                children: (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: null != n ? n : l.intl.string(l.t.wZmueu),
                }),
            }),
            (0, r.jsx)("div", {
                className: c.rf,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: l.intl.string(l.t["8mfCqY"]),
                }),
            }),
        ],
    });
}
