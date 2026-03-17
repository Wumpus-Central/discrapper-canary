a.d(t, { A: () => s });
var n = a(627968),
    i = a(64700),
    r = a(397927),
    l = a(571694),
    o = a(954376);
let s = i.memo(function (e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: i,
        isTyping: s,
        status: _,
        className: c,
        animated: d = !1,
        ...u
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, n.jsx)(o.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: c,
              recipients: t.recipients,
              size: i ?? a,
              isTyping: s,
              status: _,
          })
        : (0, n.jsx)(r.euF, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: c,
              size: a,
              src: (0, l.Y)(t, 80, d),
          });
});
