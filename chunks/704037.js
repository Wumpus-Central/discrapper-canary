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
    let { children: t } = e;
    return (0, i.jsx)(r.Ay, { className: u.Iu, mask: r.Ay.Masks.SQUIRCLE, width: 25, height: 25, children: t });
}
function A(e) {
    let { guildIds: t } = e,
        n = (0, s.bG)([d.A], () => d.A.getGuildId()),
        r = (0, s.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        A = (0, l.useMemo)(() => r.filter((e) => null != e), [r]),
        { visibleGuilds: g, numTruncated: m } = (0, l.useMemo)(() => {
            let e = [...A];
            if (null != n) {
                let t = A.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(A[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0, visibleGuildsTooltip: e, numTruncatedTooltipGuilds: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [A, n]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            g.map((e) => (0, i.jsx)(h, { children: (0, i.jsx)(c.$, { guild: e, size: 20 }) }, e.id)),
            m > 0 &&
                (0, i.jsx)(h, {
                    children: (0, i.jsxs)(a.Text, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", m],
                    }),
                }),
        ],
    });
}
