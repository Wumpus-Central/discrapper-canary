"use strict";
n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(97808),
    s = n(571694),
    l = n(954376);
let o = r.memo(function (e) {
    let {
        channel: t,
        size: n,
        facepileSizeOverride: r,
        isTyping: o,
        status: d,
        className: c,
        animated: u = !1,
        ..._
    } = e;
    return t.recipients.length >= 2 && null == t.icon
        ? (0, i.jsx)(l.A, {
              "aria-label": _["aria-label"],
              "aria-hidden": _["aria-hidden"],
              className: c,
              recipients: t.recipients,
              size: r ?? n,
              isTyping: o,
              status: d,
          })
        : (0, i.jsx)(a.eu, {
              "aria-hidden": _["aria-hidden"],
              "aria-label": _["aria-label"],
              className: c,
              size: n,
              src: (0, s.Y)(t, 80, u),
          });
});
