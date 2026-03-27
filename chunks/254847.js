n.d(t, { A: () => f, Y: () => h });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(714991),
    c = n(695515),
    u = n(397808),
    m = n(652215),
    _ = n(870236),
    g = n(985018),
    x = n(448993);
let A = [18, 18, 16, 16, 14, 12, 10];
function h(e) {
    return A[e.length - 1] ?? A[A.length - 1];
}
let p = s.memo((e) => {
    let { guildId: t, className: n, customSubtext: s } = e,
        l = (0, r.bG)([c.A], () => c.A.getGuild(t));
    if (void 0 === l) return null;
    let A = l.features.has(m.GuildFeatures.VERIFIED) || l.features.has(m.GuildFeatures.PARTNERED),
        { name: h } = l;
    return (0, i.jsxs)("div", {
        className: a()(x.kL, n),
        children: [
            (0, i.jsx)(u.A, { guildId: t }),
            (0, i.jsxs)("div", {
                className: x.$z,
                children: [
                    (0, i.jsxs)("div", {
                        className: x.wx,
                        children: [
                            A
                                ? (0, i.jsx)(d.A, {
                                      guild: l,
                                      tooltipPosition: "bottom",
                                      tooltipColor: o.STz.Colors.PRIMARY,
                                      className: x.n2,
                                  })
                                : null,
                            (0, i.jsx)(o.Text, { variant: "text-md/semibold", children: h }),
                        ],
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children:
                            null != s
                                ? s
                                : void 0 !== l.approximateMemberCount
                                  ? g.intl.format(_.default["5JmNgg"], { members: l.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
p.displayName = "FamilyCenterActivityGuildRow";
let f = p;
