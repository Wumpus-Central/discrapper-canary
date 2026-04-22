n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(534514),
    a = n(834730),
    s = n(573435),
    r = n(145497),
    o = n(649640),
    d = n(985018),
    c = n(890653);
function u(e) {
    let { guildId: t, name: n } = e,
        u = (0, o.b2)(),
        m = (0, o.n6)(u.hex());
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)("div", { className: c.vK, style: { background: m } }),
            (0, i.jsx)("div", {
                className: c.H,
                children: (0, i.jsx)(s.Ay, {
                    mask: s.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: c.R3,
                        children: (0, i.jsx)(r.j, {
                            guildId: t,
                            guildName: n ?? "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: c.F2,
                        }),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: c.wx,
                children: (0, i.jsx)(l.D, {
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: n ?? d.intl.string(d.t.wZmueu),
                }),
            }),
            (0, i.jsx)("div", {
                className: c.rf,
                children: (0, i.jsx)(a.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: d.intl.string(d.t["8mfCqY"]),
                }),
            }),
        ],
    });
}
