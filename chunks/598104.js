n.d(t, { A: () => i });
var a = n(627968),
    r = n(64700),
    l = n(97808),
    s = n(571694),
    o = n(954376);
let i = r.memo(function (e) {
    let {
        channel: t,
        size: n,
        facepileSizeOverride: r,
        isTyping: i,
        status: c,
        className: d,
        animated: _ = !1,
        ...u
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, a.jsx)(o.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: d,
              recipients: t.recipients,
              size: r ?? n,
              isTyping: i,
              status: c,
          })
        : (0, a.jsx)(l.eu, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: d,
              size: n,
              src: (0, s.Y)(t, 80, _),
          });
});
