n.d(t, { Z: () => c });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(43267),
    a = n(93687),
    u = n(785232);
let c = i.memo(function (e) {
    var { channel: t, size: n, facepileSizeOverride: i, experimentLocation: c, isTyping: s, status: d, className: p, animated: E = !1 } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['channel', 'size', 'facepileSizeOverride', 'experimentLocation', 'isTyping', 'status', 'className', 'animated']);
    let { isFacepileEnabled: _ } = a.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && _ && null == t.icon
        ? (0, r.jsx)(u.Z, {
              'aria-label': f['aria-label'],
              'aria-hidden': f['aria-hidden'],
              className: p,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: s,
              status: d
          })
        : (0, r.jsx)(l.qEK, {
              'aria-hidden': f['aria-hidden'],
              'aria-label': f['aria-label'],
              className: p,
              size: n,
              src: (0, o.x)(t, 80, E)
          });
});
