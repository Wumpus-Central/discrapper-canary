n.d(t, {
    l: () => p,
}),
    n(896048),
    n(667532);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(573435),
    o = n(71393),
    c = n(967198),
    u = n(743790),
    d = n(960016);

function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.Ay, {
        className: d.Iu,
        mask: s.Ay.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t,
    });
}

function p(e) {
    let { guildIds: t } = e,
        n = (0, i.bG)([c.A], () => c.A.getGuildId()),
        s = (0, i.yK)([o.A], () => t.map((e) => o.A.getGuild(e)), [t]),
        p = (0, l.useMemo)(() => s.filter((e) => null != e), [s]),
        { visibleGuilds: h, numTruncated: b } = (0, l.useMemo)(() => {
            let e = [...p];
            if (null != n) {
                let t = p.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(p[t]));
            }
            return 4 === e.length
                ? {
                      visibleGuilds: e,
                      numTruncated: 0,
                      visibleGuildsTooltip: e,
                      numTruncatedTooltipGuilds: 0,
                  }
                : {
                      visibleGuilds: e.slice(0, 3),
                      numTruncated: e.length - 3,
                  };
        }, [p, n]);
    return (0, r.jsxs)("div", {
        className: d.WM,
        children: [
            h.map((e) =>
                (0, r.jsx)(
                    f,
                    {
                        children: (0, r.jsx)(u.$, {
                            guild: e,
                            size: 20,
                        }),
                    },
                    e.id,
                ),
            ),
            b > 0 &&
                (0, r.jsx)(f, {
                    children: (0, r.jsxs)(a.Text, {
                        className: d.br,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", b],
                    }),
                }),
        ],
    });
}
