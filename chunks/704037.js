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
    u = n(735050);
function h(e) {
    let { children: t, iconSize: n } = e;
    return (0, i.jsx)(a.Ay, { className: u.Iu, mask: a.Ay.Masks.SQUIRCLE, width: n + 5, height: n + 5, children: t });
}
function A(e) {
    let { guildIds: t, iconSize: n = 20, prioritizeSelectedGuild: a = !1 } = e,
        A = (0, l.bG)([c.A], () => (a ? c.A.getGuildId() : null), [a]),
        p = (0, l.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        g = (0, s.useMemo)(() => p.filter((e) => null != e), [p]),
        { visibleGuilds: m, numTruncated: _ } = (0, s.useMemo)(() => {
            let e = [...g];
            if (null != A) {
                let t = e.findIndex((e) => e.id === A);
                t > 0 && (e.splice(t, 1), e.unshift(g[t]));
            }
            return 4 === e.length
                ? { visibleGuilds: e, numTruncated: 0 }
                : { visibleGuilds: e.slice(0, 3), numTruncated: e.length - 3 };
        }, [g, A]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [
            m.map((e) => (0, i.jsx)(h, { iconSize: n, children: (0, i.jsx)(d.$, { guild: e, size: n }) }, e.id)),
            _ > 0 &&
                (0, i.jsx)(h, {
                    iconSize: n,
                    children: (0, i.jsxs)(r.Text, {
                        className: u.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", _],
                    }),
                }),
        ],
    });
}
