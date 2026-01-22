n.d(t, { A: () => u });
var r = n(627968),
    l = n(349941),
    o = n(158954),
    i = n(311907),
    s = n(544028),
    a = n(651892),
    c = n(438655);
let u = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: u } = e,
        d = (0, i.bG)([s.A], () => s.A.getState().theme),
        f = (0, a.oK)({
            hasVideoAsset: t,
            playerState: n,
            pauseReason: u,
        });
    return null == f
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: c.MM }),
                  (0, r.jsx)("div", {
                      className: c.b9,
                      style: { background: (0, l.Mw)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(o.EYj, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: f,
                      }),
                  }),
              ],
          });
};
