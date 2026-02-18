n.d(t, { l: () => A }), n(667532);
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(397927),
    r = n(573435),
    o = n(71393),
    d = n(967198),
    c = n(743790),
    u = n(960016);
function h(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(r.Ay, { className: u.Iu, mask: r.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function A(e) {
    let { guildIds: t, iconSize: n = 20 } = e,
        r = (0, s.bG)([d.A], () => d.A.getGuildId()),
        A = (0, s.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        p = (0, l.useMemo)(() => A.filter((e) => null != e), [A]),
        { visibleGuilds: m, numTruncated: g } = (0, l.useMemo)(() => {
            let e = [...p];
            if (null != r) {
                let t = p.findIndex((e) => e.id === r);
                -1 !== t && (e.splice(t, 1), e.unshift(p[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0, visibleGuildsTooltip: e, numTruncatedTooltipGuilds: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [p, r]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            m.map((e) => (0, i.jsx)(h, { iconSize: n, children: (0, i.jsx)(c.$, { guild: e, size: n }) }, e.id)),
            g > 0 &&
                (0, i.jsx)(h, {
                    iconSize: n,
                    children: (0, i.jsxs)(a.Text, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", g],
                    }),
                }),
        ],
    });
}
