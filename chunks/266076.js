n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(43267),
    s = n(785232);
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    var { channel: t, size: n, facepileSizeOverride: i, isTyping: c, status: u, className: d, animated: f = !1 } = e,
        _ = l(e, ["channel", "size", "facepileSizeOverride", "isTyping", "status", "className", "animated"]);
    return t.recipients.length >= 2 && null == t.icon
        ? (0, r.jsx)(s.Z, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: d,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: c,
              status: u,
          })
        : (0, r.jsx)(a.qEK, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: d,
              size: n,
              src: (0, o.x)(t, 80, f),
          });
}
let d = i.memo(u);
