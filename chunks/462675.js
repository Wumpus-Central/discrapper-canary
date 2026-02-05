n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(793574),
    s = n(688810),
    a = n(915618),
    r = n(857253),
    o = n(670470),
    d = n(502633),
    c = n(430452),
    u = n(699022),
    h = n(680949),
    A = n(319610),
    g = n(786515),
    m = n(878559);
function p(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: p = !1 } = e,
        { analyticsLocations: _ } = (0, s.Ay)(l.A.VOICE_CONTROL_TRAY),
        x = (0, r.A)(),
        { isSharedCanvasEnabled: f } = d.A.useExperiment({ guildId: t?.guild_id, location: "b7309a_1" }),
        { enableViewerClipping: E } = o.A.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        C = (0, a.A)(c.A);
    if (null == t || null != x) return null;
    let I = E && C,
        S = f && n;
    return I || S
        ? (0, i.jsxs)(s.f5, {
              value: _,
              children: [
                  (0, i.jsxs)("div", {
                      className: m.w,
                      children: [
                          I && (0, i.jsx)(u.A, { channel: t }),
                          S && (0, i.jsx)(h.A, {}),
                          S && (0, i.jsx)(A.A, { channel: t }),
                          S && (0, i.jsx)(g.A, {}),
                      ],
                  }),
                  p && (0, i.jsx)("div", { className: m.y }),
              ],
          })
        : null;
}
