l.d(s, { A: () => m });
var i = l(477900),
    n = l(582128),
    r = l(297264),
    a = l(834730),
    t = l(573435),
    d = l(145497),
    c = l(649640),
    o = l(660183),
    u = l(377476);
function m(e) {
    let { guildId: s, name: l, footer: m } = e,
        x = n.useId(),
        h = (0, c.b2)(),
        j = (0, c.n6)(h.hex());
    return (0, i.jsxs)("article", {
        className: u.kL,
        "aria-labelledby": x,
        children: [
            (0, i.jsx)("div", { className: u.vK, style: { background: j } }),
            (0, i.jsx)("div", {
                className: u.H,
                children: (0, i.jsx)(t.Ay, {
                    mask: t.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: u.R3,
                        children: (0, i.jsx)(d.j, {
                            guildId: s,
                            guildName: l ?? "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: u.F2,
                        }),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: u.wx,
                children: (0, i.jsx)(r.D, {
                    id: x,
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: l ?? o.intl.string(o.t.wZmueu),
                }),
            }),
            (0, i.jsx)("div", {
                className: u.rf,
                children: (0, i.jsx)(a.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: o.intl.string(o.t["8mfCqY"]),
                }),
            }),
            m,
        ],
    });
}
