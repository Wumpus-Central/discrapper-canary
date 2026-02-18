n.d(t, { A: () => c });
var r = n(627968),
    l = n(349941),
    i = n(158954),
    s = n(311907),
    a = n(544028),
    o = n(651892),
    u = n(681636);
let c = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: c } = e,
        d = (0, s.bG)([a.A], () => a.A.getState().theme),
        m = (0, o.oK)({ hasVideoAsset: t, playerState: n, pauseReason: c });
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: u.MM }),
                  (0, r.jsx)("div", {
                      className: u.b9,
                      style: { background: (0, l.Mw)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(i.EYj, { variant: "text-sm/normal", color: "text-default", children: m }),
                  }),
              ],
          });
};
