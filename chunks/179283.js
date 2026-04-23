l.d(t, { P: () => m });
var i = l(627968),
    n = l(64700),
    s = l(503698),
    a = l.n(s),
    r = l(834730),
    c = l(115703),
    o = l(438842),
    u = l(879472),
    d = l(890653);
function m(e) {
    let { profile: t, className: l } = e,
        { gamesToDisplay: s, lastGameToDisplay: m, remainingGames: h } = (0, c.A)(t),
        A = n.useMemo(
            () => t.traits.map((e, t) => ({ key: `trait-${t}`, ...e })).filter((e) => e.label.length > 0),
            [t],
        ),
        x = t.description.length > 0;
    return x || s.length > 0 || A.length > 0
        ? (0, i.jsxs)("div", {
              className: a()(d.rf, l),
              children: [
                  x
                      ? (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "text-subtle", children: t.description })
                      : null,
                  (0, i.jsx)(o.A, {
                      gamesToDisplay: s,
                      lastGameToDisplay: m,
                      remainingGames: h,
                      activity: t.gameActivity,
                  }),
                  (0, i.jsx)(u.w, { items: A }),
              ],
          })
        : (0, i.jsx)("div", { className: d.C3 });
}
