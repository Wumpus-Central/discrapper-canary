n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(793574),
    s = n(688810),
    a = n(915618),
    r = n(857253),
    o = n(670470),
    d = n(430452),
    c = n(699022),
    u = n(878559);
function h(e) {
    let { channel: t, showRightDivider: n = !1 } = e,
        { analyticsLocations: h } = (0, s.Ay)(l.A.VOICE_CONTROL_TRAY),
        A = (0, r.A)(),
        { enableViewerClipping: m } = o.A.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        p = (0, a.A)(d.A);
    if (null == t || null != A) return null;
    let g = m && p;
    return g
        ? (0, i.jsxs)(s.f5, {
              value: h,
              children: [
                  (0, i.jsx)("div", { className: u.w, children: g && (0, i.jsx)(c.A, { channel: t }) }),
                  n && (0, i.jsx)("div", { className: u.y }),
              ],
          })
        : null;
}
