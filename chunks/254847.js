l.d(t, { A: () => E, Y: () => v });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(417597),
    d = l(781696),
    c = l(834730),
    u = l(714991),
    o = l(695515),
    x = l(397808),
    h = l(652215),
    m = l(602339),
    g = l(985018),
    j = l(751406);
let A = [18, 18, 16, 16, 14, 12, 10];
function v(e) {
    return A[e.length - 1] ?? A[A.length - 1];
}
let f = i.memo((e) => {
    let { guildId: t, className: l, customSubtext: i } = e,
        s = (0, r.bG)([o.A], () => o.A.getGuild(t));
    if (void 0 === s) return null;
    let A = s.features.has(h.GuildFeatures.VERIFIED) || s.features.has(h.GuildFeatures.PARTNERED),
        { name: v } = s;
    return (0, n.jsxs)("div", {
        className: a()(j.kL, l),
        children: [
            (0, n.jsx)(x.A, { guildId: t }),
            (0, n.jsxs)("div", {
                className: j.$z,
                children: [
                    (0, n.jsxs)("div", {
                        className: j.wx,
                        children: [
                            A
                                ? (0, n.jsx)(u.A, {
                                      guild: s,
                                      tooltipPosition: "bottom",
                                      tooltipColor: d.ST.Colors.PRIMARY,
                                      className: j.n2,
                                  })
                                : null,
                            (0, n.jsx)(c.E, { variant: "text-md/semibold", children: v }),
                        ],
                    }),
                    (0, n.jsx)(c.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== s.approximateMemberCount
                                  ? g.intl.format(m.default["5JmNgg"], { members: s.approximateMemberCount })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
f.displayName = "FamilyCenterActivityGuildRow";
let E = f;
