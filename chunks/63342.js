t.d(i, { A: () => v });
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(47762),
    d = t(990078),
    o = t(825860),
    c = t(827734),
    u = t(939249),
    h = t(834730),
    m = t(331322),
    _ = t(573435),
    x = t(454908),
    g = t(985018),
    A = t(822017);
function p(e) {
    let { game: i, activityLevel: t } = e,
        { data: s } = (0, x.I)(i.id),
        a = s?.getCoverURL();
    if (null == a) return null;
    let n = t?.level === r._.HIGH;
    return (0, l.jsx)(d.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, l.jsxs)("div", {
            className: A.Xy,
            children: [
                (0, l.jsx)("img", { className: A._s, src: a, alt: i.name }),
                n &&
                    (0, l.jsx)(_.Ay, {
                        mask: _.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: A.Sy,
                        children: (0, l.jsx)("div", {
                            className: A.oZ,
                            children: (0, l.jsx)(o.Y, {
                                color: c.A.unsafe_rawColors.ORANGE_330.css,
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
function v(e) {
    let { gamesToDisplay: i, lastGameToDisplay: t, remainingGames: a, activity: r, onExpandClick: o } = e,
        [c, _] = s.useState(!1),
        { data: v } = (0, x.I)(t?.id),
        E = s.useCallback(() => {
            o?.(), _(!0);
        }, [o]),
        j = s.useMemo(() => {
            if (null == t) return null;
            let e = v?.getCoverURL();
            return null == e
                ? null
                : 0 === a.length || c
                  ? (0, l.jsx)(p, { game: t, activityLevel: r?.[t.id] })
                  : (0, l.jsx)(d.m, {
                        position: "bottom",
                        "aria-label": g.intl.string(g.t.yohc6E),
                        text: g.intl.string(g.t.yohc6E),
                        children: (0, l.jsxs)(u.D, {
                            className: n()(A.Xy, A.oL, A.vk),
                            onClick: E,
                            "aria-label": `Show ${a.length} more games`,
                            children: [
                                (0, l.jsx)("img", { className: n()(A._s, A.tJ), src: e, alt: t.name }),
                                (0, l.jsx)("div", { className: A.Fg }),
                                (0, l.jsx)("div", {
                                    className: A.AZ,
                                    children: (0, l.jsx)(h.E, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${a.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [t, v, a, r, c, E]);
    if (null == i || 0 === i.length) return null;
    let I = c && a.length > 0 ? a : [];
    return (0, l.jsxs)(m.B, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            i.map((e) => (0, l.jsx)(p, { game: e, activityLevel: r?.[e.id] }, e.id)),
            c && a.length > 0 ? I.map((e) => (0, l.jsx)(p, { game: e, activityLevel: r?.[e.id] }, e.id)) : j,
        ],
    });
}
