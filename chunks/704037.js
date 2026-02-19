"use strict";
n.d(t, { l: () => A }), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(573435),
    o = n(71393),
    c = n(967198),
    d = n(743790),
    u = n(960016);
function h(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(a.Ay, { className: u.Iu, mask: a.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function A(e) {
    let { guildIds: t, iconSize: n = 20 } = e,
        a = (0, l.bG)([c.A], () => c.A.getGuildId()),
        A = (0, l.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        p = (0, s.useMemo)(() => A.filter((e) => null != e), [A]),
        { visibleGuilds: g, numTruncated: m } = (0, s.useMemo)(() => {
            let e = [...p];
            if (null != a) {
                let t = p.findIndex((e) => e.id === a);
                -1 !== t && (e.splice(t, 1), e.unshift(p[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0, visibleGuildsTooltip: e, numTruncatedTooltipGuilds: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [p, a]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            g.map((e) => (0, i.jsx)(h, { iconSize: n, children: (0, i.jsx)(d.$, { guild: e, size: n }) }, e.id)),
            m > 0 &&
                (0, i.jsx)(h, {
                    iconSize: n,
                    children: (0, i.jsxs)(r.Text, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", m],
                    }),
                }),
        ],
    });
}
