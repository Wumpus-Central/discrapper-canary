n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(43267),
    s = n(93687),
    l = n(785232);
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var {
            channel: t,
            size: n,
            facepileSizeOverride: i,
            experimentLocation: u,
            isTyping: d,
            status: f,
            className: _,
            animated: p = !1,
        } = e,
        h = c(e, [
            "channel",
            "size",
            "facepileSizeOverride",
            "experimentLocation",
            "isTyping",
            "status",
            "className",
            "animated",
        ]);
    let { isFacepileEnabled: m } = s.Z.useExperiment({ location: u }, { autoTrackExposure: !0 });
    return t.recipients.length >= 2 && m && null == t.icon
        ? (0, r.jsx)(l.Z, {
              "aria-label": h["aria-label"],
              "aria-hidden": h["aria-hidden"],
              className: _,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: d,
              status: f,
          })
        : (0, r.jsx)(a.qEK, {
              "aria-hidden": h["aria-hidden"],
              "aria-label": h["aria-label"],
              className: _,
              size: n,
              src: (0, o.x)(t, 80, p),
          });
}
let f = i.memo(d);
