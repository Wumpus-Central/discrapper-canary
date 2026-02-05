l.d(t, { A: () => A });
var a = l(627968),
    n = l(64700),
    s = l(397927),
    i = l(571694),
    r = l(954376);
let A = n.memo(function (e) {
    let {
        channel: t,
        size: l,
        facepileSizeOverride: n,
        isTyping: A,
        status: c,
        className: u,
        animated: d = !1,
        ...o
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, a.jsx)(r.A, {
              "aria-label": o["aria-label"],
              "aria-hidden": o["aria-hidden"],
              className: u,
              recipients: t.recipients,
              size: n ?? l,
              isTyping: A,
              status: c,
          })
        : (0, a.jsx)(s.euF, {
              "aria-hidden": o["aria-hidden"],
              "aria-label": o["aria-label"],
              className: u,
              size: l,
              src: (0, i.Y)(t, 80, d),
          });
});
