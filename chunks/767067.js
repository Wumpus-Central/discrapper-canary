n.d(t, { Z: () => u });
var r = n(54381),
    o = n(925477),
    l = n(793030),
    i = n(442837),
    a = n(210887),
    s = n(304696),
    c = n(209668);
let u = function (e) {
    let { hasVideoAsset: t, playerState: n, pauseReason: u } = e,
        d = (0, i.e7)([a.Z], () => a.Z.getState().theme),
        m = (0, s.UH)({
            hasVideoAsset: t,
            playerState: n,
            pauseReason: u,
        });
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !t && (0, r.jsx)("div", { className: c.endScreenOverlay }),
                  (0, r.jsx)("div", {
                      className: c.videoStatusMessage,
                      style: { background: (0, o.wj)(d) ? "rgba(0, 0, 0, 0.65)" : "rgba(255, 255, 255, 0.65)" },
                      children: (0, r.jsx)(l.xvT, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: m,
                      }),
                  }),
              ],
          });
};
