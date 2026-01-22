n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(571694),
    o = n(954376);

function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = c(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function u(e) {
    let { channel: t, size: n, facepileSizeOverride: i, isTyping: c, status: u, className: d, animated: f = !1 } = e,
        p = l(e, ["channel", "size", "facepileSizeOverride", "isTyping", "status", "className", "animated"]);
    return t.recipients.length >= 2 && null == t.icon
        ? (0, r.jsx)(o.A, {
              "aria-label": p["aria-label"],
              "aria-hidden": p["aria-hidden"],
              className: d,
              recipients: t.recipients,
              size: null != i ? i : n,
              isTyping: c,
              status: u,
          })
        : (0, r.jsx)(a.euF, {
              "aria-hidden": p["aria-hidden"],
              "aria-label": p["aria-label"],
              className: d,
              size: n,
              src: (0, s.Y)(t, 80, f),
          });
}
let d = i.memo(u);
