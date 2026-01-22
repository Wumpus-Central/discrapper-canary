n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var l = n(793574),
    i = n(688810),
    a = n(915618),
    s = n(857253),
    o = n(670470),
    c = n(502633),
    u = n(430452),
    d = n(699022),
    f = n(680949),
    p = n(319610),
    h = n(786515),
    b = n(878559);
function g(e) {
    let { channel: t, hasActiveStream: n, showRightDivider: g = !1 } = e,
        { analyticsLocations: m } = (0, i.Ay)(l.A.VOICE_CONTROL_TRAY),
        A = (0, s.A)(),
        { isSharedCanvasEnabled: y } = c.A.useExperiment({
            guildId: null == t ? void 0 : t.guild_id,
            location: "b7309a_1",
        }),
        { enableViewerClipping: O } = o.A.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        j = (0, a.A)(u.A);
    if (null == t || null != A) return null;
    let v = O && j,
        x = y && n;
    return v || x
        ? (0, r.jsxs)(i.f5, {
              value: m,
              children: [
                  (0, r.jsxs)("div", {
                      className: b.w,
                      children: [
                          v && (0, r.jsx)(d.A, { channel: t }),
                          x && (0, r.jsx)(f.A, {}),
                          x && (0, r.jsx)(p.A, { channel: t }),
                          x && (0, r.jsx)(h.A, {}),
                      ],
                  }),
                  g && (0, r.jsx)("div", { className: b.y }),
              ],
          })
        : null;
}
