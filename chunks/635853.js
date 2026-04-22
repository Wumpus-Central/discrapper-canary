n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(534514),
    a = n(939249),
    s = n(695366),
    r = n(834730),
    o = n(573435),
    d = n(145497),
    c = n(649640),
    u = n(985018),
    m = n(890653);
function _(e) {
    let { name: t, onRetry: n } = e,
        _ = (0, c.b2)(),
        h = (0, c.n6)(_.hex()),
        p = t ?? u.intl.string(u.t.DmIUGK);
    return (0, i.jsxs)("div", {
        className: m.kL,
        children: [
            (0, i.jsx)("div", { className: m.vK, style: { background: h } }),
            (0, i.jsx)("div", {
                className: m.H,
                children: (0, i.jsx)(o.Ay, {
                    mask: o.hW.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)("div", {
                        className: m.R3,
                        children: (0, i.jsx)(d.B$, { guildName: p, iconSize: 64 }),
                    }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: m.wx,
                children: [
                    (0, i.jsx)(l.D, { variant: "heading-lg/medium", color: "text-strong", children: p }),
                    (0, i.jsxs)(a.D, {
                        className: m.z3,
                        onClick: n,
                        children: [
                            (0, i.jsx)(s.E, { size: "sm", color: "currentColor" }),
                            (0, i.jsx)(r.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-warning",
                                children: u.intl.string(u.t.tmGHjc),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
