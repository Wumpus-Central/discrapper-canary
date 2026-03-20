i.d(t, { A: () => h });
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(47762),
    o = i(990078),
    d = i(397927),
    c = i(573435),
    u = i(885151),
    m = i(985018),
    x = i(355330);
function g(e) {
    let { game: t, activityLevel: i } = e,
        { data: n } = (0, u.k)(t.id),
        a = n?.supplementalData?.coverImageUrl;
    if (null == a) return null;
    let s = i?.level === r._.HIGH;
    return (0, l.jsx)(o.m, {
        position: "bottom",
        "aria-label": t.name,
        text: t.name,
        children: (0, l.jsxs)("div", {
            className: x.Xy,
            children: [
                (0, l.jsx)("img", { className: x._s, src: a, alt: t.name }),
                s &&
                    (0, l.jsx)(c.Ay, {
                        mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                        width: 16,
                        height: 16,
                        className: x.Sy,
                        children: (0, l.jsx)("div", {
                            className: x.oZ,
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
function h(e) {
    let { gamesToDisplay: t, lastGameToDisplay: i, remainingGames: a, activity: r, onExpandClick: c } = e,
        [h, _] = n.useState(!1),
        { data: p } = (0, u.k)(i?.id),
        A = n.useCallback(() => {
            c?.(), _(!0);
        }, [c]),
        j = n.useMemo(() => {
            if (null == i) return null;
            let e = p?.supplementalData?.coverImageUrl;
            return null == e
                ? null
                : 0 === a.length || h
                  ? (0, l.jsx)(g, { game: i, activityLevel: r?.[i.id] })
                  : (0, l.jsx)(o.m, {
                        position: "bottom",
                        "aria-label": m.intl.string(m.t.yohc6E),
                        text: m.intl.string(m.t.yohc6E),
                        children: (0, l.jsxs)(d.DUT, {
                            className: s()(x.Xy, x.oL, x.vk),
                            onClick: A,
                            "aria-label": `Show ${a.length} more games`,
                            children: [
                                (0, l.jsx)("img", { className: s()(x._s, x.tJ), src: e, alt: i.name }),
                                (0, l.jsx)("div", { className: x.Fg }),
                                (0, l.jsx)("div", {
                                    className: x.AZ,
                                    children: (0, l.jsx)(d.Text, {
                                        variant: "text-xs/normal",
                                        color: "always-white",
                                        children: `+${a.length}`,
                                    }),
                                }),
                            ],
                        }),
                    });
        }, [i, p, a, r, h, A]);
    if (null == t || 0 === t.length) return null;
    let E = h && a.length > 0 ? a : [];
    return (0, l.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [
            t.map((e) => (0, l.jsx)(g, { game: e, activityLevel: r?.[e.id] }, e.id)),
            h && a.length > 0 ? E.map((e) => (0, l.jsx)(g, { game: e, activityLevel: r?.[e.id] }, e.id)) : j,
        ],
    });
}
