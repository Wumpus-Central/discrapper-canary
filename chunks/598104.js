"use strict";
a.d(t, { A: () => o });
var r = a(627968),
    i = a(64700),
    n = a(97808),
    s = a(571694),
    l = a(954376);
let o = i.memo(function (e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: i,
        isTyping: o,
        status: d,
        className: c,
        animated: _ = !1,
        ...u
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, r.jsx)(l.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: c,
              recipients: t.recipients,
              size: i ?? a,
              isTyping: o,
              status: d,
          })
        : (0, r.jsx)(n.eu, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: c,
              size: a,
              src: (0, s.Y)(t, 80, _),
          });
});
