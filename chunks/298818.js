"use strict";
n.d(t, { A: () => c });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(493581),
    a = n(308072),
    o = n(985018),
    d = n(194976);
function c(e) {
    let { guildId: t, selectedGameApplicationIds: n, onUpdateGames: c, disabled: u } = e,
        { topGames: m, tryFetchTopGames: g } = (0, r.f)(),
        x = m.get(t),
        [h, _] = s.useState(!1);
    s.useEffect(() => {
        _(!0),
            g(t).finally(() => {
                _(!1);
            });
    }, [t, g]);
    let A = s.useMemo(
            () =>
                null == x
                    ? []
                    : Object.keys(x)
                          .filter((e) => !n.includes(e))
                          .sort((e, t) => x[t].score - x[e].score),
            [x, n],
        ),
        p = s.useCallback(
            (e) => {
                n.includes(e) ? c(n.filter((t) => t !== e)) : c([...n, e]);
            },
            [c, n],
        );
    return h && null == x
        ? (0, i.jsx)(l.y$y, {})
        : null == A || 0 === A.length
          ? null
          : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)("div", { className: d.me }),
                    (0, i.jsxs)("div", {
                        className: d.rS,
                        children: [
                            (0, i.jsx)(l.Text, {
                                variant: "text-xs/semibold",
                                color: "text-muted",
                                children: o.intl.string(o.t.bFGpua),
                            }),
                            (0, i.jsx)("div", {
                                className: d.CW,
                                children: A.map((e) =>
                                    (0, i.jsx)(a.A, { applicationId: e, selected: !1, onClick: p, disabled: u }, e),
                                ),
                            }),
                        ],
                    }),
                ],
            });
}
