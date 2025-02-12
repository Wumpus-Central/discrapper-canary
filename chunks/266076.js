n.d(t, { Z: () => c });
var i = n(200651),
    l = n(192379),
    a = n(481060),
    r = n(43267),
    s = n(93687),
    o = n(785232);
let c = l.memo(function (e) {
    let { channel: t, size: n, facepileSizeOverride: l, experimentLocation: c, isTyping: d, status: u, className: m, animated: _ = !1, ...h } = e,
        { isFacepileEnabled: p } = s.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && p && null == t.icon
        ? (0, i.jsx)(o.Z, {
              'aria-label': h['aria-label'],
              'aria-hidden': h['aria-hidden'],
              className: m,
              recipients: t.recipients,
              size: null != l ? l : n,
              isTyping: d,
              status: u
          })
        : (0, i.jsx)(a.qEK, {
              'aria-hidden': h['aria-hidden'],
              'aria-label': h['aria-label'],
              className: m,
              size: n,
              src: (0, r.x)(t, 80, _)
          });
});
