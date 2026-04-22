n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    s = n(289873),
    r = n(834730),
    a = n(493581),
    o = n(308072),
    d = n(985018),
    c = n(847955);
function u(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: u, disabled: m } = e,
        { topGames: g, tryFetchTopGames: h } = (0, a.f)(),
        x = g.get(t),
        [_, p] = l.useState(!1);
    l.useEffect(() => {
        p(!0),
            h(t).finally(() => {
                p(!1);
            });
    }, [t, h]);
    let A = l.useMemo(
            () =>
                null == x
                    ? []
                    : Object.keys(x)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => x[t].score - x[e].score),
            [x, n],
        ),
        E = l.useCallback(
            (e) => {
                n.includes(e) ? u(n.filter((t) => t !== e)) : u([...n, e]);
            },
            [u, n],
        );
    return _ && null == x
        ? (0, i.jsx)(s.y, {})
        : null == A || 0 === A.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: c.me }),
                    (0, i.jsxs)("div", {
                        className: c.rS,
                        children: [
                            (0, i.jsx)(r.E, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: d.intl.string(d.t.bFGpua),
                            }),
                            (0, i.jsx)("div", {
                                className: c.CW,
                                children: A.map((e) =>
                                    (0, i.jsx)(o.A, { applicationId: e, selected: !1, onClick: E, disabled: m }, e),
                                ),
                            }),
                        ],
                    }),
                ],
            });
}
