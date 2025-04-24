n.d(t, { Z: () => c });
var r = n(200651),
    i = n(192379),
    l = n(481060),
    o = n(43267),
    a = n(93687),
    u = n(785232);
let c = i.memo(function (e) {
    var { channel: t, size: n, facepileSizeOverride: i, experimentLocation: c, isTyping: s, status: d, className: p, animated: f = !1 } = e,
        E = (function (e, t) {
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
    let { isFacepileEnabled: O } = a.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && O && null == t.icon
        ? (0, r.jsx)(u.Z, {
              'aria-label': E['aria-label'],
              'aria-hidden': E['aria-hidden'],
              className: p,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: s,
              status: d
          })
        : (0, r.jsx)(l.qEK, {
              'aria-hidden': E['aria-hidden'],
              'aria-label': E['aria-label'],
              className: p,
              size: n,
              src: (0, o.x)(t, 80, f)
          });
});
