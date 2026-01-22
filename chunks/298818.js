n.d(t, { A: () => d }), n(896048), n(492834), n(638769);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(493581),
    a = n(308072),
    c = n(985018),
    o = n(194976);
function d(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: d, disabled: u } = e,
        { topGames: f, tryFetchTopGames: g } = (0, s.f)(),
        b = f.get(t),
        [m, p] = i.useState(!1);
    i.useEffect(() => {
        p(!0),
            g(t).finally(() => {
                p(!1);
            });
    }, [t, g]);
    let x = i.useMemo(
            () =>
                null == b
                    ? []
                    : Object.keys(b)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => b[t].score - b[e].score),
            [b, n],
        ),
        h = i.useCallback(
            (e) => {
                n.includes(e) ? d(n.filter((t) => t !== e)) : d([...n, e]);
            },
            [d, n],
        );
    return m && null == b
        ? (0, r.jsx)(l.y$y, {})
        : null == x || 0 === x.length
          ? null
          : (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", { className: o.me }),
                    (0, r.jsxs)("div", {
                        className: o.rS,
                        children: [
                            (0, r.jsx)(l.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: c.intl.string(c.t.bFGpua),
                            }),
                            (0, r.jsx)("div", {
                                className: o.CW,
                                children: x.map((e) =>
                                    (0, r.jsx)(
                                        a.A,
                                        {
                                            applicationId: e,
                                            selected: !1,
                                            onClick: h,
                                            disabled: u,
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        ],
                    }),
                ],
            });
}
