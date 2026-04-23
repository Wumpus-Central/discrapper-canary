a.d(t, { A: () => o });
var i = a(627968),
    r = a(64700),
    l = a(97808),
    n = a(571694),
    s = a(954376);
let o = r.memo(function (e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: r,
        isTyping: o,
        status: c,
        className: d,
        animated: _ = !1,
        ...u
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, i.jsx)(s.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: d,
              recipients: t.recipients,
              size: r ?? a,
              isTyping: o,
              status: c,
          })
        : (0, i.jsx)(l.eu, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: d,
              size: a,
              src: (0, n.Y)(t, 80, _),
          });
});
