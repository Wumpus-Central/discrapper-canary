r.d(t, {
    A: () => o,
});
var n = r(627968),
    l = r(64700),
    s = r(397927),
    a = r(571694),
    i = r(954376);
let o = l.memo(function (e) {
    let { channel: t, size: r, facepileSizeOverride: l, isTyping: o, status: c, className: u, animated: d = !1 } = e,
        h = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, ["channel", "size", "facepileSizeOverride", "isTyping", "status", "className", "animated"]);
    return t.recipients.length >= 2 && null == t.icon
        ? (0, n.jsx)(i.A, {
              "aria-label": h["aria-label"],
              "aria-hidden": h["aria-hidden"],
              className: u,
              recipients: t.recipients,
              size: null != l ? l : r,
              isTyping: o,
              status: c,
          })
        : (0, n.jsx)(s.euF, {
              "aria-hidden": h["aria-hidden"],
              "aria-label": h["aria-label"],
              className: u,
              size: r,
              src: (0, a.Y)(t, 80, d),
          });
});
