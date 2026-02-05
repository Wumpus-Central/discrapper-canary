"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(573435),
    s = n(145497),
    o = n(649640),
    l = n(985018),
    u = n(838934);
function c(e) {
    let { guildId: t, name: n } = e,
        c = (0, o.b2)(),
        d = (0, o.n6)(c.hex());
    return (0, r.jsxs)("div", {
        className: u.kL,
        children: [
            (0, r.jsx)("div", { className: u.vK, style: { background: d } }),
            (0, r.jsx)("div", {
                className: u.H,
                children: (0, r.jsx)(a.Ay, {
                    mask: a.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)("div", {
                        className: u.R3,
                        children: (0, r.jsx)(s.j, {
                            guildId: t,
                            guildName: n ?? "?",
                            guildIcon: null,
                            iconSize: 64,
                            acronymClassName: u.F2,
                        }),
                    }),
                }),
            }),
            (0, r.jsx)("div", {
                className: u.wx,
                children: (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/medium",
                    color: "text-strong",
                    children: n ?? l.intl.string(l.t.wZmueu),
                }),
            }),
            (0, r.jsx)("div", {
                className: u.rf,
                children: (0, r.jsx)(i.Text, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: l.intl.string(l.t["8mfCqY"]),
                }),
            }),
        ],
    });
}
