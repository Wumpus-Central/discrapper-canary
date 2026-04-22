n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(821609),
    r = n(192308),
    a = n(834730),
    o = n(696986),
    d = n(260509),
    c = n(71393),
    u = n(287809),
    m = n(11351),
    g = n(985018);
function h(e) {
    let { guildId: t, application: h } = e,
        x = (0, l.bG)([c.A], () => c.A.getGuild(t)),
        _ = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        p = (0, m.gN)();
    if (null == x || !(0, d.bM)(x, _)) return null;
    let A = h.team;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(a.E, {
                variant: "text-sm/normal",
                color: p ? "text-muted" : "text-default",
                children: null != A ? g.intl.format(g.t.erxwWA, { teamName: A.name }) : g.intl.string(g.t.FGzLkK),
            }),
            (0, i.jsx)(o.h, { size: 16 }),
            (0, i.jsx)(s.$, {
                text: null != A ? g.intl.string(g.t["/Fjq5P"]) : g.intl.string(g.t["6ih+b4"]),
                variant: null != A ? "secondary" : "primary",
                onClick: () => {
                    (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("71678").then(n.bind(n, 180493));
                        return (t) => (0, i.jsx)(e, { ...t, application: h });
                    });
                },
                disabled: p,
            }),
        ],
    });
}
