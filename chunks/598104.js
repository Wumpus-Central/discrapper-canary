"use strict";
a.d(t, { A: () => o });
var n = a(627968),
    i = a(64700),
    r = a(397927),
    s = a(571694),
    l = a(954376);
let o = i.memo(function (e) {
    let {
        channel: t,
        size: a,
        facepileSizeOverride: i,
        isTyping: o,
        status: c,
        className: _,
        animated: d = !1,
        ...u
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, n.jsx)(l.A, {
              "aria-label": u["aria-label"],
              "aria-hidden": u["aria-hidden"],
              className: _,
              recipients: t.recipients,
              size: i ?? a,
              isTyping: o,
              status: c,
          })
        : (0, n.jsx)(r.euF, {
              "aria-hidden": u["aria-hidden"],
              "aria-label": u["aria-label"],
              className: _,
              size: a,
              src: (0, s.Y)(t, 80, d),
          });
});
