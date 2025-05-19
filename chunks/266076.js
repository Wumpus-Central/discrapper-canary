n.d(t, { Z: () => c });
var l = n(255367),
    r = n(73800),
    i = n(481060),
    a = n(43267),
    s = n(93687),
    o = n(785232);
let c = r.memo(function (e) {
    var { channel: t, size: n, facepileSizeOverride: r, experimentLocation: c, isTyping: u, status: d, className: f, animated: h = !1 } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['channel', 'size', 'facepileSizeOverride', 'experimentLocation', 'isTyping', 'status', 'className', 'animated']);
    let { isFacepileEnabled: g } = s.Z.useExperiment({ location: c }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && g && null == t.icon
        ? (0, l.jsx)(o.Z, {
              'aria-label': _['aria-label'],
              'aria-hidden': _['aria-hidden'],
              className: f,
              recipients: t.recipients,
              size: null != r ? r : n,
              isTyping: u,
              status: d
          })
        : (0, l.jsx)(i.qEK, {
              'aria-hidden': _['aria-hidden'],
              'aria-label': _['aria-label'],
              className: f,
              size: n,
              src: (0, a.x)(t, 80, h)
          });
});
