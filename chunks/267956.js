n.d(t, { A: () => d });
var r = n(627968),
    l = n(349941),
    i = n(158954),
    s = n(311907),
    a = n(876230),
    o = n(544028),
    u = n(681636);
function c(e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: r } = e;
    return t
        ? n === a.Q6.PAUSED && "visibility" === r
            ? "Video paused because the window is not visible"
            : n === a.Q6.PAUSED && "focus" === r
              ? "Video paused because the window lost focus"
              : null
        : "Loading video...";
}
let d = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: a, getStatusMessage: d = c } = e,
        m = (0, s.bG)([o.A], () => o.A.getState().theme),
        p = d({ hasVideoAsset: t, playerState: n, pauseReason: a });
    return null == p
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: u.MM }),
                  (0, r.jsx)("div", {
                      className: u.b9,
                      style: { background: (0, l.Mw)(m) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(i.EYj, { variant: "text-sm/normal", color: "text-default", children: p }),
                  }),
              ],
          });
};
