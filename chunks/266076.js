n.d(t, { Z: () => c });
var l = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(43267),
    r = n(93687),
    o = n(785232);
let c = i.memo(function (e) {
    let { channel: t, size: n, facepileSizeOverride: i, experimentLocation: c, isTyping: u, status: d, className: _, animated: h = !1, ...f } = e,
        { isFacepileEnabled: g } = r.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && g && null == t.icon
        ? (0, l.jsx)(o.Z, {
              'aria-label': f['aria-label'],
              'aria-hidden': f['aria-hidden'],
              className: _,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: u,
              status: d
          })
        : (0, l.jsx)(a.qEK, {
              'aria-hidden': f['aria-hidden'],
              'aria-label': f['aria-label'],
              className: _,
              size: n,
              src: (0, s.x)(t, 80, h)
          });
});
