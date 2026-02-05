n.d(t, { A: () => g });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(827734),
    l = n(397927),
    o = n(532197),
    c = n(403362),
    d = n(874486),
    u = n(927018),
    _ = n(508971),
    m = n(985018),
    A = n(872722);
function g(e) {
    let { onBackClick: t } = e,
        n = (0, r.bG)([d.A], () => d.A.getAllUnlockedAchievements()),
        g = s.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        E = s.useMemo(
            () =>
                Object.values(u.l0)
                    .filter(c.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(l.DUT, {
                onClick: t,
                className: A.vv,
                children: [
                    (0, i.jsx)(o.A, { direction: o.A.Directions.LEFT, className: A.Kk }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: m.intl.string(m.t["13/7kX"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: A.N1,
                children: [
                    (0, i.jsxs)("div", {
                        className: A.if,
                        children: [
                            (0, i.jsx)(l.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: m.intl.string(m.t["6jI0hd"]),
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: m.intl.string(m.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: A.nr,
                        children: (0, i.jsx)(l.OR, {
                            size: "custom",
                            color: a.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            g.length > 0 &&
                (0, i.jsx)("div", {
                    className: A.yF,
                    children: (0, i.jsx)("div", {
                        className: A.Eh,
                        children: g.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, i.jsx)(_.A, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            E.length > 0 &&
                (0, i.jsxs)("div", {
                    className: A.yF,
                    children: [
                        (0, i.jsx)("div", {
                            className: A.if,
                            children: (0, i.jsx)(l.Text, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: m.intl.string(m.t.GFyMg1),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: A.Eh,
                            children: E.map((e) => (0, i.jsx)(_.A, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, i.jsx)("div", { className: A.yF, children: (0, i.jsx)("div", { className: A.F3 }) }),
        ],
    });
}
