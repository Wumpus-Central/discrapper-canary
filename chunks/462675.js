"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(793574),
    l = n(688810),
    r = n(915618),
    a = n(857253),
    o = n(670470),
    c = n(430452),
    d = n(699022),
    u = n(878559);
function h(e) {
    let { channel: t, showRightDivider: n = !1 } = e,
        { analyticsLocations: h } = (0, l.Ay)(s.A.VOICE_CONTROL_TRAY),
        A = (0, a.A)(),
        { enableViewerClipping: p } = o.A.useExperiment(
            { location: "VoiceEffectsActionBar" },
            { autoTrackExposure: !1 },
        ),
        g = (0, r.A)(c.Ay);
    if (null == t || null != A) return null;
    let m = p && g;
    return m
        ? (0, i.jsxs)(l.f5, {
              value: h,
              children: [
                  (0, i.jsx)("div", { className: u.w, children: m && (0, i.jsx)(d.A, { channel: t }) }),
                  n && (0, i.jsx)("div", { className: u.y }),
              ],
          })
        : null;
}
