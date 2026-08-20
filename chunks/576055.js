l.d(s, { A: () => h });
var i = l(477900),
    a = l(582128),
    n = l(297264),
    r = l(834730),
    c = l(573435),
    d = l(145497),
    t = l(649640),
    x = l(375708),
    m = l(377476);
function h(e) {
    let { guildId: s, name: l } = e,
        h = a.useId(),
        u = (0, t.b2)(),
        o = (0, t.n6)(u.hex());
    return (0, i.jsxs)("article", {
        className: m.kL,
        "aria-labelledby": h,
        children: [
            (0, i.jsx)("div", { className: m.vK, style: { background: o } }),
            (0, i.jsx)("div", {
                className: m.H,
                children: (0, i.jsx)(c.Ay, {
                    mask: c.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: m.R3,
                        children: (0, i.jsx)(d.j, {
                            guildId: s,
                            guildName: l ?? "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: m.F2,
                        }),
                    }),
                }),
            }),
            (0, i.jsx)("div", {
                className: m.wx,
                children: (0, i.jsx)(n.D, {
                    id: h,
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: l ?? x.intl.string(x.t.wZmueu),
                }),
            }),
            (0, i.jsx)("div", {
                className: m.rf,
                children: (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: x.intl.string(x.t["8mfCqY"]),
                }),
            }),
        ],
    });
}
