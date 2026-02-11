"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(349941),
    a = n(158954),
    s = n(311907),
    o = n(544028),
    l = n(651892),
    u = n(438655);
let c = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: c } = e,
        d = (0, s.bG)([o.A], () => o.A.getState().theme),
        _ = (0, l.oK)({ hasVideoAsset: t, playerState: n, pauseReason: c });
    return null == _
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: u.MM }),
                  (0, r.jsx)("div", {
                      className: u.b9,
                      style: { background: (0, i.Mw)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-default", children: _ }),
                  }),
              ],
          });
};
