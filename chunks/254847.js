n.d(t, { A: () => C, Y: () => h });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(417597),
    o = n(397927),
    c = n(714991),
    d = n(695515),
    u = n(397808),
    _ = n(652215),
    m = n(842130),
    A = n(985018),
    g = n(957415);
let E = [18, 18, 16, 16, 14, 12, 10];
function h(e) {
    return E[e.length - 1] ?? E[E.length - 1];
}
let p = s.memo((e) => {
    let { guildId: t, className: n, customSubtext: s } = e,
        r = (0, l.bG)([d.A], () => d.A.getGuild(t));
    if (void 0 === r) return null;
    let E = r.features.has(_.GuildFeatures.VERIFIED) || r.features.has(_.GuildFeatures.PARTNERED),
        { name: h } = r;
    return (0, i.jsxs)("div", {
        className: a()(g.kL, n),
        children: [
            (0, i.jsx)(u.A, { guildId: t }),
            (0, i.jsxs)("div", {
                className: g.$z,
                children: [
                    (0, i.jsxs)("div", {
                        className: g.wx,
                        children: [
                            E
                                ? (0, i.jsx)(c.A, {
                                      guild: r,
                                      tooltipPosition: "bottom",
                                      tooltipColor: o.STz.Colors.PRIMARY,
                                      className: g.n2,
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
                                : void 0 !== r.approximateMemberCount
                                  ? A.intl.format(m.default["5JmNgg"], { members: r.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
p.displayName = "FamilyCenterActivityGuildRow";
let C = p;
