l.d(t, { P: () => I });
var i = l(627968),
    n = l(64700),
    r = l(503698),
    s = l.n(r),
    a = l(834730),
    u = l(115703),
    c = l(438842),
    o = l(879472),
    d = l(890653);
function I(e) {
    let { profile: t, className: l } = e,
        { gamesToDisplay: r, lastGameToDisplay: I, remainingGames: A } = (0, u.A)(t),
        _ = n.useMemo(
            () => t.traits.map((e, t) => ({ key: `trait-${t}`, ...e })).filter((e) => e.label.length > 0),
            [t],
        ),
        E = t.description.length > 0;
    return E || r.length > 0 || _.length > 0
        ? (0, i.jsxs)("div", {
              className: s()(d.rf, l),
              children: [
                  E
                      ? (0, i.jsx)(a.E, { variant: "text-sm/normal", color: "text-subtle", children: t.description })
                      : null,
                  (0, i.jsx)(c.A, {
                      gamesToDisplay: r,
                      lastGameToDisplay: I,
                      remainingGames: A,
                      activity: t.gameActivity,
                  }),
                  (0, i.jsx)(o.w, { items: _ }),
              ],
          })
        : (0, i.jsx)("div", { className: d.C3 });
}
