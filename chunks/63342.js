t.d(i, { A: () => x });
var l = t(627968),
    s = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(47762),
    o = t(990078),
    d = t(397927),
    c = t(573435),
    u = t(885151),
    m = t(985018),
    _ = t(355345);
function h(e) {
    let { game: i, activityLevel: t } = e,
        { data: s } = (0, u.k)(i.id),
        n = s?.getCoverURL();
    if (null == n) return null;
    let a = t?.level === r._.HIGH;
    return (0, l.jsx)(o.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, l.jsxs)("div", {
            className: _.Xy,
            children: [
                (0, l.jsx)("img", { className: _._s, src: n, alt: i.name }),
                a &&
                    (0, l.jsx)(c.Ay, {
                        mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: _.Sy,
                        children: (0, l.jsx)("div", {
                            className: _.oZ,
                            children: (0, l.jsx)(d.Y3C, {
                                color: d.LU0.unsafe_rawColors.ORANGE_330.css,
                                width: 12,
                                height: 12,
                                size: "custom",
                            }),
                        }),
                    }),
            ],
        }),
    });
}
function x(e) {
    let { gamesToDisplay: i, lastGameToDisplay: t, remainingGames: n, activity: r, onExpandClick: c } = e,
        [x, g] = s.useState(!1),
        { data: p } = (0, u.k)(t?.id),
        A = s.useCallback(() => {
            c?.(), g(!0);
        }, [c]),
        E = s.useMemo(() => {
            if (null == t) return null;
            let e = p?.getCoverURL();
            return null == e
                ? null
                : 0 === n.length || x
                  ? (0, l.jsx)(h, { game: t, activityLevel: r?.[t.id] })
                  : (0, l.jsx)(o.m, {
                        position: "bottom",
                        "aria-label": m.intl.string(m.t.yohc6E),
                        text: m.intl.string(m.t.yohc6E),
                        children: (0, l.jsxs)(d.DUT, {
                            className: a()(_.Xy, _.oL, _.vk),
                            onClick: A,
                            "aria-label": `Show ${n.length} more games`,
                            children: [
                                (0, l.jsx)("img", { className: a()(_._s, _.tJ), src: e, alt: t.name }),
                                (0, l.jsx)("div", { className: _.Fg }),
                                (0, l.jsx)("div", {
                                    className: _.AZ,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${n.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [t, p, n, r, x, A]);
    if (null == i || 0 === i.length) return null;
    let j = x && n.length > 0 ? n : [];
    return (0, l.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            i.map((e) => (0, l.jsx)(h, { game: e, activityLevel: r?.[e.id] }, e.id)),
            x && n.length > 0 ? j.map((e) => (0, l.jsx)(h, { game: e, activityLevel: r?.[e.id] }, e.id)) : E,
        ],
    });
}
