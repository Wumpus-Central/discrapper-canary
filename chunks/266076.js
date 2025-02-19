n.d(t, { Z: () => c });
var a = n(200651),
    r = n(192379),
    l = n(481060),
    i = n(43267),
    s = n(93687),
    o = n(785232);
let c = r.memo(function (e) {
    var { channel: t, size: n, facepileSizeOverride: r, experimentLocation: c, isTyping: u, status: d, className: m, animated: p = !1 } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) (n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['channel', 'size', 'facepileSizeOverride', 'experimentLocation', 'isTyping', 'status', 'className', 'animated']);
    let { isFacepileEnabled: g } = s.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && g && null == t.icon
        ? (0, a.jsx)(o.Z, {
              'aria-label': h['aria-label'],
              'aria-hidden': h['aria-hidden'],
              className: m,
              recipients: t.recipients,
              size: null != r ? r : n,
              isTyping: u,
              status: d
          })
        : (0, a.jsx)(l.qEK, {
              'aria-hidden': h['aria-hidden'],
              'aria-label': h['aria-label'],
              className: m,
              size: n,
              src: (0, i.x)(t, 80, p)
          });
});
