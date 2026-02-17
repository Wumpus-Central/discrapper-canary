"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(349941),
    a = n(158954),
    s = n(311907),
    o = n(876230),
    l = n(544028),
    u = n(681636);
function c(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === o.Q6.PAUSED && "visibility" === r
            ? "Video paused because the window is not visible"
            : n === o.Q6.PAUSED && "focus" === r
              ? "Video paused because the window lost focus"
              : null
        : "Loading video...";
}
let d = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: o, getStatusMessage: d = c } = e,
        _ = (0, s.bG)([l.A], () => l.A.getState().theme),
        f = d({ hasVideoAsset: t, playerState: n, pauseReason: o });
    return null == f
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: u.MM }),
                  (0, r.jsx)("div", {
                      className: u.b9,
                      style: { background: (0, i.Mw)(_) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(a.EYj, { variant: "text-sm/normal", color: "text-default", children: f }),
                  }),
              ],
          });
};
