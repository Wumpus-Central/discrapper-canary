"use strict";
n.d(t, { P: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(115703),
    u = n(438842),
    c = n(879472),
    d = n(838934);
function _(e) {
    let { profile: t, className: n } = e,
        { gamesToDisplay: a, lastGameToDisplay: _, remainingGames: f } = (0, l.A)(t),
        p = i.useMemo(
            () => t.traits.map((e, t) => ({ key: `trait-${t}`, ...e })).filter((e) => e.label.length > 0),
            [t],
        ),
        h = t.description.length > 0;
    return h || a.length > 0 || p.length > 0
        ? (0, r.jsxs)("div", {
              className: s()(d.rf, n),
              children: [
                  h
                      ? (0, r.jsx)(o.Text, { variant: "text-sm/normal", color: "text-subtle", children: t.description })
                      : null,
                  (0, r.jsx)(u.A, {
                      gamesToDisplay: a,
                      lastGameToDisplay: _,
                      remainingGames: f,
                      activity: t.gameActivity,
                  }),
                  (0, r.jsx)(c.w, { items: p }),
              ],
          })
        : (0, r.jsx)("div", { className: d.C3 });
}
