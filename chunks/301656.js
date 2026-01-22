n.d(t, {
    A: () => h,
}),
    n(638769);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(827734),
    o = n(397927),
    l = n(532197),
    c = n(403362),
    u = n(874486),
    d = n(927018),
    f = n(508971),
    p = n(985018),
    _ = n(872722);

function h(e) {
    let { onBackClick: t } = e,
        n = (0, a.bG)([u.A], () => u.A.getAllUnlockedAchievements()),
        h = i.useMemo(() => Object.values(n).sort((e, t) => t.dateUnlocked - e.dateUnlocked), [n]),
        m = i.useMemo(
            () =>
                Object.values(d.l0)
                    .filter(c.Vq)
                    .filter((e) => null == n[e.id])
                    .sort((e, t) => e.rarity - t.rarity),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.DUT, {
                onClick: t,
                className: _.vv,
                children: [
                    (0, r.jsx)(l.A, {
                        direction: l.A.Directions.LEFT,
                        className: _.Kk,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-lg/normal",
                        color: "text-default",
                        children: p.intl.string(p.t["13/7kX"]),
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: _.N1,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.if,
                        children: [
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-lg/extrabold",
                                color: "text-strong",
                                children: p.intl.string(p.t["6jI0hd"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: p.intl.string(p.t.GuUItX),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: _.nr,
                        children: (0, r.jsx)(o.OR, {
                            size: "custom",
                            color: s.A.unsafe_rawColors.ORANGE_345.css,
                            width: 40,
                            height: 40,
                        }),
                    }),
                ],
            }),
            h.length > 0 &&
                (0, r.jsx)("div", {
                    className: _.yF,
                    children: (0, r.jsx)("div", {
                        className: _.Eh,
                        children: h.map((e) => {
                            let { achievementId: t, dateUnlocked: n } = e;
                            return (0, r.jsx)(
                                f.A,
                                {
                                    achievementId: t,
                                    dateUnlocked: n,
                                },
                                t,
                            );
                        }),
                    }),
                }),
            m.length > 0 &&
                (0, r.jsxs)("div", {
                    className: _.yF,
                    children: [
                        (0, r.jsx)("div", {
                            className: _.if,
                            children: (0, r.jsx)(o.Text, {
                                variant: "text-md/bold",
                                color: "text-default",
                                children: p.intl.string(p.t.GFyMg1),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: _.Eh,
                            children: m.map((e) =>
                                (0, r.jsx)(
                                    f.A,
                                    {
                                        achievementId: e.id,
                                    },
                                    e.id,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)("div", {
                className: _.yF,
                children: (0, r.jsx)("div", {
                    className: _.F3,
                }),
            }),
        ],
    });
}
