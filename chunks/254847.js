n.d(t, {
    A: () => b,
    Y: () => g,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(417597),
    l = n(397927),
    c = n(714991),
    u = n(695515),
    d = n(397808),
    f = n(652215),
    p = n(842130),
    _ = n(985018),
    h = n(957415);
let m = [18, 18, 16, 16, 14, 12, 10];

function g(e) {
    var t;
    return null != (t = m[e.length - 1]) ? t : m[m.length - 1];
}
let E = i.memo((e) => {
    let { guildId: t, className: n, customSubtext: i } = e,
        a = (0, o.bG)([u.A], () => u.A.getGuild(t));
    if (void 0 === a) return null;
    let m = a.features.has(f.GuildFeatures.VERIFIED) || a.features.has(f.GuildFeatures.PARTNERED),
        { name: g } = a;
    return (0, r.jsxs)("div", {
        className: s()(h.kL, n),
        children: [
            (0, r.jsx)(d.A, {
                guildId: t,
            }),
            (0, r.jsxs)("div", {
                className: h.$z,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.wx,
                        children: [
                            m
                                ? (0, r.jsx)(c.A, {
                                      guild: a,
                                      tooltipPosition: "bottom",
                                      tooltipColor: l.STz.Colors.PRIMARY,
                                      className: h.n2,
                                  })
                                : null,
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/semibold",
                                children: g,
                            }),
                        ],
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children:
                            null != i
                                ? i
                                : void 0 !== a.approximateMemberCount
                                  ? _.intl.format(p.default["5JmNgg"], {
                                        members: a.approximateMemberCount,
                                    })
                                  : null,
                    }),
                ],
            }),
        ],
    });
});
E.displayName = "FamilyCenterActivityGuildRow";
let b = E;
