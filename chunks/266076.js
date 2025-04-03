n.d(t, { Z: () => o });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(43267),
    s = n(93687),
    c = n(785232);
let o = r.memo(function (e) {
    var { channel: t, size: n, facepileSizeOverride: r, experimentLocation: o, isTyping: u, status: d, className: f, animated: p = !1 } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++) (n = a[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['channel', 'size', 'facepileSizeOverride', 'experimentLocation', 'isTyping', 'status', 'className', 'animated']);
    let { isFacepileEnabled: I } = s.Z.useExperiment({ location: o }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && I && null == t.icon
        ? (0, i.jsx)(c.Z, {
              'aria-label': b['aria-label'],
              'aria-hidden': b['aria-hidden'],
              className: f,
              recipients: t.recipients,
              size: null != r ? r : n,
              isTyping: u,
              status: d
          })
        : (0, i.jsx)(a.qEK, {
              'aria-hidden': b['aria-hidden'],
              'aria-label': b['aria-label'],
              className: f,
              size: n,
              src: (0, l.x)(t, 80, p)
          });
});
