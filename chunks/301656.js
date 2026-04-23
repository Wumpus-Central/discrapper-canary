n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(827734),
    r = n(939249),
    o = n(834730),
    d = n(534514),
    u = n(369606),
    c = n(532197),
    g = n(403362),
    m = n(874486),
    _ = n(927018),
    A = n(508971),
    h = n(985018),
    p = n(885959);
function x(e) {
    let { onBackClick: t } = e,
        n = (0, l.bG)([m.A], () => m.A.getAllUnlockedAchievements()),
        x = s.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        E = s.useMemo(
            () =>
                Object.values(_.l0)
                    .filter(g.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(r.D, {
                onClick: t,
                className: p.vv,
                children: [
                    (0, i.jsx)(c.A, { direction: c.A.Directions.LEFT, className: p.Kk }),
                    (0, i.jsx)(o.E, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: h.intl.string(h.t["13/7kX"]),
                    }),
                ],
            }),
            (0, i.jsxs)("div", {
                className: p.N1,
                children: [
                    (0, i.jsxs)("div", {
                        className: p.if,
                        children: [
                            (0, i.jsx)(d.D, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: h.intl.string(h.t["6jI0hd"]),
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: h.intl.string(h.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: p.nr,
                        children: (0, i.jsx)(u.O, {
                            size: "custom",
                            color: a.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            x.length > 0 &&
                (0, i.jsx)("div", {
                    className: p.yF,
                    children: (0, i.jsx)("div", {
                        className: p.Eh,
                        children: x.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, i.jsx)(A.A, { achievementId: t, dateUnlocked: n }, t);
                        }),
                    }),
                }),
            E.length > 0 &&
                (0, i.jsxs)("div", {
                    className: p.yF,
                    children: [
                        (0, i.jsx)("div", {
                            className: p.if,
                            children: (0, i.jsx)(o.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: h.intl.string(h.t.GFyMg1),
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: p.Eh,
                            children: E.map((e) => (0, i.jsx)(A.A, { achievementId: e.id }, e.id)),
                        }),
                    ],
                }),
            (0, i.jsx)("div", { className: p.yF, children: (0, i.jsx)("div", { className: p.F3 }) }),
        ],
    });
}
